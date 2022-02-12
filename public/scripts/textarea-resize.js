const textareas = document.querySelectorAll('textarea');

for (const textarea of textareas) {
    textarea.addEventListener('keyup', (e) => { 
        textarea.style.height = '4rem'
        const height = e.target.scrollHeight;
        textarea.style.height = `${height}px`
    })
}
