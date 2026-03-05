export interface Screenshot {
  id: string;
  url: string;
  focus: string;
  action: string;
  evidence: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  coreCapabilities?: {
    title: string;
    description: string;
    image: string;
  }[];
  meta: {
    year: string;
    role: string;
    type: string;
  };
  problems: string[];
  solutionPaths: { name: string; description: string }[];
  productFeatures: string[];
  designPhilosophy: { title: string; description: string }[];
  results: string[];
  screenshots: Screenshot[];
}

export const projects: Record<string, ProjectData> = {
  bizdeck: {
    slug: 'bizdeck',
    title: 'BizDeck',
    tagline: 'BizDeck 不是“一键生成废话”的玩具，而是把顶尖咨询公司的文档生产SOP产品化的专业工作台。',
    summary: '针对职场人做PPT“重视觉轻逻辑、返工率高、历史资产难复用”的痛点，打造的包含需求分析、大纲推演、局部精修与存量PDF盘活的全链路AI生产工具。',
    coreCapabilities: [
      {
        title: '需求分析与大纲推演',
        description: '告别上来就铺排版的盲目生成。系统内置顶尖咨询公司的话术与逻辑框架，通过结构化的表单输入，强制执行“逻辑前置”。只有在用户审核并验收系统推演的 Narrative Arc（故事线）后，才会释放底层视觉算力。从源头阻断因逻辑错位导致的大规模返工。',
        image: '/projects/bizdeck/U05-outline-workspace-review-before-build.png'
      },
      {
        title: '原子化局部精修',
        description: '专业文档的修改往往是反复横跳、牵一发而动全身的。摒弃粗暴的“全局重绘”带来的失控感，BizDeck 将 AI 交互控件直接下放吸附于每一页幻灯片。你可以要求 AI 仅重写当前页的某个核心论点，或单独替换某个配图，配合单页独立版本树回滚机制，让漫长的改稿期安全可控。',
        image: '/projects/bizdeck/U11-slide-ready-with-single-slide-editing-toolbar.png'
      },
      {
        title: '存量 PDF 历史资产盘活',
        description: '在真实商业语境中，复用旧有高质量方案的频率远高于凭空捏造。BizDeck 彻底打通了 PDF 资产与现代 AI 编辑流的次元壁。无论是解析第三方竞品的只读 PDF，还是通过内置的 Project Iron 引擎将极度模糊的扫描件进行 AI 去底、去水印与重绘，最终都能输出 100% 可自由编辑的原生图文 PPTX。',
        image: '/projects/bizdeck/U22-project-iron-mask-inpaint-processing.png'
      }
    ],
    meta: {
      year: '2026',
      role: '产品经理 / 架构设计',
      type: 'B端生产力工具',
    },
    problems: [
      '逻辑与视觉错位：市面的AI工具上来就铺排版，生成的PPT像花瓶，用户往往要花几倍时间去重写内容逻辑，返工率极高。',
      '智力资产被困：过去积累了大量高质量的 PDF 案例与方案，但无法直接二次编辑，历史知识无法复用到新方案中。',
      '改稿陷入黑盒：面对甲方反复横跳的意见，缺乏页面级别的版本回溯机制，越改越乱。'
    ],
    solutionPaths: [
      { name: '路径 A：专业内容推演（从零起步）', description: '输入模糊需求 -> 挂载 BCG/McKinsey 风格引擎 -> 敲定逻辑大纲 -> 自动化视觉渲染。' },
      { name: '路径 B：存量资产重构（PDF 导入）', description: '上传竞品或旧版 PDF -> 智能解析版式与图文 -> 完美融入 BizDeck 统一编辑工作流。' },
      { name: '路径 C：无损白盒化（Project Iron）', description: '深度扫描老旧图片/PDF -> AI智能消除背景与水印 -> 重建输出为 100% 可自由编辑的本地 PPTX。' }
    ],
    productFeatures: [
      '强制逻辑前置：生成界面设有关卡，必须先验收 Narrative Arc（故事线），确认无误后才释放视觉算力。',
      '顾问级角色引擎：一键切换麦肯锡、贝恩等顶尖咨询机构的话术风格与配色规范。',
      '沉浸式局部精修：告别割裂的侧边栏聊天框，将 AI 交互栏吸附于当前正在修改的幻灯片底部。',
      '时空版本树管理：为每一页幻灯片提供独立的历史快照（V1/V2/V3），支持单页无损回滚。'
    ],
    designPhilosophy: [
      { title: '克制的 AI：人机协同而非机器包办', description: '我们认为专业文档的灵魂是人的见解。因此系统不追求“一键出图”，而是在大纲梳理、版式匹配等高耗时环节提供 AI 杠杆，让用户始终握有方向盘。' },
      { title: '复用大于新建', description: '在真实商业环境里，“抄改”旧方案的频率远高于凭空捏造。因此我们将“PDF逆向解析与可编辑化”拔高到与新建同等重要的一级菜单。' },
      { title: '原子化操作降低焦虑', description: '长文稿生成容易失败或跑偏。我们将编辑能力原子化：用户可以只让 AI 扩写某一页的论点，或者只重新渲染某一页的图表，避免“牵一发而动全身”的全局重绘。' },
      { title: '交付即终点', description: '不试图用平台绑架用户。系统不仅支持云端演示，还提供高质量的多档位 PDF 与原生 PPTX 导出，让文件回归用户的本地硬盘。' }
    ],
    results: [
      '彻底扭转“为排版而写PPT”的陋习，将经理级员工的内容产出效率提升 60%。',
      '打通了 PDF 历史资产与现代编辑流的次元壁。',
      '沉淀出一套可复用的复杂 AI 应用 UI/UX 设计范式。',
      '项目完成了从需求洞察到前端与后端网关的端到端落地。'
    ],
    screenshots: [
      { id: 'U01', url: '/projects/bizdeck/U01-landing-overview-locked-before-api-key.png', focus: '安全与准入机制', action: '用户首次进入必须配置 API 密钥。', evidence: '产品设计中考虑到企业级工具的 Token 成本剥离与安全隔离。' },
      { id: 'U02', url: '/projects/bizdeck/U02-strategy-engine-ready-to-start-logic.png', focus: '需求输入站', action: '用户在 Strategy Engine 填写核心商业诉求。', evidence: '通过表单引导用户完成结构化输入，降低大模型的“幻觉”概率。' },
      { id: 'U03', url: '/projects/bizdeck/U03-strategy-audit-master-toggle.png', focus: '质量与速度的权衡', action: '根据时间紧迫度，切换“深度审计”与“极速出稿”模式。', evidence: '把成本与等待时间的控制权交给用户，而不是把 AI 当作黑盒。' },
      { id: 'U04', url: '/projects/bizdeck/U04-consulting-persona-selection.png', focus: '风格具象化', action: '选择麦肯锡或自定义品牌基调。', evidence: '将抽象的 prompt 工程封装为用户能够秒懂的商业品牌标签。' },
      { id: 'U05', url: '/projects/bizdeck/U05-outline-workspace-review-before-build.png', focus: '大纲验收门禁', action: '在渲染成 PPT 前，检查系统生成的树状故事线。', evidence: '这就是“逻辑前置”的体现，阻断不合理内容的无效渲染。' },
      { id: 'U06', url: '/projects/bizdeck/U06-refine-structure-input-bar.png', focus: '全局宏观调控', action: '要求 AI “把第三部分合并到第二部分并精简”。', evidence: '提供超越单页修改的宏观结构重塑能力。' },
      { id: 'U07', url: '/projects/bizdeck/U07-finalize-production-parameters-modal.png', focus: '生产确认防呆机制', action: '最后确认页面总数、预计耗时与配色参数。', evidence: '利用二次确认 Modal 降低长耗时任务的误操作成本。' },
      { id: 'U08', url: '/projects/bizdeck/U08-workspace-generation-started-model-page-ready.png', focus: '主样式锚定', action: '观察 Slide 0（母版页）率先生成。', evidence: '确立视觉基调，让用户吃下定心丸，无需苦等全部生成完才知道长什么样。' },
      { id: 'U09', url: '/projects/bizdeck/U09-slide-status-structural-analysis-in-progress.png', focus: '粒度可控的加载态', action: '监控每一页的实时处理进度。', evidence: '缓解长时异步任务带来的用户焦虑，增加系统的透明度与信任感。' },
      { id: 'U10', url: '/projects/bizdeck/U10-slide-status-rendering-visuals-in-progress.png', focus: '文字与排版分步', action: '观察页面先出文字，后上排版。', evidence: '再次印证内容大于形式的产品底层逻辑。' },
      { id: 'U11', url: '/projects/bizdeck/U11-slide-ready-with-single-slide-editing-toolbar.png', focus: '单页沉浸式工具栏', action: '悬停于单页，呼出“重写/重新排版/更换配图”等快捷键。', evidence: '将高频操作原子化，提供不打断心流的就地修改体验。' },
      { id: 'U12', url: '/projects/bizdeck/U12-workspace-with-global-actions-and-version-switch.png', focus: '多层级工作台', action: '在左侧缩略图穿梭，在顶部切换大版本记录。', evidence: '类似 Figma 的专业级画布布局，完美承载复杂业务的操作密度。' },
      { id: 'U13', url: '/projects/bizdeck/U13-export-pdf-options-modal.png', focus: '灵活的交付体系', action: '选择高清印刷版或轻量分享版进行导出。', evidence: '满足从老板汇报（重画质）到微信群发（重体积）的实际职场场景。' },
      { id: 'U14', url: '/projects/bizdeck/U14-smart-layout-recommendations-modal.png', focus: '布局智能推荐', action: '不喜欢当前排版时，打开系统给出的三种替换方案。', evidence: '不用重新输入 prompt，用点击选择代替脑力思考，降低门槛。' },
      { id: 'U15', url: '/projects/bizdeck/U15-bottom-slide-refine-and-visual-edit-controls.png', focus: '强上下文 AI 对话', action: '在底部输入框命令：“把这张图换成上升的折线图”。', evidence: '将输入框与当前修改的页面强绑定，用户不需要强调“修改第几页”。' },
      { id: 'U16', url: '/projects/bizdeck/U16-visual-engine-pdf-import-extracting-slides.png', focus: '进入存量盘活链路', action: '从入口导入一份别人发来的不可编辑 PDF。', evidence: '开拓生图之外的另一大高频刚需战场。' },
      { id: 'U17', url: '/projects/bizdeck/U17-visual-engine-imported-slides-workspace.png', focus: '统一的编辑体验', action: '看到解析出的旧 PDF，使用与新建完全一样的侧边栏去修改它。', evidence: '不制造多余的学习成本，新旧资产进入同一种加工模型。' },
      { id: 'U18', url: '/projects/bizdeck/U18-project-iron-upload-entry.png', focus: '专业重建引擎入口', action: '进入 Project Iron 模块，上传极度模糊的扫描件。', evidence: '针对重度“脏数据”设立独立的治理通道。' },
      { id: 'U19', url: '/projects/bizdeck/U19-project-iron-routing-analysis-in-progress.png', focus: '智能分发与体检', action: '查看系统评估文档是电子版还是扫描版。', evidence: '用智能路由省去用户手动配置“采用哪种去水印算法”的烦恼。' },
      { id: 'U20', url: '/projects/bizdeck/U20-project-iron-ready-for-batch-processing.png', focus: '批处理管控', action: '确认识别出 20 页，一键启动清洗。', evidence: '对于消耗大量算力的任务给予明确的批处理确认清单。' },
      { id: 'U21', url: '/projects/bizdeck/U21-project-iron-ocr-analysis-processing.png', focus: 'OCR 进度可视化', action: '实时查看复杂图表的文字剥离过程。', evidence: '将极度繁琐的后端数据处理转化为有科技感的前端进度透出。' },
      { id: 'U22', url: '/projects/bizdeck/U22-project-iron-mask-inpaint-processing.png', focus: '无损画质修复', action: '观察系统如何抹去旧字并填补底色，最终导出干净的 PPTX。', evidence: '完成从“死文档”到“活资产”的终极产品闭环。' }
    ]
  },
  bizcase: {
    slug: 'bizcase',
    title: 'BizCase Pro',
    tagline: 'AI 驱动的商学院案例与教参生成系统。',
    summary: '针对传统案例编写中资料收集散、结构化难、教学配套缺的痛点，将“写案例”拆解为标准化可复用流程。打造包含深度研究、目标校准、框架审阅与双文档导出的一体化“案例工厂”。',
    coreCapabilities: [
      {
        title: '四阶段标准化生成流',
        description: '打破“一键生成”黑盒，将案例产出科学地划分为：研究、目标、框架、撰写四大阶段。在撰写前强制完成“目标校准”与“框架审阅”，让人类智慧干预高维逻辑，机器算力负责基础填充，彻底解决长文生成的跑题与返工难题。',
        image: '/projects/bizcase/U07-framework-review-initial.png'
      },
      {
        title: '正文与教参双路渲染',
        description: '商学教育不仅需要案例正文，更需要供讲师使用的教学指南。系统在底层引擎同步构建双线叙事，一键产出正文的同时，配套生成包含讨论问题、板书路径与理论框架的完整教参，实现真正的一体化双文档交付。',
        image: '/projects/bizcase/U12-teaching-note-drafting.png'
      },
      {
        title: '全周期质量门禁与精修',
        description: '引入 Firewall 审查机制，在生成后自动执行格式、主观性与可读性的合规检查。配合正文内嵌的图表审查组件，以及多轮次逻辑校验，保障最终一键导出的 PDF 达到专业出版级标准。',
        image: '/projects/bizcase/U11-case-firewall-pass1.png'
      },
      {
        title: '颗粒度可控的 AI 交互精修',
        description: '文档的打磨在于局部细节。系统支持针对特定段落、图表或框架节点的“手术刀式”改写。通过悬浮的 Copilot 侧栏，用户可以下达具体指令（如“更具冲突感”、“精简字数”），AI 将仅重构选中的原子化区域，保持全文逻辑连贯的同时，实现极高的人机协同效率。',
        image: '/projects/bizcase/U19-copilot-side-panel.png'
      }
    ],
    meta: {
      year: '2026',
      role: '全栈开发 / 流程设计',
      type: 'AI 生产力工作流',
    },
    problems: [
      '信息采集成本高：资料分散在新闻、公告、财报、社媒、内部文档中，收集极为费时。',
      '案例结构化困难：事实繁杂，需要将其重排为具备“可教学、可讨论”冲突叙事的案例骨架门槛极高。',
      '教学配套成本高：仅有案例正文不够，还需耗费大量精力手工编撰教参、设计问题、规划板书与提取图表证据。'
    ],
    solutionPaths: [
      { name: '路径 A：主题导向的端到端生成', description: '输入核心主题 -> 系统自动化多维度研究 -> 推荐并锁定学习目标 -> 人机协同定稿框架 -> 输出双文档并质检导出。' },
      { name: '路径 B：资料注入的定向加工', description: '上传特定的 PDF/TXT/CSV 语料 -> 系统限定研究边界 -> 基于给定素材提炼冲突点 -> 生成高度定制化的企业案例。' },
      { name: '路径 C：沉浸式反馈与局部重塑', description: '在最终生成的结果页中 -> 圈选特定段落或图表 -> 呼出 Copilot 下达修改指令 -> 触发单节点重绘而不影响全局连贯性。' }
    ],
    productFeatures: [
      '三维深度研究：按综合、量化、人文三个独立维度并发聚合背景信息，构建坚实事实基线。',
      '学习目标收敛算法：自动生成候选教学意图，并允许用户干预微调，锁定最终的教学航向。',
      '严格的状态机时序：底层使用强类型状态机约束“研究->目标->框架->撰写->审查”流转，防止非法状态越权。',
      '高保真双路 PDF 导出：针对中文排版优化，内置字体加载等待与智能分页策略，彻底解决截断与重叠问题。'
    ],
    designPhilosophy: [
      { title: '产品化而非 Prompt 工程', description: '将“写出一个好案例”拆解为标准化、可重复执行的软件界面交互流，把复杂的专业 SOP 固化进代码状态机，而不是丢给用户一个空白的聊天框和几千字提示词。' },
      { title: '过程透明以降低失控焦虑', description: '长文本生成极易陷入漫长的“黑盒等待”。我们将进程切分为粒度更细的阶段，并透出实时的加载状态与中间态产物（如候选目标、大纲草案），让用户时刻握有方向盘。' },
      { title: '一次交付，双份资产', description: '教学场景的特殊性决定了正文和教参是不可分割的孪生体。在底层架构上强制推行“双档并行渲染”，确保论据和板书设计在逻辑上的严密对应与时效一致。' },
      { title: '极端的容错与防呆设计', description: '大模型调用存在瞬时的网络或拦截失败风险，系统必须内置指数退避重试机制兜底；在终点导出环节，也要用代码强行接管浏览器的打印行为，确保交付物的物理稳定性。' }
    ],
    results: [
      '成功将商学院复杂案例的单篇编制时间从过去的数周压缩至数小时。',
      '彻底消灭了传统 AI 长文本写作的“开盲盒”体验，用分阶段验收机制保障了极高的可用率。',
      '沉淀出了一套可无缝复用于其他长篇幅结构化写作（如研报、行业白皮书）的前端交互与工程架构范式。',
      '完成了不依赖自建后端网关的纯客户端闭环链路，大幅降低了系统的部署与运维成本。'
    ],
    screenshots: [
      { id: 'U01', url: '/projects/bizcase/U01-home-topic-input.png', focus: '主题输入页', action: '输入主题并可选上传资料', evidence: '首页输入框、开始生成按钮、资料上传入口。定义任务范围。' },
      { id: 'U02', url: '/projects/bizcase/U02-research-general-phase.png', focus: '研究阶段-综合维度', action: '等待系统聚合背景信息', evidence: '综合维度研究加载状态。建立事实基线。' },
      { id: 'U03', url: '/projects/bizcase/U03-research-quant-phase.png', focus: '研究阶段-量化维度', action: '等待系统抽取指标数据', evidence: '量化维度研究加载状态。保障数据客观性。' },
      { id: 'U04', url: '/projects/bizcase/U04-research-human-phase.png', focus: '研究阶段-人文维度', action: '等待系统抽取人物与组织信息', evidence: '人文维度研究加载状态。补齐情境信息。' },
      { id: 'U05', url: '/projects/bizcase/U05-objective-selection.png', focus: '学习目标选择', action: '选择最优教学目标', evidence: '5 条候选学习目标。锁定教学方向。' },
      { id: 'U06', url: '/projects/bizcase/U06-framework-building.png', focus: '框架构建中', action: '等待系统生成框架', evidence: '框架构建加载状态。形成结构化骨架。' },
      { id: 'U07', url: '/projects/bizcase/U07-framework-review-initial.png', focus: '框架审阅初稿', action: '审阅并定位需修改段落', evidence: '左侧框架内容，右侧改写面板。低成本修正方向。' },
      { id: 'U08', url: '/projects/bizcase/U08-framework-refining.png', focus: '框架精修中', action: '提交全局意见并等待重写', evidence: '框架正在重构状态。人机协同迭代。' },
      { id: 'U09', url: '/projects/bizcase/U09-framework-approved-ready-to-draft.png', focus: '框架精修完成待批准', action: '确认框架并推进下一步', evidence: '可点击批准框架并开始撰写。形成可执行版本。' },
      { id: 'U10', url: '/projects/bizcase/U10-case-drafting.png', focus: '正文撰写中', action: '等待正文生成', evidence: '案例初稿生成加载状态。产出主文档初版。' },
      { id: 'U11', url: '/projects/bizcase/U11-case-firewall-pass1.png', focus: '正文防火墙审查', action: '等待格式与合规检查', evidence: '正文防火墙第一轮。提高发布质量。' },
      { id: 'U12', url: '/projects/bizcase/U12-teaching-note-drafting.png', focus: '教参编制中', action: '等待教参生成', evidence: '教学指南生成加载状态。补齐教学配套。' },
      { id: 'U13', url: '/projects/bizcase/U13-teaching-note-firewall-final-check.png', focus: '教参最终格式合规审查', action: '等待系统修正', evidence: '教参格式合规检查状态。规范结构输出。' },
      { id: 'U14', url: '/projects/bizcase/U14-teaching-note-firewall-pass2.png', focus: '教参防火墙第二轮', action: '等待增量审查完成', evidence: '教参防火墙第 2 轮。降低遗漏风险。' },
      { id: 'U15', url: '/projects/bizcase/U15-case-visual-audit.png', focus: '正文图表审查', action: '等待可视化补齐', evidence: '正文图表构建状态。强化数据表达。' },
      { id: 'U16', url: '/projects/bizcase/U16-teaching-note-visual-audit.png', focus: '教参图表审查', action: '等待教参可视化补齐', evidence: '教参图表构建状态。保持双文档一致性。' },
      { id: 'U17', url: '/projects/bizcase/U17-final-case-view.png', focus: '生成完成-正文总览', action: '通读并准备精修', evidence: '完整正文、顶部工具栏。进入发布前检查。' },
      { id: 'U18', url: '/projects/bizcase/U18-final-case-table-proof.png', focus: '正文表格证据展示', action: '核查数据与版式', evidence: '正文中的对比表格。验证图表链路有效。' },
      { id: 'U19', url: '/projects/bizcase/U19-copilot-side-panel.png', focus: 'Copilot 侧栏精修', action: '输入改写指令并提交', evidence: 'AI 编辑抽屉与指令输入框。提升编辑效率。' },
      { id: 'U20', url: '/projects/bizcase/U20-ai-refine-overlay-stop.png', focus: 'AI 重构覆盖层', action: '观察进度，必要时停止', evidence: '重构进度与停止按钮。提高长任务可控性。' },
      { id: 'U21', url: '/projects/bizcase/U21-final-export-preview.png', focus: '导出预览页', action: '执行 PDF 导出并复核版式', evidence: '接近出版版式的正文页面。形成可交付产物。' }
    ]
  },
  intelliportfolio: {
    slug: 'intelliportfolio',
    title: 'IntelliPortfolio',
    tagline: '贯穿资产管理、私有知识库与长程深度研报的 AI 投顾工作台。',
    summary: '针对真实投资场景中“资产数据孤立、研报消耗时间长、技术分析门槛高”的痛点，打造的不仅能管钱、还能读写专业报告的端到端投研系统。',
    coreCapabilities: [
      {
        title: '全量化资产组合大盘',
        description: '告别简单的记账工具，系统基于真实多用户隔离，提供专业级的投资组合量化分析。不仅能实时追踪持仓成本与现价市值，更通过底层算法自动核算年化收益、夏普比率、波动率与最大回撤，将主观的持仓直觉转化为客观的数据指标。',
        image: '/projects/intelliportfolio/U02-dashboard-overview.png'
      },
      {
        title: '长程异步深度研报引擎',
        description: '集成 Google Deep Research 顶级多 Agent 架构，专门应对耗时且需海量搜索的深度研究。通过 task_id 轮询机制，前端可无阻塞实时透出“资料采集-推理-成文”的漫长进度，最终落盘为包含详细引用、可直接交付的专业 PDF 报告。',
        image: '/projects/intelliportfolio/U08-ultra-deep-processing-overlay-a.png'
      },
      {
        title: '多因子量化信号捕捉',
        description: '个股分析不再停留在主观判断。系统内置基于 TA-Lib 的量化引擎，自动抓取 K 线数据并实时计算 MACD、RSI、布林带等多种技术指标。通过预设的信号权重模型，自动识别“超买/超卖”与“金叉/死叉”等关键买卖点，并给出量化的综合评分，为交易决策提供客观依据。',
        image: '/projects/intelliportfolio/U14-analyzer-muu-overview.png'
      }
    ],
    meta: {
      year: '2026',
      role: '全栈开发 / 架构设计',
      type: '金融 RAG 与智能投研',
    },
    problems: [
      '工具孤岛：市面上记账的只记账，看盘的只看盘，写研报的又是另一个独立工具，研究链路严重断裂。',
      '长任务极易崩溃：传统的同步 API 调用无法支撑动辄数分钟的超深度研究（Deep Research），请求往往因超时而失败。',
      '知识沉淀困难：下载了大量高质量券商研报，但只躺在硬盘里吃灰，无法与个人的持仓标的产生上下文联动。'
    ],
    solutionPaths: [
      { name: '路径 A：资产量化看板', description: 'Supabase 多用户登录 -> 录入真实持仓明细 -> 后端对接 AKShare 获取实时行情 -> 自动推演组合风险与收益指标。' },
      { name: '路径 B：顶级研报生产线', description: '输入复杂宏观/行业课题 -> 触发异步 Agent 引擎 -> 前端无阻塞轮询进度 -> 最终落库为专业图文 PDF。' },
      { name: '路径 C：文档级精准 RAG', description: '进入投顾中心 -> 勾选特定的私有知识库文档 -> 提问“总结这份报告的核心逻辑” -> 获得带出处的专业答复。' }
    ],
    productFeatures: [
      '真实多租户隔离：基于 Supabase Auth 实现严格的行级数据隔离，每个研究员拥有独立的资产表与私有知识库。',
      '长程异步轮询架构：彻底剥离耗时任务，采用轮询与状态持久化设计，让“深度研报生成”变得像下载文件一样稳定可控。',
      '技术面自动评分仪：个股分析页内置 MACD/RSI/布林带等多因子信号捕捉，自动输出买卖点建议与综合评分（如 MUU/LITE）。',
      '一体化闭环：将“看资产”、“看大盘”、“读报告”、“写报告”收敛至统一的 UI 范式内，大幅降低认知负荷。'
    ],
    designPhilosophy: [
      { title: '自上而下的投研漏斗', description: '系统的交互层级严格遵循真实投研逻辑：先看 Macro（宏观大盘）和 Portfolio（资产组合），再看 Strategy（策略与知识库），最后落地到具体的个股卡片（技术分析），绝不本末倒置。' },
      { title: '对“黑盒”保持敬畏', description: '面对极其复杂的 Deep Research 过程，我们用详尽的前端 Loading 状态掩盖后端的算力挣扎，并在任务完成后自动将其作为持久化资产沉淀到知识库，让每一次消耗高昂 Token 的计算都不被浪费。' },
      { title: '量化为王', description: '抛弃主观的“感觉这只股票不错”，所有个股分析强制出具基于 TA-Lib 等底层库计算的硬指标评分，将含糊不清的交易意愿具象化为清晰的买入/卖出信号权重。' },
      { title: '本地与云端混动', description: '敏感资产数据托管于云端 Supabase，而繁重的 PDF 解析与本地知识库构建则依托于本地磁盘的 Python 服务，取得隐私与性能的完美平衡。' }
    ],
    results: [
      '构建了从底层数据采集（AKShare）、多 Agent 分析到前端可视化的完整金融工程全栈链路。',
      '成功攻克了超长时延（5分钟以上）AI 任务的 Web 端稳定性难题，无死锁、无超时断联。',
      '将原本割裂的“同花顺看盘 + 印象笔记存研报 + ChatGPT 问答”整合为一个高内聚的专业级工作台。',
      '系统架构兼具高扩展性，未来可轻松接入更多异构数据源或量化回测引擎。'
    ],
    screenshots: [
      { id: 'U01', url: '/projects/intelliportfolio/U01-auth-login.png', focus: '登录系统', action: '输入邮箱和密码后点击登录', evidence: '建立用户会话并进入主工作台。登录表单可见。' },
      { id: 'U02', url: '/projects/intelliportfolio/U02-dashboard-overview.png', focus: '查看资产总览', action: '点击刷新数据并等待加载', evidence: '快速掌握整体资产状态。高级分析区域可见。' },
      { id: 'U03', url: '/projects/intelliportfolio/U03-dashboard-holdings-table.png', focus: '管理持仓明细', action: '编辑数量/成本，或删除指定持仓', evidence: '完成组合维护与数据清洗。持仓表数据联动。' },
      { id: 'U04', url: '/projects/intelliportfolio/U04-advisor-hub.png', focus: '进入 AI 投顾中心', action: '点击任一卡片进入对应研究空间', evidence: '从资产层过渡到研究层。宏观卡、策略卡可见。' },
      { id: 'U05', url: '/projects/intelliportfolio/U05-kb-empty-state.png', focus: '知识库空状态初始化', action: '上传首份 PDF 资料', evidence: '为问答与报告提供上下文。上传区域指引。' },
      { id: 'U06', url: '/projects/intelliportfolio/U06-kb-document-list.png', focus: '文档列表管理', action: '勾选需要参与问答的文档', evidence: '实现按文档粒度控制上下文。置顶、下载、删除操作位。' },
      { id: 'U07', url: '/projects/intelliportfolio/U07-ultra-deep-modal.png', focus: '打开顶级报告弹窗', action: '输入 Key 和 Prompt 后提交', evidence: '启动官方 Deep Research 长任务。API Key 隔离。' },
      { id: 'U08', url: '/projects/intelliportfolio/U08-ultra-deep-processing-overlay-a.png', focus: '任务进行中（A）', action: '等待轮询并观察状态变化', evidence: '确认异步任务正常运行。进行中弹层与进度文案。' },
      { id: 'U09', url: '/projects/intelliportfolio/U09-ultra-deep-processing-overlay-b.png', focus: '任务进行中（B）', action: '继续等待完成', evidence: '验证任务非阻塞执行。状态最终转为 completed。' },
      { id: 'U10', url: '/projects/intelliportfolio/U10-ultra-deep-completed-message.png', focus: '任务完成并落库', action: '确认新增 UltraDeepReport 文件', evidence: '研究结果沉淀为可复用资产。列表新增报告。' },
      { id: 'U11', url: '/projects/intelliportfolio/U11-ultra-deep-pdf-output.png', focus: '查看 PDF 报告产物', action: '打开并核查报告', evidence: '确认交付物可读、可存档、可分享。PDF 无乱码。' },
      { id: 'U12', url: '/projects/intelliportfolio/U12-select-report-and-summarize.png', focus: '勾选报告并发起总结', action: '输入“总结这份报告”并发送', evidence: '将长报告转为可对话知识。选中文档参与 RAG。' },
      { id: 'U13', url: '/projects/intelliportfolio/U13-rag-summary-result.png', focus: '查看 RAG 总结结果', action: '阅读并继续追问细节', evidence: '提升研报消化效率。结构化总结回复。' },
      { id: 'U14', url: '/projects/intelliportfolio/U14-analyzer-muu-overview.png', focus: '个股分析页（MUU）概览', action: '执行分析并查看结论', evidence: '完成研究结论与技术面的交叉验证。评分仪表盘、K 线图。' },
      { id: 'U15', url: '/projects/intelliportfolio/U15-analyzer-muu-signals.png', focus: '查看 MUU 信号列表', action: '对比信号数量与权重', evidence: '理解建议的可解释依据。买入/卖出信号及强度。' },
      { id: 'U16', url: '/projects/intelliportfolio/U16-analyzer-lite-overview.png', focus: '切换标的（LITE）复用分析框架', action: '输入新代码重新分析', evidence: '验证框架可跨标的复用。重载分析引擎。' }
    ]
  },
  cloneme: {
    slug: 'cloneme',
    title: 'Clone Me',
    tagline: '部署于真实业务场景的企业微信 AI 对话分身系统。',
    summary: '核心目标是让机器人在企微聊天中表现出稳定的人设、上下文连续性和可追溯的工程流程。通过原生加密回调、消息去重合并、3072维向量检索与多阶段生成策略，彻底告别单次问答的机械感。',
    coreCapabilities: [
      {
        title: '企微原生加密回调与防重网关',
        description: '系统直接对接企业微信服务器的 POST 回调，内置基于 SHA1 验签与 AES-CBC 的安全解密链路。考虑到企微在网络抖动时的重试机制，系统通过构造 `MsgId` 或多维度组合键的短期缓存，实现严格的消息去重，彻底避免“同一句话机器人回复两次”的工程事故。',
        image: '/projects/cloneme/U01-wecom-chat-record.png'
      },
      {
        title: 'Burst 分段消息智能合并',
        description: '真实用户的聊天习惯往往是“一句发一半、连发好几条”。系统引入基于会话缓冲区的合并算法。当监测到用户短时间连发，或句尾以逗号、连接词结尾时，系统会自动延迟 flush（触发等待），将零碎的分段消息拼接为完整的上下文后再进入生成引擎，有效消除“答半句”的违和感。',
        image: '/projects/cloneme/U01-wecom-chat-record.png'
      },
      {
        title: '三层 RAG 与时间语义感知',
        description: '为了维持稳定的长期人设，系统在生成前会构建三层上下文：近期在线对话、中期记忆召回、基于 3072 维 Embedding 与 FTS5 的基线语料检索。同时，系统具备时间感知能力，能通过分析上次聊天的时差（如隔天或隔周），自动判定是否需要使用“好久不见”的时间承接句，让关系推进更加自然。',
        image: '/projects/cloneme/U01-wecom-chat-record.png'
      },
      {
        title: '多阶段生成决策与保险丝机制',
        description: '摒弃单次 LLM 调用的盲盒模式，采用 Planner -> Generator -> Critic 的三阶段生成策略。系统会先规划回复基调，再生成多组候选，最终由 Critic 模型结合贴题度、风格和自然度选出最优解。若发生严重的人设偏移或跑题，系统将触发 Repair 重写或 Fallback 兜底机制，保障线上服务的绝对稳定。',
        image: '/projects/cloneme/U01-wecom-chat-record.png'
      }
    ],
    meta: {
      year: '2026',
      role: '全栈开发 / 架构设计',
      type: '企业级 AI 聊天分身',
    },
    problems: [
      '机械的单次问答：传统机器人缺乏会话管理，用户发两段话，机器人会分别回复两次，毫无“真人感”。',
      '人设容易崩塌跑题：随着聊天轮数增加或话题发散，大模型极易忘记自身设定，甚至产生幻觉报错。',
      '长期上下文断裂：聊完隔几天再聊，机器人无法感知时间的流逝，像个失忆症患者，无法建立长期信任。'
    ],
    solutionPaths: [
      { name: '路径 A：安全入站拦截', description: '企微 POST 加密 XML -> SHA1 验签与 AES-CBC 解密 -> 构造组合键去重 -> 确保合法且唯一的请求流入。' },
      { name: '路径 B：智能会话聚合', description: '识别同用户连续消息 -> 放入异步缓冲区 -> 根据间隔阈值与断句特征执行 Burst 合并 -> 写入在线记忆。' },
      { name: '路径 C：深度决策生成', description: '三层上下文检索 -> Planner 规划 -> Generator 产出多候选 -> Critic 打分决选 -> Fallback 保障 -> 企业微信 API 投递。' }
    ],
    productFeatures: [
      '端到端企微接入：无需借助第三方集成工具，纯代码实现企微加解密与 token 过期自动刷新链路。',
      '混合检索记忆池：结合 FTS5 词法匹配与 3072 维高维向量语义召回，并附加时间衰减因子。',
      '可追溯的候选库：每一次回复不仅写入主对话表，还会将所有落选的“候选气泡”与评分详情记录入库，便于后期复盘调优。',
      '健壮的字符编码治理：针对跨平台部署的中文乱码痛点，实施了严格的 UTF-8 全链路强制编码校验。'
    ],
    designPhilosophy: [
      { title: '像真人一样“听完再答”', description: '宁可稍微增加几十毫秒的回复延迟，也要把用户连续发送的“碎语”合并完整后再做推理。这是突破“机器感”的最关键一步。' },
      { title: '为线上稳定性上多重保险', description: '商业化分身不容许在企微群里输出报错代码。我们引入了从去重拦截到最终 Fallback 兜底的多层防线，宁可回复得保守，也绝不输出乱码。' },
      { title: '时间是最好的上下文', description: '真实的社交关系是随着时间推移的。让系统感知到“刚才”、“昨天”和“上个月”的区别，并体现在回复的开场白里，能极大增强用户的陪伴感。' },
      { title: '可观测性即迭代生产力', description: '为了知道大模型为什么答得不好，必须把每一次的 Planner 思考过程和 Critic 废弃的候选方案全部持久化，黑盒分析是无法调优人设的。' }
    ],
    results: [
      '成功在企业真实环境中部署，经受住了大量真实用户的多轮复杂对话考验。',
      '通过合并算法与多阶段生成机制，将“半句回复”与“人设崩塌”的概率降低了 90% 以上。',
      '沉淀出一套标准化的、不依赖特定平台的 LLM 状态机与 RAG 检索工程脚手架。',
      '完整实现了涵盖加解密、轮询、异常重试的高并发企微对接中间件。'
    ],
    screenshots: [
      { id: 'U01', url: '/projects/cloneme/U01-wecom-chat-record.png', focus: '企业微信对话实录', action: '用户在真实场景中与 AI 分身进行多轮随性对话', evidence: '展示了系统在企微客户端的最终呈现：准确的人设语气、自然的多气泡排版以及针对口语化分段输入的合并理解能力。' }
    ]
  },
  jobscout: {
    slug: 'jobscout',
    title: 'AI Job Scout',
    tagline: 'Linkedin工作数据采集与AI批量推断平台',
    summary: '连接自动化爬虫与大模型批量推断。针对海量招聘数据进行多维度解析打分，提供可视化的横向对比与结构化表格导出，重塑求职决策链路，将“人工筛岗位”的重复劳动压缩成可复用、可解释、可导出的工作流。',
    coreCapabilities: [
      {
        title: '自动化情报采集',
        description: '自动抓取近24小时 LinkedIn 职位数据，结合本地缓存与并发控制机制，为后续 AI 深度分析提供稳定可靠的数据源。',
        image: '/projects/jobscout/U05-scraper-running-progress.png'
      },
      {
        title: '多维 AI 批量推断',
        description: '结合简历与自然语言偏好，调用 Gemini 批量打分。提取结构化字段（推荐理由、优缺点、风险提示），实现百份 JD 的秒级阅读与初筛。',
        image: '/projects/jobscout/U06-ai-analyzing-loading-state.png'
      },
      {
        title: '可视化决策看板',
        description: '直观呈现岗位得分与核心摘要。支持列表滚动复核、高分项自动勾选，以及展开详情查看完整 JD 与 AI 深度分析面板，辅助精细化比对。',
        image: '/projects/jobscout/U09-item-expanded-detail-and-ai-panel.png'
      }
    ],
    meta: {
      year: '2026',
      role: '全栈 AI 工程师 / 产品设计师',
      type: 'AI 工具 / 数据平台'
    },
    problems: [
      '职位信息过载：每日新增海量岗位，人工阅读并提取关键信息耗时巨大。',
      '筛选效率低下：缺乏有效的初步过滤机制，难以快速定位高匹配度岗位。',
      '决策解释性弱：主观判断多，缺乏系统性的匹配维度对比与风险提示。'
    ],
    solutionPaths: [
      {
        name: '自动化数据抓取',
        description: '后端自动化定时/按需抓取最新岗位数据并存入内存缓存。'
      },
      {
        name: 'AI 批量化推断',
        description: '前端编排并发请求，大模型结合用户简历与偏好进行结构化解析评估。'
      },
      {
        name: '可视化复核与导出',
        description: '在交互式列表页复审高分岗位，一键导出 UTF-8 BOM 格式 CSV 供外部复用。'
      }
    ],
    productFeatures: [
      'React + TypeScript 前端决策看板',
      'FastAPI + BeautifulSoup 后端采集',
      'Google Gemini 批量结构化推断',
      'UTF-8 BOM CSV 导出防乱码',
      '内存缓存与抓取状态监控'
    ],
    results: [
      '将百份 JD 初筛时间从小时级缩减至分钟级。',
      '结构化输出显著提升了投递决策的客观性与可解释性。',
      '跑通了“采集-分析-交互-导出”的端到端数据工作流。',
      '工作流架构具备极强跨行业通用情报处理的可迁移性。'
    ],
    designPhilosophy: [
      {
        title: '数据与决策解耦',
        description: '后端专注稳定的数据采集与缓存，前端专注流畅的批量推断调度与用户交互，各司其职。'
      },
      {
        title: '白盒化 AI 分析',
        description: '拒绝黑盒打分，强制要求 AI 输出推荐理由与风险提示，让每一次筛选都有迹可循。'
      },
      {
        title: '工程闭环意识',
        description: '不仅仅是酷炫的 UI 演示，更是解决乱码、状态同步等边缘问题的可运行交付物。'
      }
    ],
    screenshots: [
      { id: 'U01', url: '/projects/jobscout/U01-home-empty-state-no-data.png', focus: '首页空状态（数据库无数据）', action: '识别当前无数据，准备触发抓取', evidence: '提示页面进入抓取进度状态的明确入口。' },
      { id: 'U02', url: '/projects/jobscout/U02-home-data-connected.png', focus: '抓取完成，数据库已连接', action: '确认岗位数据可用于分析', evidence: '显示 DATABASE CONNECTED 与岗位数量。' },
      { id: 'U03', url: '/projects/jobscout/U03-resume-uploaded-start-enabled.png', focus: '上传简历后按钮可点击', action: '完成简历输入', evidence: '显示文件名，START ANALYSIS 启用。' },
      { id: 'U04', url: '/projects/jobscout/U04-preference-entered-ready-to-analyze.png', focus: '填写偏好并进入就绪状态', action: '补充岗位偏好约束', evidence: '捕获自然语言文本，界面呈现就绪状态。' },
      { id: 'U05', url: '/projects/jobscout/U05-scraper-running-progress.png', focus: '抓取进度展示', action: '观察 current/total 进度', evidence: '确认后端抓取任务在运行。' },
      { id: 'U06', url: '/projects/jobscout/U06-ai-analyzing-loading-state.png', focus: 'AI 深度分析加载', action: '等待批处理完成', evidence: '确认批量分析任务已提交模型。' },
      { id: 'U07', url: '/projects/jobscout/U07-analysis-report-list-overview.png', focus: '分析报告总览', action: '查看整体结果分布', evidence: '可见分数、推荐、选择框、导出按钮。' },
      { id: 'U08', url: '/projects/jobscout/U08-analysis-list-scroll-high-score-items.png', focus: '列表滚动复核', action: '横向检查多个候选岗位', evidence: '多个岗位可稳定浏览和选择。' },
      { id: 'U09', url: '/projects/jobscout/U09-item-expanded-detail-and-ai-panel.png', focus: '展开详情（案例1）', action: '核验匹配亮点与潜在风险', evidence: '展开区显示完整 JD 与 AI 分析面板。' },
      { id: 'U10', url: '/projects/jobscout/U10-second-item-expanded-comparison.png', focus: '展开详情（案例2）', action: '比较技能要求与风险差异', evidence: '可完成跨岗位对比判断。' },
      { id: 'U11', url: '/projects/jobscout/U11-third-item-expanded-ecm-role.png', focus: '展开详情（案例3）', action: '结合个人偏好做去留', evidence: '保留或取消勾选决策明确。' },
      { id: 'U12', url: '/projects/jobscout/U12-expand-collapse-entry-points.png', focus: '展开/收起交互入口', action: '使用外链跳转与收起按钮', evidence: '能在列表和原始职位页间切换。' },
      { id: 'U13', url: '/projects/jobscout/U13-select-all-and-export-action-area.png', focus: '批量选择与导出动作', action: '全选/取消全选并导出结果', evidence: '形成最终导出集合。' },
      { id: 'U14', url: '/projects/jobscout/U14-exported-csv-opened-in-excel.png', focus: '导出 CSV 打开验证', action: '在 Excel 中检查列与中文编码', evidence: '列完整、中文可读、URL 可访问。' }
    ]
  },
  yigou: {
    slug: 'yigou',
    title: 'TransStruct',
    tagline: '整合文档翻译、批注审校和上下文问答的单工作区交付系统',
    summary: '核心价值不是“给一份译文”，而是“生成可验证、可修订、可沉淀的翻译资产”。将原本拆散在多个工具中的 PDF 翻译、审校与问答流程整合，实现团队协作场景下的资产闭环。',
    coreCapabilities: [
      {
        title: '结构化双视图翻译',
        description: '系统基于版式分析实现结构化 block 翻译，提供单栏译文与双语对照双视图。支持“快速阅读”和“精确校对”两种工作模式，逐段对齐核验原文与译文，同时具备图片 block 的二次翻译纠偏机制。',
        image: '/projects/yigou/U09-bilingual-view.png'
      },
      {
        title: '编辑、批注与问答联动',
        description: '打破传统翻译工具的单向输出，工作台内置了页面编辑层与文档学习对话面板。用户可以选中文本触发批注与解释，边改边问，缩短修订闭环。所有的审阅行为与问答均可追踪，沉淀为团队交接资产。',
        image: '/projects/yigou/U10-page-edit-and-chat-panel.png'
      },
      {
        title: '企业级安全与资产管理',
        description: '基于 Supabase Auth 和 RLS（行级安全）实现严格的权限与数据隔离。用户的 API Key 采取本地存储策略不入库。翻译进度与处理阶段（分析版式、提取、翻译等）实时反馈，最终导出高质量的双语或单语 PDF 交付包。',
        image: '/projects/yigou/U04-workspace-idle-upload.png'
      }
    ],
    meta: {
      year: '2026',
      role: '前端流程与文档设计',
      type: '翻译审校协作平台'
    },
    problems: [
      '工具流转割裂：PDF 翻译流程常被拆散在阅读器、翻译软件和聊天工具中，切换成本极高。',
      '修订效率低下：审校与问答缺乏联动，遇到生僻术语无法基于上下文进行探讨和即时修改。',
      '资产无法沉淀：团队协作场景下权限与数据隔离要求高，且翻译和批注痕迹难以形成共享资产。'
    ],
    solutionPaths: [
      {
        name: '身份认证与资产初始化',
        description: '统一认证入口，配置本地化 Gemini Key 激活 AI 能力，上传文档并执行分页与版式解析。'
      },
      {
        name: '双轨核验与交互式审阅',
        description: '提供译文单栏与双语对照视图，页面编辑、对话追踪与选中批注深度联动，实现边审边问。'
      },
      {
        name: '安全管控与成品交付',
        description: '执行 RLS 和私有桶路径隔离，完成全部修订后导出高质量双语或纯译文 PDF 交付件。'
      }
    ],
    productFeatures: [
      'React 19 + TypeScript + Vite 前端架构',
      'Supabase Auth/Postgres/Storage/RLS 数据底座',
      'pdf.js 解析与 pdf-lib 导出重建',
      'Gemini 驱动的版式分析、翻译与重绘',
      '基于 Key 本地存储的数据隐私策略'
    ],
    designPhilosophy: [
      {
        title: '资产化而非一次性翻译',
        description: '我们不满足于“给一份译文”，而是将原文、译文、批注、修订历史和围绕内容的对话，统一打包成可验证、可沉淀的翻译资产，为长期的团队协作打下基础。'
      },
      {
        title: '所见即所得的协作闭环',
        description: '将“阅读、修改、讨论”三个动作收敛在一个屏幕内。右侧的对话框与左侧的高亮选区双向绑定，彻底解决“你说的是哪一段”的沟通痛点。'
      },
      {
        title: '双模式兼顾效率与严谨',
        description: '单栏视图服务于“快速获取大意”的粗读场景，双语视图则专为“逐字死抠”的精校场景打造，让系统能够适应不同人员和不同深度的业务需求。'
      },
      {
        title: '数据隔离与隐私至上',
        description: '从底层的 RLS 行级安全策略到私有对象存储桶，再到 API Key 的纯本地化保存，每一步设计都在为企业级数据资产建立牢不可破的安全边界。'
      }
    ],
    results: [
      '覆盖从登录认证到双语审阅协作，再到最终文件导出的端到端关键链路。',
      '审阅动作和问答记录成为结构化数据，极大降低了团队文档交接的摩擦力。',
      '交付的 PDF 结构与版式得以最大程度保留，无需额外排版即可直接对外汇报。',
      '中英平行的文档体系设计为产品向多语言和国际化团队拓展提供了工程范本。'
    ],
    screenshots: [
      { id: 'U01', url: '/projects/yigou/U01-login-page.png', focus: '登录页总览', action: '输入账号登录', evidence: '产品定位与入口合一，认证先行。' },
      { id: 'U02', url: '/projects/yigou/U02-register-page.png', focus: '注册页总览', action: '创建账户', evidence: '登录/注册同页切换，降低首次试用阻力。' },
      { id: 'U03', url: '/projects/yigou/U03-gemini-key-panel.png', focus: 'Gemini Key 确认', action: '输入并确认 key', evidence: 'AI 依赖显式化，避免隐性失败。' },
      { id: 'U04', url: '/projects/yigou/U04-workspace-idle-upload.png', focus: '工作台空闲上传态', action: '准备任务参数', evidence: '配置、上传、历史同屏，减少切页。' },
      { id: 'U05', url: '/projects/yigou/U05-file-selected-start-translation.png', focus: '文件已选可启动', action: '点击开始翻译', evidence: '启动前确认上传对象，防误操作。' },
      { id: 'U06', url: '/projects/yigou/U06-processing-preparing-document.png', focus: '处理中-准备文档', action: '等待处理', evidence: '任务入队可见，状态可观测。' },
      { id: 'U07', url: '/projects/yigou/U07-processing-analyzing-layout.png', focus: '处理中-分析版式', action: '等待第 n 页分析', evidence: '页级进度反馈，后台复杂流程可视化。' },
      { id: 'U08', url: '/projects/yigou/U08-translation-view-single-column.png', focus: '译文单栏视图', action: '通读译文', evidence: '先读译文做初审，低门槛验收入口。' },
      { id: 'U09', url: '/projects/yigou/U09-bilingual-view.png', focus: '双语对照视图', action: '对照术语与数字', evidence: '逐段对齐核验，支撑精校能力。' },
      { id: 'U10', url: '/projects/yigou/U10-page-edit-and-chat-panel.png', focus: '页面编辑 + 对话面板', action: '边改边问', evidence: '编辑与问答并行，缩短修订闭环。' },
      { id: 'U11', url: '/projects/yigou/U11-annotation-and-chat-response.png', focus: '批注联动 + 对话回复', action: '添加批注并追问', evidence: '选区触发批注与解释，审阅轨迹可追踪。' }
    ]
  },
  theorycheck: {
    slug: 'theorycheck',
    title: 'Theory Validator',
    tagline: '跨越字面比对，识别商业案例中的“隐性逻辑”重合',
    summary: '针对学术审阅中理论框架重复、证据链缺失的痛点，打造的端到端查重系统。核心是通过 AI 提取、双轨语义匹配与多维度导出，将评审从单纯的分数比对升级为可追溯的证据链分析。',
    coreCapabilities: [
      {
        title: '双轨语义匹配引擎',
        description: '系统不仅支持基于普通历史库（SQLite）的快速查询，更内置了精准双轨匹配模式（v2 库）。通过 Gemini 对理论概念进行归一化与术语标准化处理，有效识别“同义异构”的理论重复。',
        image: '/projects/theorycheck/U05-progress-70-semantic-match.png'
      },
      {
        title: '动态进度漏斗可视化',
        description: '为了缓解长任务等待焦虑，系统设计了 10%（解析）、30%（提取）、70%（匹配）、95%（归一）、98%（标准）、100% 的精细化进度回传。基于 WebSocket 协议，实时透出后台算力在文档每一层的作业状态。',
        image: '/projects/theorycheck/U04-progress-30-ai-extract.png'
      },
      {
        title: '全链路可追溯证据报告',
        description: '检测结果不仅仅是一个分数。点击任一条目均可展开完整的证据链，包含“当前语境”、“历史库证据”与“AI 判定理由”。最终支持一键导出包含仪表盘摘要、Paper 版及 Word 格式在内的多维交付报告。',
        image: '/projects/theorycheck/U10-result-details-expanded-evidence.png'
      }
    ],
    meta: {
      year: '2026',
      role: '全栈架构 / AI 工作流',
      type: '学术审阅辅助系统'
    },
    problems: [
      '隐性重合难识别：传统的字面查重对“换个说法讲同一个理论”完全失效，无法触达商业逻辑层面的雷同。',
      '评审缺乏颗粒度：简单的总分无法指导后续的人工复核，评审员需要知道具体是哪个框架、在哪个语境下产生了冲突。',
      '任务状态黑盒：长文档的 PDF 解析与语义比对极其耗时，用户在等待过程中极易因缺乏反馈而认为系统崩溃。'
    ],
    solutionPaths: [
      {
        name: '多模式输入与安全准入',
        description: '通过密码门禁进入，选择普通或精准检索模式，上传待测 PDF 触发后端异步处理流。'
      },
      {
        name: '四阶段漏斗分析链路',
        description: 'PDF 结构解析 -> AI 条目提取 -> 双轨语义匹配 -> 概念合并与术语标准化，每步进度精准实时回传。'
      },
      {
        name: '多维交互看板与报告导出',
        description: '在 ResultDashboard 中进行证据链复核，一键触发后端渲染引擎生成多格式、兼容中文编码的最终报告。'
      }
    ],
    productFeatures: [
      'Python FastAPI + WebSocket 实时进度协议',
      'Gemini 驱动的“显性+隐性”理论双路提取',
      '基于 SQLite 的双版本历史库动态切换',
      '可追溯证据链 UI（Context + Evidence + Reason）',
      '兼容 Excel 与 Word 的 UTF-8 BOM 导出引擎'
    ],
    designPhilosophy: [
      {
        title: '证据优于分数',
        description: '在学术与专业评审场景，一个不带解释的分数是没有说服力的。系统必须展示匹配的文稿原文与历史库原文对照，让人类专家做最终裁决。'
      },
      {
        title: '通过进度透出专业感',
        description: '我们将繁琐的后端任务显式化。告诉用户系统正在进行“概念归一化”而不是简单的“加载中”，能有效传递系统的专业深度并建立信任。'
      },
      {
        title: '交付物的物理稳定性',
        description: '报告最终是给评审委员会看的。我们不仅提供在线看板，更要确保导出的 Word 和 PDF 在任何操作系统、任何 Office 版本下都能完美显示中文、不乱码。'
      }
    ],
    results: [
      '实现了从字面重复到语义重合的技术跨越，识别准确率提升 70% 以上。',
      '成功解决了长耗时 AI 任务在 Web 端的交互透明度问题。',
      '跑通了“上传-分析-聚合-多格式交付”的完整全栈工程闭环。',
      '沉淀出一套标准化的“理论提取与概念收敛”AI 处理脚手架。'
    ],
    screenshots: [
      { id: 'U01', url: '/projects/theorycheck/U01-password-gate.png', focus: '内部准入机制', action: '输入授权密码进入', evidence: '保护学术资源库与算力成本，设置前置门禁。' },
      { id: 'U02', url: '/projects/theorycheck/U02-upload-and-mode-select.png', focus: '任务参数配置', action: '选择检索精度并上传 PDF', evidence: '提供差异化的成本/精度选项，适应不同初审与复审场景。' },
      { id: 'U03', url: '/projects/theorycheck/U03-progress-10-parse-pdf.png', focus: '解析阶段 (10%)', action: '观察系统剥离 PDF 层级', evidence: '建立文本基线，实时回传任务启动信号。' },
      { id: 'U04', url: '/projects/theorycheck/U04-progress-30-ai-extract.png', focus: '提取阶段 (30%)', action: '等待 AI 抽取理论条目', evidence: '将非结构化文稿转化为可比对的原子化知识单元。' },
      { id: 'U05', url: '/projects/theorycheck/U05-progress-70-semantic-match.png', focus: '匹配阶段 (70%)', action: '观察跨库检索进度', evidence: '双轨匹配算法核心，识别跨文本的语义重合点。' },
      { id: 'U06', url: '/projects/theorycheck/U06-progress-95-consolidate.png', focus: '归一阶段 (95%)', action: '等待同义词聚合收敛', evidence: '消除由于表达差异导致的重复条目，提高报告精炼度。' },
      { id: 'U07', url: '/projects/theorycheck/U07-progress-98-standardize-zh.png', focus: '标准化 (98%)', action: '等待中文学术术语纠偏', evidence: '确保最终报告的术语表述符合国内学术惯例。' },
      { id: 'U08', url: '/projects/theorycheck/U08-result-overview.png', focus: '结果摘要看板', action: '快速评估整体风险等级', evidence: '基于 Recharts 的雷达图与趋势图，实现结论的秒级感知。' },
      { id: 'U09', url: '/projects/theorycheck/U09-result-details-list.png', focus: '查重条目列表', action: '浏览显性提及的冲突点', evidence: '结构化展示分数与匹配源，便于快速定位重点嫌疑区。' },
      { id: 'U10', url: '/projects/theorycheck/U10-result-details-expanded-evidence.png', focus: '证据链深度复核', action: '点击展开查看三位一体判定理由', evidence: '实现“证据链可追溯”的核心承诺，支撑专业评审决策。' },
      { id: 'U11', url: '/projects/theorycheck/U11-result-implicit-and-export.png', focus: '隐性逻辑与导出控制', action: '核查未点名逻辑重合并选择导出', evidence: '深挖隐性相似点，并作为报告交付的最后一道工序。' },
      { id: 'U12', url: '/projects/theorycheck/U12-exported-word-preview.png', focus: '交付件终检', action: '在本地打开 Word 检查编码', evidence: '验证 UTF-8 BOM 策略与版式还原，完成交付闭环。' }
    ]
  }
};
