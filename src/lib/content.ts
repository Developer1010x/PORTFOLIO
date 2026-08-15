// Single source of truth for the portfolio. All real content — mirrors the CV and LinkedIn.
// No fabricated metrics: every number here is one the CV/evidence file already backs.

export const profile = {
  name: "S Prajwall Narayana",
  role: "AI Engineer",
  tagline: "AI Infrastructure · LLM Platform · DevOps/SRE",
  headline: "AI Engineer, Founding Team at Colligence Research",
  blurb:
    "I build across both halves of the same system — the multi-agent and LLM product over MCP, and the DevOps/SRE platform it runs on. The engineer who ships the agent workflow is the engineer who carries the pager for it.",
  location: "Bengaluru, India · open to UK / Germany / US relocation",
  email: "prajwallnarayana@gmail.com",
  phone: "+91 7760604439",
  github: "https://github.com/Developer1010x",
  linkedin: "https://www.linkedin.com/in/s-prajwall-narayana-64b57b427",
  portfolio: "https://sprajwallnarayana.vercel.app",
  resume: "/S-Prajwall-Narayana-Resume.pdf",
};

export const stats = [
  { value: "3", label: "peer-reviewed papers (IEEE · Springer)" },
  { value: "1.00", label: "crisis-detection recall (62-case CI-gated eval)" },
  { value: "10", label: "shipped open-source projects" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "AI & LLM Systems", items: ["Agentic systems", "MCP orchestration", "Multi-agent workflows", "RAG", "LangChain", "LangGraph", "Claude API", "Evaluation harnesses"] },
  { group: "Infrastructure & DevOps", items: ["CI/CD", "OpenTofu (IaC)", "Ansible", "Docker", "Kubernetes", "Linux", "Linode", "Observability & alerting", "Incident runbooks", "Zitadel (SSO/IAM)", "RBAC"] },
  { group: "Languages & Backend", items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "SQL", "Rust", "Swift", "Shell"] },
  { group: "ML & Vision", items: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "CNNs", "ResNet", "Quantised deployment"] },
];

export type Role = {
  company: string;
  title: string;
  type: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    company: "Colligence Research",
    title: "AI Engineer",
    type: "Full-time · Founding team",
    location: "Bengaluru, India",
    period: "Feb 2026 – Present",
    summary: "Work across both halves of the product — the AI/application engineering and end-to-end ownership of the platform it runs on.",
    bullets: [
      "Established the DevOps and SRE function from scratch and now lead it: CI/CD, infrastructure-as-code with OpenTofu and Ansible on Linode, observability, alerting and incident runbooks.",
      "Replaced manual GitHub deploy workflows with automated pipelines, cutting deployment errors for a four-person founding team.",
      "Operate the production stack end to end — Docker, Zitadel authentication and RBAC, monitored deployments.",
      "Own system architecture across infrastructure and tooling; building a retrieval-augmented system into the infrastructure layer so SRE work (runbook lookup, change context, incident response) is grounded in the organisation's own configuration and history.",
    ],
    tech: ["Python", "MCP", "OpenTofu", "Ansible", "Docker", "Linode", "CI/CD", "Zitadel", "Linux"],
  },
  {
    company: "Colligence Research",
    title: "Associate AI Engineer",
    type: "Full-time · Founding team",
    location: "Bengaluru, India",
    period: "Dec 2025 – Feb 2026",
    summary: "Led the first agentic systems the company shipped.",
    bullets: [
      "Led a small team building the company's first multi-agent LLM pipeline for ERP automation over MCP, keeping long-running, multi-step workflows on track without human intervention.",
      "Designed and built a code-generation service that parses structured input specifications and emits deployment-ready web applications.",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Claude API", "FastAPI", "MCP"],
  },
  {
    company: "Colligence Research",
    title: "Associate AI Engineer Intern",
    type: "Internship · Founding team",
    location: "Bengaluru, India",
    period: "Nov 2025 – Dec 2025",
    summary: "First LLM integrations for the founding team.",
    bullets: [
      "Prototyped the founding team's first LLM integrations and agent workflows — the foundation the production multi-agent pipeline was later built on.",
    ],
    tech: ["Python", "LangChain", "Claude API"],
  },
  {
    company: "RVCE Centre of Excellence",
    title: "Research Intern — AI & Deep Learning",
    type: "Internship",
    location: "Remote",
    period: "Oct 2024 – Dec 2024",
    summary: "Deepfake detection research.",
    bullets: [
      "Built a deepfake-detection model from scratch for manipulated-face video, using no external detection APIs.",
      "Trained and evaluated the model on the FaceForensics++ and DFDC benchmark datasets.",
    ],
    tech: ["Python", "PyTorch", "CNNs", "Computer Vision"],
  },
  {
    company: "Ernst & Young",
    title: "Associate Consultant Intern — Enterprise Cybersecurity",
    type: "Internship",
    location: "Bengaluru, India",
    period: "Aug 2024 – Sep 2024",
    summary: "Enterprise cloud-security and IAM.",
    bullets: [
      "Shadowed senior consultants on enterprise cloud-security and identity & access management engagements.",
      "Gained exposure to the TOGAF and IFTAS frameworks and to how cloud security reviews are run.",
    ],
    tech: ["Cloud Security", "IAM", "TOGAF", "IFTAS"],
  },
];

export type Project = {
  name: string;
  tag: string;
  summary: string;
  bullets: string[];
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: "Arogya-Sathi",
    tag: "LLM · Healthcare · Eval",
    summary: "Offline-capable multilingual AI healthcare platform with a CI-gated safety evaluation harness.",
    bullets: [
      "Deterministic, rule-based drug-interaction and crisis-detection safety layer the language model cannot override.",
      "62-case labelled evaluation harness wired in as a CI merge gate — crisis detection recall 1.00 / precision 0.93; emergency 1.00 / 1.00; drug screening 1.00 / 1.00. Building it surfaced a real missed self-harm disclosure.",
      "LangGraph report pipeline with multi-model routing; runs fully offline on quantised models, demonstrated on a Raspberry Pi. 3rd place, college final-year showcase. Research paper upcoming.",
    ],
    tech: ["LangGraph", "Ollama", "PyTorch", "YOLOv8", "CI eval harness"],
    href: "https://github.com/Developer1010x/Arogya-Sathi",
  },
  {
    name: "Audier",
    tag: "Flutter · Linux · Local-first",
    summary: "A private reader and audiobook player for your own book library — released, installable, Linux.",
    bullets: [
      "Opens PDF, EPUB, Markdown and plain text; reads them aloud in a neural voice (Piper) with follow-along highlighting; OCRs scanned pages; optional AI study aids for textbooks across six providers.",
      "Privacy is the design constraint, not a feature: books are read where they sit and never copied or uploaded, speech and OCR run on the machine, and a cloud provider is never the default and always states what it is about to send before it sends it.",
      "Ships as an AppImage, a .deb and a tarball built by GitHub Actions. 202 tests, and a serialising gate over the playback queue that closes a race where two concurrent look-ahead calls could double-queue a sentence and skip the next.",
    ],
    tech: ["Flutter", "Dart", "Piper TTS", "Tesseract", "GitHub Actions"],
    href: "https://github.com/Developer1010x/audiobook-reader/releases/tag/v1.0.0",
  },
  {
    name: "openplay",
    tag: "Rust · Systems · Networking",
    summary: "Open-source screen-casting system in Rust — AirPlay, Miracast, and a native WebRTC protocol.",
    bullets: [
      "Casts a screen across Linux/macOS/Windows; AirPlay HAP pairing, FairPlay, RTSP negotiation and Wi-Fi Direct implemented in Rust.",
      "mDNS auto-discovery, GStreamer pipelines with hardware-encoder probing, GUI sender/receiver binaries.",
    ],
    tech: ["Rust", "GStreamer", "WebRTC", "mDNS"],
    href: "https://github.com/Developer1010x/openplay",
  },
  {
    name: "agentic-devops",
    tag: "LLM · DevOps",
    summary: "AI-powered CI/CD pipeline generator and monitor for GitHub, GitLab and Gitea.",
    bullets: ["Turns a repo and intent into a working pipeline, then watches the runs."],
    tech: ["Python", "LLMs", "CI/CD"],
    href: "https://github.com/Developer1010x/agentic-devops",
  },
  {
    name: "pybridge.ai",
    tag: "LLM · Tooling",
    summary: "Control AI from your phone — routes WhatsApp, Telegram, Email and iMessage to Claude, OpenAI or Ollama.",
    bullets: ["Docker deployment plus a web control panel."],
    tech: ["Python", "Docker", "LLM APIs"],
    href: "https://github.com/Developer1010x/pybridge.ai",
  },
  {
    name: "LLM Terminal",
    tag: "LLM · CLI",
    summary: "Lightweight terminal-based LLM assistant — conversational AI from the command line.",
    bullets: ["Quick AI queries without leaving the shell."],
    tech: ["Python", "LLM APIs"],
    href: "https://github.com/Developer1010x/LLM_Terminal",
  },
  {
    name: "Deepfake Audio & AI-Content Detection",
    tag: "ML · Audio",
    summary: "Detects deepfake audio and AI-generated content using deep learning and signal analysis.",
    bullets: ["Flags synthesised or cloned speech, trained on public audio-deepfake datasets. Research paper upcoming."],
    tech: ["Python", "PyTorch", "Signal processing"],
    href: "https://github.com/Developer1010x/Deepfake-Audio-and-AI-Content-Detection",
  },
  {
    name: "KnotesNeo",
    tag: "TypeScript · Next.js · Static",
    summary: "A study-material catalogue built around the problem that its links keep dying.",
    bullets: [
      "Study material lives in Drive folders owned by students who graduate, and those folders get purged — so a link that worked last year quietly dies. A weekly checker distinguishes \"deleted\" from \"needs an institutional login\", badges dead links in the UI, and turns the failures into a public /gaps page: a to-do list for anyone who wants to help.",
      "16 departments → year → semester → subject, with client-side search, a command palette, bookmarks and progress, a PWA, and an RSS feed dated from git history.",
      "538 statically prerendered pages, TypeScript strict, no backend and no database.",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind"],
    href: "https://github.com/Developer1010x/KnotesCentral-Source-Code",
  },
  {
    name: "universal-converter",
    tag: "Python · CLI",
    summary: "A file-conversion toolkit that routes across converters instead of only matching pairs directly.",
    bullets: [
      "Breadth-first route search over the converter registry, so a pair with no direct converter is reached through intermediates rather than failing.",
      "A --doctor capability audit that reports which conversions genuinely work on this machine given the installed optional dependencies, instead of advertising formats it cannot handle.",
    ],
    tech: ["Python", "ffmpeg", "Pillow", "pandas"],
    href: "https://github.com/Developer1010x/universal-converter",
  },
  {
    name: "MP3 Studio",
    tag: "Python · Desktop · Audio",
    summary: "Desktop editor for MP3 metadata, album art, lyrics and EQ, packaged for the Snap Store.",
    bullets: [
      "Tag editor with automatic album-art and lyrics fetch, a five-band equaliser with presets, and batch export across a queue.",
      "Non-destructive: EQ is applied only on export, while tag edits are written in place.",
    ],
    tech: ["Python", "Tkinter", "pydub", "mutagen", "Snapcraft"],
    href: "https://github.com/Developer1010x/mp3-studio",
  },
  {
    name: "World Monitor",
    tag: "Open-source contribution · TypeScript",
    summary: "Contributor to a real-time geopolitical and financial intelligence dashboard — not my project.",
    bullets: [
      "Merged upstream PR koala73/worldmonitor#5459: an expandable terminal price chart with its own interaction layer for the markets panel, plus a fix to the OpenSky dev proxy path. +892 / −39 across 37 files.",
      "The codebase is ~330k lines of TypeScript with roughly 40 contributors, 933 test files, 21 CI workflows and 281 protobuf contracts. Getting a change through that review gate is the point of listing it.",
    ],
    tech: ["TypeScript", "Vite", "deck.gl", "Protobuf"],
    href: "https://github.com/koala73/worldmonitor/pull/5459",
  },
];

export const publications = [
  {
    title: "EduConnect: A Smart Solution for Streamlined School Administrations",
    venue: "Springer ICTIS 2025, Bangkok (ICT for Intelligent Systems, Vol. 9)",
    href: "https://link.springer.com/book/10.1007/978-981-96-8750-3",
    note: "Smart school-administration platform for rural schools: video conferencing, secure chat, personalised learning dashboards.",
  },
  {
    title: "An Empirical Study of ResNet50 Hyperparameter Tuning for Plant Disease Classification",
    venue: "IEEE Xplore, Nov 2024",
    href: "https://ieeexplore.ieee.org/document/10816835",
    note: "Systematic tuning of learning rate, batch size, optimiser and augmentation, with the accuracy trade-offs measured.",
  },
  {
    title: "Web-Server Controlled Rover with Robotic Arm and Object Detection",
    venue: "IEEE Xplore, Nov 2024",
    href: "https://ieeexplore.ieee.org/document/10816816",
    note: "A rover controlled over a web server: 4-DOF robotic arm with real-time object detection (YOLOv3) on an ESP32.",
  },
];

export const education = [
  {
    school: "R V College of Engineering (VTU)",
    degree: "B.E. Computer Science & Engineering",
    grade: "First Class",
    period: "Dec 2021 – Aug 2025",
    note: "Won the department final-year major project; authored five research papers (three published, two under review). Active in NSS, the Accelerate Club and the Photography Club. Best All-Rounder, NSS.",
  },
  {
    school: "National Academy of Learning",
    degree: "Higher Secondary (Class 11–12), Science (PCMC)",
    grade: "Physics, Maths, Chemistry, Computer Science — with Python",
    period: "2019 – 2021",
    note: "Received undergraduate offers in Mechanical Engineering from Liverpool, Leeds, Warwick, Manchester and Edinburgh.",
  },
];

// Freelance services offering.
export const services = [
  {
    title: "RAG systems that hold up",
    body:
      "Retrieval-augmented systems over your own corpus — hybrid retrieval, reranking, and a labelled evaluation harness wired into CI so quality is measured, not hoped for. The same discipline behind Arogya-Sathi's 62-case, CI-gated safety eval (recall 1.00).",
    points: ["Corpus ingestion + hybrid (BM25 + dense) retrieval", "Cross-encoder reranking", "Golden-set eval harness as a CI merge gate", "Cost & latency instrumentation"],
  },
  {
    title: "DevOps / SRE, end to end",
    body:
      "The platform your product runs on — CI/CD, infrastructure-as-code, containerisation, observability and incident runbooks. Built the DevOps/SRE function from scratch at a founding-team startup and carry the pager for it.",
    points: ["CI/CD pipelines (GitHub Actions, GitLab)", "IaC with OpenTofu / Ansible", "Docker & Kubernetes", "Observability, alerting, runbooks", "Auth: Zitadel / OAuth / RBAC"],
  },
  {
    title: "LLM & agent pipelines",
    body:
      "Multi-agent and LLM systems over MCP with LangGraph/LangChain, kept on-device with local models where the data is sensitive, and shipped as a monitored service — not a demo.",
    points: ["Multi-agent workflows (LangGraph, MCP)", "Local/offline LLM deployment", "Evaluation & guardrails", "Backend APIs (FastAPI)"],
  },
];

// Social / community — volunteering, clubs, honours.
export const community = {
  honours: [
    { title: "Best All-Rounder — NSS", note: "Recognised for contribution to the National Service Scheme at RVCE." },
  ],
  organisations: [
    { name: "National Service Scheme (NSS), RVCE", role: "Volunteer", note: "Community-service and social-outreach activities." },
    { name: "Accelerate Club, RVCE", role: "Member", note: "" },
    { name: "Photography Club, RVCE", role: "Member", note: "" },
  ],
};

// Blog posts. Plain content, no MDX.
//
// A post is PUBLISHED only when it has a non-empty `body`: an array of
// paragraphs. Posts without one are listed as planned and are not linked, do not
// get a generated page, and stay out of the sitemap — so the site never shows a
// real headline that dead-ends in an empty page.
export type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  body?: string[];
};

export const posts: Post[] = [
  {
    slug: "what-oomkilled-really-means",
    title: "What OOMKilled Actually Means (from someone who's paged for it)",
    date: "2026-08-11",
    tag: "systems",
    excerpt:
      "Exit code 137 isn't the scheduler — it's the kernel's cgroup OOM killer. What the kernel is actually doing when a pod dies, and why request=limit is often the real fix.",
  },
  {
    slug: "eval-harness-before-retrieval",
    title: "Build the Eval Harness Before the Retriever",
    date: "2026-08-11",
    tag: "ml",
    excerpt:
      "You cannot improve what you cannot measure. Why a labelled golden set + recall@k in CI should come first in any RAG build — and how a 62-case harness caught a missed self-harm disclosure.",
  },
  {
    slug: "fully-tested-still-broken",
    title: "Fully Unit-Tested, Still Broken",
    date: "2026-08-11",
    tag: "engineering",
    excerpt:
      "A codebase with 68 green tests where nothing works, because no binary constructs the pieces. Compiles-and-tests-green ≠ works — a lesson from wiring up a Rust screen-caster.",
  },
];
