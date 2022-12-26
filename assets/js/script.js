'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById('open-btn');
  var closeBtn = document.getElementById('close-btn');
  var dialog = document.getElementById('dialog');

  openBtn.addEventListener('click', function() {
    dialog.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    dialog.style.display = 'none';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var openPrivacyPolicyBtn = document.getElementById('open-privacy-policy-btn');
  var closePrivacyPolicyBtn = document.getElementById('close-privacy-policy-btn');
  var privacyPolicyDialog = document.getElementById('privacy-policy-dialog');
  openPrivacyPolicyBtn.addEventListener('click', function() {
    privacyPolicyDialog.style.display = 'block';
  });
  
  closePrivacyPolicyBtn.addEventListener('click', function() {
    privacyPolicyDialog.style.display = 'none';
  });
})  

document.addEventListener('DOMContentLoaded', function() {
  var openPrivacyPolicyBtn = document.getElementById('open-terms-and-condition-btn');
  var closePrivacyPolicyBtn = document.getElementById('close-terms-and-condition-btn');
  var privacyPolicyDialog = document.getElementById('terms-and-condition-dialog');
  openPrivacyPolicyBtn.addEventListener('click', function() {
    privacyPolicyDialog.style.display = 'block';
  });
  
  closePrivacyPolicyBtn.addEventListener('click', function() {
    privacyPolicyDialog.style.display = 'none';
  });
})  
