---
name: paper-magazine-orchestrator
description: "트렌딩 논문 수집 → 심층 분석 → 아트워크 생성 → 에디토리얼 내러티브 → 매거진 웹사이트 제작 → UX 리뷰 파이프라인을 조율하는 오케스트레이터. paper magazine, 논문 매거진 생성."
---

# Paper Magazine Orchestrator

트렌딩 학술 논문을 수집, 분석하고 AI 생성 아트워크와 에디토리얼 내러티브를 결합하여 세련된 매거진 스타일 웹사이트로 제작하는 전체 파이프라인을 조율한다.

## 실행 모드
**서브 에이전트 모드** (Pipeline + Fan-out/Fan-in)

## 전체 파이프라인

```
Phase 1: 논문 발굴 (Paper Scout)
    ↓
Phase 2: 심층 분석 + 아트워크 생성 (Paper Analyst ×N + Image Artist, 병렬)
    ↓
Phase 3: 에디토리얼 내러티브 생성 (Editorial Director) ★ NEW
    ↓
Phase 4: 매거진 제작 (Magazine Designer)
    ↓
Phase 5: UX 리뷰 및 개선 (UX Reviewer) ★ NEW
    ↓
Phase 6: 정리 및 완료
```

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 스킬 | Phase | 출력 |
|---------|--------------|------|------|-------|------|
| Paper Scout | paper-scout | 트렌딩 논문 수집 | paper-trending | 1 | 01_scout_papers.json |
| Paper Analyst | paper-analyst | 논문 심층 분석 | paper-analysis | 2 | 02_analyst_{id}.json |
| Image Artist | image-artist | 아트워크 생성 | gemini-3-pro-imagegen | 2 | images/, 03_images_manifest.json |
| Editorial Director | editorial-director | 에디토리얼 내러티브 | editorial-narrative | 3 | 04_editorial.json |
| Magazine Designer | magazine-designer | 웹사이트 제작 | magazine-builder | 4 | index.html, style.css, script.js |
| UX Reviewer | ux-reviewer | UX 검토 및 개선 | ux-review | 5 | 05_ux_review.md + 코드 수정 |

## Phase 1: 트렌딩 논문 발굴

### 실행
```
Agent(
  subagent_type: "paper-scout",
  prompt: "최근 일주일간 AI/ML/CS 분야 트렌딩 논문을 수집하세요. paper-trending 스킬의 수집 전략을 따르세요. 결과를 _workspace/01_scout_papers.json에 저장하세요. 최소 8개, 최대 15개 논문을 수집하고 estimated_impact 순으로 정렬하세요.",
  mode: "bypassPermissions"
)
```

### 완료 조건
- `_workspace/01_scout_papers.json` 파일 생성됨
- 최소 8개 논문 포함
- 각 논문에 title, arxiv_url, abstract, why_trending, source(upvote 수 포함) 필드 존재

### 에러 핸들링
- 8개 미만 수집 시: 검색 범위를 2주로 확대하여 재시도 1회
- WebFetch 실패 시: WebSearch로 대체 소스 활용
- 재실패 시: 수집된 논문으로 진행 (최소 5개)

## Phase 2: 논문 심층 분석 + 아트워크 생성 (병렬 Fan-out)

Phase 2는 논문 분석과 이미지 생성을 **동시에** 실행한다.

### 준비
1. `_workspace/01_scout_papers.json` 읽기
2. `mkdir -p _workspace/images` 디렉토리 생성
3. 논문을 2-3개씩 그룹으로 분할 (병렬 에이전트 수 = ceil(논문수/3))

### 실행 — 분석 에이전트 (병렬)
각 그룹에 대해 병렬로 Paper Analyst 에이전트 실행:

```
# 그룹 1
Agent(
  subagent_type: "paper-analyst",
  prompt: "다음 논문들을 심층 분석하세요: [논문 ID 목록].
  _workspace/01_scout_papers.json에서 논문 정보를 읽고,
  paper-analysis 스킬의 분석 프레임워크를 따라 각 논문별로
  _workspace/02_analyst_{논문ID}.json 파일을 생성하세요.",
  run_in_background: true,
  mode: "bypassPermissions"
)

# 그룹 2, 3... (동시 실행)
```

### 실행 — 이미지 생성 에이전트 (분석과 동시 실행)
```
Agent(
  subagent_type: "image-artist",
  prompt: "매거진용 아트워크를 생성하세요.
  _workspace/01_scout_papers.json에서 논문 정보를 읽고,
  각 논문의 핵심 키워드를 기반으로 gemini-3-pro-imagegen 스킬을 사용하여
  추상적 아트워크를 생성하세요.

  생성할 이미지:
  1. 히어로 이미지: _workspace/images/hero.png
  2. 논문별 카드 이미지: _workspace/images/paper_{ID}.png

  모든 이미지 생성 후 _workspace/03_images_manifest.json에
  생성된 이미지 경로와 각 논문 ID 매핑을 기록하세요.
  이미지 생성 실패 시 해당 항목을 manifest에 failed: true로 표시하세요.",
  run_in_background: true,
  mode: "bypassPermissions"
)
```

### 완료 조건
- 모든 논문에 대해 `_workspace/02_analyst_*.json` 파일 생성됨
- 각 파일에 one_liner, hook, problem, method, key_results, why_it_matters 포함
- `_workspace/03_images_manifest.json` 파일 생성됨

### 에러 핸들링
- 개별 논문 분석 실패 시: 해당 논문은 기본 정보(scout 데이터)만으로 진행
- 전체 그룹 실패 시: 1회 재시도
- 50% 이상 실패 시: 성공한 논문만으로 진행, 사용자에게 알림
- 이미지 생성 실패 시: CSS 그래디언트 패턴으로 대체 (Magazine Designer가 처리)

## Phase 3: 에디토리얼 내러티브 생성 ★ NEW

Phase 2의 분석 결과를 종합하여 크로스-페이퍼 인사이트를 생성한다.

### 준비
1. Phase 2 완료 대기
2. `_workspace/01_scout_papers.json` + `_workspace/02_analyst_*.json` 모두 존재 확인

### 실행
```
Agent(
  subagent_type: "editorial-director",
  prompt: "이번 주 논문들의 에디토리얼 내러티브를 생성하세요.
  _workspace/01_scout_papers.json과 _workspace/02_analyst_*.json 파일들을 읽고,
  editorial-narrative 스킬의 워크플로우를 따라 분석하세요.

  생성할 콘텐츠:
  1. 주간 트렌드 분석 (2-3개 메가 트렌드 + 소개 텍스트)
  2. 에디터스 픽 (3개, 선정 이유 + 핵심 한 줄)
  3. 논문 관계 맵 (최소 5쌍의 관계)
  4. 읽기 가이드 (입문자용 + 전문가용 추천 순서)

  결과를 _workspace/04_editorial.json에 저장하세요.",
  mode: "bypassPermissions"
)
```

### 완료 조건
- `_workspace/04_editorial.json` 파일 생성됨
- weekly_narrative.trends가 2-3개 존재
- editors_picks가 3개 존재
- paper_relations가 최소 5쌍 존재
- reading_guides에 beginner, expert 모두 존재

### 에러 핸들링
- 분석 데이터 부족 시: scout 데이터만으로 간소화된 에디토리얼 생성
- 에이전트 실패 시: 1회 재시도
- 재실패 시: 에디토리얼 없이 Phase 4 진행 (Magazine Designer가 폴백 처리)

## Phase 4: 매거진 웹사이트 제작

### 준비
1. 모든 분석 결과 파일 수집
2. `_workspace/03_images_manifest.json`에서 이미지 경로 매핑 확인
3. `_workspace/04_editorial.json`에서 에디토리얼 데이터 확인
4. 분석 실패한 논문은 scout 데이터에서 기본 정보 추출
5. 논문 데이터를 하나의 통합 JSON으로 병합

### 실행
```
Agent(
  subagent_type: "magazine-designer",
  prompt: "매거진 스타일 웹사이트를 제작하세요.
  _workspace/ 디렉토리에서 모든 데이터를 읽고,
  magazine-builder 스킬의 디자인 사양을 따라
  프로젝트 루트에 index.html, style.css, script.js를 생성하세요.

  데이터 소스:
  - _workspace/01_scout_papers.json (논문 메타데이터)
  - _workspace/02_analyst_*.json (심층 분석)
  - _workspace/03_images_manifest.json (이미지 매핑)
  - _workspace/04_editorial.json (에디토리얼 내러티브) ★

  모든 데이터는 JavaScript 변수로 인라인 임베딩하세요.

  ★ 에디토리얼 통합 (04_editorial.json이 존재하는 경우):
  - 트렌드 섹션: 히어로 아래에 weekly_narrative.trends 기반 트렌드 카드 3개 배치
  - Featured 강화: editors_picks의 pick_reason, one_thing_to_remember를 카드에 통합
  - 관련 논문: 모달 하단에 paper_relations 기반 관련 논문 링크
  - 읽기 가이드: 전체 논문 그리드 앞에 reading_guides 섹션 배치
  - 04_editorial.json이 없으면 이 섹션들을 생략

  ★ 새로운 UX 기능:
  - 모달 내 이전/다음 논문 네비게이션 (좌우 화살표키 지원)
  - 커뮤니티 시그널: source 필드에서 upvote 수 파싱하여 카드에 뱃지 표시
  - 읽기 추적: 논문 모달 열면 localStorage에 기록, 읽은 카드에 체크 표시
  - 빈 상태: 필터 결과 0건 시 안내 메시지

  디자인 요구사항:
  - 매거진 이름: 'Paper Pulse'
  - 다크/라이트 테마 토글
  - 반응형 레이아웃
  - 한국어 최적화 타이포그래피",
  mode: "bypassPermissions"
)
```

### 완료 조건
- `index.html`, `style.css`, `script.js` 파일 생성됨
- HTML이 CSS/JS를 올바르게 참조
- 에디토리얼 섹션이 포함됨 (04_editorial.json 존재 시)
- 브라우저에서 열면 정상 렌더링

### 에러 핸들링
- 파일 생성 실패 시: 1회 재시도
- 데이터 누락 시: 사용 가능한 데이터만으로 제작
- 이미지 인코딩 실패 시: CSS 그래디언트로 대체

## Phase 5: UX 리뷰 및 개선 ★ NEW

생성된 웹사이트의 UX를 검토하고 직접 코드를 개선한다.

### 실행
```
Agent(
  subagent_type: "ux-reviewer",
  prompt: "생성된 Paper Pulse 매거진 웹사이트의 UX를 리뷰하고 개선하세요.
  프로젝트 루트의 index.html, style.css, script.js를 읽고
  ux-review 스킬의 체크리스트에 따라 검증하세요.

  특히 다음 항목을 집중 확인:
  1. 에디토리얼 섹션(트렌드, 읽기 가이드)이 올바르게 렌더링되는지
  2. 모달 내 이전/다음 네비게이션이 작동하는지
  3. 관련 논문 링크가 모달 내에서 올바르게 전환되는지
  4. 커뮤니티 시그널(upvotes)이 카드에 표시되는지
  5. 읽기 추적이 localStorage에 정상 저장되는지
  6. 필터 결과 0건 시 빈 상태 메시지가 표시되는지
  7. 키보드 접근성 (Tab, ESC, 좌우 화살표)
  8. 모바일 반응형이 깨지지 않는지

  발견된 문제는 직접 코드를 수정하세요.
  수정 내용은 _workspace/05_ux_review.md에 기록하세요.",
  mode: "bypassPermissions"
)
```

### 완료 조건
- `_workspace/05_ux_review.md` 파일 생성됨
- 높음 우선순위 이슈가 모두 수정됨
- 수정 후에도 기존 기능이 정상 동작

### 에러 핸들링
- 파일 수정 실패 시: 원본 유지, 리포트에 미수정 사항 기록
- UX Reviewer 에이전트 실패 시: Phase 5 스킵 (Phase 4 결과로 최종 배포)

## Phase 6: 정리 및 완료

### 실행
1. 이미지 파일을 프로젝트 루트 `images/` 폴더로 복사
2. `_workspace/` 디렉토리의 중간 산출물 보존 (디버깅용)
3. 생성된 파일 목록 확인
4. 브라우저에서 `index.html` 열기: `open index.html`
5. 사용자에게 완료 보고

### 완료 보고 형식
```
## Paper Pulse 매거진 생성 완료!

- 수집 논문: N개
- 분석 완료: M개
- AI 아트워크: K개 생성
- 에디토리얼: 트렌드 T개, 에디터스 픽 P개, 논문 관계 R쌍
- UX 리뷰: X개 이슈 수정
- 웹사이트: index.html (브라우저에서 열림)

### 이번 주 트렌드
1. [트렌드1 제목] — 관련 논문 N편
2. [트렌드2 제목] — 관련 논문 N편
3. [트렌드3 제목] — 관련 논문 N편

### 수록 논문
1. [논문제목1] - one_liner
2. [논문제목2] - one_liner
...
```

## 데이터 흐름 요약

```
[WebSearch/WebFetch]
       ↓
01_scout_papers.json  ←── Phase 1 (Paper Scout)
       ↓
       ├── 02_analyst_1.json  ←──┐
       ├── 02_analyst_2.json  ←──┤── Phase 2a (Paper Analyst ×N, 병렬)
       ├── 02_analyst_N.json  ←──┘
       │
       ├── images/hero.png      ←──┐
       ├── images/paper_1.png   ←──┤── Phase 2b (Image Artist, 병렬)
       ├── images/paper_N.png   ←──┤
       └── 03_images_manifest.json ←┘
              ↓
04_editorial.json  ←── Phase 3 (Editorial Director) ★ NEW
              ↓
index.html + style.css + script.js + images/  ←── Phase 4 (Magazine Designer)
              ↓
코드 수정 + 05_ux_review.md  ←── Phase 5 (UX Reviewer) ★ NEW
              ↓
브라우저 자동 열기  ←── Phase 6 (정리)
```

## 테스트 시나리오

### 정상 흐름
1. Paper Scout가 12개 논문 수집
2. Paper Analyst 4개가 3개씩 병렬 분석 + Image Artist가 13개 이미지 생성
3. Editorial Director가 트렌드 3개, 에디터스 픽 3개, 관계 8쌍, 읽기 가이드 2종 생성
4. Magazine Designer가 12개 논문 + 에디토리얼 + 이미지 매거진 생성
5. UX Reviewer가 5개 이슈 발견, 4개 수정
6. 브라우저에서 정상 표시

### 에러 흐름: 에디토리얼 실패
1. Paper Scout가 10개 수집
2. 분석 + 이미지 전체 성공
3. Editorial Director 에이전트 실패 → 1회 재시도 → 재실패
4. Phase 4에서 에디토리얼 없이 기존 방식으로 매거진 생성
5. 트렌드/읽기 가이드 섹션 없이 완성
6. 완료 보고에 "에디토리얼 생성 실패, 기본 레이아웃으로 제작" 명시

### 에러 흐름: UX 리뷰 실패
1. Phase 1-4 정상 완료
2. UX Reviewer 에이전트 실패
3. Phase 4 결과물을 그대로 최종 버전으로 사용
4. 완료 보고에 "UX 리뷰 미수행" 명시

### 에러 흐름: 이미지 + 분석 부분 실패
1. Paper Scout가 10개 수집
2. 분석은 7개만 성공 (3개 실패), 이미지는 6개만 생성 (4개 실패)
3. Editorial Director가 7개 분석 + 3개 기본 정보로 에디토리얼 생성
4. Magazine Designer가 10개 논문 매거진 생성 (3개는 기본 정보, 4개는 CSS 그래디언트)
5. UX Reviewer가 정상 리뷰
6. 완료 보고에 부분 실패 내역 명시
