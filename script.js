const content = {
  zh: {
    htmlLang: "zh-CN",
    title: "王肇国 | Zhaoguo Wang",
    nav: {
      researchAgenda: "研究方向",
      researchProjects: "代表性工作",
      publications: "发表论文",
      teaching: "课程教学",
      honors: "学术荣誉",
      fundedProjects: "科研项目",
      academicService: "学术服务",
      studentDestinations: "学生去向",
    },
    hero: {
      name: "王肇国",
      role: "上海交通大学计算机学院 教授、博导",
      contact: "联系方式：zhaoguowang@sjtu.edu.cn",
      lead:
        "我研究如何让真实世界里的复杂系统既快又可信：从并行与分布式数据库，到由形式化方法支撑的系统代码推理，再到能自主设计、执行并优化实验的 AI-native 基础设施。",
    },
    positioning: {
      lead: [
        "<strong>愿景：</strong>过去几十年里，计算机系统经历了从互联网、智能手机，到今天大模型和智能体的多次应用范式变革。计算机系统所服务的场景、对象和边界随之不断变化，每次变化都会带来新的抽象缺口：系统理论和架构往往无法满足新应用场景下的功能、性能与可靠性需求。",
        "我研究兴趣是从应用场景出发，沿着系统理论到系统架构的路径，构建面向新应用场景的计算机系统。因为我的学术背景偏向分布式系统理论与形式化方法，所以在定义和解决问题时，更关注系统的抽象、语义与可验证性，以及整体的一致性、可靠性与可扩展性。",
      ],
    },
    researchAgenda: {
      eyebrow: "研究方向",
      title: "研究方向",
      note:
        "我的研究方向聚焦系统软件理论与架构，根据具体应用场景分为以下三个方面：",
      projectLabel: "代表性工作：",
      items: [
        {
          id: "ai-native-systems",
          title: "面向系统软件的自主编程范式",
          description:
            "研究如何利用Coding Agent自主构建操作系统、数据库等复杂系统软件，保证正确性、性能与可靠性的同时，还具备自主演进能力。",
          projects: ["FM-Agent"],
        },
        {
          id: "verified-data-systems",
          title: "面向Web应用的数据系统理论",
          description:
            "针对现代Web应用对数据管理的新需求，研究新型数据库系统抽象与理论，在一致性、可靠性及性能等多维目标之间实现良好平衡。",
          projects: ["SQLSolver", "WeTune", "Ad Hoc Transactions"],
        },
        {
          id: "autonomous-science",
          title: "面向自主科研的系统软件体系",
          description:
            "面向生物、化学等领域自主科研的新范式，需要研究新型系统软件，协同AI、领域数据与硬件仪器，实现长期稳定的自主科学发现。",
          projects: ["AutoDNA"],
        },
      ],
    },
    publications: {
      eyebrow: "论文",
      title: "发表论文",
      note: "以下是我带领团队主导发表的论文列表，我也参与了一些有趣的工作，但不包含在这个列表中。",
      expandLabel: "Learn more",
      collapseLabel: "Show less",
      groups: [
        {
          year: "2026",
          items: [
            "[EuroSys] LLMFolder: Revisiting Constant Folding in Large Language Models.",
            "[ICDE] DIndex: An Efficient On-Disk Learned Index for Memory-Constrained Environments.",
          ],
        },
        {
          year: "2025",
          items: [
            "[VLDB] GRewriter: Practical Query Rewriting with Automatic Rule Set Expansion in GaussDB.",
            "[VLDB] Sonata: Multi-Database Transactions Made Fast and Serializable.",
            "[SIGMOD] Automated Validating and Fixing of Text-to-SQL Translation with Execution Consistency.",
            "[CACM] Many Faces of Ad Hoc Transactions.",
          ],
        },
        {
          year: "2024 - 2021",
          items: [
            "[SIGMOD] Proving Query Equivalence Using Linear Integer Arithmetic.",
            "[SIGMOD] WeBridge: Synthesizing Stored Procedures for Large-Scale Real-World Web Applications.",
            "[OSDI] Automated Verification of Idempotence for Stateful Serverless Applications.",
            "[SIGMOD] WeTune: Automatic Discovery and Verification of Query Rewrite Rules.",
            "[OSDI] Polyjuice: High-Performance Transactions via Learned Concurrency Control.",
          ],
        },
      ],
    },
    honors: {
      eyebrow: "荣誉",
      title: "学术荣誉",
      items: [
        "2025年 CCF青年科技奖",
        "2024年 Communications of ACM 亮点论文及封面文章",
        "2023年 ACM SIGMOD 研究亮点奖",
        "2022年 ACM SIGMOD 最佳论文优胜奖",
        "2022年 华为火花奖",
        "2021年 ACM ChinaSys 新星奖",
        "2020年 华为奥林帕斯先锋奖",
      ],
    },
    fundedProjects: {
      eyebrow: "项目",
      title: "科研项目",
      items: [
        {
          agency: "国家自然科学基金委员会",
          type: "优秀青年基金项目",
          number: "62422209",
          title: "高性能事务性存储系统",
          period: "2025-01 至 2027-12",
          role: "项目负责人",
        },
        {
          agency: "国家科技部",
          type: "国家重点研发计划项目",
          number: "2023YFB3002000",
          title: "面向新一代国产超算系统的总体与测评技术",
          period: "2023-12 至 2026-11",
          role: "项目负责人",
        },
        {
          agency: "国家自然科学基金委员会",
          type: "面上项目",
          number: "62272304",
          title: "分布式存储系统的一致性关键技术研究",
          period: "2023-01 至 2026-12",
          role: "项目负责人",
        },
      ],
    },
    teaching: {
      eyebrow: "教学",
      title: "课程教学",
      note:
        "我曾在纽约大学、上海交通大学开设过计算机系统组织、操作系统、计算机系统工程等系列课程，目前主要讲授两门课程：离散数学（本科），并行与分布式数据库系统（研究生）。",
      courses: [
        {
          title: "离散数学",
          href: "https://ipads.se.sjtu.edu.cn/courses/cdm/",
          level: "本科",
          description:
            "该门课程主要面向上海交通大学软件工程专业大二学生，不仅介绍数理逻辑、集合论等基本知识，同时还增加了大量篇幅介绍离散数学在计算机领域的应用。",
        },
        {
          title: "并行与分布式数据库系统",
          href: "https://ipads.se.sjtu.edu.cn/courses/pdds/",
          level: "研究生",
          description:
            "该门课程主要面向硕士和博士研究生，由上海交通大学和华为联合开设。高校部分负责介绍数据库理论知识，企业部分则介绍这些理论知识在产业中的真实应用及挑战。",
        },
      ],
    },
    researchProjects: {
      eyebrow: "工作",
      title: "代表性工作",
      note:
        "围绕以上研究方向，我与我的学生、同事共同开展了一系列有趣的工作，以下是我个人比较喜欢的几个代表性工作：",
      detailLabel: "详情",
      learnMoreLabel: "了解详情",
      groups: [
        {
          id: "projects-ai-native-systems",
          title: "面向系统软件的自主编程范式",
          items: [
            {
              slug: "fm-agent",
              detailHref: "https://fm-agent.ai/",
              status: "新方向",
              year: "2026",
              title: "FM-Agent",
              media: {
                src: "./assets/fm-agent.gif",
                alt: "FM-Agent demo animation",
              },
              summary:
                "将形式化方法与大语言模型深度融合，实现对大规模系统软件正确性的自动推理，通过与编程智能体协同，达到面向系统软件自主编程的完整闭环。",
              question: "如果形式化方法能自己读懂大规模系统代码，会发生什么？",
              story:
                "形式化验证长期受限于规格编写和人工建模。FM-Agent 试图把这一步交给 agent：从函数意图出发，自主生成正确性规格，用自然语言 Hoare Logic 推理代码，并从推理链中诊断错误。它把“证明一个小模型”推进到“和真实代码库对话”。",
              tags: ["formal methods", "agent", "system code"],
              links: [{ label: "Website", href: "https://fm-agent.ai/" }],
              details: {
                intro: [
                  "FM-Agent 关注 Coding Agent 时代的系统代码正确性问题。它尝试让大模型和形式化方法协同工作，从真实系统代码中理解函数意图、生成正确性规格，并围绕规格展开推理与错误诊断。",
                  "这个项目的目标不是把形式化验证停留在小规模模型上，而是让形式化思想进入真实代码库，成为自主编写系统软件时保证正确性、性能与可靠性的基础能力。",
                ],
                news: ["FM-Agent 项目网站已上线，后续将继续补充论文、系统演示和代码信息。"],
                websites: [{ label: "FM-Agent 项目网站", href: "https://fm-agent.ai/" }],
                papers: [{ label: "论文信息整理中" }],
                code: [{ label: "代码信息整理中" }],
              },
              featured: true,
            },
          ],
        },
        {
          id: "projects-autonomous-science",
          title: "面向自主科研的系统软件体系",
          items: [
            {
              slug: "autodna",
              status: "新方向",
              year: "2025",
              title: "AutoDNA",
              detailHref: "https://arxiv.org/abs/2507.02379",
              media: {
                src: "./assets/autodna.gif",
                alt: "AutoDNA demo animation",
              },
              summary:
                "构建面向自主科学实验室的AI原生系统软件栈，使模型理解仪器能力，仪器充分发挥模型智力，实现复杂科学实验的自主设计、执行与优化，最终达到自主科学发现的目的。",
              question: "AI 能不能不只给实验建议，而是真的管理复杂实验？",
              story:
                "AutoDNA 把 autonomous laboratory 做成一个 AI-native 系统问题：模型、实验和仪器共同设计，多用户请求并发进入，系统自动生成实验流程和优化启发式。它把系统研究带到核酸合成、转录、扩增和测序等复杂实验场景。",
              tags: ["AI for science", "autonomous lab", "biomolecular engineering"],
              links: [{ label: "Paper", href: "https://arxiv.org/abs/2507.02379" }],
              details: {
                intro: [
                  "AutoDNA 面向自主科学实验室这一新兴应用场景，研究如何让模型、领域数据和实验仪器形成可长期运行的系统闭环。",
                  "项目以 DNA 相关实验流程为切入点，把实验设计、仪器执行、反馈优化和多用户请求管理放到同一个系统软件问题中，探索自主科研所需要的软件体系。",
                ],
                news: ["AutoDNA 论文预印本已发布，后续将继续补充项目网站、实验演示和代码信息。"],
                websites: [{ label: "项目网站整理中" }],
                papers: [{ label: "AutoDNA", href: "https://arxiv.org/abs/2507.02379" }],
                code: [{ label: "代码信息整理中" }],
              },
              featured: true,
            },
          ],
        },
        {
          id: "projects-verified-data-systems",
          title: "面向Web应用的数据系统理论",
          items: [
            {
              slug: "ad-hoc-transactions",
              status: "工作",
              year: "2025 / 2022",
              title: "Ad Hoc Transactions",
              detailHref: "https://dl.acm.org/doi/10.1145/3708552",
              media: {
                src: "./assets/ad-hoc-transactions.png",
                alt: "CACM cover highlighting Many Faces of Ad Hoc Transactions",
              },
              summary:
                "重新理解 Web 应用中隐藏在业务代码里的事务语义，为现代数据系统定义更合适的一致性抽象，满足Web应用一致性的同时，提高应用性能的可扩展性。",
              question: "没有显式事务的 Web 应用，究竟在怎样维护一致性？",
              story:
                "很多 Web 应用没有把事务写成数据库层的显式结构，却在业务代码里拼出了临时事务。这个系列把这些隐藏的事务模式翻出来，解释它们为什么存在、哪里有效、哪里危险，也让后续工具有了可以抓住的抽象。",
              tags: ["transactions", "web applications", "empirical systems"],
              links: [{ label: "CACM", href: "https://dl.acm.org/doi/10.1145/3708552" }],
              details: {
                intro: [
                  "Ad Hoc Transactions 关注现代 Web 应用中广泛存在却并未被数据库系统直接表达的一类事务模式。许多应用把一致性逻辑写在业务代码里，而不是通过数据库层的显式事务抽象完成。",
                  "这一系列工作试图重新理解 Web 应用的数据一致性需求：哪些事务语义被隐藏在应用代码中，为什么传统事务抽象不足以表达它们，以及数据库系统可以怎样提供更合适的理论和机制。",
                ],
                news: ["相关工作入选 CACM Research Highlights，并以 Many Faces of Ad Hoc Transactions 形式发表。"],
                websites: [{ label: "项目网站整理中" }],
                papers: [{ label: "Many Faces of Ad Hoc Transactions", href: "https://dl.acm.org/doi/10.1145/3708552" }],
                code: [{ label: "代码与数据整理中" }],
              },
            },
            {
              slug: "wetune",
              status: "工作",
              year: "2022",
              title: "WeTune",
              detailHref: "https://ipads.se.sjtu.edu.cn/werewriter-demo/home",
              media: {
                src: "./assets/wetune.gif",
                alt: "WeTune query rewriting demo animation",
              },
              summary:
                "基于“超优化技术”自动合成高质量SQL优化规则，并用SQLSolver验证合成规则正确性，解决传统手写优化规则周期长、成本高问题，已在GaussDB商业版中落地使用。",
              question: "数据库优化规则能不能由机器从真实 SQL 中自动发现？",
              story:
                "查询重写常常像经验手册：有用，但难以系统扩展。WeTune 从真实 SQL 中发现潜在重写规则，让优化知识不再只依赖专家手写，而是可以从应用实践中被系统化挖掘出来。",
              tags: ["query rewriting", "rule discovery", "database optimization"],
              links: [{ label: "Demo", href: "https://ipads.se.sjtu.edu.cn/werewriter-demo/home" }],
              details: {
                intro: [
                  "WeTune 关注数据库查询重写规则的自动发现。传统查询优化高度依赖专家经验，而现代 Web 应用产生的大量真实 SQL 为自动发现优化规则提供了新的可能。",
                  "项目从真实查询中发现潜在重写规则，把数据库优化知识从手工经验推进到可由系统生成、扩展和复用的形态。",
                ],
                news: ["WeTune 从真实 SQL 出发，探索查询重写规则的自动发现与系统化生成。"],
                websites: [{ label: "WeRewriter Demo", href: "https://ipads.se.sjtu.edu.cn/werewriter-demo/home" }],
                papers: [{ label: "WeTune: Automatic Discovery and Verification of Query Rewrite Rules" }],
                code: [{ label: "代码信息整理中" }],
              },
            },
            {
              slug: "sqlsolver",
              status: "工作",
              year: "2024",
              title: "SQLSolver",
              detailHref: "https://sqlsolver.systems/sqlsolver/home",
              media: {
                src: "./assets/sqlsolver.gif",
                alt: "SQLSolver equivalence checking demo animation",
              },
              summary:
                "SQL等价性验证是数据库的一个核心问题，通过提出全新的SQL验证理论，实现对SQL-92标准全覆盖，已被应用于商业数据库系统的正确性验证、性能优化等场景。",
              question: "两个 SQL 查询是否等价，能不能被系统化证明？",
              story:
                "当查询重写规则可以被自动发现之后，下一步问题是如何相信它们。SQLSolver 用线性整数算术证明查询等价，把数据库优化中的经验判断转化为可检查的逻辑证明。",
              tags: ["query equivalence", "SMT", "formal methods"],
              links: [
                { label: "Demo", href: "https://sqlsolver.systems/sqlsolver/home" },
                { label: "GitHub", href: "https://github.com/SJTU-IPADS/SQLSolver" },
              ],
              details: {
                intro: [
                  "SQLSolver 关注 SQL 查询等价性的形式化证明。查询重写是否正确，是数据库优化能够被系统化生成之后必须回答的核心问题。",
                  "项目通过线性整数算术对查询等价性进行证明，使数据库重写规则和优化结果能够被逻辑工具验证。",
                ],
                news: ["SQLSolver 从等价证明角度推进可验证查询优化。"],
                websites: [{ label: "SQLSolver Demo", href: "https://sqlsolver.systems/sqlsolver/home" }],
                papers: [{ label: "Proving Query Equivalence Using Linear Integer Arithmetic" }],
                code: [{ label: "SQLSolver GitHub", href: "https://github.com/SJTU-IPADS/SQLSolver" }],
              },
            },
          ],
        },
      ],
    },
    workDetail: {
      back: "返回代表性工作",
      basic: "基本介绍",
      news: "新闻",
      websites: "网站",
      papers: "论文",
      code: "代码",
      empty: "后续补充",
    },
    academicService: {
      eyebrow: "服务",
      title: "学术服务",
      groups: [
        {
          title: "社区与组织服务",
          items: [
            "开源鸿蒙智能数据管理 TSG 负责人",
            "ACM ChinaSys 秘书长",
            "CCF 学术工作委员会委员",
            "第 22 期秀湖论坛联合主席",
            "上海市计算机行业协会副会长",
          ],
        },
        {
          title: "编委与青年编委",
          items: ["Data Science and Engineering（DSE）", "Frontiers of Computer Science（FCS）", "中国计算机学会通讯（CCCF）", "电子学报"],
        },
        {
          title: "程序委员会成员",
          items: ["MLSys 2026", "EuroSys 2026/2025", "ICDE 2026", "NSDI 2024", "SoCC 2024/2023"],
        },
      ],
    },
    studentDestinations: {
      eyebrow: "学生",
      title: "学生去向",
      items: [
        { name: "丁浩然", destination: "MIT（Postdoc）", href: "https://haoran-ding.github.io/" },
        { name: "唐楚哲", destination: "EPFL（Postdoc）", href: "https://chuzhe.me/" },
        { name: "张德鑫", destination: "普林斯顿大学（PhD）" },
        { name: "王章翰", destination: "纽约大学（PhD）", href: "https://rabbitwhite1.github.io/" },
        { name: "丁丁", destination: "纽约大学（PhD）", href: "https://derfischer.github.io/" },
        { name: "张津源", destination: "字节跳动", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/jinyuan_zhang" },
        { name: "于乾勉", destination: "Jump Trading", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/qianmian_yu" },
        { name: "张孝东", destination: "阿里巴巴", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/xiaodong_zhang" },
        { name: "王友运", destination: "Jump Trading", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/youyun_wang" },
        { name: "周洲", destination: "网易", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/zhou_zhou" },
        { name: "王寰", destination: "摩根士丹利", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/huan_wang" },
        { name: "王嘉琛", destination: "华为", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/jiachen_wang" },
      ],
    },
  },
  en: {
    htmlLang: "en",
    title: "Zhaoguo Wang",
    nav: {
      researchAgenda: "Research Directions",
      researchProjects: "Representative Work",
      publications: "Publications",
      teaching: "Teaching",
      honors: "Academic Honors",
      fundedProjects: "Research Projects",
      academicService: "Academic Service",
      studentDestinations: "Student Destinations",
    },
    hero: {
      name: "Zhaoguo Wang",
      role: "Professor · School of Computer Science, Shanghai Jiao Tong University",
      contact: "Contact: zhaoguowang@sjtu.edu.cn",
      lead:
        "I study how to make real-world complex systems both fast and reliable: from parallel and distributed database systems, to formal-methods-backed reasoning about system code, to AI-native infrastructure that can design, execute, and optimize scientific experiments.",
    },
    positioning: {
      lead: [
        "<strong>Vision:</strong> Over the past few decades, computer systems have undergone multiple shifts in application paradigms, from the Internet and smartphones to today's era of large language models and agents. The scenarios, objects, and boundaries served by computer systems have kept changing, and each shift creates new abstraction gaps: systems theories and architectures often cannot satisfy the functional, performance, and reliability demands of new application scenarios.",
        "My research starts from application scenarios, seeks to identify and define essential systems problems, and follows the path from systems theory to architecture to build computer systems for emerging applications. Because my academic background leans toward distributed systems theory and formal methods, I pay particular attention to abstraction, semantics, and verifiability when defining and solving problems, as well as consistency, reliability, and scalability at the system level.",
      ],
    },
    researchAgenda: {
      eyebrow: "Research Directions",
      title: "Research Directions",
      note:
        "My research focuses on the theory and architecture of system software, organized into the following three aspects according to specific application scenarios:",
      projectLabel: "Representative work:",
      items: [
        {
          id: "ai-native-systems",
          title: "Autonomous Programming Paradigms for System Software",
          description:
            "Current Coding Agents have the potential to autonomously write complex system software such as operating systems and databases. The core challenge is how to ensure the correctness, performance, and reliability of autonomously generated systems while enabling them to evolve autonomously.",
          projects: ["FM-Agent"],
        },
        {
          id: "verified-data-systems",
          title: "Data System Theory for Web Applications",
          description:
            "Modern Web applications are continuously reshaping how data management systems are used. The core question is how to define database-system abstractions and foundational theory so as to balance consistency, reliability, performance, and other multidimensional requirements.",
          projects: ["SQLSolver", "WeTune", "Ad Hoc Transactions"],
        },
        {
          id: "autonomous-science",
          title: "System Software Stack for Autonomous Research",
          description:
            "For the emerging autonomous-science paradigm in biology, chemistry, and other fields, the core question is how to design system-software abstractions and architectures so that AI models can understand scientific goals and instrument capabilities, enabling long-term, stable, and reproducible autonomous scientific discovery.",
          projects: ["AutoDNA"],
        },
      ],
    },
    publications: {
      eyebrow: "Publications",
      title: "Publications",
      note:
        "The following is a list of papers primarily led by my group. I have also participated in other interesting work, which is not included here.",
      expandLabel: "Learn more",
      collapseLabel: "Show less",
      groups: [
        {
          year: "2026",
          items: [
            "[EuroSys] LLMFolder: Revisiting Constant Folding in Large Language Models.",
            "[ICDE] DIndex: An Efficient On-Disk Learned Index for Memory-Constrained Environments.",
          ],
        },
        {
          year: "2025",
          items: [
            "[VLDB] GRewriter: Practical Query Rewriting with Automatic Rule Set Expansion in GaussDB.",
            "[VLDB] Sonata: Multi-Database Transactions Made Fast and Serializable.",
            "[SIGMOD] Automated Validating and Fixing of Text-to-SQL Translation with Execution Consistency.",
            "[CACM] Many Faces of Ad Hoc Transactions.",
          ],
        },
        {
          year: "2024 - 2021",
          items: [
            "[SIGMOD] Proving Query Equivalence Using Linear Integer Arithmetic.",
            "[SIGMOD] WeBridge: Synthesizing Stored Procedures for Large-Scale Real-World Web Applications.",
            "[OSDI] Automated Verification of Idempotence for Stateful Serverless Applications.",
            "[SIGMOD] WeTune: Automatic Discovery and Verification of Query Rewrite Rules.",
            "[OSDI] Polyjuice: High-Performance Transactions via Learned Concurrency Control.",
          ],
        },
      ],
    },
    honors: {
      eyebrow: "Honors",
      title: "Academic Honors",
      items: [
        "2025 CCF Young Scientist Award",
        "2024 Communications of the ACM Research Highlight and Cover Article",
        "2023 ACM SIGMOD Research Highlight Award",
        "2022 ACM SIGMOD Best Paper Award Runner-up",
        "2022 Huawei Spark Award",
        "2021 ACM ChinaSys Rising Star",
        "2020 Huawei Olympus Pioneer Award",
      ],
    },
    fundedProjects: {
      eyebrow: "Projects",
      title: "Research Projects",
      items: [
        {
          agency: "National Natural Science Foundation of China",
          type: "Excellent Young Scientists Fund",
          number: "62422209",
          title: "High-Performance Transactional Storage Systems",
          period: "Jan. 2025 to Dec. 2027",
          role: "Principal Investigator",
        },
        {
          agency: "Ministry of Science and Technology of China",
          type: "National Key Research and Development Program",
          number: "2023YFB3002000",
          title:
            "System Architecture and Evaluation Technologies for Next-Generation Domestic Supercomputing Systems",
          period: "Dec. 2023 to Nov. 2026",
          role: "Principal Investigator",
        },
        {
          agency: "National Natural Science Foundation of China",
          type: "General Program",
          number: "62272304",
          title: "Key Consistency Technologies for Distributed Storage Systems",
          period: "Jan. 2023 to Dec. 2026",
          role: "Principal Investigator",
        },
      ],
    },
    teaching: {
      eyebrow: "Teaching",
      title: "Teaching",
      note:
        "I have taught courses on computer systems organization, operating systems, and computer systems engineering at New York University and Shanghai Jiao Tong University. I currently teach two courses: Discrete Mathematics (Undergraduate) and Parallel and Distributed Database Systems (Graduate).",
      courses: [
        {
          title: "Discrete Mathematics",
          href: "https://ipads.se.sjtu.edu.cn/courses/cdm/",
          level: "Undergraduate",
          description:
            "This course is mainly for second-year Software Engineering students at Shanghai Jiao Tong University. It introduces foundations such as mathematical logic and set theory, and devotes substantial coverage to applications of discrete mathematics in computer science.",
        },
        {
          title: "Parallel and Distributed Database Systems",
          href: "https://ipads.se.sjtu.edu.cn/courses/pdds/",
          level: "Graduate",
          description:
            "This course is mainly for master's and Ph.D. students, and is jointly offered by Shanghai Jiao Tong University and Huawei. The university side introduces database theory, while the industry side discusses how these ideas are used and challenged in real production systems.",
        },
      ],
    },
    researchProjects: {
      eyebrow: "Work",
      title: "Representative Work",
      note:
        "Around the research directions above, I have worked with my students and colleagues on a series of interesting projects. The following are several representative works that I personally like:",
      detailLabel: "Details",
      learnMoreLabel: "Learn more",
      groups: [
        {
          id: "projects-ai-native-systems",
          title: "Autonomous Programming Paradigms for System Software",
          items: [
            {
              slug: "fm-agent",
              detailHref: "https://fm-agent.ai/",
              status: "New direction",
              year: "2026",
              title: "FM-Agent",
              media: {
                src: "./assets/fm-agent.gif",
                alt: "FM-Agent demo animation",
              },
              summary:
                "Deeply integrating formal methods with large language models to automatically reason about the correctness of large-scale system software, and collaborating with programming agents to form a complete closed loop for autonomous system-software programming.",
              question: "What if formal methods could read large-scale system code by themselves?",
              story:
                "Formal verification has long been constrained by specification writing and manual modeling. FM-Agent asks an agent to infer function intent, generate correctness specifications, reason with natural-language Hoare logic, and diagnose bugs from its reasoning trace. It moves the story from proving a small model to collaborating with real codebases.",
              tags: ["formal methods", "agent", "system code"],
              links: [{ label: "Website", href: "https://fm-agent.ai/" }],
              details: {
                intro: [
                  "FM-Agent studies correctness for system code in the era of Coding Agents. It lets large language models and formal methods work together to infer function intent from real system code, generate correctness specifications, and reason about bugs around those specifications.",
                  "The goal is not to keep formal verification confined to small models, but to bring formal reasoning into real codebases as a foundational capability for ensuring correctness, performance, and reliability in autonomous system-software programming.",
                ],
                news: ["The FM-Agent project website is online; papers, demos, and code information will be added as they become ready."],
                websites: [{ label: "FM-Agent Website", href: "https://fm-agent.ai/" }],
                papers: [{ label: "Paper information to be added" }],
                code: [{ label: "Code information to be added" }],
              },
              featured: true,
            },
          ],
        },
        {
          id: "projects-autonomous-science",
          title: "System Software Stack for Autonomous Research",
          items: [
            {
              slug: "autodna",
              status: "New direction",
              year: "2025",
              title: "AutoDNA",
              detailHref: "https://arxiv.org/abs/2507.02379",
              media: {
                src: "./assets/autodna.gif",
                alt: "AutoDNA demo animation",
              },
              summary:
                "Building an AI-native system software stack for autonomous scientific laboratories, enabling models to understand instrument capabilities, instruments to leverage model intelligence, and complex experiments to be autonomously designed, executed, and optimized toward autonomous scientific discovery.",
              question: "Can AI manage complex experiments, not merely suggest them?",
              story:
                "AutoDNA frames an autonomous laboratory as an AI-native systems problem: models, experiments, and instruments are co-designed; multiple user requests arrive concurrently; the system generates procedures and optimization heuristics. It brings systems research into nucleic-acid synthesis, transcription, amplification, and sequencing.",
              tags: ["AI for science", "autonomous lab", "biomolecular engineering"],
              links: [{ label: "Paper", href: "https://arxiv.org/abs/2507.02379" }],
              details: {
                intro: [
                  "AutoDNA studies autonomous laboratories as a new systems-software scenario, where models, domain data, and scientific instruments must form a long-running closed loop.",
                  "Starting from DNA-related workflows, the project connects experiment design, instrument execution, feedback optimization, and multi-user request management as one system problem.",
                ],
                news: ["The AutoDNA preprint is available; project website, demos, and code information will be added later."],
                websites: [{ label: "Project website to be added" }],
                papers: [{ label: "AutoDNA", href: "https://arxiv.org/abs/2507.02379" }],
                code: [{ label: "Code information to be added" }],
              },
              featured: true,
            },
          ],
        },
        {
          id: "projects-verified-data-systems",
          title: "Data System Theory for Web Applications",
          items: [
            {
              slug: "ad-hoc-transactions",
              status: "Work",
              year: "2025 / 2022",
              title: "Ad Hoc Transactions",
              detailHref: "https://dl.acm.org/doi/10.1145/3708552",
              media: {
                src: "./assets/ad-hoc-transactions.png",
                alt: "CACM cover highlighting Many Faces of Ad Hoc Transactions",
              },
              summary:
                "Revisiting transaction semantics hidden in Web application business logic, and defining more suitable consistency abstractions for modern data systems so that Web applications can meet consistency requirements while improving performance scalability.",
              question: "How do web applications preserve consistency when transactions are not explicit?",
              story:
                "Many web applications assemble temporary transaction semantics in application code instead of declaring them cleanly at the database layer. This line of work exposes those hidden patterns, explains why they exist, where they help, and where they fail, creating abstractions that later tools can use.",
              tags: ["transactions", "web applications", "empirical systems"],
              links: [{ label: "CACM", href: "https://dl.acm.org/doi/10.1145/3708552" }],
              details: {
                intro: [
                  "Ad Hoc Transactions studies transaction patterns that are common in modern Web applications but are not directly expressed by database systems. Many applications encode consistency logic in business code instead of using explicit database-layer transactions.",
                  "This line of work rethinks data consistency for Web applications: what semantics are hidden in application code, why traditional transaction abstractions are insufficient, and what theories and mechanisms databases should provide.",
                ],
                news: ["The work was featured as a CACM Research Highlight under the title Many Faces of Ad Hoc Transactions."],
                websites: [{ label: "Project website to be added" }],
                papers: [{ label: "Many Faces of Ad Hoc Transactions", href: "https://dl.acm.org/doi/10.1145/3708552" }],
                code: [{ label: "Code and data to be added" }],
              },
            },
            {
              slug: "wetune",
              status: "Work",
              year: "2022",
              title: "WeTune",
              detailHref: "https://ipads.se.sjtu.edu.cn/werewriter-demo/home",
              media: {
                src: "./assets/wetune.gif",
                alt: "WeTune query rewriting demo animation",
              },
              summary:
                "Automatically synthesizing high-quality SQL optimization rules based on superoptimization, and using SQLSolver to verify the correctness of synthesized rules, reducing the long cycle and high cost of traditional hand-written optimization rules; the technology has been deployed in the commercial version of GaussDB.",
              question: "Can database rewrite rules be discovered automatically from real SQL?",
              story:
                "Query rewriting often behaves like a handbook of expert tricks: useful, but hard to scale systematically. WeTune discovers potential rewrite rules from real SQL, making optimization knowledge something that can be mined from application practice.",
              tags: ["query rewriting", "rule discovery", "database optimization"],
              links: [{ label: "Demo", href: "https://ipads.se.sjtu.edu.cn/werewriter-demo/home" }],
              details: {
                intro: [
                  "WeTune studies automatic discovery of database query rewrite rules. Traditional query optimization relies heavily on expert knowledge, while real SQL from modern Web applications makes automatic rule discovery possible.",
                  "The project synthesizes high-quality rewrite rules from real queries, uses SQLSolver to verify their correctness, and turns optimization knowledge from hand-written expertise into something systems can generate, expand, and reuse.",
                ],
                news: ["WeTune explores automatic discovery and systematic generation of query rewrite rules from real SQL, and has been deployed in the commercial version of GaussDB."],
                websites: [{ label: "WeRewriter Demo", href: "https://ipads.se.sjtu.edu.cn/werewriter-demo/home" }],
                papers: [{ label: "WeTune: Automatic Discovery and Verification of Query Rewrite Rules" }],
                code: [{ label: "Code information to be added" }],
              },
            },
            {
              slug: "sqlsolver",
              status: "Work",
              year: "2024",
              title: "SQLSolver",
              detailHref: "https://sqlsolver.systems/sqlsolver/home",
              media: {
                src: "./assets/sqlsolver.gif",
                alt: "SQLSolver equivalence checking demo animation",
              },
              summary:
                "SQL equivalence verification is a core database problem. By proposing a new SQL verification theory, SQLSolver achieves full coverage of the SQL-92 standard and has been applied to correctness verification, performance optimization, and other scenarios in commercial database systems.",
              question: "Can SQL query equivalence be proved systematically?",
              story:
                "Once rewrite rules can be discovered automatically, the next question is how to trust them. SQLSolver proves query equivalence using linear integer arithmetic, turning optimization judgments into checkable logical proofs.",
              tags: ["query equivalence", "SMT", "formal methods"],
              links: [
                { label: "Demo", href: "https://sqlsolver.systems/sqlsolver/home" },
                { label: "GitHub", href: "https://github.com/SJTU-IPADS/SQLSolver" },
              ],
              details: {
                intro: [
                  "SQLSolver studies formal proof of SQL query equivalence, a core problem in database systems. Whether a rewrite is correct is the central question once database optimizations can be generated systematically.",
                  "By proposing a new verification theory with full SQL-92 coverage, SQLSolver makes database rewrite rules and optimization results checkable by logical tools, and has been used in correctness verification and performance optimization for commercial database systems.",
                ],
                news: ["SQLSolver advances verified query optimization from the equivalence-proving side."],
                websites: [{ label: "SQLSolver Demo", href: "https://sqlsolver.systems/sqlsolver/home" }],
                papers: [{ label: "Proving Query Equivalence Using Linear Integer Arithmetic" }],
                code: [{ label: "SQLSolver GitHub", href: "https://github.com/SJTU-IPADS/SQLSolver" }],
              },
            },
          ],
        },
      ],
    },
    workDetail: {
      back: "Back to Representative Work",
      basic: "Overview",
      news: "News",
      websites: "Website",
      papers: "Papers",
      code: "Code",
      empty: "To be added",
    },
    academicService: {
      eyebrow: "Service",
      title: "Academic Service",
      groups: [
        {
          title: "Community and Professional Service",
          items: [
            "Lead of the OpenHarmony Intelligent Data Management TSG",
            "Secretary-General of ACM ChinaSys",
            "Member of the CCF Academic Working Committee",
            "Co-chair of the 22nd Beautiful Lake Seminars",
            "Vice President of the Shanghai Computer Industry Association",
          ],
        },
        {
          title: "Editorial Boards and Young Editorial Boards",
          items: [
            "Data Science and Engineering (DSE)",
            "Frontiers of Computer Science (FCS)",
            "Communications of CCF (CCCF)",
            "Chinese Journal of Electronics",
          ],
        },
        {
          title: "Program Committees",
          items: ["MLSys 2026", "EuroSys 2026/2025", "ICDE 2026", "NSDI 2024", "SoCC 2024/2023"],
        },
      ],
    },
    studentDestinations: {
      eyebrow: "Students",
      title: "Student Destinations",
      items: [
        { name: "Haoran Ding", destination: "MIT (Postdoc)", href: "https://haoran-ding.github.io/" },
        { name: "Chuzhe Tang", destination: "EPFL (Postdoc)", href: "https://chuzhe.me/" },
        { name: "Dexin Zhang", destination: "Princeton University (PhD)" },
        { name: "Zhanghan Wang", destination: "New York University (PhD)", href: "https://rabbitwhite1.github.io/" },
        { name: "Ding Ding", destination: "New York University (PhD)", href: "https://derfischer.github.io/" },
        { name: "Jinyuan Zhang", destination: "ByteDance", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/jinyuan_zhang" },
        { name: "Qianmian Yu", destination: "Jump Trading", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/qianmian_yu" },
        { name: "Xiaodong Zhang", destination: "Alibaba", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/xiaodong_zhang" },
        { name: "Youyun Wang", destination: "Jump Trading", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/youyun_wang" },
        { name: "Zhou Zhou", destination: "NetEase", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/zhou_zhou" },
        { name: "Huan Wang", destination: "Morgan Stanley", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/huan_wang" },
        { name: "Jiachen Wang", destination: "Huawei", href: "https://ipads.se.sjtu.edu.cn/zh/pub/members/jiachen_wang" },
      ],
    },
  },
};

const ids = {
  heroName: "hero-name",
  heroRole: "hero-role",
  heroContact: "hero-contact",
  heroLead: "hero-lead",
  researchAgendaEyebrow: "research-agenda-eyebrow",
  researchAgendaTitle: "research-agenda-title",
  researchAgendaNote: "research-agenda-note",
  researchDirectionStack: "research-direction-stack",
  publicationsEyebrow: "publications-eyebrow",
  publicationsTitle: "publications-title",
  publicationsNote: "publications-note",
  publicationStack: "publication-stack",
  publicationToggle: "publication-toggle",
  honorsEyebrow: "honors-eyebrow",
  honorsTitle: "honors-title",
  honorsList: "honors-list",
  fundedProjectsEyebrow: "funded-projects-eyebrow",
  fundedProjectsTitle: "funded-projects-title",
  fundedProjectsList: "funded-projects-list",
  teachingEyebrow: "teaching-eyebrow",
  teachingTitle: "teaching-title",
  teachingNote: "teaching-note",
  teachingList: "teaching-list",
  researchProjectsEyebrow: "research-projects-eyebrow",
  researchProjectsTitle: "research-projects-title",
  researchProjectsNote: "research-projects-note",
  researchProjectsStack: "research-projects-stack",
  academicServiceEyebrow: "academic-service-eyebrow",
  academicServiceTitle: "academic-service-title",
  academicServiceList: "academic-service-list",
  studentDestinationsEyebrow: "student-destinations-eyebrow",
  studentDestinationsTitle: "student-destinations-title",
  studentDestinationsList: "student-destinations-list",
};

function byId(id) {
  return document.getElementById(id);
}

function externalAttrs(href) {
  return href && href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
}

function renderLinks(links) {
  return (links || [])
    .map((link) =>
      link.href
        ? `<a href="${link.href}"${externalAttrs(link.href)}>${link.label}</a>`
        : `<span class="pending-link">${link.label}</span>`,
    )
    .join("");
}

function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderCourses(courses) {
  return courses
    .map(
      (course) => `
        <article class="course-item">
          <h3>
            <a href="${course.href}"${externalAttrs(course.href)}>${course.title}</a>
            <span>${course.level}</span>
          </h3>
          <p>${course.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderFundedProjects(projects) {
  const separator = document.documentElement.lang === "zh-CN" ? "，" : ", ";
  return projects
    .map(
      (project) => `
        <article class="funded-project-item">
          <h3>${project.title}</h3>
          <p>${project.agency}${separator}${project.type}${separator}${project.number}</p>
          <p>${project.period}${separator}${project.role}</p>
        </article>
      `,
    )
    .join("");
}

function renderAcademicService(groups) {
  return groups
    .map(
      (group) => `
        <article class="service-panel">
          <h3>${group.title}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderStudentDestinations(items) {
  return items
    .map((item) => {
      const name = item.href
        ? `<a href="${item.href}"${externalAttrs(item.href)}>${item.name}</a>`
        : `<span>${item.name}</span>`;
      return `
        <article class="student-destination-item">
          <h3>${name}</h3>
          <p>${item.destination}</p>
        </article>
      `;
    })
    .join("");
}

function renderParagraphs(items) {
  return items.map((item) => `<p>${item}</p>`).join("");
}

const workDisplayOrder = ["FM-Agent", "SQLSolver", "WeTune", "AutoDNA", "Ad Hoc Transactions"];

function homePrefix() {
  return document.body.dataset.homePrefix || ".";
}

function worksPrefix() {
  return document.body.dataset.worksPrefix || "./works";
}

function workHref(slug) {
  return `${worksPrefix()}/${slug}.html`;
}

function projectHref(project) {
  return project.detailHref || workHref(project.slug);
}

function flattenProjects(page) {
  const orderRank = new Map(workDisplayOrder.map((title, index) => [title, index]));
  return page.researchProjects.groups
    .flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        groupId: group.id,
        groupTitle: group.title,
      })),
    )
    .sort((left, right) => {
      const leftRank = orderRank.get(left.title) ?? Number.MAX_SAFE_INTEGER;
      const rightRank = orderRank.get(right.title) ?? Number.MAX_SAFE_INTEGER;
      return leftRank - rightRank;
    });
}

function renderResourceItems(items, emptyText) {
  const entries = items && items.length ? items : [{ label: emptyText }];
  return entries
    .map((item) => {
      if (typeof item === "string") return `<li>${item}</li>`;
      const label = item.href
        ? `<a href="${item.href}"${externalAttrs(item.href)}>${item.label}</a>`
        : `<span>${item.label}</span>`;
      return `<li>${label}${item.note ? `<p>${item.note}</p>` : ""}</li>`;
    })
    .join("");
}

function renderProjectMedia(project) {
  if (!project.media) return `<div class="work-card-media" aria-hidden="true"></div>`;
  return `
    <div class="work-card-media">
      <img src="${project.media.src}" alt="${project.media.alt}">
    </div>
  `;
}

function renderProjects(items, learnMoreLabel) {
  return items
    .map(
      (project) => `
        <article class="work-card${project.featured ? " featured" : ""}">
          ${renderProjectMedia(project)}
          <div class="work-card-copy">
            <h3>${project.title}</h3>
            <p>${project.summary || project.question}</p>
            ${
              project.slug
                ? `<a class="learn-more-link" href="${projectHref(project)}"${externalAttrs(projectHref(project))}>${learnMoreLabel}</a>`
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDirectionProject(project, projectMap) {
  const matchedProject = projectMap.get(project);
  if (!matchedProject) return `<span>${project}</span>`;
  return `<a href="${projectHref(matchedProject)}"${externalAttrs(projectHref(matchedProject))}>${project}</a>`;
}

function renderResearchDirections(items, projectLabel, projectMap) {
  return items
    .map(
      (item) => `
        <article class="research-direction-card">
          <div class="direction-copy">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="direction-project-list">
              <span class="direction-project-label">${projectLabel}</span>
              <span class="direction-project-links">
                ${item.projects.map((project) => renderDirectionProject(project, projectMap)).join("")}
              </span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjectGallery(projects, learnMoreLabel) {
  return `<div class="work-gallery">${renderProjects(projects, learnMoreLabel)}</div>`;
}

function renderResearchAgenda(page) {
  const projectMap = new Map(flattenProjects(page).map((project) => [project.title, project]));
  setText(ids.researchAgendaEyebrow, page.researchAgenda.eyebrow);
  setText(ids.researchAgendaTitle, page.researchAgenda.title);
  setText(ids.researchAgendaNote, page.researchAgenda.note);
  byId(ids.researchDirectionStack).innerHTML = renderResearchDirections(
    page.researchAgenda.items,
    page.researchAgenda.projectLabel,
    projectMap,
  );
}

function renderResearchProjects(page) {
  setText(ids.researchProjectsEyebrow, page.researchProjects.eyebrow);
  setText(ids.researchProjectsTitle, page.researchProjects.title);
  setHtml(ids.researchProjectsNote, page.researchProjects.note);
  byId(ids.researchProjectsStack).innerHTML = renderProjectGallery(
    flattenProjects(page),
    page.researchProjects.learnMoreLabel,
  );
}

function renderPublications(groups) {
  if (typeof window !== "undefined" && window.ipadsPublicationsHtml) return window.ipadsPublicationsHtml;
  return groups
    .map(
      (group) => `
        <article class="pub-year-block">
          <h3>${group.year}</h3>
          <ul>${renderList(group.items)}</ul>
        </article>
      `,
    )
    .join("");
}

function setupPublicationToggle(publications) {
  const stack = byId(ids.publicationStack);
  const toggle = byId(ids.publicationToggle);
  if (!stack || !toggle) return;

  function setExpanded(isExpanded) {
    stack.classList.toggle("is-expanded", isExpanded);
    stack.classList.toggle("is-collapsed", !isExpanded);
    toggle.textContent = isExpanded ? publications.collapseLabel : publications.expandLabel;
    toggle.setAttribute("aria-expanded", String(isExpanded));
  }

  toggle.onclick = () => setExpanded(!stack.classList.contains("is-expanded"));
  setExpanded(false);

  requestAnimationFrame(() => {
    const needsToggle = stack.scrollHeight > stack.clientHeight + 8;
    toggle.hidden = !needsToggle;
    stack.classList.toggle("is-collapsible", needsToggle);
    if (!needsToggle) stack.classList.remove("is-collapsed");
  });
}

function setText(id, value) {
  const element = byId(id);
  if (element) element.textContent = value;
}

function setHtml(id, value) {
  const element = byId(id);
  if (element) element.innerHTML = value;
}

function renderWorkNavMenu(page) {
  const menu = byId("work-nav-menu");
  if (!menu) return;
  menu.innerHTML = flattenProjects(page)
    .map((project) => `<a href="${projectHref(project)}"${externalAttrs(projectHref(project))}>${project.title}</a>`)
    .join("");
}

function renderHome(page) {
  setText(ids.heroName, page.hero.name);
  setText(ids.heroRole, page.hero.role);
  setText(ids.heroContact, page.hero.contact);
  setHtml(ids.heroLead, renderParagraphs(page.positioning.lead));

  renderResearchAgenda(page);

  setText(ids.publicationsEyebrow, page.publications.eyebrow);
  setText(ids.publicationsTitle, page.publications.title);
  setText(ids.publicationsNote, page.publications.note);
  setHtml(ids.publicationStack, renderPublications(page.publications.groups));
  setupPublicationToggle(page.publications);

  setText(ids.honorsEyebrow, page.honors.eyebrow);
  setText(ids.honorsTitle, page.honors.title);
  setHtml(ids.honorsList, renderList(page.honors.items));
  setText(ids.fundedProjectsEyebrow, page.fundedProjects.eyebrow);
  setText(ids.fundedProjectsTitle, page.fundedProjects.title);
  setHtml(ids.fundedProjectsList, renderFundedProjects(page.fundedProjects.items));
  setText(ids.teachingEyebrow, page.teaching.eyebrow);
  setText(ids.teachingTitle, page.teaching.title);
  setText(ids.teachingNote, page.teaching.note);
  setHtml(ids.teachingList, renderCourses(page.teaching.courses));
  renderResearchProjects(page);
  setText(ids.academicServiceEyebrow, page.academicService.eyebrow);
  setText(ids.academicServiceTitle, page.academicService.title);
  setHtml(ids.academicServiceList, renderAcademicService(page.academicService.groups));
  setText(ids.studentDestinationsEyebrow, page.studentDestinations.eyebrow);
  setText(ids.studentDestinationsTitle, page.studentDestinations.title);
  setHtml(ids.studentDestinationsList, renderStudentDestinations(page.studentDestinations.items));
}

function renderWorkPage(page, slug) {
  const project = flattenProjects(page).find((item) => item.slug === slug);
  if (!project) return;

  document.title = `${project.title} | ${page.hero.name}`;
  setText("work-area", project.groupTitle);
  setText("work-title", project.title);
  setHtml(
    "work-meta",
    `
      <span class="meta-pill">${project.status}</span>
      <span class="meta-pill">${project.year}</span>
      ${project.tags.map((tag) => `<span class="meta-pill">${tag}</span>`).join("")}
    `,
  );
  setText("work-question", project.question);
  setHtml("work-basic-title", page.workDetail.basic);
  setHtml("work-basic-copy", renderParagraphs(project.details.intro));
  setText("work-news-title", page.workDetail.news);
  setHtml("work-news-list", renderResourceItems(project.details.news, page.workDetail.empty));
  setText("work-websites-title", page.workDetail.websites);
  setHtml("work-websites-list", renderResourceItems(project.details.websites, page.workDetail.empty));
  setText("work-papers-title", page.workDetail.papers);
  setHtml("work-papers-list", renderResourceItems(project.details.papers, page.workDetail.empty));
  setText("work-code-title", page.workDetail.code);
  setHtml("work-code-list", renderResourceItems(project.details.code, page.workDetail.empty));

  const backLink = byId("work-back-link");
  if (backLink) {
    backLink.textContent = page.workDetail.back;
    backLink.href = `${homePrefix()}/index.html#research-projects`;
  }
}

function render(lang) {
  const page = content[lang];
  document.documentElement.lang = page.htmlLang;
  document.title = page.title;

  Object.entries(page.nav).forEach(([key, value]) => {
    const navItem = document.querySelector(`[data-nav="${key}"]`);
    if (navItem) navItem.textContent = value;
  });
  renderWorkNavMenu(page);

  const workSlug = document.body.dataset.work;
  if (workSlug) {
    renderWorkPage(page, workSlug);
  } else {
    renderHome(page);
  }

  const toggle = byId("language-toggle");
  toggle.textContent = lang === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
}

function setLanguage(lang) {
  localStorage.setItem("homepage-language", lang);
  render(lang);
}

const initialLanguage = localStorage.getItem("homepage-language") === "en" ? "en" : "zh";
render(initialLanguage);

byId("language-toggle").addEventListener("click", () => {
  const current = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  setLanguage(current === "zh" ? "en" : "zh");
});

const workNavTrigger = document.querySelector('[data-nav="researchProjects"]');
if (workNavTrigger && typeof workNavTrigger.closest === "function") {
  const workNavDropdown = workNavTrigger.closest(".nav-dropdown");
  if (workNavDropdown) {
    workNavTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      workNavDropdown.classList.toggle("open");
    });

    if (typeof document.addEventListener === "function") {
      document.addEventListener("click", (event) => {
        if (!workNavDropdown.contains(event.target)) workNavDropdown.classList.remove("open");
      });
    }
  }
}
