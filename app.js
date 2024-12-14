/* Toast message logic */
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 678) {
    // Adjust the max width for mobile screens
    toastr.info("Please use a desktop for a better user experience.");
  }
});

toastr.options = {
  closeButton: true,
  progressBar: true,
};

toastr.options.closeHtml = '<button><i class="icon-off"></i></button>'; // Removes the close x button

toastr.options.timeOut = 5000; // How long the toast will display without user interaction ( Milliseconds )

/* End of Toast message logic */

/* Icons */
// document.addEventListener('DOMContentLoaded', () => {
//   const skillsSections = document.querySelectorAll('.skillsContent'); // Select all skills sections

//   skillsSections.forEach((section) => {
//     const skillsList = section.querySelector('.skillsList');
//     const skills = Array.from(skillsList.children);

//     // If there's an odd number of skills
//     if (skills.length % 4 !== 0) {
//       // Find the longest text item
//       const longestSkill = skills.reduce((longest, skill) =>
//         skill.textContent.length > longest.textContent.length ? skill : longest
//       );

//       // Remove longest skill and prepend it in a new row
//       skillsList.removeChild(longestSkill);

//       const singleRow = document.createElement('ul');
//       singleRow.classList.add('skillsList', 'single');
//       singleRow.appendChild(longestSkill);

//       // Insert the single-row list above the current list
//       skillsList.parentElement.insertBefore(singleRow, skillsList);
//     }
//   });
// });

/* End of icons section */

/* Darken everithing once the site has been loaded */
document.addEventListener("DOMContentLoaded", () => {
  // Create the dark overlay element
  const overlay = document.createElement("div");
  overlay.id = "dark-overlay";
  document.body.appendChild(overlay);

  // Remove the overlay after 5 seconds with a gradual fade-out
  setTimeout(() => {
    overlay.style.opacity = 0; // Start fading out
    setTimeout(() => {
      overlay.remove(); // Remove the overlay completely after fade-out
    }, 2000); // Match the fade-out duration (2 seconds)
  }, 3000); // Display the overlay for 5 seconds
});
/* End Darken everithing once the site has been loaded */

/* Hamburger menu logic */
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
/* End of Hamburger menu logic */

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

function goToP1() {
  // alert('fff');
  window.location.href = "https://ilevy.netlify.app/";
}

function goToP2() {
  // alert('fff');
  window.location.href = "https://itzhak-levy.netlify.app/";
}
/* <!-- back to top button --> */
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 500 ||
//     document.documentElement.scrollTop > 500
//   ) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// The back to top functionality using jQuery :

// $( document ).ready(function() {
//     var $backToTop = $(".back-to-top");
//     $backToTop.hide();

//     $(window).on('scroll', function() {
//       if ($(this).scrollTop() > 100) {
//         $backToTop.fadeIn();
//       } else {
//         $backToTop.fadeOut();
//       }
//     });

//     $backToTop.on('click', function(e) {
//       $("html, body").animate({scrollTop: 0}, 500);
//     });
// });

function goToGithub() {
  // window.open = ("https://github.com/ItzhakLevy1"); // Opens in the same tab
  window.open("https://github.com/ItzhakLevy1"); // Opens on a new tab
}

function goToCodeSandBox() {
  // window.open = ("https://codesandbox.io/u/ItzhakLevy1"); // Opens in the same tab
  window.open("https://codesandbox.io/u/ItzhakLevy1"); // Opens on a new tab
}

function goToLinkedin() {
  // window.open = ("https://www.linkedin.com/in/itzhak-levy-66bb671bb/"); // Opens in the same tab
  window.open("https://www.linkedin.com/in/itzhak-levy-66bb671bb/"); // Opens on a new tab
}

function goToCodePen() {
  // window.location.href = "https://codepen.io/your-work"  // Opens in the same tab
  window.open("https://codepen.io/Itzhak-levy/pens/public"); // Opens on a new tab
}

// var mybutton = document.getElementById("backToTopBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

/***  Slider logic ***/

function moveSlider(direction) {
  let sliderItems = document.querySelectorAll(".slider .list .item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");
  let slider = document.querySelector(".slider");

  if (direction === "next") {
    slider.classList.add("next");
    document.querySelector(".slider .list").appendChild(sliderItems[0]);
    document.querySelector(".thumbnail").appendChild(thumbnailItems[0]);
  } else {
    slider.classList.add("prev");
    document
      .querySelector(".slider .list")
      .prepend(sliderItems[sliderItems.length - 1]);
    document
      .querySelector(".thumbnail")
      .prepend(thumbnailItems[thumbnailItems.length - 1]);
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  );
}

// These functions will be called directly from the HTML
function nextSlide() {
  moveSlider("next");
}

function prevSlide() {
  moveSlider("prev");
}

/*** Automatic scrolling ***/

// document.addEventListener('wheel', function(event) {
//   if (event.deltaY > 0) {
//       scrollDown();
//   } else {
//       scrollUp();
//   }
// });

// function scrollDown() {
//   const nextSection = document.querySelector('.section.active').nextElementSibling;
//   if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth' });
//       document.querySelector('.section.active').classList.remove('active');
//       nextSection.classList.add('active');
//   }
// }

// function scrollUp() {
//   const prevSection = document.querySelector('.section.active').previousElementSibling;
//   if (prevSection) {
//       prevSection.scrollIntoView({ behavior: 'smooth' });
//       document.querySelector('.section.active').classList.remove('active');
//       prevSection.classList.add('active');
//   }
// }

/*** Positioning of the Back to top button ***/
// document.addEventListener("DOMContentLoaded", () => {
//   const myElement = document.querySelector(".back-to-top");
//   const projectsSection = document.querySelector("#projects");

//   console.log("myElement: ", myElement); // Check if it exists
//   console.log("projectsSection: ", projectsSection); // Check if it exists

//   if (myElement && projectsSection) {
//     // Create an intersection observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             console.log("User entered the projects section");
//             myElement.style.position = "fixed";
//             myElement.style.bottom = "10px";
//             myElement.style.left = "10px";
//             myElement.style.display = "block"; // Ensure it's visible
//           } else {
//             console.log("User exited the projects section");
//             myElement.style.display = "none";
//           }
//         });
//       },
//       {
//         threshold: 0.1, // Adjust the threshold as needed
//       }
//     );

//     observer.observe(projectsSection);
//   } else {
//     console.error("Projects section or back-to-top element not found.");
//   }
// });

// View code and Watch Demo Buttons functinality

function watchDemoFunction() {
  alert("watchDemoFunction");
}
