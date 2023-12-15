const caseStudyButton = document.querySelector('.js-case-study-btn');
caseStudyButton.addEventListener('click', () => {
    if (!caseStudyButton.classList.contains('not-ready')) {
        caseStudyButton.classList.add('not-ready');
        caseStudyButton.innerHTML = 'Not ready yet...';
    }
    else{
        caseStudyButton.classList.remove('not-ready');
        caseStudyButton.innerHTML = 'case study'
    }

})