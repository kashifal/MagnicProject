

var radio = document.getElementById('radio')


var label = radio.getElementsByClassName("not-active");

for (var i = 0; i < label.length; i++) {
  label[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 5,
    centerMode: true,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
          variableWidth: true
        }
      }
    ]
  });
});



document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})





const sidebar = document.querySelector('.pop-up-form');
const overlay = document.querySelector('.pop-up-overlay');
const times = document.querySelector('.times');
const bars = document.querySelector('.add');



bars.addEventListener('click', function () {
  sidebar.classList.toggle('show');
  overlay.classList.add('show')
});
overlay.addEventListener('click', function () {
  sidebar.classList.remove('show');
  sidebar.style.transition = '0.3s ease-in'
  overlay.classList.remove('show')
})


times.addEventListener('click', function () {
  sidebar.classList.remove('show');
  sidebar.style.transition = '0.3s ease-in'
  overlay.classList.remove('show')
})



$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});





const Pakistan = [
  "Ahmadpur East",
  "Ahmed Nager Chatha",
  "Ali Khan Abad",
  "Alipur",
  "Arifwala",
  "Attock",
  "Bhera",
  "Bhalwal",
  "Bahawalnagar",
  "Bahawalpur",
  "Bhakkar",
  "Burewala",
  "Chenab Nagar",
  "Chillianwala",
  "Choa Saidanshah",
  "Chakwal",
  "Chak Jhumra",
  "Chichawatni",
  "Chiniot",
  "Chishtian",
  "Chunian",
  "Dajkot",
  "Daska",
  "Davispur",
  "Darya Khan",
  "Dera Ghazi Khan",
  "Dhaular",
  "Dina",
  "Dinga",
  "Dhudial Chakwal",
  "Dipalpur",
  "Faisalabad",
  "Fateh Jang",
  "Ghakhar Mandi",
  "Gojra",
  "Gujranwala",
  "Gujrat",
  "Gujar Khan",
  "Harappa",
  "Hafizabad",
  "Haroonabad",
  "Hasilpur",
  "Haveli Lakha",
  "Islamabad",
  "Jalalpur Jattan",
  "Jampur",
  "Jaranwala",
  "Jhang",
  "Jhelum",
  "Jauharabad",
  "Kallar Syedan",
  "Kalabagh",
  "Karor Lal Esan",
  "Karachi",
  "Kasur",
  "Kamalia",
  "Kāmoke",
  "Khanewal",
  "Khanpur",
  "Khanqah Sharif",
  "Kharian",
  "Khushab",
  "Kot Adu",
  "Lahore",
  "Lalamusa",
  "Layyah",
  "Lawa Chakwal",
  "Liaquat Pur",
  "Lodhran",
  "Malakwal",
  "Mamoori",
  "Mailsi",
  "Mandi Bahauddin",
  "Mian Channu",
  "Mianwali",
  "Miani",
  "Multan",
  "Murree",
  "Muridke",
  "Mianwali Bangla",
  "Muzaffargarh",
  "Narowal",
  "Nankana Sahib",
  "Okara",
  "Pakpattan",
  "Pattoki",
  "Pindi Bhattian",
  "Pind Dadan Khan",
  "Pir Mahal",
  "Qaimpur",
  "Qila Didar Singh",
  "Raiwind",
  "Rajanpur",
  "Rahim Yar Khan",
  "Rawalpindi",
  "Renala Khurd",
  "Sadiqabad",
  "Sagri",
  "Sahiwal",
  "Sambrial",
  "Samundri",
  "Sangla Hill",
  "Sarai Alamgir",
  "Sargodha",
  "Shakargarh",
  "Sheikhupura",
  "Shujaabad",
  "Sialkot",
  "Sohawa",
  "Soianwala",
  "Siranwali",
  "Tandlianwala",
  "Talagang",
  "Taxila",
  "Toba Tek Singh",
  "Vehari",
  "Wah Cantonment",
  "Wazirabad",
  "Yazman",
  "Zafarwal"
];







Pakistan.forEach(e => {

  const tag = document.createElement('a');
  const a = tag.innerHTML = e;
  const b = tag.href = '#';
  const c = document.querySelector('.arrayOfcity-margin').appendChild(tag);
})


const explore = document.querySelector('.explore');

explore.innerHTML = "Show/Hide List";
explore.addEventListener('click', function () {
  document.querySelector('.arrayOfcity').classList.toggle('okh');

});



function run() {
  document.querySelector('.sidebar').classList.add('showSidebar');
  document.querySelector('.side-lay').classList.add('showSidebar');
};


document.querySelector('.side-lay').addEventListener('click', function () {

  document.querySelector('.sidebar').classList.remove('showSidebar');
  document.querySelector('.side-lay').classList.remove('showSidebar');
})