const viewBtn = document.querySelector('.view-btn');
viewBtn.addEventListener('click', () => {
    if (!viewBtn.classList.contains('not-ready')) {
        viewBtn.classList.add('not-ready');
        viewBtn.innerHTML = 'Not ready yet...';
    }
    else{
        viewBtn.classList.remove('not-ready');
        viewBtn.innerHTML = 'view'
    }

})