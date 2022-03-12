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
    "Web Development^1000",
    "App Development^1000",
    "Data Science^1000",
    "Content Creation^1000",
    "Photography^1000",
    "Anime / Manga^1000",
    "Virtual Youtubers^1000",
    "Gaming^1000",
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
    $(".masthead").css("background", "#1DA1F2")
    $(".hero-emphasis").css("color", "#4A00E0")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)

$("#social-instagram").hover(
  function () {
    $(".masthead").css("background", "#C13584")
    $(".hero-emphasis").css("color", "yellow")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)

$("#social-github").hover(
  function () {
    $(".masthead").css("background", "#333")
    $(".hero-emphasis").css("color", "#FBD786")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)

$("#social-youtube").hover(
  function () {
    $(".masthead").css("background", "#FF0000")
    $(".hero-emphasis").css("color", "#F5F5DC")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)

$("#social-whatsapp").hover(
  function () {
    $(".masthead").css("background", "#25D366")
    $(".hero-emphasis").css("color", "#FC8EAC")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)

$("#social-unsplash").hover(
  function () {
    $(".masthead").css("background", "white")
    $(".hero-emphasis").css("color", "green")
    $("h1").css("color", "#000000")
    $(".nav-link").css("color", "#000000")
    $(".navbar-brand").css("color", "#000000")
    $(".social-icons").css("color", "#000000")
    $("#typed").css("color", "#000000")
    $(".typed-cursor").css("color", "#000000")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
    $("h1").css("color", "white")
    $(".nav-link").css("color", "white")
    $(".navbar-brand").css("color", "white")
    $(".social-icons").css("color", "white")
    $("#typed").css("color", "white")
    $(".typed-cursor").css("color", "white")
  }
)

$("#social-blog").hover(
  function () {
    $(".masthead").css("background", "#f5af19")
    $(".hero-emphasis").css("color", "#1a2a6c")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)

$("#social-steam").hover(
  function () {
    $(".masthead").css("background", "#1b2838")
    $(".hero-emphasis").css("color", "#FFF200")
  },
  function () {
    $(".masthead").css(
      "background",
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.7) 75%,#000 100%),url('../assets/img/musicvideo.gif'"
    )
    $(".masthead").css("background-position", "center")
    $(".masthead").css("background-repeat", "no-repeat")
    $(".masthead").css("background-attachment", "scroll")
    $(".masthead").css("background-size", "cover")
    $(".hero-emphasis").css("color", "coral")
  }
)
