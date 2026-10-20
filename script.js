

const darkModeToggle = document.getElementById('darkModeToggle');
const likeBtn = document.getElementById('likeBtn');
const likeCountSpan = document.getElementById('likeCount');
const resetBtn = document.getElementById('resetBtn');

let likeCount = 24;


darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});


likeBtn.addEventListener('click', () => {
    likeCount++;
    likeCountSpan.textContent = likeCount;
});


resetBtn.addEventListener('click', () => {
    likeCount = 24;
    likeCountSpan.textContent = likeCount;
});


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

       
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        console.log(`Gialerto ang page: ${link.textContent}`);
    });
});
