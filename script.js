// nav responsive
function myMenuFunction() {
  var menuIcon = document.getElementById("menuIcon");
  menuIcon.classList.toggle("uil-bars");
  menuIcon.classList.toggle("uil-times");
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


// Page Loder

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var loader = document.querySelector(".preloader-container");
    loader.classList.add("active_new");
    clearForm();
  }, 1200); 
});

// Page Loder text

function breakText() {
  var h1 = document.querySelector("h2");

  var h1text = h1.textContent;
  var splitedText = h1text.split(" ");
  var halfValue = Math.floor(splitedText.length / 2);
  var clutter = "";

  splitedText.forEach(function (e, i) {
    if (i < halfValue) {
      clutter += `&nbsp; <span class="a">${e}</span>`;
    } else {
      clutter += `&nbsp; <span class="b">${e}</span>`;
    }
  });


  h1.innerHTML = clutter;
}

breakText();


gsap.from("h2 .a", {
  y: 80,
  opacity: 0,
  duration:.5,
  delay:0.8,
  stagger: 0.15,
});

gsap.from("h2 .b", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  stagger: -0.15,
});
gsap.from("loader", {
  y: 80,
  opacity: 0,
  duration: 2,
  delay: 0.7,
  stagger: -0.15,
});


/* ----- TYPING EFFECT ----- */
var typingText = document.querySelector(".text2");
var myArray = [
  "Web Developer",
  "React Developer",
  "Student",
  "FullStack Developer",

];
var arrayIndex = 1;

function textReplace() {
  setInterval(timer, 5000);
  function timer() {
    if (arrayIndex < myArray.length) {
      typingText.innerHTML = myArray[arrayIndex];
      arrayIndex = arrayIndex + 1;
    } else {
      arrayIndex = 0;
      typingText.innerHTML = myArray[arrayIndex];
      arrayIndex = arrayIndex + 1;
    }
  }
}
textReplace();

// Home animation

function run() {
  var tl = gsap.timeline();

  tl.from(".nav-name", {
    y: -20,
    opacity: 0,
    duration: 1,
    scrub: 4,
    delay:1.6,
    scrub: 4,
  });
  tl.from(".nav_menu_list a h4", {
    y: -25,
    opacity: 0,
    stagger: 0.15,
    scrub: 4,
  });

  tl.from(".nav-button", {
    y: -25,
    opacity: 0,
    scrub: 4,
  });
    tl.from(".wrapper", {
      opacity: 0,
      delay: -0.4,
      scrub: 4,
    });

  tl.from(
    ".social_icons .icon",
    {
      x: 25,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrub: 5,
    },
    "-=0.5"
  );
  tl.from(".about-info", {
    x: 190,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".about-info",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: "top -20%",
      scrub: true,
    },
  });

  tl.to("#home .hero-text", {
    opacity: 0.4,
    y: -90,
    duration: 4,
    scrollTrigger: {
      trigger: ".image .hero-text",
      scroller: "body",
      markers: false,
      start: "top -20%",
      end: "top 60%",
      scrub: 5,
    },
  });

  tl.to("#home .hero-img img", {
    opacity: 0,
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "#home .hero-img img",
      scroller: "body",
      markers: false,
      start: "top -20%",
      end: "top 30%",
      scrub: 5,
    },
  });

  tl.to("#home .child-img-box,.images-box", {
    opacity: 0,
    y: -50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#home .child-img-box",
      scroller: "body",
      markers: false,
      start: "top -20%",
      end: "top 30%",
      scrub: 5,
    },
  });

  gsap.from(".hero-text", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".hero-img img", {
    opacity: 0,
    x: -100,
    duration: 2,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".child-img-box", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });
}

run();

//----curosor----

var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.7,
    // ease:"back.out"
  });
});

// ----about text------

const textarea = document.querySelector(".text-area-hover");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".row ",
    start: "0% 90%",
    end: "top 35%",
    scrub: 0.3,
    markers: false,
  },
});

tl.to(textarea, {
  width: "80%",
  duration: 2,
  ease: "power1.inOut",
});

// scroll text(project) marque 
const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeline",
    start: "0% 90%",
    end: "top 0%",
    scrub: 0.3,
    markers: false,
  },
});

window.addEventListener("wheel", function (dets) {
  //wheel scroll marque for desktop
  if (dets.deltaY > 0) {
    translateX("-100%");
  } else {
    translateX("10%");
  }
});

window.addEventListener("touchstart", function (event) {
  //touch scroll marque for mobile
  var touchstartY = event.touches[0].clientY;

  window.addEventListener("touchmove", function onTouchMove(event) {
    var deltaY = event.touches[0].clientY - touchstartY;

    if (deltaY > 0) {
      translateX("-100%");
    } else {
      translateX("10%");
    }

    window.removeEventListener("touchmove", onTouchMove);
  });
});

function translateX(translation) {
  gsap.to(".marque", {
    transform: "translateX(" + translation + ")",
    repeat: -1,
    duration: 4,
    ease: "none",
  });

  gsap.to(".marque img", {
    rotate: translation === "-100%" ? 90 : 360,
  });
}
// Education section


tl2.from(".rows .cols .contents .boxs,.rows .cols .contents .boxs p", {
  y: 20,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".rows .cols .contents .boxs",
    scroller: "body",
    start: "top 100%",
    end: "top 20%",
    markers: false,
    scrub: 4,
  },
});

// skills section

const items = document.querySelectorAll(".sub");
items.forEach((item, index) => {
  const direction = index % 2 === 0 ? -2 : 2;

  gsap.from(item, {
    opacity: 0,
    x: -100 * direction, // Initial position off-screen
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 100%",
      end: "top 70%",
      scrub: 4,
      markers: false,
    },
  });
});

//certificate

tl2.from(".header-certificate", {
  y:-90,
  opacity:0,
  duration: 1,
  scrollTrigger: {
    trigger: ".header-certificate",
    scroller: "body",
    start: "top 120%",
    end: "top 40%",
    markers: false,
    scrub: true,
  },
});


tl2.from(".certificate .img1", {
  x: -100,
  opacity: 0,
  rotation: -15,
  scale: 0.9,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".certificate .img1",
    scroller: "body",
    start: "top 80%",
    end: "top 0%",
    markers: false,
    scrub: true,
    toggleActions: "play reverse play reverse",
  },
});

tl2.from(".certificate .img2", {
  x: 100,
  opacity: 0,
  rotation: 15,
  scale: 0.9,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".certificate .img2",
    scroller: "body",
    start: "top 90%",
    end: "top 0%",
    markers: false,
    scrub: true,
    toggleActions: "play reverse play reverse",
  },
});

tl2.from(".certificate .img3", {
  x: 100,
  opacity: 0,
  rotation: 10,
  scale: 0.9,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".certificate .img3",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    markers: false,
    scrub: true,
    toggleActions: "play reverse play reverse",
  },
});


tl2.from(".project-section .project-card img , .project-link", {
  scale: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".project-section .project-card , .project-link",
    scroller: "body",
    start: "top 90%",
    end: "top 0%",
    markers: false,
    scrub: true,
  },
});
//footer details about/contact form

tl2.from(".main .bio", {
  opacity: 0,
  duration: 2,
  delay: 1,
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
  scrollTrigger: {
    trigger: ".main .bio",
    scroller: "body",
    start: "top 90%",
    markers: false,
    scrub: true,
  },
});
tl2.from(".main .contact", {
  opacity: 0,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".main .contact",
    scroller: "body",
    start: "top 90%",
    end:"top 55",
    markers: false,
    scrub: true,
  },
});


// contact form data clear when refresh

document.getElementById("form").addEventListener("submit", function (event) {
  document.getElementById("name-input").removeAttribute("required");
  document.getElementById("email-input").removeAttribute("required");
  document.getElementById("message-input").removeAttribute("required");
});

function clearForm() {
  document.getElementById("name-input").value = "";
  document.getElementById("email-input").value = "";
  document.getElementById("message-input").value = "";
}



