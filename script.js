console.log("Velora Website Loaded");
document.querySelector(".hero button").addEventListener("click", () => {
  window.location.href = "shop.html";
});
window.addEventListener("scroll", () => {
  let btn = document.getElementById("topBtn");

  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

