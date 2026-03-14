# Paper Pulse

> Weekly AI Research Digest — 매주 가장 주목할 만한 AI 연구를 엄선하여 깊이 있게 분석합니다.

![Paper Pulse](images/hero.png)

## Overview

**Paper Pulse**는 최신 AI/ML 논문 트렌드를 세련된 디지털 매거진 형태로 전달하는 정적 웹사이트입니다. 매주 arXiv, Hugging Face, Papers With Code 등에서 가장 주목받는 논문을 자동 수집하고, 심층 분석하여 한국어 매거진 콘텐츠로 제작합니다.

### Vol. 1 — 2026년 3월 14일

이번 호에는 **15편**의 트렌딩 논문이 수록되어 있습니다:

| # | 논문 | 분야 | 임팩트 |
|---|------|------|--------|
| 1 | **FireRedASR2S** — 올인원 음성인식 시스템, Doubao·Qwen3 능가 | 음성/오디오 | High |
| 2 | **DVD** — 163배 적은 데이터로 SOTA 비디오 깊이 추정 | 컴퓨터 비전 | High |
| 3 | **Spatial-TTT** — 스트리밍 3D 공간 지능 with Test-Time Training | 컴퓨터 비전 | High |
| 4 | **Fish Audio S2** — 자연어로 제어하는 오픈소스 TTS | 음성/오디오 | High |
| 5 | **OpenClaw-RL** — 대화만으로 에이전트를 훈련하는 비동기 RL | NLP/에이전트 | High |
| 6 | **InternVL-U** — 4B 파라미터로 14B 모델을 능가하는 통합 멀티모달 | 멀티모달 | High |
| 7 | **IndexCache** — 인덱서 75% 제거로 LLM 추론 1.82배 가속 | NLP/에이전트 | High |
| 8 | **EndoCoT** — 확산 모델에 Chain-of-Thought 추론 도입 | 컴퓨터 비전 | Medium |
| 9 | **Video-Based Reward Modeling** — GPT-5.2 능가하는 에이전트 평가 모델 | 멀티모달 | High |
| 10 | **OmniStream** — 인식·재구성·행동을 통합하는 스트리밍 비전 백본 | 컴퓨터 비전 | Medium |
| 11 | **DreamVideo-Omni** — 다중 주체 비디오 커스터마이제이션 | 비디오 생성 | Medium |
| 12 | **Holi-Spatial** — 비디오에서 대규모 3D 데이터셋 자동 구축 | 컴퓨터 비전 | Medium |
| 13 | **MADQA** — AI 에이전트의 문서 추론 전략 분석 벤치마크 | NLP/에이전트 | Medium |
| 14 | **Mobile-GS** — 모바일 실시간 3D Gaussian Splatting | 컴퓨터 비전 | Medium |
| 15 | **ShotVerse** — 텍스트 기반 영화적 멀티샷 카메라 제어 | 비디오 생성 | Medium |

## Features

- **다크/라이트 테마** — 시스템 설정 자동 감지 + 수동 토글, localStorage 저장
- **AI 생성 아트워크** — Gemini로 생성된 논문별 추상 아트워크 16점
- **상세 분석 모달** — 문제 정의, 방법론, 결과, 의의, 한계점, 관련 연구 6개 섹션
- **필터링** — 카테고리(음성, 비전, NLP 등) 및 난이도(입문/중급/고급) 필터
- **반응형 레이아웃** — 데스크톱 3컬럼 / 태블릿 2컬럼 / 모바일 1컬럼
- **스크롤 애니메이션** — Intersection Observer 기반 reveal 효과
- **제로 의존성** — 순수 HTML/CSS/JS, 파일만 열면 동작

## Quick Start

```bash
# 클론
git clone git@github.com:revfactory/paper-magazine.git
cd paper-magazine

# 브라우저에서 열기
open index.html
```

서버 없이 `index.html`을 브라우저에서 직접 열면 됩니다.

## Project Structure

```
paper-magazine/
├── index.html          # 메인 페이지
├── style.css           # 스타일시트 (다크/라이트 테마, 반응형)
├── script.js           # 데이터 임베딩 + 인터랙션 로직
├── images/
│   ├── hero.png        # 매거진 커버 히어로 이미지
│   └── paper_{1-15}.png  # 논문별 카드 아트워크
└── _workspace/         # 중간 산출물 (분석 JSON 등)
```

## How It's Built

Paper Pulse는 **4단계 자동화 파이프라인**으로 생성됩니다:

```
Phase 1  Paper Scout        트렌딩 논문 발굴 (5개 소스 크롤링)
   ↓
Phase 2  Paper Analyst ×3   심층 분석 (병렬 실행)
         Image Artist        Gemini 아트워크 생성 (동시 실행)
   ↓
Phase 3  Magazine Designer   매거진 웹사이트 제작
   ↓
Phase 4  배포                GitHub Push
```

### 데이터 소스
- [Hugging Face Daily Papers](https://huggingface.co/papers)
- [Hugging Face Trending](https://huggingface.co/models?sort=trending)
- [arXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.CV, cs.LG)
- [Papers With Code](https://paperswithcode.com/)
- AI 뉴스레터 및 소셜 미디어

### 기술 스택
- **프론트엔드**: 순수 HTML5 / CSS3 / Vanilla JS
- **폰트**: [Pretendard](https://github.com/orioncactus/pretendard) (한국어) + [Inter](https://fonts.google.com/specimen/Inter) (영문)
- **이미지**: Google Gemini Image Generation
- **논문 분석**: Claude AI 멀티 에이전트 파이프라인

## License

MIT
