---
name: magazine-builder
description: "논문 분석 데이터를 세련된 매거진 스타일 웹사이트로 변환하는 스킬. 웹 디자인, 매거진 UI, frontend."
---

# Magazine Builder — 매거진 웹사이트 제작

## 목적
분석된 논문 데이터와 에디토리얼 콘텐츠를 고품질 디지털 매거진 웹사이트로 제작한다.

## 디자인 레퍼런스
- **Wired Magazine** 웹 에디션의 타이포그래피
- **MIT Technology Review**의 정보 계층 구조
- **The Verge**의 비주얼 임팩트
- **Monocle**의 깔끔한 에디토리얼 레이아웃

## 기술 사양

### HTML 구조
```
index.html
├── <header> 네비게이션 + 로고 + 테마 토글
├── <section.hero> 매거진 커버
├── <section.trends> ★ 이번 주 트렌드 키워드 (에디토리얼)
├── <section.featured> 에디터스 픽 논문 (편집자 코멘트 포함)
├── <section.reading-guide> ★ 읽기 가이드 (입문자/전문가 추천 순서)
├── <section.grid> 논문 카드 그리드 (필터 + 커뮤니티 시그널)
├── <div.modal> 상세 뷰 오버레이 (이전/다음 네비게이션 + 관련 논문)
└── <footer> 크레딧 + 소스
```

### CSS 설계
- CSS Custom Properties로 테마 시스템
- `prefers-color-scheme` 자동 감지 + 수동 토글
- Pretendard(한국어) + Inter(영문) 폰트 조합
- CSS Grid 기반 반응형 레이아웃
- 스크롤 기반 reveal 애니메이션
- 매거진 느낌의 큰 타이틀 + 넉넉한 여백

### JavaScript 기능
- 논문 데이터 + 에디토리얼 데이터 인라인 임베딩 (외부 fetch 없음)
- 카드 클릭 → 모달 상세 뷰
- 카테고리/난이도 필터링
- 다크/라이트 테마 토글 (localStorage 저장)
- Intersection Observer 스크롤 애니메이션
- ★ 모달 내 이전/다음 논문 네비게이션 (좌우 화살표키 지원)
- ★ 관련 논문 링크 (모달 하단, 클릭 시 해당 논문으로 전환)
- ★ 읽기 추적 (localStorage, 읽은 카드에 체크 표시)
- ★ 커뮤니티 시그널 표시 (upvote 수 파싱 및 뱃지)
- ★ 필터 결과 0건 시 빈 상태 메시지

## 컬러 시스템

### 라이트 모드
- Background: #FAFAF9 (따뜻한 화이트)
- Text Primary: #1A1A1A
- Text Secondary: #6B7280
- Accent: #6366F1 (인디고)
- Accent Secondary: #EC4899 (핑크)
- Card BG: #FFFFFF
- Border: #E5E7EB

### 다크 모드
- Background: #0F0F0F
- Text Primary: #F5F5F4
- Text Secondary: #9CA3AF
- Accent: #818CF8 (라이트 인디고)
- Accent Secondary: #F472B6 (라이트 핑크)
- Card BG: #1A1A1A
- Border: #2D2D2D

## 타이포그래피
- 매거진 타이틀: 72px / bold / letter-spacing: -0.03em
- 섹션 헤딩: 36px / semibold
- 카드 타이틀: 20px / semibold
- 본문: 17px / regular / line-height: 1.75
- 캡션/태그: 13px / medium / uppercase tracking

## ★ 신규 섹션 — 트렌드 키워드

히어로 바로 아래에 배치. 에디토리얼의 `weekly_narrative.trends` 데이터 사용.

```
┌─────────────────────────────────────────────┐
│  이번 주 AI 연구의 3가지 키워드             │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 🔮       │ │ ⚡       │ │ 🎯       │    │
│  │ 3D의     │ │ 작지만   │ │ 에이전트의│    │
│  │ 민주화   │ │ 강한     │ │ 자각     │    │
│  │          │ │          │ │          │    │
│  │ 관련 5편 │ │ 관련 4편 │ │ 관련 3편 │    │
│  └──────────┘ └──────────┘ └──────────┘    │
│                                             │
│  편집자 소개 텍스트 (weekly_narrative.intro) │
└─────────────────────────────────────────────┘
```

디자인:
- 트렌드 카드 3개 가로 배치 (모바일: 세로)
- 각 카드에 아이콘 + 키워드 + 부제 + 관련 논문 수
- 카드 클릭 시 해당 트렌드의 논문들만 필터링
- 배경: accent 색상의 미묘한 그래디언트
- intro 텍스트는 카드 아래에 에디토리얼 톤으로

## ★ 신규 — 에디터스 픽 (Featured 강화)

기존 Featured 섹션을 에디터스 픽으로 강화. `editors_picks` 데이터 사용.

- 카드에 `pick_reason` 텍스트 추가 (인용구 스타일)
- "편집자의 한마디" 라벨 + 이탤릭 텍스트
- `one_thing_to_remember`를 카드 하단에 하이라이트 박스로 표시

## ★ 신규 — 읽기 가이드 섹션

전체 논문 그리드 앞에 배치. `reading_guides` 데이터 사용.

```
┌──────────────────────────────────────────┐
│  어디서부터 읽을까?                      │
│                                          │
│  ┌─ 입문자 코스 ──────────────────────┐  │
│  │  ❶ Fish Audio S2 → ❷ FireRedASR   │  │
│  │  → ❸ InternVL-U                   │  │
│  │  "쉬운 것부터 시작해서..."           │  │
│  └────────────────────────────────────┘  │
│  ┌─ 전문가 코스 ──────────────────────┐  │
│  │  ❶ IndexCache → ❷ Spatial-TTT     │  │
│  │  → ❸ OpenClaw-RL                  │  │
│  │  "핵심만 빠르게..."                  │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

- 논문 제목 클릭 시 해당 모달 열림
- 가이드 토글 (탭 또는 버튼으로 전환)

## 카드 디자인 (개선)
- 부드러운 그림자 + hover 시 lift 효과
- 상단에 카테고리 컬러 바
- 태그는 pill 형태
- 난이도 배지: 색상으로 구분 (입문=초록, 중급=노랑, 고급=빨강)
- 읽기 시간 아이콘 + 텍스트
- ★ 커뮤니티 시그널 뱃지 (upvote 수가 있는 경우)
- ★ 읽음 표시 (읽은 카드에 체크 아이콘 오버레이)

## 모달 상세 뷰 (개선)
- 배경 blur 오버레이
- 모바일에서는 풀스크린 스크롤
- 섹션별 아이콘 + 제목으로 구분
- 부드러운 열림/닫힘 애니메이션
- ★ **이전/다음 논문 버튼** (좌우 양 끝 또는 하단)
  - 키보드 좌우 화살표키로도 이동
  - 현재 필터 상태에 맞는 논문 순서로 이동
- ★ **관련 논문 섹션** (모달 하단, 태그 위)
  - `paper_relations` 데이터에서 현재 논문과 관련된 논문 표시
  - 관계 유형별 라벨 (보완적 / 대조적 / 발전 / 같은 트렌드)
  - 클릭 시 해당 논문 모달로 전환 (모달 닫지 않고 콘텐츠만 교체)
- ★ **에디터스 픽 표시** (해당하는 경우)
  - 편집자 코멘트를 모달 상단에 인용구 스타일로 표시

## 반응형 브레이크포인트
- Desktop: > 1024px (3 컬럼 그리드)
- Tablet: 768-1024px (2 컬럼)
- Mobile: < 768px (1 컬럼, 풀와이드)

## 데이터 통합 규칙

Magazine Designer는 다음 데이터를 모두 script.js에 인라인 임베딩:

1. **papers 배열** — 기존 논문 데이터 (scout + analyst 병합)
2. **editorial 객체** — `_workspace/04_editorial.json`의 전체 내용
   - `editorial.weekly_narrative` → 트렌드 섹션
   - `editorial.editors_picks` → Featured 섹션 강화
   - `editorial.paper_relations` → 모달 관련 논문
   - `editorial.reading_guides` → 읽기 가이드 섹션

에디토리얼 데이터가 없는 경우(04_editorial.json 부재):
- 트렌드 섹션 생략
- Featured는 기존 방식(impact 기반)으로 표시
- 관련 논문 섹션 생략
- 읽기 가이드 생략

## 성능 최적화
- 모든 코드 단일 HTML 파일 인라인 가능 (선택적)
- 이미지 없이 CSS 그래디언트/패턴으로 비주얼 (폴백)
- font-display: swap
- 최소한의 JavaScript
