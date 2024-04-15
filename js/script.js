const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

function shareProduct(productCard) {
  // Find product name and description elements within the product card
  var productName = productCard.querySelector('.product-name').innerText;
  var productDescription = productCard.querySelector('.product-description').innerText;

  // Construct the message to share
  var message = "Is the below product available? " + "\n" + productName + "\n" + productDescription;

  // Open WhatsApp with pre-filled message
  var whatsappURL = "https://wa.me/?text=" + encodeURIComponent(message);
  window.open(whatsappURL);

  // For Telegram, you would construct a similar URL
  // var telegramURL = "https://t.me/share/url?url=&text=" + encodeURIComponent(message);
  // window.open(telegramURL);
}

//the tab code

function showTab(targetId) {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.classList.remove('active');
  });
  tabContents.forEach(content => {
      content.classList.remove('active');
  });

  const tab = document.querySelector(`[data-target="${targetId}"]`);
  const content = document.querySelector(targetId);

  tab.classList.add('active');
  content.classList.add('active');
}

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      showTab(target);
  });
});



