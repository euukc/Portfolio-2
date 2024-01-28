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



