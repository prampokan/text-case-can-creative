window.addEventListener("scroll", function(){ 
    let navContainer = document.querySelector("#nav-container")
    navContainer.classList.toggle("sticky", window.scrollY > 0)
})

function sendMessage() {
    var phoneNumber = "6285800331815";
    var url = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    window.open(url);
  }

function sendEmail() {
    var emailAddress = "ecotourtravelkarimunjawa@gmail.com";
    var url = "mailto:" + emailAddress;
    window.location.href = url;
  }

function openGoogleMaps() {
    var latitude = "-5.842420538358198";
    var longitude = "110.43452150069368";
    var label = "Jl. Bukit Kapuran, Karimunjawa, RT 04 RW 01 Jepara, Jawa Tengah, Indonesia";
  
    var url = "https://www.google.com/maps?q=" + latitude + "," + longitude + "&label=" + encodeURIComponent(label);
  
    window.open(url);
  }

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('nav')[0]

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active')
})

  
  