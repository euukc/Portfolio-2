// Scroll para a Section

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('cabecalho-menu');
    const itensMenu = menu.querySelectorAll('#cabecalho-menu-itens');
    

    itensMenu.forEach((item) => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');            
            const targetSection = document.getElementById(targetId);            
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
    
});

// seta para rolagem
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

document.addEventListener('DOMContentLoaded', function (){  

    window.addEventListener('scroll', function (){
        if(window.scrollY > window.innerHeight / 2){
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function (){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


