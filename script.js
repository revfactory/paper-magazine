// ===== PAPER DATA =====
const papers = [
  {
    id: 1,
    title: "FireRedASR2S: A State-of-the-Art Industrial-Grade All-in-One Automatic Speech Recognition System",
    authors: ["Kaituo Xu", "Yan Jia", "Kai Huang", "Junjie Chen", "Wenpeng Li", "Kun Liu", "Feng-Long Xie", "Xu Tang", "Yao Hu"],
    arxiv_url: "https://arxiv.org/abs/2603.10420",
    published_date: "2026-03-11",
    categories: ["eess.AS", "cs.SD"],
    estimated_impact: "high",
    source: "Hugging Face Daily Papers (368 upvotes)",
    one_liner: "음성 인식의 '스위스 아미 나이프' — ASR부터 방언 인식까지, 하나의 시스템이 모든 것을 해냅니다",
    hook: "중국어 방언 20종을 알아듣고, 노래 가사까지 받아쓰는 AI가 등장했습니다. 그것도 기존 상용 시스템들을 모두 능가하면서 코드와 모델을 완전히 공개했습니다.",
    problem: "기존 음성 인식 시스템은 ASR(자동 음성 인식), VAD(음성 활동 감지, 사람이 말하는 구간을 찾아내는 기술), LID(언어 식별), 구두점 예측 등 각 기능이 별도로 구현되어 있어 통합 운영이 어렵습니다. 특히 중국어 방언과 억양, 코드 스위칭(한 문장 안에서 두 개 이상의 언어를 섞어 쓰는 것) 환경에서는 성능이 크게 떨어지는 문제가 있었습니다.",
    method: "FireRedASR2S는 네 가지 핵심 모듈을 하나의 파이프라인으로 통합합니다. ASR 모듈은 두 가지 변형으로 제공됩니다. FireRedASR2-LLM(80억+ 파라미터)은 대규모 언어 모델 기반으로 최고 정확도를 추구하고, FireRedASR2-AED(10억+ 파라미터)는 인코더-디코더 구조로 가벼우면서도 강력한 성능을 제공합니다. TensorRT-LLM을 통한 최적화로 NVIDIA H20 GPU에서 12.7배의 속도 향상도 달성했습니다.",
    key_results: "FireRedASR2-LLM은 4개 공개 중국어 벤치마크에서 평균 CER 2.89%를 기록하며 Doubao-ASR, Qwen3-ASR, FunASR 등 주요 경쟁 모델을 모두 능가했습니다. 19개 중국어 방언·억양 벤치마크에서는 11.55% CER을 달성했습니다. FireRedVAD는 97.57% F1 스코어와 99.60% AUC-ROC를 기록했습니다.",
    why_it_matters: "이 연구는 상용 수준의 올인원 음성 인식 시스템을 완전히 오픈소스로 공개했다는 점에서 산업적 파급력이 큽니다. 중국어 방언과 영어 코드 스위칭까지 지원하여 다국어 환경의 실제 서비스에 바로 적용 가능합니다.",
    limitations: "8B+ 파라미터의 LLM 모델은 추론 비용이 상당하여 엣지 디바이스 배포에는 제약이 있습니다. 또한 현재 지원 언어가 주로 중국어와 영어에 집중되어 있습니다.",
    related_context: "2025년 초 공개된 FireRedASR 1세대가 오픈소스 중국어 ASR의 새 기준을 세운 데 이어, 이번 2세대는 Whisper, FunASR 등 기존 오픈소스 모델뿐 아니라 Doubao-ASR, Qwen3-ASR 같은 최신 상용 시스템까지 능가합니다.",
    tags: ["음성인식", "ASR", "오픈소스", "Chinese Dialects", "Multilingual AI"],
    difficulty_level: "중급",
    reading_time_min: 7,
    category_label: "음성/오디오",
    category_class: "cat-speech"
  },
  {
    id: 2,
    title: "DVD: Deterministic Video Depth Estimation with Generative Priors",
    authors: ["Hongfei Zhang", "Harold Haodong Chen", "Chenfei Liao", "Jing He", "Zixin Zhang", "Haodong Li", "Yihao Liang", "Kanghao Chen", "Bin Ren", "Xu Zheng", "Shuai Yang", "Kun Zhou", "Yinchuan Li", "Nicu Sebe", "Ying-Cong Chen"],
    arxiv_url: "https://arxiv.org/abs/2603.12250",
    published_date: "2026-03-12",
    categories: ["cs.CV"],
    estimated_impact: "high",
    source: "Hugging Face Daily Papers (72 upvotes)",
    one_liner: "영상 생성 AI의 '3D 감각'을 깨우다 — 163배 적은 데이터로 최고 성능 깊이 추정 달성",
    hook: "비디오 속 물체가 얼마나 멀리 있는지 정확히 파악하는 것은 자율주행과 AR의 핵심 기술입니다. DVD는 이 딜레마를 정면으로 돌파하는 새로운 패러다임을 제시합니다.",
    problem: "비디오 깊이 추정에는 근본적인 트레이드오프가 존재합니다. 생성 모델은 확률적 기하학 환각과 스케일 드리프트 문제를 겪고, 판별 모델은 대규모 라벨링 데이터셋 없이는 의미론적 모호성을 해결하기 어렵습니다.",
    method: "DVD는 사전학습된 비디오 확산 모델을 결정론적 깊이 회귀기로 변환하는 최초의 프레임워크입니다. 확산 모델의 타임스텝을 구조적 앵커로 재활용하고, 잠재 매니폴드 교정(LMR)으로 과도한 평활화를 해결하며, 전역 아핀 일관성으로 긴 비디오의 매끄러운 추론을 가능하게 합니다.",
    key_results: "DVD는 다수의 벤치마크에서 제로샷 최고 성능을 달성했습니다. 기존 선도 모델 대비 163배 적은 태스크 특화 데이터만으로 이러한 성능을 얻었습니다.",
    why_it_matters: "자율주행, 로봇 내비게이션, AR/VR 콘텐츠 제작 등 3D 이해가 필수인 산업 전반에 즉각적 영향을 줄 수 있습니다. 163배 적은 데이터로 SOTA를 달성했다는 것은 데이터 효율성 측면에서도 큰 의미가 있습니다.",
    limitations: "결정론적 단일 패스 추론으로 변환하면서 확산 모델 고유의 불확실성 추정 능력을 잃게 됩니다. 실시간 처리 속도에 대한 구체적 벤치마크가 부족합니다.",
    related_context: "ChronoDepth(CVPR 2025)가 비디오 확산 사전 지식으로 시간적 일관성을 학습하는 방향을 제시한 이후, DVD는 확산 모델을 결정론적으로 변환하는 최초의 시도입니다.",
    tags: ["깊이추정", "Video Diffusion", "3D Vision", "자율주행", "Zero-shot Learning"],
    difficulty_level: "고급",
    reading_time_min: 8,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  },
  {
    id: 3,
    title: "Spatial-TTT: Streaming Visual-based Spatial Intelligence with Test-Time Training",
    authors: ["Fangfu Liu", "Diankun Wu", "Jiawei Chi", "Yimo Cai", "Yi-Hsin Hung", "Xumin Yu", "Hao Li", "Han Hu", "Yongming Rao", "Yueqi Duan"],
    arxiv_url: "https://arxiv.org/abs/2603.12255",
    published_date: "2026-03-12",
    categories: ["cs.CV", "cs.LG"],
    estimated_impact: "high",
    source: "Hugging Face Daily Papers (71 upvotes)",
    one_liner: "AI에게 '공간 기억력'을 선물하다 — 끝없는 영상 속에서 3D 세계를 실시간으로 이해하는 법",
    hook: "인간은 방 안을 걸어 다니며 자연스럽게 공간 구조를 파악합니다. 하지만 AI에게 긴 비디오를 보여주면 '기억력의 한계'에 부딪혀 공간을 잊어버립니다. Spatial-TTT는 AI가 스스로 학습하며 공간 기억을 무한히 확장하는 방법을 찾아냈습니다.",
    problem: "실시간 영상 스트림에서 공간 정보를 지속적으로 유지하고 업데이트하는 것은 공간 지능의 핵심 과제입니다. 단순히 컨텍스트 윈도우를 늘리는 것으로는 해결되지 않습니다.",
    method: "Spatial-TTT는 테스트 시간 학습(TTT) 패러다임을 공간 지능에 적용합니다. 하이브리드 아키텍처를 설계하여 대용량 청크 업데이트와 슬라이딩 윈도우 어텐션을 병렬로 수행하며, 3D 시공간 컨볼루션을 TTT 레이어에 적용한 공간 예측 메커니즘을 도입합니다.",
    key_results: "비디오 공간 벤치마크에서 최신 기술(SOTA) 성능을 달성했습니다. 특히 장기 영상에서의 공간 이해 능력이 크게 향상되었으며, 입력 길이가 증가해도 메모리와 연산량이 효율적으로 확장됩니다.",
    why_it_matters: "로봇공학, AR/VR, 자율주행 등 실시간 환경 이해가 필수인 분야에 직접적인 영향을 줍니다. TTT를 통한 적응형 공간 메모리는 기존의 고정된 컨텍스트 윈도우 한계를 근본적으로 해결합니다.",
    limitations: "TTT의 추론 시 파라미터 업데이트는 추가적인 연산 비용을 발생시켜 실시간 처리 속도에 제약이 될 수 있습니다.",
    related_context: "TTT 패러다임은 최근 언어 모델에서 시퀀스 모델링의 새로운 방향으로 주목받았으며, Spatial-TTT는 이를 3D 공간 이해로 확장한 최초의 시도입니다.",
    tags: ["공간지능", "Test-Time Training", "Streaming Video", "3D Understanding", "로봇공학"],
    difficulty_level: "고급",
    reading_time_min: 8,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  },
  {
    id: 4,
    title: "Fish Audio S2 Technical Report",
    authors: ["Shijia Liao", "Yuxuan Wang", "Songting Liu", "Yifan Cheng", "Ruoyi Zhang", "Tianyu Li", "Shidong Li", "Yisheng Zheng", "Xingwei Liu", "Qingzheng Wang", "Zhizhuo Zhou", "Jiahua Liu", "Xin Chen", "Dawei Han"],
    arxiv_url: "https://arxiv.org/abs/2603.08823",
    published_date: "2026-03-09",
    categories: ["cs.SD", "cs.AI", "cs.CL"],
    estimated_impact: "high",
    source: "Hugging Face Trending (#2)",
    one_liner: "\"속삭여줘\" 한마디면 속삭이는 AI — 자연어로 감정까지 제어하는 오픈소스 TTS의 새 시대",
    hook: "AI 음성이 더 이상 로봇처럼 들리지 않습니다. Fish Audio S2는 자연어 지시만으로 음성의 감정, 억양, 속도를 단어 단위로 제어합니다.",
    problem: "기존 TTS 시스템은 감정과 톤 제어가 미리 정의된 태그에 국한되어 자유로운 표현이 어려웠습니다. 오픈소스 모델은 상용 시스템에 비해 큰 격차가 있었습니다.",
    method: "이중 자기회귀(Dual-AR) 아키텍처를 핵심으로 합니다. 느린 AR 컴포넌트(40억 파라미터)가 시간축을 따라 주요 의미 코드북을 예측하고, 빠른 AR 컴포넌트(4억 파라미터)가 잔여 코드북을 생성합니다. GRPO를 통한 강화학습 정렬을 수행합니다.",
    key_results: "Seed-TTS Eval 벤치마크에서 중국어 0.54%, 영어 0.99% WER을 달성하여 Qwen3-TTS, MiniMax Speech-02, Seed-TTS 등을 모두 능가했습니다. 오디오 튜링 테스트에서 인간과 구분이 거의 불가능한 수준에 도달했습니다.",
    why_it_matters: "Fish Audio S2는 오픈소스 TTS의 기준을 완전히 재정의합니다. 모델 가중치, 파인튜닝 코드, SGLang 기반 추론 엔진을 모두 공개하여 ElevenLabs 등 상용 TTS에 대한 강력한 오픈소스 대안입니다.",
    limitations: "4B+ 파라미터 모델은 소비자 GPU에서의 실행이 어려워 접근성에 한계가 있습니다.",
    related_context: "Fish Speech 1세대 이후, Seed-TTS, MiniMax Speech-02, Qwen3-TTS 등 중국 기업들의 TTS 경쟁이 치열해졌습니다. S2는 GRPO 기반 강화학습 정렬을 TTS에 성공적으로 이식한 최초의 사례 중 하나입니다.",
    tags: ["음성합성", "TTS", "오픈소스", "Reinforcement Learning", "감정제어"],
    difficulty_level: "중급",
    reading_time_min: 6,
    category_label: "음성/오디오",
    category_class: "cat-speech"
  },
  {
    id: 5,
    title: "OpenClaw-RL: Train Any Agent Simply by Talking",
    authors: ["Yinjie Wang", "Xuyang Chen", "Xiaolong Jin", "Mengdi Wang", "Ling Yang"],
    arxiv_url: "https://arxiv.org/abs/2603.10165",
    published_date: "2026-03-10",
    categories: ["cs.CL"],
    estimated_impact: "high",
    source: "Hugging Face Trending (#3)",
    one_liner: "대화만으로 AI를 나만의 비서로 — 모든 상호작용이 학습 신호가 되는 범용 에이전트 훈련의 새 패러다임",
    hook: "AI 에이전트와 대화하면서 동시에 그 에이전트를 훈련시킬 수 있다면 어떨까요? OpenClaw-RL은 모든 상호작용을 학습 신호로 변환하여 에이전트를 실시간으로 개선합니다.",
    problem: "모든 AI 에이전트 상호작용은 다음 상태 신호를 생성하지만, 기존 시스템은 이를 실시간 학습 소스로 활용하지 못했습니다.",
    method: "완전히 비동기적으로 설계된 아키텍처로, 정책 서빙, 롤아웃 수집, PRM 판단, 정책 학습이 각각 독립적으로 실행됩니다. 평가적 신호는 PRM을 통해 스칼라 보상으로, 지시적 신호는 사후 지도 온폴리시 증류를 통해 회수됩니다.",
    key_results: "Qwen3-4B를 기본 모델로 한 구현이 제공되며, 터미널, GUI, SWE, 도구 호출 시나리오를 아우르는 범용 에이전트 설정이 추가되었습니다.",
    why_it_matters: "AI 에이전트의 '지속적 학습' 문제에 대한 근본적인 해법을 제시합니다. 서비스 중단 없이 실시간으로 에이전트를 개선할 수 있어 개인화된 AI 비서의 실현 가능성을 크게 높입니다.",
    limitations: "현재 8대의 H100급 GPU가 필요하여 개인 사용자나 소규모 팀의 접근이 제한적입니다.",
    related_context: "GRPO, RLHF 등 LLM 정렬 기법이 에이전트 학습으로 확장되는 추세 속에서, OpenClaw-RL은 '실시간 온라인 학습'이라는 독자적 방향을 개척했습니다.",
    tags: ["에이전트", "강화학습", "Personalization", "Online Learning", "비동기아키텍처"],
    difficulty_level: "고급",
    reading_time_min: 7,
    category_label: "에이전트/NLP",
    category_class: "cat-agent"
  },
  {
    id: 6,
    title: "InternVL-U: Democratizing Unified Multimodal Models for Understanding, Reasoning, Generation and Editing",
    authors: ["Changyao Tian", "Danni Yang", "Guanzhou Chen", "et al."],
    arxiv_url: "https://arxiv.org/abs/2603.09877",
    published_date: "2026-03-10",
    categories: ["cs.CV"],
    estimated_impact: "high",
    source: "Hugging Face Trending",
    one_liner: "4B 파라미터로 14B 모델을 이기다 — 멀티모달 AI의 '가성비 혁명'",
    hook: "이미지를 이해하고, 추론하고, 생성하고, 편집하는 네 가지 능력을 하나의 모델에 담을 수 있을까요? InternVL-U는 겨우 40억 개의 파라미터만으로 자신보다 3.5배 큰 모델을 능가합니다.",
    problem: "통합 멀티모달 모델은 의미론적 이해력과 시각적 생성 능력 사이에서 본질적인 트레이드오프에 직면합니다. 기존 접근법들은 모델 크기를 14B 이상으로 키워야 했습니다.",
    method: "'분리된 시각 표현' 설계로, 이해 과제에는 ViT 특징을, 생성 과제에는 VAE 잠재 공간을 사용합니다. 2B MLLM 백본과 1.7B MMDiT 생성 헤드를 결합하고 3단계 점진적 학습을 수행합니다.",
    key_results: "GenEval 벤치마크에서 0.85를 달성하여 3.5배 큰 BAGEL(14B)의 0.82를 넘어섰습니다. MMMU에서 54.7점으로 BAGEL과 거의 동등한 수준을 유지했습니다.",
    why_it_matters: "'멀티모달 민주화'라는 비전을 실질적으로 구현합니다. 4B 규모의 모델로 이해·추론·생성·편집을 모두 수행할 수 있어 고가의 GPU 없이도 다양한 응용이 가능합니다.",
    limitations: "4B 규모의 근본적 한계로 초고해상도 이미지나 복잡한 다중 객체 장면에서의 세밀한 제어에는 제약이 있습니다.",
    related_context: "InternVL 시리즈의 최신작으로, BAGEL(14B), Janus-Pro(7B) 등이 통합 멀티모달 모델 경쟁에 참여하고 있습니다.",
    tags: ["통합멀티모달", "Unified Multimodal Model", "경량화", "이미지생성", "Chain-of-Thought"],
    difficulty_level: "중급",
    reading_time_min: 7,
    category_label: "멀티모달",
    category_class: "cat-multi"
  },
  {
    id: 7,
    title: "IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse",
    authors: ["Yushi Bai", "Qian Dong", "Ting Jiang", "Xin Lv", "Zhengxiao Du", "Aohan Zeng", "Jie Tang", "Juanzi Li"],
    arxiv_url: "https://arxiv.org/abs/2603.12201",
    published_date: "2026-03-12",
    categories: ["cs.CL", "cs.LG"],
    estimated_impact: "high",
    source: "Hugging Face Daily Papers (32 upvotes)",
    one_liner: "인덱서 75%를 꺼도 성능은 그대로 — LLM 추론 속도의 숨겨진 지름길",
    hook: "인접한 레이어들이 선택하는 토큰의 70~100%가 동일하다면? IndexCache는 이 놀라운 중복성을 발견하고, 불필요한 계산의 75%를 제거하면서도 품질을 유지합니다.",
    problem: "DeepSeek Sparse Attention의 인덱서 자체가 O(L^2) 복잡도를 가지며, 모든 레이어에서 독립적으로 실행되어야 합니다. 문맥 길이가 20만 토큰 이상이면 인덱서가 새로운 병목이 됩니다.",
    method: "인접 레이어들의 top-k 인덱스가 70~100% 겹친다는 점을 활용하여, 레이어를 Full 레이어와 Shared 레이어로 분류합니다. 탐욕적 탐색으로 어떤 레이어의 인덱서를 유지할지 결정합니다.",
    key_results: "30B DSA 모델에서 인덱서의 75%를 제거하고도 장문맥 벤치마크 점수가 50.2에서 49.9로 거의 변화 없었습니다. 프리필 속도 1.82배, 디코딩 속도 1.48배 가속을 달성했습니다.",
    why_it_matters: "희소 어텐션이 프론티어 LLM의 표준으로 자리잡으면서, IndexCache는 추론 파이프라인의 필수 구성 요소가 될 전망입니다. 기존 모델에 즉시 적용 가능합니다.",
    limitations: "인덱서를 1/8만 유지하면 장문맥 성능이 눈에 띄게 하락(50.2 -> 46.1)하여 공격적 압축에는 한계가 있습니다.",
    related_context: "DeepSeek Sparse Attention은 DeepSeek-V3.2에서 도입된 프로덕션급 기법으로, GLM-5에도 채택되었습니다.",
    tags: ["LLM추론최적화", "Sparse Attention", "DeepSeek", "장문맥처리", "효율화"],
    difficulty_level: "고급",
    reading_time_min: 6,
    category_label: "에이전트/NLP",
    category_class: "cat-nlp"
  },
  {
    id: 8,
    title: "EndoCoT: Scaling Endogenous Chain-of-Thought Reasoning in Diffusion Models",
    authors: ["Xuanlang Dai", "Yujie Zhou", "Long Xing", "Jiazi Bu", "Xilin Wei", "Yuhong Liu", "Beichen Zhang", "Kai Chen", "Yuhang Zang"],
    arxiv_url: "https://arxiv.org/abs/2603.12252",
    published_date: "2026-03-12",
    categories: ["cs.CV", "cs.CL"],
    estimated_impact: "medium",
    source: "Hugging Face Daily Papers (21 upvotes)",
    one_liner: "확산 모델도 '생각'할 수 있다 — 미로부터 스도쿠까지, 이미지로 추론하는 AI",
    hook: "이미지를 '그리는' 확산 모델도 생각하면서 그릴 수 있다면? EndoCoT는 확산 모델 내부에 사고 과정을 심어, 복잡한 추론 과제를 이미지로 직접 해결합니다.",
    problem: "MLLM을 확산 프레임워크의 텍스트 인코더로 활용하는 접근법은, 단일 단계 인코딩이 CoT를 활성화하지 못하고, 디코딩 과정 전반에 안내 신호가 고정되는 한계가 있습니다.",
    method: "반복적 사고 안내 모듈로 MLLM의 잠재 사고 상태를 재귀적으로 정제하고, 종결 사고 접지 모듈로 최종 추론 상태를 정답과 정렬합니다.",
    key_results: "4가지 추론 벤치마크에서 통합 평균 92.1% 정확도를 달성하여 최강 기준선을 8.3%p 초과했습니다. Maze-32에서 90%, Sudoku-35에서 95%를 기록했습니다.",
    why_it_matters: "확산 모델의 역할을 '이미지 생성기'에서 '시각적 추론기'로 확장하는 새로운 연구 방향을 제시합니다.",
    limitations: "최적의 추론 단계 수를 수동으로 조정해야 하며, 중간 감독이 포함된 고품질 데이터셋이 필요합니다.",
    related_context: "NeurIPS 2024의 'Diffusion of Thoughts'가 선행 연구이며, EndoCoT는 추론을 모델 내부에 통합합니다.",
    tags: ["Diffusion Model", "Chain-of-Thought", "시각적추론", "MLLM", "멀티모달"],
    difficulty_level: "고급",
    reading_time_min: 6,
    category_label: "멀티모달",
    category_class: "cat-multi"
  },
  {
    id: 9,
    title: "Video-Based Reward Modeling for Computer-Use Agents",
    authors: ["Linxin Song", "Jieyu Zhang", "Huanxin Sheng", "Taiwei Shi", "Gupta Rahul", "Yang Liu", "Ranjay Krishna", "Jian Kang", "Jieyu Zhao"],
    arxiv_url: "https://arxiv.org/abs/2603.10178",
    published_date: "2026-03-10",
    categories: ["cs.CV", "cs.CL"],
    estimated_impact: "high",
    source: "Hugging Face Daily Papers (30 upvotes)",
    one_liner: "AI가 컴퓨터를 제대로 쓰는지, 화면 녹화만 보고 판별하는 심판 모델",
    hook: "AI 에이전트가 컴퓨터에서 업무를 수행하는 시대가 왔지만, 이 에이전트가 과제를 '정말로' 완료했는지 어떻게 확인할까요? ExeVRM은 오직 화면 녹화 영상만 보고 판단하며, GPT-5.2와 Gemini-3 Pro를 능가합니다.",
    problem: "컴퓨터 사용 에이전트의 평가는 확장성이 큰 과제입니다. 인간 평가는 비용이 높고, 규칙 기반 평가기는 다양한 환경에 일반화되기 어렵습니다.",
    method: "ExeVRM은 사용자 지시문과 에이전트 실행 영상만으로 과제 성공 여부를 예측합니다. 적대적 지시문 번역으로 부정 샘플을 생성하고, 시공간 토큰 가지치기로 효율적 처리를 합니다.",
    key_results: "ExeVRM 8B 모델은 전체 정확도 84.7%, 재현율 87.7%를 달성하여 GPT-5.2(75.0%)와 Gemini-3 Pro(75.1%)를 크게 상회했습니다.",
    why_it_matters: "CUA가 산업 현장에 빠르게 도입되는 현 시점에서, 확장 가능한 자동 평가 체계는 핵심 인프라입니다. RLHF 파이프라인의 보상 신호로 활용 가능합니다.",
    limitations: "장시간 탐색 궤적에서 시행착오 패턴을 실패로 오인하는 경향이 있습니다.",
    related_context: "OSWorld, WebArena 등의 벤치마크가 표준 평가 환경으로 자리잡은 가운데, ExeVRM은 GUI 환경의 에이전트 평가를 비디오 기반으로 확장한 최초의 대규모 시도입니다.",
    tags: ["Computer-Use Agent", "보상모델", "Video Understanding", "에이전트평가", "RLHF"],
    difficulty_level: "중급",
    reading_time_min: 6,
    category_label: "에이전트/NLP",
    category_class: "cat-agent"
  },
  {
    id: 10,
    title: "OmniStream: Mastering Perception, Reconstruction and Action in Continuous Streams",
    authors: ["Yibin Yan", "Jilan Xu", "Shangzhe Di", "Haoning Wu", "Weidi Xie"],
    arxiv_url: "https://arxiv.org/abs/2603.12265",
    published_date: "2026-03-12",
    categories: ["cs.CV"],
    estimated_impact: "medium",
    source: "Hugging Face Daily Papers (25 upvotes)",
    one_liner: "하나의 비전 백본으로 보고, 이해하고, 재구성하고, 행동하다 — 범용 시각 AI의 통합 해법",
    hook: "자율주행차는 도로를 '인식'해야 하고, AR 글래스는 공간을 '재구성'해야 하며, 로봇은 물체를 '조작'해야 합니다. OmniStream은 단 하나의 비전 백본으로 이 모든 것을 수행합니다.",
    problem: "현재의 비전 파운데이션 모델들은 파편화되어 있습니다. DINOv3는 이미지 의미론에 강하지만 3D 기하를 모르고, CUT3R은 기하학에 특화되었지만 의미 이해가 약합니다.",
    method: "인과적 시공간 어텐션으로 실시간 온라인 처리를 가능하게 하고, 3D-RoPE로 시간·공간 구조를 보존하며, 29개 데이터셋에서 시너지적 다중과제 사전학습을 수행합니다.",
    key_results: "동결된 백본만으로 비디오 행동 인식 SSv2에서 68.5%(DINOv3 54.0%), 학습하지 않은 로봇 조작 CALVIN에서 시퀀스 길이 3.89(OpenVLA 2.55)를 달성했습니다.",
    why_it_matters: "'하나의 백본으로 모든 시각 과제'라는 비전 파운데이션 모델의 궁극적 목표에 실질적으로 다가선 연구입니다.",
    limitations: "모든 벤치마크에서 전문 SOTA 모델을 균일하게 능가하지는 못합니다.",
    related_context: "같은 주간 발표된 Spatial-TTT와 보완적 관계에 있습니다.",
    tags: ["Vision Foundation Model", "스트리밍", "3D재구성", "Embodied AI", "멀티태스크"],
    difficulty_level: "고급",
    reading_time_min: 7,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  },
  {
    id: 11,
    title: "DreamVideo-Omni: Omni-Motion Controlled Multi-Subject Video Customization",
    authors: ["Yujie Wei", "Xinyu Liu", "Shiwei Zhang", "et al."],
    arxiv_url: "https://arxiv.org/abs/2603.12257",
    published_date: "2026-03-12",
    categories: ["cs.CV"],
    estimated_impact: "medium",
    source: "Hugging Face Daily Papers (24 upvotes)",
    one_liner: "AI가 여러 인물의 얼굴과 움직임을 동시에 기억하며 영상을 만드는 시대가 열렸다",
    hook: "영상 속에 등장하는 여러 인물이 각자의 얼굴을 유지하면서 자연스럽게 움직이게 하려면 어떻게 해야 할까요? DreamVideo-Omni는 강화학습이라는 무기로 이 난제를 정면 돌파합니다.",
    problem: "여러 인물의 정체성과 다양한 수준의 모션을 동시에 정밀하게 제어하는 것은 미해결 과제였습니다. 인물이 많아질수록 얼굴이 뒤섞이거나 움직임이 엉키는 문제가 있었습니다.",
    method: "2단계 점진적 학습으로, 1단계에서 인물 외모·전역 모션·국소 역학·카메라 움직임을 통합 학습하고, 2단계에서 잠재 정체성 보상 모델을 통한 강화학습으로 정체성 보존을 극대화합니다.",
    key_results: "DreamOmni Bench에서 얼굴 유사도를 약 2배 향상시키고, 모션 정확도를 0.212에서 0.558로 대폭 개선했습니다. 사용자 연구에서 전체 품질 선호도 89.2%를 기록했습니다.",
    why_it_matters: "비디오 생성 AI에서 '정체성 보존'과 '모션 제어'라는 두 마리 토끼를 동시에 잡는 것은 상업적 응용의 핵심 관문이었습니다.",
    limitations: "보상 가중치가 높아지면 보상 해킹 현상이 발생하여 강화학습의 안정성 문제가 남아 있습니다.",
    related_context: "DreamVideo 시리즈의 후속작으로, Alibaba TongyiLab의 연구입니다.",
    tags: ["비디오 생성", "Diffusion Model", "강화학습", "Identity Preservation", "Multi-Subject"],
    difficulty_level: "고급",
    reading_time_min: 8,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  },
  {
    id: 12,
    title: "Holi-Spatial: Evolving Video Streams into Holistic 3D Spatial Intelligence",
    authors: ["Yuanyuan Gao", "Hao Li", "Yifei Liu", "et al."],
    arxiv_url: "https://arxiv.org/abs/2603.07660",
    published_date: "2026-03-08",
    categories: ["cs.CV"],
    estimated_impact: "medium",
    source: "Hugging Face Trending",
    one_liner: "일반 동영상만으로 120만 개 3D 공간 데이터를 자동 생산하는 공장이 탄생했다",
    hook: "3D 공간을 이해하는 AI를 만들려면 막대한 3D 데이터가 필요하지만, 사람이 만드는 것은 비현실적입니다. Holi-Spatial은 일반 동영상에서 3D 공간 정보를 자동으로 추출합니다.",
    problem: "공간 지능 연구는 대규모의 정밀한 3D 데이터에 의존하지만, 기존 접근법들은 소수의 수동 주석 데이터셋에 머물러 있어 확장성이 제한되었습니다.",
    method: "세 단계의 체계적 파이프라인으로 원시 비디오를 3D 공간 데이터셋으로 변환합니다. 기하학적 최적화, 이미지 수준 인식, 장면 수준 정제를 거쳐 인간 개입 없이 완전 자동화됩니다.",
    key_results: "12,000개의 3DGS 장면, 130만 개 2D 마스크, 32만 개 3D 바운딩 박스, 125만 개 공간 QA 쌍을 포함하는 Holi-Spatial-4M 데이터셋을 구축했습니다.",
    why_it_matters: "3D 공간 지능 연구의 가장 큰 병목인 '데이터 부족'을 근본적으로 해결합니다. 웹에 무한히 존재하는 비디오를 학습 자원으로 전환할 수 있습니다.",
    limitations: "파이프라인이 3DGS 재구성 품질에 크게 의존하므로, 카메라 움직임이 제한적이거나 텍스처가 부족한 영상에서는 품질이 저하될 수 있습니다.",
    related_context: "SpatialVID(CVPR 2026), Spatial-TTT 등 3D 공간 지능 연구가 급격히 활발해지는 흐름 속에 위치합니다.",
    tags: ["3D 공간 지능", "3D Gaussian Splatting", "자동 데이터셋", "Spatial Reasoning", "VLM"],
    difficulty_level: "중급",
    reading_time_min: 7,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  },
  {
    id: 13,
    title: "Strategic Navigation or Stochastic Search? How Agents and Humans Reason Over Document Collections",
    authors: ["\u0141ukasz Borchmann", "Jordy Van Landeghem", "Micha\u0142 Turski", "et al."],
    arxiv_url: "https://arxiv.org/abs/2603.12180",
    published_date: "2026-03-12",
    categories: ["cs.CL", "cs.AI"],
    estimated_impact: "medium",
    source: "Hugging Face Daily Papers (40 upvotes)",
    one_liner: "AI 에이전트는 문서 더미에서 답을 찾을 때 '전략'이 아닌 '무차별 탐색'에 의존하고 있었다",
    hook: "최신 AI 에이전트가 800개의 PDF 문서 속에서 답을 찾을 때, 인간처럼 전략적으로 탐색할까요? 실험 결과는 충격적입니다. AI는 인간과 비슷한 정확도를 보이지만, 완전히 다른 방식으로 다른 문제를 풀고 있었습니다.",
    problem: "RAG와 AI 에이전트 시스템이 실제로 문서 컬렉션을 '이해'하면서 탐색하는지, 아니면 단순히 시행착오를 반복하는지는 검증되지 않았습니다.",
    method: "MADQA 벤치마크를 구축하여 800개 PDF에 대해 2,250개 인간 작성 질문을 설계하고, '정확도-노력 절충' 평가 프로토콜로 에이전트와 인간의 탐색 전략 차이를 분석했습니다.",
    key_results: "최고 성능의 AI 에이전트는 인간과 유사한 정확도를 달성하지만, 오라클 대비 약 20%의 격차를 좁히지 못하고 비생산적인 루프에 빠지는 패턴이 관찰되었습니다.",
    why_it_matters: "현재 RAG 시스템과 AI 에이전트의 근본적 한계를 정량적으로 드러냈습니다. '정확도'만으로는 에이전트의 추론 능력을 판단할 수 없다는 경고를 보냅니다.",
    limitations: "벤치마크가 PDF 형식의 정적 문서에 한정되어 있어 다양한 정보 소스를 완전히 반영하지 못합니다.",
    related_context: "Snowflake의 문서 AI 연구의 맥락에서, DeepSearchQA 등 문서 기반 에이전트 평가 벤치마크가 잇따라 발표되고 있습니다.",
    tags: ["AI 에이전트", "문서 추론", "RAG", "Benchmark", "Snowflake"],
    difficulty_level: "중급",
    reading_time_min: 6,
    category_label: "에이전트/NLP",
    category_class: "cat-nlp"
  },
  {
    id: 14,
    title: "Mobile-GS: Real-time Gaussian Splatting for Mobile Devices",
    authors: ["Xiaobiao Du", "Yida Wang", "Kun Zhan", "Xin Yu"],
    arxiv_url: "https://arxiv.org/abs/2603.11531",
    published_date: "2026-03-12",
    categories: ["cs.CV"],
    estimated_impact: "medium",
    source: "Hugging Face Daily Papers (32 upvotes)",
    one_liner: "스마트폰에서 116FPS로 돌아가는 3D 렌더링, 모바일 3D 시대의 문이 열렸다",
    hook: "3D Gaussian Splatting의 840MB 모델을 4.6MB로 압축하고 127FPS로 모바일에서 실시간 렌더링. ICLR 2026에 채택된 게임 체인저입니다.",
    problem: "3DGS는 모바일 기기 배포에 알파 블렌딩 연산과 수백 MB 모델 크기라는 핵심 병목이 존재했습니다.",
    method: "깊이 인식 순서 독립 렌더링으로 정렬 과정을 제거하고, 신경망 기반 뷰 종속 향상으로 아티팩트를 보정하며, 구면 조화 증류와 벡터 양자화로 모델을 극적으로 압축합니다.",
    key_results: "RTX 3090 Ti에서 1,125 FPS(기존 3DGS 대비 6.5배), 모델 크기 839.9MB에서 4.6MB로 182배 압축. Snapdragon 8 Gen 3에서 127 FPS, 전력 소비 0.83W(기존 대비 7배 효율적).",
    why_it_matters: "AR/VR 모바일 앱, 부동산 가상 투어, 모바일 게임 등에서 실시간 3D 렌더링을 현실화합니다. 3DGS 기술의 '민주화'를 위한 핵심 인프라 연구입니다.",
    limitations: "순서 독립 렌더링으로 인한 투명도 아티팩트가 반투명 객체가 많은 장면에서 문제가 될 수 있습니다.",
    related_context: "RTGS, SortFreeGS 등 모바일 3DGS 최적화 연구가 활발히 진행되고 있습니다.",
    tags: ["3D Gaussian Splatting", "모바일 렌더링", "모델 압축", "Real-time Rendering", "ICLR 2026"],
    difficulty_level: "중급",
    reading_time_min: 6,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  },
  {
    id: 15,
    title: "ShotVerse: Advancing Cinematic Camera Control for Text-Driven Multi-Shot Video Creation",
    authors: ["Songlin Yang", "Zhe Wang", "Xuyi Yang", "et al."],
    arxiv_url: "https://arxiv.org/abs/2603.11421",
    published_date: "2026-03-12",
    categories: ["cs.CV"],
    estimated_impact: "medium",
    source: "Hugging Face Daily Papers (26 upvotes)",
    one_liner: "텍스트만으로 영화감독처럼 멀티샷 영상을 연출하는 AI가 등장했다",
    hook: "AI 비디오 생성이 발전했지만, 영화적 카메라 제어는 불가능에 가까웠습니다. ShotVerse는 '계획자'와 '실행자' 두 AI의 협업으로 Sora2, VEO3를 능가합니다.",
    problem: "텍스트 프롬프트만으로는 카메라 움직임을 정밀하게 지정할 수 없고, 수동 궤적 입력은 전문 지식과 막대한 노동을 요구합니다.",
    method: "'계획 후 제어' 프레임워크로 VLM 기반 플래너가 카메라 궤적을 자동 생성하고, 컨트롤러가 4D RoPE와 카메라 어댑터를 통해 멀티샷 비디오로 렌더링합니다.",
    key_results: "이동 오차 0.0163, 회전 오차 0.73도로 ReCamMaster를 크게 능가합니다. 멀티샷 FVD 281.71로 Sora2(372.13), VEO3(941.50)을 모두 능가합니다.",
    why_it_matters: "전문 영상 제작의 진입 장벽을 획기적으로 낮출 수 있습니다. 독립 영화 제작자와 콘텐츠 크리에이터에게 전문 수준의 카메라 제어를 제공합니다.",
    limitations: "현재 2~4개 샷의 비교적 짧은 시퀀스에 초점을 맞추고 있어, 장편 시퀀스에 대한 확장성은 검증이 필요합니다.",
    related_context: "Tencent Video AI Center의 연구로, ShotDirector, MotionCanvas, HoloCine 등과 경쟁합니다.",
    tags: ["비디오 생성", "카메라 제어", "멀티샷", "Cinematic AI", "Tencent"],
    difficulty_level: "중급",
    reading_time_min: 7,
    category_label: "컴퓨터 비전",
    category_class: "cat-cv"
  }
];

// ===== EDITORIAL DATA =====
const editorial = {
  weekly_narrative: {
    headline: "3D, 효율, 에이전트 — 세 갈래로 뻗는 AI",
    subheadline: "이번 주 15편의 논문이 그리는 AI 연구의 지형도",
    intro: "이번 주 AI 연구는 세 가지 뚜렷한 물줄기를 따라 흘렀습니다. 첫째, 3D 공간을 이해하고 재구성하는 기술이 폭발적으로 쏟아졌습니다. 둘째, 거대한 모델을 더 작고 빠르게 만드는 '효율성 혁명'이 가속화되었습니다. 셋째, AI 에이전트가 단순한 도구를 넘어 스스로를 평가하고 학습하는 '자각'의 단계로 진입하고 있습니다. 이 세 갈래는 독립적으로 보이지만, 결국 하나의 목표 — 현실 세계에서 작동하는 AI — 로 수렴합니다.",
    trends: [
      {
        id: "trend-1",
        title: "3D의 민주화",
        subtitle: "누구나 3D를 다루는 시대",
        description: "비디오 깊이 추정(DVD), 스트리밍 공간 지능(Spatial-TTT), 모바일 3D 렌더링(Mobile-GS), 자동 3D 데이터 생성(Holi-Spatial)까지 — 이번 주만 5편의 논문이 3D를 더 쉽고 빠르게 만드는 데 도전했습니다. 3D는 더 이상 전문가의 영역이 아닙니다.",
        paper_ids: [2, 3, 10, 12, 14],
        icon_suggestion: "\uD83D\uDD2E"
      },
      {
        id: "trend-2",
        title: "작지만 강한",
        subtitle: "효율이 곧 실력인 시대",
        description: "4B로 14B를 이기고(InternVL-U), 인덱서 75%를 꺼도 성능을 유지하며(IndexCache), 840MB를 4.6MB로 압축합니다(Mobile-GS). '크면 강하다'는 공식이 무너지고, 효율성이 새로운 경쟁력이 되었습니다.",
        paper_ids: [6, 7, 14, 1, 4],
        icon_suggestion: "\u26A1"
      },
      {
        id: "trend-3",
        title: "에이전트의 자각",
        subtitle: "AI가 스스로를 돌아보다",
        description: "에이전트가 대화하며 실시간으로 학습하고(OpenClaw-RL), 화면 녹화만으로 다른 에이전트를 심판하며(ExeVRM), 문서 탐색의 전략적 한계가 적나라하게 드러납니다(MADQA). AI 에이전트의 '메타인지' 시대가 열리고 있습니다.",
        paper_ids: [5, 9, 13],
        icon_suggestion: "\uD83C\uDFAF"
      }
    ],
    closing: "3D가 민주화되고, 효율이 극대화되고, 에이전트가 자각하는 이번 주의 흐름은 결국 하나의 메시지를 전합니다 — AI는 더 이상 '할 수 있는가'의 문제가 아니라 '어떻게 현실에 녹아드는가'의 문제입니다. 다음 주에는 비디오 생성과 음성 합성 분야에서 더 많은 오픈소스 공세가 예상됩니다."
  },
  editors_picks: [
    {
      paper_id: 1,
      pick_reason: "상용 시스템을 모두 능가하면서 완전 오픈소스로 공개한 결단이 인상적입니다. 기술적 완성도와 산업적 파급력, 그리고 '열린 혁신'이라는 가치까지 — 이번 주 가장 완벽한 패키지입니다.",
      one_thing_to_remember: "오픈소스가 상용 시스템을 이길 수 있다는 것을 증명한 연구입니다."
    },
    {
      paper_id: 6,
      pick_reason: "모델 크기가 3.5배 차이나는데 더 작은 모델이 이기는 장면은 언제 봐도 통쾌합니다. 4B 모델로 이해부터 생성까지 한번에 — 이것이 '멀티모달 민주화'의 의미입니다.",
      one_thing_to_remember: "이해와 생성의 시각 표현을 분리한 설계가 핵심 아이디어입니다."
    },
    {
      paper_id: 5,
      pick_reason: "에이전트와 대화하면서 동시에 훈련시킨다는 발상이 근본적으로 새롭습니다. 모든 상호작용이 학습 신호가 되는 세상 — 개인화 AI의 가장 현실적인 경로입니다.",
      one_thing_to_remember: "비동기 아키텍처가 실시간 학습과 서빙의 동시 수행을 가능하게 합니다."
    }
  ],
  paper_relations: [
    { from_id: 2, to_id: 3, relation_type: "complementary", description: "DVD는 비디오 깊이를, Spatial-TTT는 공간 구조를 — 3D 이해의 서로 다른 층위를 공략합니다." },
    { from_id: 3, to_id: 10, relation_type: "complementary", description: "Spatial-TTT의 스트리밍 공간 지능과 OmniStream의 범용 비전 백본은 실시간 3D 이해에서 보완적입니다." },
    { from_id: 3, to_id: 12, relation_type: "same_trend", description: "Spatial-TTT와 Holi-Spatial 모두 '3D 공간 지능' 트렌드의 핵심 연구입니다." },
    { from_id: 1, to_id: 4, relation_type: "same_trend", description: "음성 인식(FireRedASR2S)과 음성 합성(Fish Audio S2) — 음성 AI의 양대 축이 동시에 도약했습니다." },
    { from_id: 6, to_id: 7, relation_type: "same_trend", description: "InternVL-U의 경량 멀티모달과 IndexCache의 추론 최적화 — '작지만 강한' 트렌드의 양면입니다." },
    { from_id: 5, to_id: 9, relation_type: "complementary", description: "OpenClaw-RL이 에이전트를 '훈련'하고, ExeVRM이 에이전트를 '평가'합니다 — 에이전트 생태계의 두 축입니다." },
    { from_id: 5, to_id: 13, relation_type: "contrasting", description: "OpenClaw-RL은 에이전트의 학습 가능성을, MADQA는 현재 에이전트의 한계를 보여줍니다 — 같은 주제, 반대 시선." },
    { from_id: 11, to_id: 15, relation_type: "same_trend", description: "DreamVideo-Omni의 다중 인물 비디오 생성과 ShotVerse의 카메라 제어 — AI 영상 제작 혁명의 두 갈래입니다." },
    { from_id: 8, to_id: 6, relation_type: "builds_on", description: "EndoCoT는 MLLM을 확산 모델과 결합하는데, InternVL-U의 통합 멀티모달 접근과 맥을 같이합니다." },
    { from_id: 14, to_id: 12, relation_type: "complementary", description: "Holi-Spatial이 3D 데이터를 생산하고, Mobile-GS가 그것을 모바일에서 렌더링합니다 — 3D 파이프라인의 생산과 소비." }
  ],
  reading_guides: {
    beginner: {
      title: "입문자 추천 코스",
      description: "AI 연구에 처음 관심 갖는 분을 위한 코스",
      paper_ids: [4, 1, 6, 14],
      rationale: "직관적으로 와닿는 음성/시각 분야부터 시작해서 점차 기술적 깊이를 더해갑니다. 모두 '중급' 난이도 논문으로 구성했습니다."
    },
    expert: {
      title: "전문가 추천 코스",
      description: "핵심만 빠르게 파악하고 싶은 연구자를 위한 코스",
      paper_ids: [7, 3, 5, 2],
      rationale: "이번 주 가장 기술적으로 깊은 논문들을 모았습니다. 추론 최적화에서 공간 지능, 에이전트 학습, 비디오 깊이까지 핵심만 훑어보세요."
    }
  }
};

// ===== CATEGORY MAP =====
const categoryMap = {
  "\uC804\uCCB4": null,
  "\uCEF4\uD4E8\uD130 \uBE44\uC804": "cat-cv",
  "\uC74C\uC131/\uC624\uB514\uC624": "cat-speech",
  "\uC5D0\uC774\uC804\uD2B8/NLP": "cat-nlp",
  "\uBA40\uD2F0\uBAA8\uB2EC": "cat-multi"
};

const difficultyMap = {
  "\uC804\uCCB4": null,
  "\uC785\uBB38": "\uC785\uBB38",
  "\uC911\uAE09": "\uC911\uAE09",
  "\uACE0\uAE09": "\uACE0\uAE09"
};

const relationLabels = {
  complementary: "\uBCF4\uC644\uC801",
  contrasting: "\uB300\uC870\uC801",
  builds_on: "\uBC1C\uC804",
  same_trend: "\uAC19\uC740 \uD2B8\uB80C\uB4DC"
};

// ===== STATE =====
let activeCategory = null;
let activeDifficulty = null;
let activeTrend = null;
let currentModalPaperId = null;

// ===== UTILITY =====
function parseUpvotes(source) {
  const match = source.match(/(\d+)\s*upvotes/i);
  if (match) return parseInt(match[1]);
  const trendMatch = source.match(/#(\d+)/);
  if (trendMatch) return null; // Trending rank, not upvotes
  return null;
}

function getReadPapers() {
  try {
    return JSON.parse(localStorage.getItem('pp-read') || '[]');
  } catch { return []; }
}

function markAsRead(id) {
  const read = getReadPapers();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem('pp-read', JSON.stringify(read));
  }
}

function isRead(id) {
  return getReadPapers().includes(id);
}

function getFilteredPapers() {
  return papers.filter(p => {
    if (activeCategory && p.category_class !== activeCategory) return false;
    if (activeDifficulty && p.difficulty_level !== activeDifficulty) return false;
    if (activeTrend) {
      const trend = editorial.weekly_narrative.trends.find(t => t.id === activeTrend);
      if (trend && !trend.paper_ids.includes(p.id)) return false;
    }
    return true;
  });
}

function getEditorPick(paperId) {
  return editorial.editors_picks.find(p => p.paper_id === paperId);
}

function getRelatedPapers(paperId) {
  return editorial.paper_relations.filter(r => r.from_id === paperId || r.to_id === paperId).map(r => {
    const relatedId = r.from_id === paperId ? r.to_id : r.from_id;
    const relatedPaper = papers.find(p => p.id === relatedId);
    return { ...r, relatedPaper, relatedId };
  }).filter(r => r.relatedPaper);
}

// ===== THEME =====
function initTheme() {
  const stored = localStorage.getItem('pp-theme');
  if (stored) {
    document.documentElement.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('pp-theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('themeToggle');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
}

// ===== TRENDS SECTION =====
function renderTrends() {
  const container = document.getElementById('trendsGrid');
  const intro = document.getElementById('trendsIntro');

  container.innerHTML = editorial.weekly_narrative.trends.map(t => `
    <div class="trend-card ${activeTrend === t.id ? 'active' : ''}" data-trend="${t.id}" tabindex="0" role="button" aria-pressed="${activeTrend === t.id}">
      <span class="trend-icon">${t.icon_suggestion}</span>
      <div class="trend-title">${t.title}</div>
      <div class="trend-subtitle">${t.subtitle}</div>
      <div class="trend-count">${t.paper_ids.length}\uD3B8\uC758 \uB17C\uBB38</div>
    </div>
  `).join('');

  intro.textContent = editorial.weekly_narrative.intro;

  container.addEventListener('click', e => {
    const card = e.target.closest('.trend-card');
    if (!card) return;
    const trendId = card.dataset.trend;
    activeTrend = activeTrend === trendId ? null : trendId;
    renderTrends();
    renderPaperGrid();
  });

  container.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.target.click();
    }
  });
}

// ===== READING GUIDE =====
function renderReadingGuide() {
  const container = document.getElementById('readingGuides');
  const guides = [
    { key: 'beginner', icon: '\uD83C\uDF31', iconClass: 'beginner', data: editorial.reading_guides.beginner },
    { key: 'expert', icon: '\u26A1', iconClass: 'expert', data: editorial.reading_guides.expert }
  ];

  container.innerHTML = guides.map(g => `
    <div class="guide-card">
      <div class="guide-header">
        <span class="guide-icon ${g.iconClass}">${g.icon}</span>
        <h3 class="guide-title">${g.data.title}</h3>
      </div>
      <p class="guide-description">${g.data.description}</p>
      <div class="guide-steps">
        ${g.data.paper_ids.map((id, i) => {
          const p = papers.find(x => x.id === id);
          const arrow = i < g.data.paper_ids.length - 1 ? '<span class="guide-arrow">\u2192</span>' : '';
          return `<span class="guide-step" onclick="openModal(${id})" tabindex="0" role="button"><span class="guide-step-number">${i + 1}</span>${p ? p.title.split(':')[0].split(' ').slice(0, 2).join(' ') : ''}</span>${arrow}`;
        }).join('')}
      </div>
      <p class="guide-rationale">${g.data.rationale}</p>
    </div>
  `).join('');
}

// ===== FEATURED SECTION =====
function renderFeatured() {
  const picks = editorial.editors_picks;
  const container = document.getElementById('featuredGrid');

  container.innerHTML = picks.map((pick, i) => {
    const p = papers.find(x => x.id === pick.paper_id);
    if (!p) return '';
    return `
    <div class="featured-card" onclick="openModal(${p.id})" ${i === 0 ? 'style="grid-column: 1 / -1;"' : ''}>
      <div class="featured-card-image">
        <img src="images/paper_${p.id}.png" alt="${p.title}" loading="lazy">
        <div class="featured-card-image-overlay"></div>
        <span class="featured-card-impact">EDITOR'S PICK</span>
      </div>
      <div class="featured-card-body">
        <h3 class="featured-card-title">${p.title}</h3>
        <p class="featured-card-oneliner">${p.one_liner}</p>
        <div class="featured-card-pick">
          <div class="featured-card-pick-label">\uD3B8\uC9D1\uC790\uC758 \uD55C\uB9C8\uB514</div>
          <p class="featured-card-pick-text">${pick.pick_reason}</p>
        </div>
        <div class="featured-card-meta">
          <div class="featured-card-tags">
            ${p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <span class="reading-time">\u23F1 ${p.reading_time_min}\uBD84</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===== PAPER GRID =====
function renderPaperGrid() {
  const container = document.getElementById('paperGrid');
  const emptyState = document.getElementById('emptyState');
  const filtered = getFilteredPapers();

  if (filtered.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  container.style.display = 'grid';
  emptyState.style.display = 'none';

  container.innerHTML = filtered.map(p => {
    const upvotes = parseUpvotes(p.source);
    const read = isRead(p.id);
    return `
    <div class="paper-card" onclick="openModal(${p.id})">
      <div class="paper-card-image">
        <img src="images/paper_${p.id}.png" alt="${p.title}" loading="lazy">
        <span class="paper-card-category ${p.category_class}"></span>
        <span class="paper-card-difficulty difficulty-${p.difficulty_level}">${p.difficulty_level}</span>
        ${upvotes ? `<span class="paper-card-signal">\uD83D\uDD25 ${upvotes}</span>` : ''}
        ${read ? '<span class="paper-card-read">\u2713</span>' : ''}
      </div>
      <div class="paper-card-body">
        <h3 class="paper-card-title">${p.title}</h3>
        <p class="paper-card-oneliner">${p.one_liner}</p>
        <div class="paper-card-footer">
          <div class="paper-card-tags">
            ${p.tags.slice(0, 2).map(t => `<span class="tag-sm">${t}</span>`).join('')}
          </div>
          <span class="reading-time-sm">\u23F1 ${p.reading_time_min}\uBD84</span>
        </div>
      </div>
    </div>`;
  }).join('');

  observeElements();
}

// ===== FILTERS =====
function initFilters() {
  const catBar = document.getElementById('categoryFilters');
  catBar.innerHTML = Object.entries(categoryMap).map(([label, val]) => `
    <button class="filter-btn ${val === null ? 'active' : ''}" data-filter="category" data-value="${val || ''}">${label}</button>
  `).join('');

  const diffBar = document.getElementById('difficultyFilters');
  diffBar.innerHTML = Object.entries(difficultyMap).map(([label, val]) => `
    <button class="filter-btn ${val === null ? 'active' : ''}" data-filter="difficulty" data-value="${val || ''}">${label}</button>
  `).join('');

  catBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    catBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.value || null;
    activeTrend = null;
    renderTrends();
    renderPaperGrid();
  });

  diffBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    diffBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeDifficulty = btn.dataset.value || null;
    renderPaperGrid();
  });
}

// ===== MODAL =====
function openModal(id) {
  const p = papers.find(x => x.id === id);
  if (!p) return;

  currentModalPaperId = id;
  markAsRead(id);

  const filtered = getFilteredPapers();
  const currentIndex = filtered.findIndex(x => x.id === id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < filtered.length - 1;

  const editorPick = getEditorPick(id);
  const relatedPapers = getRelatedPapers(id);

  const sections = [
    { icon: '\uD83C\uDFAF', title: '\uBB38\uC81C \uC815\uC758', content: p.problem, cls: 'icon-problem' },
    { icon: '\u2699\uFE0F', title: '\uD575\uC2EC \uBC29\uBC95\uB860', content: p.method, cls: 'icon-method' },
    { icon: '\uD83D\uDCC8', title: '\uC8FC\uC694 \uACB0\uACFC', content: p.key_results, cls: 'icon-results' },
    { icon: '\uD83D\uDCA1', title: '\uC65C \uC911\uC694\uD55C\uAC00', content: p.why_it_matters, cls: 'icon-importance' },
    { icon: '\u26A0\uFE0F', title: '\uD55C\uACC4\uC810', content: p.limitations, cls: 'icon-limitations' },
    { icon: '\uD83D\uDD17', title: '\uAD00\uB828 \uC5F0\uAD6C', content: p.related_context, cls: 'icon-related' }
  ];

  const modal = document.getElementById('modalOverlay');
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-top-bar">
      <div class="modal-nav">
        <button class="modal-nav-btn" onclick="navigateModal(-1)" ${!hasPrev ? 'disabled' : ''} aria-label="\uC774\uC804 \uB17C\uBB38">\u2190</button>
        <span class="modal-nav-counter">${currentIndex + 1} / ${filtered.length}</span>
        <button class="modal-nav-btn" onclick="navigateModal(1)" ${!hasNext ? 'disabled' : ''} aria-label="\uB2E4\uC74C \uB17C\uBB38">\u2192</button>
      </div>
      <button class="modal-close-btn" onclick="closeModal()" aria-label="\uB2EB\uAE30">\u2715</button>
    </div>
    <img class="modal-image" src="images/paper_${p.id}.png" alt="${p.title}">
    <div class="modal-body">
      ${editorPick ? `
      <div class="modal-editor-pick">
        <div class="modal-editor-pick-label">Editor's Pick</div>
        <p class="modal-editor-pick-text">${editorPick.pick_reason}</p>
        <p class="modal-editor-remember">\uD83D\uDCA1 ${editorPick.one_thing_to_remember}</p>
      </div>` : ''}
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-oneliner">${p.one_liner}</p>
      <div class="modal-meta">
        <span class="modal-meta-item">\uD83D\uDC64 ${p.authors.slice(0, 3).join(', ')}${p.authors.length > 3 ? ' et al.' : ''}</span>
        <span class="modal-meta-item">\uD83D\uDCC5 ${p.published_date}</span>
        <span class="modal-meta-item">\u23F1 ${p.reading_time_min}\uBD84 \uC77D\uAE30</span>
        <span class="modal-meta-item"><a href="${p.arxiv_url}" target="_blank" rel="noopener">arXiv \u2197</a></span>
      </div>
      <div class="modal-hook">${p.hook}</div>
      ${sections.map(s => `
        <div class="modal-section">
          <div class="modal-section-header">
            <span class="modal-section-icon ${s.cls}">${s.icon}</span>
            <h3 class="modal-section-title">${s.title}</h3>
          </div>
          <p class="modal-section-content">${s.content}</p>
        </div>
      `).join('')}
      ${relatedPapers.length > 0 ? `
      <div class="modal-related">
        <h3 class="modal-related-title">\uAD00\uB828 \uB17C\uBB38</h3>
        <div class="modal-related-list">
          ${relatedPapers.map(r => `
            <div class="modal-related-item" onclick="event.stopPropagation(); openModal(${r.relatedId})" tabindex="0" role="button">
              <span class="modal-related-badge relation-${r.relation_type}">${relationLabels[r.relation_type]}</span>
              <div class="modal-related-text">
                <div class="modal-related-paper-title">${r.relatedPaper.title}</div>
                <div class="modal-related-desc">${r.description}</div>
              </div>
              <span class="modal-related-arrow">\u2192</span>
            </div>
          `).join('')}
        </div>
      </div>` : ''}
      <div class="modal-tags">
        ${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        <span class="modal-tag difficulty-${p.difficulty_level}">${p.difficulty_level}</span>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.classList.add('modal-open');

  // Update grid to show read state
  renderPaperGrid();

  // Scroll modal to top
  document.getElementById('modalContent').scrollTop = 0;
}

function navigateModal(direction) {
  const filtered = getFilteredPapers();
  const currentIndex = filtered.findIndex(x => x.id === currentModalPaperId);
  const nextIndex = currentIndex + direction;
  if (nextIndex >= 0 && nextIndex < filtered.length) {
    openModal(filtered[nextIndex].id);
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.classList.remove('modal-open');
  currentModalPaperId = null;
}

// ===== INTERSECTION OBSERVER =====
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTrends();
  renderReadingGuide();
  renderFeatured();
  initFilters();
  renderPaperGrid();
  observeElements();

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Modal close on backdrop click
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (currentModalPaperId !== null) {
      if (e.key === 'ArrowLeft') navigateModal(-1);
      if (e.key === 'ArrowRight') navigateModal(1);
    }
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.style.borderBottomColor = window.scrollY > 50 ? 'var(--border)' : 'transparent';
  });
});
