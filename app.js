const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const audioList = document.querySelector(".audio-list");
if (audioList) {
  [
    "三權",
    "總經文",
    "三威儀文",
    "五戒文",
    "開經偈",
    "善友院發菩提經文",
    "般若心經",
    "渡願（二支）",
    "師子吼尊經",
    "一切如來咒（三支）",
    "真生尊咒（三支）",
    "十一面觀世音咒（二支）",
    "普賢延命菩薩（三支）",
    "真如慈救愛子（三支）",
    "妙觀慈菩薩（三支）",
    "所有尊天咒（三支）",
    "南無 清瀧大權現（三支）",
    "真如苑歌",
    "常住讚",
    "心中祈念",
    "大金剛輪陀羅尼",
    "一字金輪咒（三支）",
    "總回文（三支）",
    "三威儀文",
    "三權"
  ].forEach((title, index) => {
    const item = document.createElement("article");
    item.innerHTML = `<button aria-label="播放 ${title}">▶</button><span>00:${String(index + 8).padStart(2, "0")}</span><div></div><strong>${title}</strong>`;
    audioList.appendChild(item);
  });
}

const scrollTopButton = document.querySelector(".scroll-top");
const scrollBottomButton = document.querySelector(".scroll-bottom");

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (scrollBottomButton) {
  scrollBottomButton.addEventListener("click", () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  });
}
