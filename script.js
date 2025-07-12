/* Smooth scroll for nav links */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* 맨 위로 버튼 */
const topBtn = document.getElementById("back-to-top");
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* 모두 접기/펼치기 버튼 */
const toggleBtn = document.getElementById("toggle-all");
toggleBtn.addEventListener("click", () => {
  const lessons = document.querySelectorAll("details");
  const allOpen = [...lessons].every(d => d.open);
  lessons.forEach(d => (d.open = !allOpen));
});