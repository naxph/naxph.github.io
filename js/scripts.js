window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav")
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink")
    } else {
      navbarCollapsible.classList.add("navbar-shrink")
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav")
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler")
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  )
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click()
      }
    })
  })
})

//Typed.js
var typed = new Typed("#typed", {
  strings: [
    "Anime, Comics, Games.^2000",
    "Photography.^2000",
    "Web Development.^2000",
    "Content Creation.^2000",
  ],
  backSpeed: 50,
  typeSpeed: 50,
  loop: true,
})

var typed = new Typed("#about-typed", {
  strings: [
    "Global Politics",
    "Formula 1",
    "Machine Learning",
    "AI",
    "Cybersecurity",
    "Game Development",
    "Technology",
  ],
  backSpeed: 40,
  typeSpeed: 40,
  loop: true,
  smartBackspace: true,
})

//Social Hover Event Triggers
$("#social-twitter").hover(
  function () {
    $(".sidenav").css("background-color", "#1DA1F2")
  },
  function () {
    $(".sidenav").css("background-color", "#ffffff")
  }
)

$("#social-instagram").hover(
  function () {
    $(".sidenav").css("background", "#C13584")
  },
  function () {
    $(".sidenav").css("background", "#ffffff")
  }
)

$("#social-github").hover(
  function () {
    $(".sidenav").css("background", "#333")
  },
  function () {
    $(".sidenav").css("background", "#ffffff")
  }
)

$("#social-youtube").hover(
  function () {
    $(".sidenav").css("background", "#FF0000")
  },
  function () {
    $(".sidenav").css("background", "#ffffff")
  }
)

$("#social-whatsapp").hover(
  function () {
    $(".sidenav").css("background", "#25D366")
  },
  function () {
    $(".sidenav").css("background", "#ffffff")
  }
)

$("#social-unsplash").hover(
  function () {
    $(".sidenav").css("background", "#000000")
  },
  function () {
    $(".sidenav").css("background", "#ffffff")
  }
)

$("#social-steam").hover(
  function () {
    $(".sidenav").css("background", "#1b2838")
  },
  function () {
    $(".sidenav").css("background", "#ffffff")
  }
)

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "28rem"
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
}
