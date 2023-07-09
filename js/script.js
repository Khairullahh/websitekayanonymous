// toggle class active joki menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika joki menu di klik
document.querySelector("#joki-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toogle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class active untuk crosshair
const crosshair = document.querySelector(".crosshair");
document.querySelector("#seetarget-button").onclick = (e) => {
  crosshair.classList.toggle("active");
  e.preventDefault();
};
//klik di luar elemen

const menu = document.querySelector("#joki-menu");
const sb = document.querySelector("#search-button");
const cs = document.querySelector("#seetarget-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cs.contains(e.target) && !crosshair.contains(e.target)) {
    crosshair.classList.remove("active");
  }
});

// modal target

const itemdetailmodal = document.querySelector("#item-detail-modal");
const itemdetailbuttons = document.querySelectorAll(".item-detail-button");

itemdetailbuttons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailmodal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailmodal.style.display = "none";
  e.preventDefault();
};

// klik close diluar modal
window.onclick = (e) => {
  if (e.target === itemdetailmodal) {
    itemdetailmodal.style.display = "none";
  }
};
