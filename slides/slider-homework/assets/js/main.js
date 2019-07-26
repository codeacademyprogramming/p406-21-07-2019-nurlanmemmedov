const items = document.querySelectorAll('.square');
const slide = document.querySelectorAll('.slides');
const inner = document.querySelector('.inner');
items[items.length - 1].style.display = 'none';
items[0].style.display = 'none';

var activeindex = 1;
var width = 1140;
inner.style.left = -width * activeindex + 'px';


items[activeindex].classList.add('active');



var timer = setInterval(() => {
    if (activeindex + 1 < slide.length) {
        activeindex++;
    } else {
        activeindex = 0;
    } setIndex(activeindex);
    return activeindex;

}, 3000);

for (let i = 0; i < slide.length; i++) {
    slide[i].addEventListener('mouseover', () => {
        clearInterval(timer);
    })
    slide[i].addEventListener('mouseout', () => {
        timer = setInterval(() => {
            if (activeindex + 1 < slide.length) {
                activeindex++;
            } else {
                activeindex = 0;
            } setIndex(activeindex)

        }, 2000)
    })
};

let ilk;
let son;
let move;
let change;
function myFunc(ev) {
    move = ev.clientX;
    change = move - ilk;
    inner.style.left = -width * activeindex + change + 'px';
    inner.style.transition = 'all .0s ease-in';
};
inner.addEventListener('mousedown', (e) => {
    ilk = e.clientX;
    inner.addEventListener('mousemove', myFunc);
});



inner.addEventListener('mouseup', (eve) => {
    inner.removeEventListener('mousemove', myFunc);

    son = eve.clientX;
    if (ilk - son < 0) {
        if (activeindex - 1 !== -1) {

            activeindex--;
        }

        setIndex(activeindex);
    } else if (ilk - son > 0) {
        if (activeindex + 1 < slide.length) {
            activeindex++;

        }
        setIndex(activeindex);
    }

});
inner.addEventListener('transitionend', (event) => {
    if (slide[activeindex].id === 'right') {
        inner.style.transition = 'none';
        activeindex = 1;
        inner.style.left = -width * activeindex + 'px';
        items[activeindex].classList.add('active');
    };
    if (slide[activeindex].id === 'left') {
        inner.style.transition = 'none';
        activeindex = slide.length - 2;
        inner.style.left = -width * activeindex + 'px';
        items[activeindex].classList.add('active')

    }
});


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (e) => {
        activeindex = i;
        setIndex(activeindex);
    });

};



function setIndex(activeindex) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');

    }
    items[activeindex].classList.add('active');

    inner.style.left = -width * activeindex + 'px';
    inner.style.transition = 'all .5s ease-out';

};








