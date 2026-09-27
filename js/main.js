/* ========== 主题切换(默认亮色,带记忆) ========== */
(function initTheme() {
  const saved = localStorage.getItem("theme");
  document.documentElement.dataset.theme = saved || "light";
})();

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

/* ========== 导航栏 ========== */
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  }
});

/* 滚动时高亮当前区块的导航项 */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");
const highlightNav = () => {
  const pos = window.scrollY + 120;
  let current = sections[0].id;
  sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
  navItems.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
};
window.addEventListener("scroll", highlightNav, { passive: true });
highlightNav();

/* ========== Hero 打字机 ========== */
const roles = ["软件测试工程师", "质量保障守护者", "自动化测试实践者"];
const typingEl = document.getElementById("typing");
let roleIdx = 0, charIdx = 0, deleting = false;

(function type() {
  const word = roles[roleIdx];
  typingEl.textContent = word.slice(0, charIdx);
  let delay = deleting ? 60 : 140;

  if (!deleting && charIdx === word.length) {
    delay = 1700;
    deleting = true;
  } else if (deleting && charIdx === 0) {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    delay = 400;
  }
  charIdx += deleting ? -1 : 1;
  setTimeout(type, delay);
})();

/* ========== 滚动显现 & 技能条动画 ========== */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");

    if (entry.target.classList.contains("skill-card")) {
      entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
        bar.style.setProperty("--level", bar.dataset.level + "%");
        bar.classList.add("animated");
      });
    }
    io.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ========== 联系表单 ========== */
const form = document.getElementById("contactForm");
const formTip = document.getElementById("formTip");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.name.classList.toggle("error", !name);
  form.email.classList.toggle("error", !emailOk);
  form.message.classList.toggle("error", !message);

  if (!name || !emailOk || !message) {
    formTip.textContent = "请完整填写,并确认邮箱格式正确。";
    formTip.className = "form-tip fail";
    return;
  }

  formTip.textContent = `谢谢你,${name}!消息已收到,我会尽快回复。`;
  formTip.className = "form-tip success";
  form.reset();
});

/* ========== 回到顶部 ========== */
document.getElementById("backTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
