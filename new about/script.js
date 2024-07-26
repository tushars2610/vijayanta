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
    const readLessBtn = document.getElementById('btn-3');
    const onePara = document.getElementById('onePara');
    const part2 = document.querySelector('.part-2');
    const one = document.getElementById('one');
    const two = document.getElementsByClassName('two');

    readMoreBtn.addEventListener('click', () => {
        onePara.style.display = 'block';
        part2.classList.add('blur');
        one.classList.add('blur1');
        two.classList.add('blur1');
    });

    readLessBtn.addEventListener('click', () => {
        onePara.style.display = 'none';
        part2.classList.remove('blur');
        one.classList.remove('blur1');
        two.classList.remove('blur1');
    });
});

