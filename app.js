















//radio 


var radio = document.getElementById('radio')


var label = radio.getElementsByClassName("not-active");

for (var i = 0; i < label.length; i++) {
  label[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active"; 
  });
}

 $(document).ready(function () {
                    $('.carousel').slick({
                        slidesToShow: 4,
                        centerMode: true,
                        autoplay:true,
                        infinite:true,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true, 
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                });


