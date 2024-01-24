// menu
let headerIcon = document.querySelector(".header-icon");
let icon = document.querySelector(".lnr-menu");
let menu = document.querySelector(".menu");

headerIcon.addEventListener("click", () => {
  if (icon.classList.contains("lnr-menu")) {
    icon.classList.replace("lnr-menu", "lnr-cross");
    menu.style.left = "0rem";
  } else {
    icon.classList.replace("lnr-cross", "lnr-menu");
    menu.style.left = "-16rem";
  }
});

// plans databse
let planDB = [
  {
    id: 1,
    name: "Standard",
    nameDesc: "For the individuals",
    price: 199,
    detailDesc: "“Few would argue that, despite the advancements",
    featureDesc: [
      "2.5 GB Free Photos",
      "Secure Online Transfer Indeed",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
      "Manual Backup Provided",
    ],
  },
  {
    id: 2,
    name: "Business",
    nameDesc: "For the individuals",
    price: 399,
    detailDesc: "“Few would argue that, despite the advancements",
    featureDesc: [
      "2.5 GB Free Photos",
      "Secure Online Transfer Indeed",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
      "Manual Backup Provided",
    ],
  },
  {
    id: 3,
    name: "Ultimate",
    nameDesc: "For the individuals",
    price: 499,
    detailDesc: "“Few would argue that, despite the advancements",
    featureDesc: [
      "2.5 GB Free Photos",
      "Secure Online Transfer Indeed",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
      "Manual Backup Provided",
    ],
  },
];

let plansContainer = document.querySelector(".plans-container");
// create and insert plan boxes into he DOM
function createBox(plans) {
  plans.forEach((plan) => {
    // feature description
    let featureDescHTML = "";
    plan.featureDesc.forEach((desc) => {
      featureDescHTML += `<p>${desc}</p>`;
    });

    plansContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="plan-box">
        <div class="plan-header">
            <div class="plan-name">
                <h3>${plan.name}</h3>
                <p>${plan.nameDesc}</p>
            </div>
            <div class="plan-price">£${plan.price}</div>
        </div>
        <div class="plan-desc">
            <p class="desc-detail">${plan.detailDesc}</p>
            <div class="desc-feature">
                ${featureDescHTML}
                </div>
            <button class="desc-btn"><a href="#">PURCHASE PLAN <span class="lnr lnr-arrow-right"></span></a></button>
        </div>
      </div>`
    );
  });
}
createBox(planDB);
