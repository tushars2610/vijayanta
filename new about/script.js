document.addEventListener('DOMContentLoaded', () => {
    const texts = document.getElementById('historyDescription');
    const buttons = document.getElementById('btn-1');
    const img1 = document.getElementById('img-1');

    buttons.addEventListener('click', () => {
        if (texts.classList.contains('expanded')) {
            texts.classList.remove('expanded');
            buttons.textContent = 'Read More';
            // img1.style.display='block';

        } else {
            texts.classList.add('expanded');
            buttons.textContent = 'Read Less';
            
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('btn-2');
    const readLessBtn = document.getElementById('btn-6');
    const onePara = document.getElementById('onePara');
    const part2 = document.querySelector('.part-2');
    const one = document.getElementById('one');

    readMoreBtn.addEventListener('click', () => {
        onePara.style.display = 'block';
        part2.classList.add('blur');
        one.classList.add('blur1');
    });

    readLessBtn.addEventListener('click', () => {
        onePara.style.display = 'none';
        part2.classList.remove('blur');
        one.classList.remove('blur1');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn2 = document.getElementById('btn-3');
    const readLessBtn2 = document.getElementById('btn-7');
    const twoPara = document.getElementById('twoPara');
    const part2 = document.querySelector('.part-2');
    const two = document.getElementById('two');

    readMoreBtn2.addEventListener('click', () => {
        twoPara.style.display = 'block';
        part2.classList.add('blur');
        two.classList.add('blur1');
    });

    readLessBtn2.addEventListener('click', () => {
        twoPara.style.display = 'none';
        part2.classList.remove('blur');
        two.classList.remove('blur1');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn3 = document.getElementById('btn-4');
    const readLessBtn3 = document.getElementById('btn-8');
    const threePara = document.getElementById('threePara');
    const part2 = document.querySelector('.part-2');
    const three = document.getElementById('three');

    readMoreBtn3.addEventListener('click', () => {
        threePara.style.display = 'block';
        part2.classList.add('blur');
        three.classList.add('blur1');
    });

    readLessBtn3.addEventListener('click', () => {
        threePara.style.display = 'none';
        part2.classList.remove('blur');
        three.classList.remove('blur1');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn3 = document.getElementById('btn-4');
    const readLessBtn3 = document.getElementById('btn-8');
    const threePara = document.getElementById('threePara');
    const part2 = document.querySelector('.part-2');
    const three = document.getElementById('three');

    readMoreBtn3.addEventListener('click', () => {
        threePara.style.display = 'block';
        part2.classList.add('blur');
        three.classList.add('blur1');
    });

    readLessBtn3.addEventListener('click', () => {
        threePara.style.display = 'none';
        part2.classList.remove('blur');
        three.classList.remove('blur1');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn4 = document.getElementById('btn-5');
    const readLessBtn4 = document.getElementById('btn-9');
    const fourPara = document.getElementById('fourPara');
    const part2 = document.querySelector('.part-2');
    const four = document.getElementById('four');

    readMoreBtn4.addEventListener('click', () => {
        fourPara.style.display = 'block';
        part2.classList.add('blur');
        four.classList.add('blur1');
    });

    readLessBtn4.addEventListener('click', () => {
        threePara.style.display = 'none';
        part2.classList.remove('blur');
        three.classList.remove('blur1');
    });
});
