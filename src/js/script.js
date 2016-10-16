// #Mobile main menu

var menuTrigger = document.querySelector(".main-nav__toggle");
var menuItems = document.querySelectorAll(".main-nav__item--mobile");

// ##conditions on script loading

menuTrigger.classList.remove("main-nav__toggle--open")
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].classList.add("main-nav__item--outflow");
  menuItems[i].classList.remove("main-nav__item--open");
}

// ##click on hamburger

menuTrigger.addEventListener("click", function(event) {
  event.preventDefault();
  menuTrigger.classList.toggle("main-nav__toggle--open");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle("main-nav__item--open");
  }
});

//#Pop-up

var orderButton = document.getElementById("order");
var popup = document.querySelector(".pop-up");

//##open pop-up

orderButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (!popup.classList.contains("pop-up--open")) {
    popup.classList.add("pop-up--open");
  }
});

//##close popup

document.addEventListener("click", function(event) {
  if (event.target.className == "pop-up pop-up--open") {
    popup.classList.remove("pop-up--open");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("pop-up--open")) {
      popup.classList.remove("pop-up--open");
    }
  }
});

// #Google map. Mishka

function initMap() {
  var myLatLng = {lat: 59.938805, lng: 30.323099};
  var mapDiv = document.getElementById("mishka-map");
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: "img/icons/icon-map-pin.svg",
    title: "Ждем Вас у Мишки!"
  });
}
