// Home Page Js Code
const projectButton = document.querySelector('.js-project-btn');
projectButton.addEventListener('click', () => {
    window.location.href = '/project.html';
});

const githubIcon = document.querySelector('.js-github-icon');
githubIcon.addEventListener('click', () => {
    window.open('https://github.com/aahin-github', '_blank');
});

const linkedinIcon = document.querySelector('.js-linkedin-icon');
linkedinIcon.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/aahin-k', "_blank");
});
