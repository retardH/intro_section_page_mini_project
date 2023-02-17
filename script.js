// toggle arrow(up-down)

const upArrowSvg = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;
const downArrowSvg = `<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>`;

const features = document.getElementsByClassName("features")[0];
const company = document.getElementsByClassName("company")[0];
const featureSvg = features.children[0].children[0];
const companySvg = company.children[0].children[0];

features.addEventListener("mouseover", () => {
  featureSvg.innerHTML = upArrowSvg;
});

features.addEventListener("mouseleave", () => {
  featureSvg.innerHTML = downArrowSvg;
});

company.addEventListener("mouseover", () => {
  companySvg.innerHTML = upArrowSvg;
});

company.addEventListener("mouseleave", () => {
  companySvg.innerHTML = downArrowSvg;
});

// for mobile responsive

const heroImage = document.querySelector(".hero-image-container img");

if (window.outerWidth < 500) {
  heroImage.src = "./images/image-hero-mobile.png";
  document.getElementById("title").innerHTML = "Make remote work";
} else if (window.outerWidth > 500) {
  document.getElementById("title").innerHTML = "Make<br>remote work";

  heroImage.src = "./images/image-hero-desktop.png";
}

// mobile menu toggle

const mobileFeature = document.getElementsByClassName("features")[1];
const mobileCompany = document.getElementsByClassName("company")[1];

const mobileFeatureSvg = mobileFeature.children[0].children[0];
const mobileCompanySvg = mobileCompany.children[0].children[0];
const mobileFeatureBox =
  document.getElementsByClassName("mobile-feature-box")[0];
const mobileCompanyBox =
  document.getElementsByClassName("mobile-company-box")[0];

mobileFeature.addEventListener("click", () => {
  if (mobileFeatureBox.classList.contains("none")) {
    mobileFeatureBox.classList.add("flex");
    mobileFeatureBox.classList.remove("none");
    mobileFeatureSvg.innerHTML = upArrowSvg;
  } else if (mobileFeatureBox.classList.contains("flex")) {
    mobileFeatureBox.classList.add("none");
    mobileFeatureBox.classList.remove("flex");
    mobileFeatureSvg.innerHTML = downArrowSvg;
  }
});

mobileCompany.addEventListener("click", () => {
  if (mobileCompanyBox.classList.contains("none")) {
    mobileCompanyBox.classList.add("flex");
    mobileCompanyBox.classList.remove("none");
    mobileCompanySvg.innerHTML = upArrowSvg;
  } else if (mobileCompanyBox.classList.contains("flex")) {
    mobileCompanyBox.classList.add("none");
    mobileCompanyBox.classList.remove("flex");
    mobileCompanySvg.innerHTML = downArrowSvg;
  }
});

const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const mobileSideMenuBar =
  document.getElementsByClassName("mobile-side-menu")[0];
const firstChild = document.body.firstElementChild;
const lastChild = document.body.getElementsByClassName("main")[0];
const closeMenu = document.body.getElementsByClassName("close-menu")[0];

mobileMenu.addEventListener("click", () => {
  mobileSideMenuBar.style.display = "block";
  mobileSideMenuBar.style.right = "0";
  firstChild.style.filter = "blur(3px)";
  lastChild.style.filter = "blur(3px)";
});

closeMenu.addEventListener("click", () => {
  mobileSideMenuBar.style.display = "none";
  firstChild.style.filter = "blur(0px)";
  lastChild.style.filter = "blur(0px)";
});
