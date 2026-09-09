(function () {
  "use strict";

  var STRINGS = {
    "name": { en: "Su Tong", zh: "苏童" },

    "skip.link": { en: "Skip to content", zh: "跳到主要内容" },

    "theme.switch.dark": { en: "Dark", zh: "深色" },
    "theme.switch.light": { en: "Light", zh: "浅色" },

    "nav.profile": { en: "Profile", zh: "个人简介" },
    "nav.research": { en: "Research", zh: "研究方向" },
    "nav.work": { en: "Work", zh: "论文成果" },
    "nav.projects": { en: "Projects", zh: "项目" },
    "nav.competitions": { en: "Competitions", zh: "竞赛成绩" },
    "nav.skills": { en: "Skills", zh: "技能" },
    "nav.community": { en: "Community", zh: "学生工作与志愿服务" },
    "nav.contact": { en: "Contact", zh: "联系方式" },

    "hero.eyebrow": { en: "Undergraduate Researcher · Beijing, China", zh: "本科科研工作者 · 中国北京" },
    "hero.subtitle.1": { en: "Electronic Information Engineering", zh: "电子信息工程" },
    "hero.subtitle.2": { en: "AI-Assisted Scientific Computing", zh: "AI 辅助科学计算" },
    "hero.subtitle.3": { en: "Human–AI Collaboration", zh: "人机协作" },
    "hero.lede": {
      en: "I design software systems and computational methods that make scientific work more reproducible, collaborative, and useful in practice.",
      zh: "我设计软件系统和计算方法，让科研工作更具可复现性、协作性与实用性。"
    },
    "hero.action.contact": { en: "Get in touch", zh: "联系我" },
    "hero.action.work": { en: "View my work", zh: "查看我的成果" },
    "hero.meta.email": { en: "Email", zh: "邮箱" },
    "hero.meta.github": { en: "GitHub", zh: "GitHub" },
    "hero.meta.scholar": { en: "Scholar", zh: "学术主页" },

    "profile.label": { en: "Profile", zh: "个人简介" },
    "profile.title": { en: "A research-minded engineer.", zh: "一名研究导向的工程师。" },
    "profile.p1": {
      en: "I work where electronic information engineering meets scientific computing. My focus is on building systems and tooling that lower the cost of experimentation: readable code, reproducible pipelines, and interfaces that help people understand and trust their results.",
      zh: "我工作在电子信息工程与科学计算的交叉领域，专注于构建降低实验成本的系统与工具：可读的代码、可复现的流程，以及帮助人们理解并信任结果的界面。"
    },
    "profile.p2": {
      en: "Through modeling, prototyping, and measurement, I aim to turn research ideas into maintainable software that others can actually use.",
      zh: "通过建模、原型开发与测量，我致力于把研究想法转化为他人真正可用的、可维护的软件。"
    },

    "education.title": { en: "Education", zh: "教育背景" },
    "education.school": { en: "China University of Geosciences (Beijing)", zh: "中国地质大学（北京）" },
    "education.degree": { en: "B.Eng. in Electronic Information Engineering", zh: "电子信息工程专业 工学学士" },
    "education.dates.present": { en: "2023 – 2027", zh: "2023 – 2027" },
    "education.dates.graduation": { en: "Expected graduation: 2027", zh: "预计毕业：2027 年" },
    "education.coursework.label": { en: "Relevant coursework", zh: "相关课程" },
    "education.coursework.value": {
      en: "Circuit Analysis Fundamentals · Analog & Digital Electronics · Digital Signal Processing · Object-Oriented Programming · Data Structures & Algorithms · Communication Principles",
      zh: "电路分析基础 · 模拟/数字电子技术 · 数字信号处理 · 面向对象编程 · 数据结构与算法 · 通信原理"
    },
    "education.languages.label": { en: "Languages", zh: "语言能力" },
    "education.languages.value": {
      en: "CET-4: 519 · CET-6: 479",
      zh: "CET-4：519 · CET-6：479"
    },

    "research.label": { en: "Research", zh: "研究方向" },
    "research.title": { en: "Research interests", zh: "研究方向" },
    "research.intro": {
      en: "Directions that connect software engineering, machine learning, and reproducible scientific computing.",
      zh: "连接软件工程、机器学习与可复现科学计算的研究方向。"
    },
    "label.methods": { en: "Methods", zh: "方法" },
    "label.tools": { en: "Tools", zh: "工具" },
    "label.related": { en: "Related", zh: "相关" },

    "research.se.title": { en: "Intelligent Software Systems", zh: "智能软件系统" },
    "research.se.desc": {
      en: "Building developer tools, automation pipelines, and user-facing systems that reason about code and configuration.",
      zh: "构建能够理解代码与配置的开发者工具、自动化流水线和面向用户的系统。"
    },
    "research.se.methods": { en: "Agent workflows · Tooling · Systems design", zh: "智能体工作流 · 工具开发 · 系统设计" },
    "research.se.related": { en: "AI-assisted development environments", zh: "AI 辅助开发环境" },

    "research.sc.title": { en: "Scientific Computing & Simulation", zh: "科学计算与仿真" },
    "research.sc.desc": {
      en: "Numerical methods, signal processing, and simulation pipelines for physical and engineering models.",
      zh: "面向物理与工程模型的数值方法、信号处理和仿真流水线。"
    },
    "research.sc.methods": { en: "FFT · Optimization · Transfer matrices", zh: "FFT · 优化 · 传输矩阵" },
    "research.sc.related": { en: "Model-based parameter estimation", zh: "基于模型的参数估计" },

    "research.ml.title": { en: "Data Analysis & Machine Learning", zh: "数据分析与机器学习" },
    "research.ml.desc": {
      en: "Building reliable pipelines for cleaning, modeling, and evaluating structured data at practical scale.",
      zh: "构建用于清洗、建模和评估结构化数据的可靠流水线，并兼顾实用规模。"
    },
    "research.ml.methods": { en: "Classification · Regression · Evaluation", zh: "分类 · 回归 · 评估" },
    "research.ml.related": { en: "Reproducible data workflows", zh: "可复现的数据工作流" },

    "research.ai.title": { en: "Human–AI Collaboration", zh: "人机协作" },
    "research.ai.desc": {
      en: "Studying how people work with language models, agents, and automation to do better research and engineering.",
      zh: "研究人们如何与语言模型、智能体和自动化工具协作，以更好地开展研究与工程。"
    },
    "research.ai.methods": { en: "Prompting · Agent design · Evaluation", zh: "提示工程 · 智能体设计 · 评估" },
    "research.ai.related": { en: "Research workflow notes", zh: "研究工作流笔记" },

    "work.label": { en: "Work", zh: "论文成果" },
    "work.title": { en: "Publications", zh: "论文成果" },
    "work.none": { en: "No publications yet.", zh: "暂无发表论文。" },

    "projects.label": { en: "Projects", zh: "项目" },
    "projects.title": { en: "Selected projects", zh: "精选项目" },

    "projects.p5.title": { en: "BrainFlow EEG Analysis System", zh: "BrainFlow 脑电分析系统" },
    "projects.p5.role": { en: "Storage & data management lead", zh: "存储与数据管理负责人" },
    "projects.p5.desc": {
      en: "A national-level innovation project (2025–2026, five-person team) building a real-time EEG acquisition and analytics platform. I owned the storage module: auto-saving front-end data with session metadata into SQLite, scanning signal quality to compute the valid-data ratio and label sessions, and exposing a filterable history-query list API.",
      zh: "国家级大学生创新训练项目（2025–2026，五人团队），构建实时脑电采集与分析平台。我负责存储模块：将前端数据连同会话元数据（开始/结束时间等）自动写入 SQLite，扫描信号质量列计算有效数据占比并为会话打标签，并提供支持过滤的历史查询列表接口。"
    },

    "competitions.label": { en: "Competitions", zh: "竞赛成绩" },
    "competitions.title": { en: "Competition achievements", zh: "竞赛获奖" },
    "competitions.intro": {
      en: "Awards and honors from national and provincial contests. Click any certificate to view it in full size.",
      zh: "来自国家级与省级竞赛的奖项荣誉。点击任一证书即可查看原图。"
    },
    "cert.open": { en: "Open certificate PDF", zh: "打开证书 PDF" },
    "cert.toggle.more": { en: "Show all", zh: "展示全部" },
    "cert.toggle.less": { en: "Show less", zh: "收起" },
    "cert01.level": { en: "Provincial Excellence Award", zh: "省级选拔赛 · 优秀奖" },
    "cert01.title": { en: "Campus AI Algorithm Elite Contest", zh: "全球校园人工智能算法精英大赛" },
    "cert01.meta": { en: "2025 · Provincial selection", zh: "2025 · 省级选拔赛" },
    "cert02.level": { en: "Successful Participation", zh: "成功参赛奖" },
    "cert02.title": { en: "Group Programming Ladder Tournament", zh: "团体程序设计天梯赛" },
    "cert02.meta": { en: "2024 · National final", zh: "2024 · 全国总决赛" },
    "cert03.level": { en: "Team Third Prize", zh: "团队三等奖" },
    "cert03.title": { en: "Group Programming Ladder Tournament", zh: "团体程序设计天梯赛" },
    "cert03.meta": { en: "2025 · National final", zh: "2025 · 全国总决赛" },
    "cert04.level": { en: "Team Second Prize", zh: "团队二等奖" },
    "cert04.title": { en: "Group Programming Ladder Tournament", zh: "团体程序设计天梯赛" },
    "cert04.meta": { en: "2026 · National final", zh: "2026 · 全国总决赛" },
    "cert05.level": { en: "First Prize", zh: "一等奖" },
    "cert05.title": { en: "GPLT · Popularization", zh: "团体程序设计天梯赛 · 普及赛" },
    "cert05.meta": { en: "2026 · Popularization", zh: "2026 · 普及赛" },
    "cert07.level": { en: "Honorable Mention", zh: "H奖（荣誉提名）" },
    "cert07.title": { en: "Shuwei Cup Modeling Challenge", zh: "数维杯国际数学建模挑战赛" },
    "cert07.meta": { en: "2025 · Honorable Mention", zh: "2025 · H奖" },
    "cert08.level": { en: "Bronze Award", zh: "铜奖" },
    "cert08.title": { en: "Baidu Star Programming Contest", zh: "百度之星程序设计大赛" },
    "cert08.meta": { en: "2025 · Provincial round", zh: "2025 · 省赛" },
    "cert09.level": { en: "Third Prize", zh: "三等奖" },
    "cert09.title": { en: "RAICOM Robotics Developer Contest", zh: "睿抗机器人开发者大赛" },
    "cert09.meta": { en: "2025 · Programming skills", zh: "2025 · 编程技能竞赛" },
    "cert10.level": { en: "Successful Participant", zh: "成功参赛奖（S奖）" },
    "cert10.title": { en: "Mathematical Contest in Modeling", zh: "美国大学生数学建模竞赛" },
    "cert10.meta": { en: "2026 · Successful Participant", zh: "2026 · 成功参赛奖" },
    "cert11.level": { en: "Third Prize", zh: "三等奖" },
    "cert11.title": { en: "Lanqiao Cup · C/C++ Group A", zh: "蓝桥杯 · C/C++ A组" },
    "cert11.meta": { en: "2024 · Provincial", zh: "2024 · 省赛" },
    "cert12.level": { en: "Second Prize", zh: "二等奖" },
    "cert12.title": { en: "Lanqiao Cup · C/C++ Group A", zh: "蓝桥杯 · C/C++ A组" },
    "cert12.meta": { en: "2025 · Provincial", zh: "2025 · 省赛" },

    "skills.label": { en: "Toolkit", zh: "技能" },
    "skills.title": { en: "Technical skills", zh: "技术技能" },
    "skills.intro": {
      en: "Tools used across research, simulation, and software projects — without self-assigned proficiency scores.",
      zh: "用于科研、仿真与软件项目的工具——不给自己标注熟练度评分。"
    },
    "skills.computing": { en: "Embedded Development", zh: "嵌入式开发" },
    "skills.programming": { en: "Programming", zh: "编程语言" },
    "skills.development": { en: "Software Development", zh: "软件开发" },
    "skills.ai": { en: "AI-Assisted Work", zh: "AI 辅助工作" },
    "level.project": { en: "Research / Project", zh: "研究 / 项目经验" },
    "level.familiar": { en: "Familiar", zh: "熟悉" },
    "skills.backend": { en: "Backend", zh: "后端" },
    "skills.web": { en: "Frontend", zh: "前端" },

    "timeline.title": { en: "Award timeline", zh: "获奖时间轴" },
    "tl.y2026.1": { en: "Group Programming Ladder Tournament · National Team Second Prize", zh: "团体程序设计天梯赛 · 全国总决赛团队二等奖" },
    "tl.y2026.2": { en: "Group Programming Ladder Tournament · Popularization First Prize", zh: "团体程序设计天梯赛 · 普及赛一等奖" },
    "tl.y2026.3": { en: "Mathematical Contest in Modeling · Successful Participant", zh: "美国大学生数学建模竞赛 · 成功参赛奖" },
    "tl.y2025.1": { en: "Lanqiao Cup · C/C++ Group A Provincial Second Prize", zh: "蓝桥杯 · C/C++ A组 省赛二等奖" },
    "tl.y2025.2": { en: "Group Programming Ladder Tournament · National Team Third Prize", zh: "团体程序设计天梯赛 · 全国总决赛团队三等奖" },
    "tl.y2025.3": { en: "Shuwei Cup Modeling Challenge · Honorable Mention", zh: "数维杯国际数学建模挑战赛 · H奖" },
    "tl.y2025.4": { en: "Campus AI Algorithm Elite Contest · Provincial Excellence Award", zh: "全球校园人工智能算法精英大赛 · 省级选拔赛优秀奖" },
    "tl.y2025.5": { en: "Baidu Star Programming Contest · Provincial Bronze Award", zh: "百度之星程序设计大赛 · 省赛铜奖" },
    "tl.y2025.6": { en: "RAICOM Robotics Developer Contest · Third Prize", zh: "睿抗机器人开发者大赛 · 三等奖" },
    "tl.y2024.1": { en: "Group Programming Ladder Tournament · National Successful Participation", zh: "团体程序设计天梯赛 · 全国成功参赛奖" },
    "tl.y2024.2": { en: "Lanqiao Cup · C/C++ Group A Provincial Third Prize", zh: "蓝桥杯 · C/C++ A组 省赛三等奖" },

    "community.label": { en: "Community", zh: "社区服务" },
    "community.title": { en: "Leadership & service", zh: "学生工作与志愿服务" },
    "community.acm.title": { en: "Member, University ACM Team", zh: "校 ACM 队成员" },
    "community.acm.desc": { en: "Represented the university in contests such as the Group Programming Ladder Tournament and CCPC.", zh: "代表学校参加天梯赛、CCPC 等程序设计竞赛。" },
    "community.ca.title": { en: "Member, Computer Association", zh: "计算机协会成员" },
    "community.ca.desc": { en: "Volunteered to provide computer-related services to classmates in need.", zh: "在协会中志愿为有需要的同学提供电脑相关的服务。" },
    "community.volunteer.title": { en: "Volunteer, Summer Social Practice", zh: "暑期社会实践志愿者" },
    "community.volunteer.desc": { en: "Completed 30 hours of volunteer service in community practice.", zh: "在社区实践中完成 30 小时志愿服务。" },

    "contact.label": { en: "Contact", zh: "联系方式" },
    "contact.title": { en: "Let's build something useful.", zh: "一起做点有用的东西。" },
    "contact.intro": {
      en: "For collaboration, research discussion, or technical opportunities, reach me by email or GitHub.",
      zh: "如需合作、研究交流或技术机会，欢迎通过邮箱或 GitHub 联系我。"
    },
    "contact.email": { en: "Email me", zh: "发邮件给我" },
    "contact.form.name": { en: "Your name", zh: "您的姓名" },
    "contact.form.email": { en: "Your email", zh: "您的邮箱" },
    "contact.form.subject": { en: "Subject", zh: "主题" },
    "contact.form.message": { en: "Message", zh: "留言内容" },
    "contact.form.submit": { en: "Send message", zh: "发送留言" },
    "contact.form.sent": { en: "Thanks! Your message has been sent.", zh: "谢谢！您的留言已发送。" },
    "contact.form.error": { en: "Sorry, something went wrong. Please email me directly.", zh: "抱歉，发送失败。请直接发邮件联系我。" },
    "contact.note": {
      en: "Fill in the form and it will be delivered to my inbox, or reach me by email or GitHub.",
      zh: "填写下方表单，信息会发送到我的邮箱；也可通过邮箱或 GitHub 联系我。"
    },

    "footer.built": { en: "Built as a static portfolio", zh: "使用静态页面构建" },
    "footer.top": { en: "Back to top ↑", zh: "回到顶部 ↑" }
  };

  var META = {
    title: {
      en: "Su Tong | Electronic Information Engineering",
      zh: "苏童 | 电子信息工程"
    },
    description: {
      en: "Personal website and research portfolio of Su Tong.",
      zh: "苏童的个人主页与科研履历。"
    }
  };

  var currentLang = "en";
  try {
    var stored = localStorage.getItem("lang");
    var browserLang = (navigator.language || "en").toLowerCase();
    currentLang = stored || (browserLang.indexOf("zh") === 0 ? "zh" : "en");
  } catch (e) {
    currentLang = "en";
  }
  if (currentLang !== "zh") {
    currentLang = "en";
  }

  var certExpanded = false;
  var currentTheme = "dark";
  try {
    currentTheme = localStorage.getItem("theme") || "dark";
  } catch (e) {
    currentTheme = "dark";
  }
  if (currentTheme !== "light") {
    currentTheme = "dark";
  }

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);

    var themeLabel = document.querySelector("[data-theme-toggle] [data-theme-label]");
    if (themeLabel) {
      var entry = STRINGS[currentTheme === "light" ? "theme.switch.dark" : "theme.switch.light"];
      themeLabel.textContent = (entry && entry[currentLang]) || entry.en || "";
    }
    var themeBtn = document.querySelector("[data-theme-toggle]");
    if (themeBtn) {
      themeBtn.setAttribute(
        "aria-label",
        currentTheme === "light"
          ? (currentLang === "zh" ? "切换为深色模式" : "Switch to dark theme")
          : (currentLang === "zh" ? "切换为浅色模式" : "Switch to light theme")
      );
    }
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.title = META.title[lang] || META.title.en;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", META.description[lang] || META.description.en);
    }

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = STRINGS[key];
      if (entry) {
        el.textContent = entry[lang] || entry.en;
      }
    });

    var labelEl = document.querySelector("[data-lang-label]");
    if (labelEl) {
      labelEl.textContent = lang === "zh" ? "EN" : "中文";
    }

    var toggleBtn = document.querySelector("[data-lang-toggle]");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换为中文");
    }

    var themeLabel = document.querySelector("[data-theme-toggle] [data-theme-label]");
    if (themeLabel) {
      var entry = STRINGS[currentTheme === "light" ? "theme.switch.dark" : "theme.switch.light"];
      themeLabel.textContent = (entry && entry[lang]) || entry.en || "";
    }

    var certToggle = document.querySelector("[data-cert-toggle]");
    if (certToggle) {
      var key = certExpanded ? "cert.toggle.less" : "cert.toggle.more";
      var entry = STRINGS[key];
      certToggle.textContent = (entry && entry[lang]) || entry.en || "";
    }
  }

  var langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "zh" ? "en" : "zh";
      try {
        localStorage.setItem("lang", currentLang);
      } catch (e) {}
      applyLang(currentLang);
    });
  }

  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
      try {
        localStorage.setItem("theme", currentTheme);
      } catch (e) {}
    });
  }

  applyLang(currentLang);
  applyTheme(currentTheme);

  // Footer year
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile navigation toggle
  var toggle = document.querySelector("[data-nav-toggle]");
  var navList = document.querySelector("[data-nav-list]");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    navList.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active nav link on scroll
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function updateActiveLink() {
    var fromTop = window.scrollY + 120;
    var current = sections[0];

    sections.forEach(function (section) {
      if (section.offsetTop <= fromTop) {
        current = section;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      link.classList.toggle("is-active", current && "#" + current.id === href);
    });
  }

  if (navLinks.length && sections.length) {
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();
  }

  // Scroll reveal
  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Certificate lightbox
  var lightbox = document.querySelector("[data-lightbox]");
  var lightboxImg = document.querySelector("[data-lightbox-img]");
  var lightboxCaption = document.querySelector("[data-lightbox-caption]");
  var lightboxOpen = document.querySelector("[data-lightbox-open]");
  var certCards = Array.prototype.slice.call(document.querySelectorAll("[data-cert]"));
  var activeCert = null;

  function openLightbox(card) {
    if (!lightbox || !card) return;
    activeCert = card;
    var fullSrc = card.getAttribute("data-cert-full");
    var pdfHref = card.getAttribute("data-cert-pdf") || "#";

    if (lightboxImg) {
      lightboxImg.setAttribute("src", fullSrc);
      lightboxImg.setAttribute("alt", card.querySelector("h3") ? card.querySelector("h3").textContent : "Certificate");
    }
    if (lightboxCaption) {
      var level = card.querySelector(".cert-tag");
      var h3 = card.querySelector("h3");
      var meta = card.querySelector(".cert-meta");
      var parts = [];
      if (h3) parts.push(h3.textContent);
      parts.push(level ? level.textContent : "");
      if (meta) { parts.push(""); parts.push(meta.textContent); }
      lightboxCaption.textContent = parts.filter(Boolean).join(" · ");
    }
    if (lightboxOpen) {
      lightboxOpen.setAttribute("href", pdfHref);
    }
    lightbox.hidden = false;
    document.documentElement.style.overflow = "hidden";
    if (lightboxOpen) lightboxOpen.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    activeCert = null;
    document.documentElement.style.overflow = "";
    if (lightboxImg) lightboxImg.removeAttribute("src");
    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) toggle.focus();
  }

  certCards.forEach(function (card) {
    card.addEventListener("click", function () {
      openLightbox(card);
    });
  });

  // Certificate list expand / collapse
  var certToggle = document.querySelector("[data-cert-toggle]");
  var certGridEl = document.querySelector("#cert-grid");

  function setCertExpanded(expanded) {
    certExpanded = expanded;
    if (certGridEl) {
      certGridEl.classList.toggle("is-expanded", expanded);
    }
    if (expanded) {
      Array.prototype.forEach.call(certGridEl.querySelectorAll(".is-secondary"), function (card) {
        card.classList.add("is-visible");
      });
    }
    if (certToggle) {
      certToggle.setAttribute("aria-expanded", String(expanded));
      var entry = STRINGS[expanded ? "cert.toggle.less" : "cert.toggle.more"];
      certToggle.textContent = (entry && entry[currentLang]) || entry.en || "";
    }
  }

  if (certToggle && certGridEl) {
    certToggle.addEventListener("click", function () {
      setCertExpanded(!certExpanded);
    });
  }

  if (lightbox) {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });
    lightbox.addEventListener("click", function (event) {
      if (event.target.closest("[data-lightbox-close]")) {
        closeLightbox();
      }
    });
  }

  // Contact form (submit via FormSubmit without leaving the page)
  var contactForm = document.querySelector("[data-form-submit]");
  if (contactForm) {
    var form = contactForm.closest("form");
    var statusEl = document.querySelector("[data-form-status]");
    var submitBtn = contactForm;

    if (form && statusEl) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        submitBtn.disabled = true;
        if (statusEl) statusEl.textContent = "";

        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        })
          .then(function (res) {
            var okKey = "contact.form.sent";
            var errKey = "contact.form.error";
            if (statusEl) {
              var entry = STRINGS[okKey];
              statusEl.textContent = (entry && entry[currentLang]) || entry.en || "";
            }
          })
          .catch(function () {
            if (statusEl) {
              var entry = STRINGS["contact.form.error"];
              statusEl.textContent = (entry && entry[currentLang]) || entry.en || "";
            }
          })
          .finally(function () {
            submitBtn.disabled = false;
            if (form) form.reset();
          });
      });
    }
  }
})();
