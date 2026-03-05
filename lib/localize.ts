import type { ProjectData } from "@/data/projects"

export type Locale = "zh" | "en"

const NON_ASCII_PATTERN = /[^\x09\x0A\x0D\x20-\x7E]/g
const MULTI_SPACE_PATTERN = /\s{2,}/g

interface EnglishProjectCopy {
  title: string
  tagline: string
  summary: string
  meta: {
    role: string
    type: string
  }
  coreCapabilities: { title: string; description: string }[]
  problems: string[]
  solutionPaths: { name: string; description: string }[]
  productFeatures: string[]
  designPhilosophy: { title: string; description: string }[]
  results: string[]
}

const EN_PROJECT_COPY: Record<string, EnglishProjectCopy> = {
  bizdeck: {
    title: "BizDeck",
    tagline: "A consulting-grade AI deck system built for logic-first production.",
    summary:
      "BizDeck turns presentation work into an operational workflow: strategy framing, outline approval, page-level refinement, and legacy PDF recovery in one production line.",
    meta: { role: "Product Architecture / Full-Stack Development", type: "B2B Productivity Platform" },
    coreCapabilities: [
      {
        title: "Logic-First Outline Engine",
        description:
          "Narrative structure is reviewed before visual rendering, preventing expensive rework caused by weak reasoning.",
      },
      {
        title: "Slide-Level Surgical Editing",
        description:
          "Users can rewrite only one argument, replace only one visual, and rollback at page-level versions without breaking the full deck.",
      },
      {
        title: "Legacy PDF Asset Recovery",
        description:
          "Scanned and read-only PDFs are reconstructed into editable materials and merged into the same production workflow.",
      },
    ],
    problems: [
      "Most AI deck tools prioritize layout over logic, causing high rewrite costs for real business use.",
      "Teams own many PDF assets but cannot convert them into reusable editable knowledge.",
      "Iterative revision cycles are chaotic without page-level history and rollback.",
    ],
    solutionPaths: [
      { name: "Path A: New Deck Generation", description: "Input business goal, lock narrative arc, then render slides with style constraints." },
      { name: "Path B: PDF Conversion Workflow", description: "Import legacy PDF, parse structure, and edit with the same slide operations." },
      { name: "Path C: Restoration Pipeline", description: "Run deep cleanup on scanned assets and export editable native files." },
    ],
    productFeatures: [
      "Consulting persona presets with style and structure constraints",
      "Outline checkpoint before rendering",
      "Inline slide copilot for local updates",
      "Version-tree rollback at single-page granularity",
    ],
    designPhilosophy: [
      {
        title: "Human-in-the-Loop Control",
        description: "The system accelerates heavy steps but keeps decision authority on structure and narrative in user hands.",
      },
      {
        title: "Reuse Over Reinvention",
        description: "Production systems should exploit existing assets first, not force users to recreate everything from scratch.",
      },
      {
        title: "Atomic Operations",
        description: "Granular edits reduce risk and cognitive load compared with global regeneration.",
      },
      {
        title: "Delivery-Centered Design",
        description: "Outputs are optimized for practical handoff, with high-fidelity export as a first-class requirement.",
      },
    ],
    results: [
      "Improved deck production efficiency for manager-level workflows.",
      "Connected legacy PDF assets to modern AI editing pipelines.",
      "Established a reusable UX pattern for long-cycle AI document workflows.",
      "Delivered an end-to-end system from product design to deployment.",
    ],
  },
  bizcase: {
    title: "BizCase Pro",
    tagline: "A structured case-writing factory for business education workflows.",
    summary:
      "BizCase Pro decomposes long-form case writing into guided phases so teams can produce high-quality case bodies and teaching notes with predictable quality.",
    meta: { role: "Workflow Design / Full-Stack Development", type: "AI Content Production Platform" },
    coreCapabilities: [
      {
        title: "Four-Phase State Machine",
        description:
          "Research, objective alignment, framework review, and drafting are enforced as explicit checkpoints instead of one-shot generation.",
      },
      {
        title: "Dual-Output Rendering",
        description:
          "Case body and teaching note are generated as synchronized outputs to preserve instructional coherence.",
      },
      {
        title: "Quality Gates and Review Passes",
        description:
          "Firewall checks validate readability, formatting, and evidence quality before final export.",
      },
      {
        title: "Localized Segment Refinement",
        description:
          "Selected paragraphs or chart blocks can be rewritten without disrupting full-document structure.",
      },
    ],
    problems: [
      "Research evidence is fragmented across multiple data sources and expensive to consolidate.",
      "Turning raw facts into teachable narrative structure requires high expertise and manual effort.",
      "Teaching-note preparation adds another large production burden after the case draft is complete.",
    ],
    solutionPaths: [
      { name: "Path A: Theme-Led Generation", description: "Start with topic intent, run staged research, and lock learning goals before drafting." },
      { name: "Path B: Material-Constrained Writing", description: "Upload source files and generate cases strictly within curated evidence scope." },
      { name: "Path C: In-Context Iterative Review", description: "Refine selected segments with copilot guidance in the final reading workspace." },
    ],
    productFeatures: [
      "Three-lens research synthesis",
      "Goal recommendation with user override",
      "Strongly typed stage transitions",
      "High-fidelity PDF export strategy",
    ],
    designPhilosophy: [
      {
        title: "Productized Expertise",
        description: "Professional SOP is encoded into interface flow, not delegated to opaque prompt engineering.",
      },
      {
        title: "Visible Progress",
        description: "Long-form generation is broken into transparent milestones to reduce black-box anxiety.",
      },
      {
        title: "Twin Deliverables",
        description: "Teaching value depends on consistent alignment between narrative body and instructional guidance.",
      },
      {
        title: "Operational Resilience",
        description: "Retry and export reliability are treated as core user value rather than post-release patches.",
      },
    ],
    results: [
      "Reduced case production cycles from weeks to hours in repeatable workflows.",
      "Eliminated low-control long-text generation behavior through stage-level acceptance.",
      "Built a transferable architecture for other structured long-form writing scenarios.",
      "Delivered a deployable client-side workflow with predictable operating cost.",
    ],
  },
  intelliportfolio: {
    title: "IntelliPortfolio",
    tagline: "An AI-assisted investment research workspace for signal-to-decision workflows.",
    summary:
      "IntelliPortfolio combines data ingestion, thesis tracking, and asynchronous report generation into one investment operating interface.",
    meta: { role: "Product Design / Full-Stack Engineering", type: "Financial Research Workspace" },
    coreCapabilities: [
      {
        title: "Research Pipeline Orchestration",
        description: "Data collection, processing, and report generation are coordinated as traceable asynchronous tasks.",
      },
      {
        title: "RAG-Driven Knowledge Retrieval",
        description: "Analysts can query historical assets and generated insights in one unified context layer.",
      },
      {
        title: "Portfolio Decision Surface",
        description: "Signals, rationale, and output reports are connected to improve decision transparency.",
      },
    ],
    problems: [
      "Investment research context is fragmented across datasets, notes, and isolated tools.",
      "Analysts spend too much time assembling reports instead of evaluating decisions.",
      "Historical intelligence is difficult to retrieve and reuse consistently.",
    ],
    solutionPaths: [
      { name: "Path A: Data-to-Report", description: "Ingest market data, run analysis pipeline, and publish structured report output." },
      { name: "Path B: Knowledge Recall", description: "Search historical evidence and thesis snapshots through a unified retrieval layer." },
      { name: "Path C: Decision Review", description: "Audit signal rationale and compare recommendation outcomes over time." },
    ],
    productFeatures: [
      "Asynchronous report generation flow",
      "RAG-enabled research recall",
      "Portfolio-level collaboration model",
      "Traceable signal-to-action workflow",
    ],
    designPhilosophy: [
      {
        title: "Context Before Output",
        description: "High-quality recommendations require connected evidence, not isolated model answers.",
      },
      {
        title: "Analyst-Centered Efficiency",
        description: "Automate repetitive synthesis steps so humans focus on judgement and risk interpretation.",
      },
      {
        title: "Transparent Decisions",
        description: "Every recommendation should preserve source traces and rationale for later review.",
      },
      {
        title: "Reusable Intelligence",
        description: "Research assets are long-term capital and must be queryable across future cycles.",
      },
    ],
    results: [
      "Improved cycle time for recurring research and report production.",
      "Established reusable retrieval patterns for investment knowledge assets.",
      "Enhanced transparency of recommendation logic and review flow.",
      "Delivered a full-stack production workspace for analyst workflows.",
    ],
  },
  cloneme: {
    title: "Clone Me",
    tagline: "An encrypted callback automation system for high-reliability enterprise messaging.",
    summary:
      "Clone Me focuses on secure message ingestion, deduplicated event handling, and controlled auto-response orchestration for enterprise communication channels.",
    meta: { role: "Protocol Integration / Backend Engineering", type: "Enterprise Messaging Automation" },
    coreCapabilities: [
      {
        title: "Secure Callback Verification",
        description: "Encrypted callback signatures are validated before message processing to guarantee trusted ingress.",
      },
      {
        title: "Duplicate-Safe Event Pipeline",
        description: "Idempotent processing prevents repeated actions caused by retries or webhook replay.",
      },
      {
        title: "Asynchronous Reply Orchestration",
        description: "Response generation is decoupled from ingress handling to keep latency and reliability stable.",
      },
    ],
    problems: [
      "Enterprise IM callbacks can be noisy and unreliable under retry-heavy conditions.",
      "Repeated event delivery can trigger duplicate processing and inconsistent user outcomes.",
      "Secure integration requirements are often treated as an afterthought in chatbot workflows.",
    ],
    solutionPaths: [
      { name: "Path A: Verified Ingress", description: "Validate encrypted callback payloads before entering the processing pipeline." },
      { name: "Path B: Idempotent Handling", description: "Store message signatures and skip duplicate executions." },
      { name: "Path C: Async Reply Layer", description: "Queue response tasks and return stable acknowledgement quickly." },
    ],
    productFeatures: [
      "Encrypted signature validation",
      "Replay-safe deduplication",
      "Async response orchestration",
      "Operational logging for callback traceability",
    ],
    designPhilosophy: [
      {
        title: "Reliability First",
        description: "Message systems are production infrastructure; graceful handling matters more than flashy features.",
      },
      {
        title: "Security as Baseline",
        description: "Authentication and verification are mandatory steps in ingress architecture.",
      },
      {
        title: "Idempotency Everywhere",
        description: "Retries are normal in distributed systems and should never break business logic.",
      },
      {
        title: "Decoupled Throughput",
        description: "Async pipeline design keeps callback responsiveness predictable under load.",
      },
    ],
    results: [
      "Delivered a stable callback pipeline with duplicate-safe handling.",
      "Improved operational reliability under high retry conditions.",
      "Maintained secure enterprise messaging constraints end-to-end.",
      "Established a reusable architecture for future automation bots.",
    ],
  },
  jobscout: {
    title: "Job Scout",
    tagline: "A job-search decision pipeline built on structured crawling and AI scoring.",
    summary:
      "Job Scout automates collection, normalization, ranking, and export of job opportunities so users can focus on decision quality instead of manual filtering.",
    meta: { role: "Workflow Product / Data Engineering", type: "Career Decision Platform" },
    coreCapabilities: [
      {
        title: "Multi-Source Job Ingestion",
        description: "Job postings are collected and normalized into a consistent decision-ready format.",
      },
      {
        title: "AI-Based Relevance Scoring",
        description: "Each position is evaluated against role intent and profile constraints for actionable ranking.",
      },
      {
        title: "Batch Review and Export",
        description: "Shortlisted roles can be selected in bulk and exported for downstream tracking workflows.",
      },
    ],
    problems: [
      "Manual browsing across job boards is repetitive and difficult to compare at scale.",
      "Users struggle to convert noisy postings into consistent decision criteria.",
      "Shortlisting and follow-up tracking are disconnected from discovery workflows.",
    ],
    solutionPaths: [
      { name: "Path A: Query to Pipeline", description: "Input search intent, crawl sources, and rank opportunities by relevance." },
      { name: "Path B: Structured Review", description: "Open detailed cards and inspect reasoning before deciding to keep or discard." },
      { name: "Path C: Batch Delivery", description: "Select target entries and export clean outputs for application management." },
    ],
    productFeatures: [
      "Automated job data collection",
      "Structured card-based review",
      "AI inference for role fit",
      "Batch export for external workflows",
    ],
    designPhilosophy: [
      {
        title: "Decision Over Discovery",
        description: "The core value is quality of final choices, not endless browsing.",
      },
      {
        title: "Comparability by Design",
        description: "Uniform structure allows fast and fair cross-position evaluation.",
      },
      {
        title: "Actionable Outputs",
        description: "Export is treated as a primary operation because job search spans multiple tools.",
      },
      {
        title: "User-Controlled Filtering",
        description: "AI suggestions support judgement; they do not replace human preferences.",
      },
    ],
    results: [
      "Reduced manual workload in large-scale job discovery.",
      "Improved consistency of candidate job evaluation.",
      "Enabled cleaner transition from discovery to application execution.",
      "Delivered a robust crawl-to-export decision pipeline.",
    ],
  },
  yigou: {
    title: "TransStruct",
    tagline: "A unified workspace for PDF translation, review, annotation, and delivery.",
    summary:
      "TransStruct integrates translation, contextual QA, and collaborative annotation into one production interface for reusable multilingual document assets.",
    meta: { role: "Product Engineering / Document Systems", type: "Translation Collaboration Platform" },
    coreCapabilities: [
      {
        title: "Structured Bilingual Views",
        description: "Single-column and side-by-side reading modes support both fast review and strict validation.",
      },
      {
        title: "Annotation + Copilot Loop",
        description: "Selected text can trigger comments and contextual AI responses without leaving the editing surface.",
      },
      {
        title: "Secure Asset Governance",
        description: "Authentication, row-level access control, and local key strategy protect sensitive document workflows.",
      },
    ],
    problems: [
      "Translation and review are often split across disconnected tools and windows.",
      "Contextual revision is slow when discussion and editing are separated.",
      "Teams need controlled asset access and traceable collaboration history.",
    ],
    solutionPaths: [
      { name: "Path A: Secure Onboarding", description: "Authenticate, configure key, and initialize document workspace." },
      { name: "Path B: Bilingual Review Loop", description: "Switch views, annotate key segments, and resolve translation uncertainty." },
      { name: "Path C: Final Delivery", description: "Finalize revisions and export production-ready multilingual PDFs." },
    ],
    productFeatures: [
      "PDF parsing and reconstruction pipeline",
      "Interactive annotation and copilot review",
      "Role-based data isolation",
      "High-fidelity bilingual export",
    ],
    designPhilosophy: [
      {
        title: "Assets, Not One-Off Output",
        description: "Translation work should remain verifiable, editable, and reusable as long-term knowledge assets.",
      },
      {
        title: "Same-Screen Collaboration",
        description: "Reading, editing, and discussion are colocated to reduce interpretation friction.",
      },
      {
        title: "Mode-Aware UX",
        description: "Interfaces adapt to quick reading or strict proofreading with clear interaction boundaries.",
      },
      {
        title: "Security by Default",
        description: "Data isolation and key handling are built into the workflow foundation.",
      },
    ],
    results: [
      "Delivered an end-to-end translation collaboration pipeline.",
      "Improved revision speed through tightly coupled annotation and QA workflows.",
      "Produced reusable multilingual assets with higher delivery confidence.",
      "Established a scalable architecture for secure document collaboration.",
    ],
  },
  theorycheck: {
    title: "Theory Validator",
    tagline: "A semantic duplication checker for hidden overlap in case-theory reasoning.",
    summary:
      "Theory Validator upgrades traditional similarity checks with concept extraction, dual-track semantic matching, and evidence-chain reporting for professional review.",
    meta: { role: "AI Workflow Architecture / Full-Stack", type: "Academic Review Assistant" },
    coreCapabilities: [
      {
        title: "Dual-Track Semantic Matching",
        description: "Explicit and implicit concept overlap are compared using normalized terminology across historical repositories.",
      },
      {
        title: "Stage-Level Progress Telemetry",
        description: "Users can observe parse, extraction, matching, normalization, and standardization phases in real time.",
      },
      {
        title: "Traceable Evidence Reporting",
        description: "Each detected item includes context, source evidence, and model reasoning for audit-quality review.",
      },
    ],
    problems: [
      "Literal text similarity misses conceptual overlap hidden behind paraphrasing.",
      "Single aggregate scores are insufficient for expert review and correction.",
      "Long-running analysis feels unreliable without transparent state feedback.",
    ],
    solutionPaths: [
      { name: "Path A: Secure Task Initialization", description: "Enter controlled gateway, choose mode, and upload source document." },
      { name: "Path B: Multi-Phase Analysis", description: "Run extraction and semantic matching with transparent progress feedback." },
      { name: "Path C: Evidence-Centered Review", description: "Inspect conflict items and export structured multi-format reports." },
    ],
    productFeatures: [
      "FastAPI + WebSocket progress protocol",
      "Dual-track theory extraction pipeline",
      "Switchable historical repositories",
      "Evidence-chain dashboard and export",
    ],
    designPhilosophy: [
      {
        title: "Evidence Over Scores",
        description: "Review systems must justify outcomes with interpretable source comparisons.",
      },
      {
        title: "Transparent Computation",
        description: "Named processing stages communicate professional depth and operational trust.",
      },
      {
        title: "Stable Deliverables",
        description: "Export reliability is essential because reports are consumed in formal review environments.",
      },
      {
        title: "Human Final Judgement",
        description: "Models prioritize candidate detection while experts keep final authority.",
      },
    ],
    results: [
      "Improved detection quality for semantic overlap beyond literal matching.",
      "Increased trust through stage-level transparency in long analysis jobs.",
      "Delivered a full upload-to-report production pipeline.",
      "Built reusable scaffolding for theory extraction and concept normalization.",
    ],
  },
}

function sanitizeAscii(value: string): string {
  return value.replace(NON_ASCII_PATTERN, " ").replace(MULTI_SPACE_PATTERN, " ").trim()
}

export function toEnglishSafeText(value: string): string {
  return sanitizeAscii(value)
}

function fallbackAt<T>(arr: T[], index: number, fallback: T): T {
  return arr[index] ?? fallback
}

export function localizeProjectData(project: ProjectData, locale: Locale): ProjectData {
  if (locale === "zh") return project

  const copy = EN_PROJECT_COPY[project.slug]
  if (!copy) return project

  return {
    ...project,
    title: copy.title,
    tagline: copy.tagline,
    summary: copy.summary,
    meta: {
      year: sanitizeAscii(project.meta.year) || "2026",
      role: copy.meta.role,
      type: copy.meta.type,
    },
    coreCapabilities: project.coreCapabilities?.map((item, idx) => {
      const translated = fallbackAt(copy.coreCapabilities, idx, {
        title: `Capability ${idx + 1}`,
        description: "Key capability in this workflow system.",
      })
      return {
        ...item,
        title: translated.title,
        description: translated.description,
      }
    }),
    problems: project.problems.map((_, idx) =>
      fallbackAt(copy.problems, idx, `Problem ${idx + 1} in this production workflow.`),
    ),
    solutionPaths: project.solutionPaths.map((_, idx) =>
      fallbackAt(copy.solutionPaths, idx, {
        name: `Path ${idx + 1}`,
        description: "Workflow path in this system.",
      }),
    ),
    productFeatures: project.productFeatures.map((_, idx) =>
      fallbackAt(copy.productFeatures, idx, `Feature ${idx + 1}`),
    ),
    designPhilosophy: project.designPhilosophy.map((_, idx) =>
      fallbackAt(copy.designPhilosophy, idx, {
        title: `Principle ${idx + 1}`,
        description: "Core design principle of this product.",
      }),
    ),
    results: project.results.map((_, idx) =>
      fallbackAt(copy.results, idx, `Outcome ${idx + 1}`),
    ),
    screenshots: project.screenshots.map((item) => ({
      ...item,
      focus: `${copy.title} - Workflow ${item.id}`,
      action: `Inspect and validate the expected interaction for step ${item.id}.`,
      evidence: `This screen demonstrates a key product behavior in the ${copy.title} flow.`,
    })),
  }
}
