
// get random image when press btn


const btn = document.querySelector('.next').addEventListener('click', function () {
    const images = ['https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg', 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg', 'https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925__340.jpg', 'https://cdn.pixabay.com/photo/2017/04/13/17/48/floor-2228277__340.jpg',
        'https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060__340.jpg'];
    var randColor = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.house_overlay').style.backgroundImage = `url(${randColor})`;
});



document.querySelector('.house_overlay').style.display = 'none';
document.querySelector('.house_overlay_back').style.display = 'none';
document.querySelector('.next').style.display = 'none';

const b = document.querySelectorAll('.grid0');

b.forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('.house_overlay').style.display = 'block';
        document.querySelector('.house_overlay_back').style.display = 'block';
        document.querySelector('.next').style.display = 'block';
    })
});


document.querySelector('.house_overlay_back').addEventListener('click', function () {
    document.querySelector('.house_overlay').style.display = 'none';
    document.querySelector('.house_overlay_back').style.display = 'none';
    document.querySelector('.next').style.display = 'none';
})





document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;


    if (e.keyCode == '39') {
        const images = ['https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg', 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg', 'https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925__340.jpg', 'https://cdn.pixabay.com/photo/2017/04/13/17/48/floor-2228277__340.jpg',
            'https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060__340.jpg'];
        var randColor = images[Math.floor(Math.random() * images.length)];
        document.querySelector('.house_overlay').style.backgroundImage = `url(${randColor})`;
    }

}