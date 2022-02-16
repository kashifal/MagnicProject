

document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector('.hms').classList.toggle('show');

    document.querySelector('.hms1').classList.remove('show');
    document.querySelector('.hms2').classList.remove('show');
})
document.querySelector('.btn1').addEventListener('click', function () {
    document.querySelector('.hms1').classList.toggle('show');

    document.querySelector('.hms').classList.remove('show');
    document.querySelector('.hms2').classList.remove('show');
})
document.querySelector('.btn2').addEventListener('click', function () {
    document.querySelector('.hms2').classList.toggle('show');

    document.querySelector('.hms').classList.remove('show');
    document.querySelector('.hms1').classList.remove('show');
})





//radio

var radio = document.getElementById('radio')


var label = radio.getElementsByClassName("not-active");

for (var i = 0; i < label.length; i++) {
    label[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    prevBtn.addEventListener("click", embla.scrollPrev, false);
    nextBtn.addEventListener("click", embla.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
    return () => {
        if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
        else prevBtn.setAttribute("disabled", "disabled");

        if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
        else nextBtn.setAttribute("disabled", "disabled");
    };
};

const embla = EmblaCarousel(viewPort, {
    dragFree: true,
    containScroll: "trimSnaps"
});
const disablePrevAndNextBtns = disablePrevNextBtns(
    prevBtn,
    nextBtn,
    embla
);

setupPrevNextBtns(prevBtn, nextBtn, embla);

embla.on("select", disablePrevAndNextBtns);
embla.on("init", disablePrevAndNextBtns);


