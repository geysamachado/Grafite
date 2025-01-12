// Selecionar todas as seções de carrossel
document.querySelectorAll('.carousel-container').forEach(carouselContainer => {
    // Criar botões de navegação
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    // Adicionar classes e texto aos botões
    prevButton.classList.add('carousel-btn', 'prev-btn');
    nextButton.classList.add('carousel-btn', 'next-btn');
    prevButton.textContent = '⟨';
    nextButton.textContent = '⟩';

    // Inserir botões na página
    carouselContainer.prepend(prevButton);
    carouselContainer.append(nextButton);

    // Selecionar o carrossel dentro do container
    const carousel = carouselContainer.querySelector('.carousel');

    // Função para rolar o carrossel
    const scrollCarousel = (direction) => {
        const scrollAmount = carousel.offsetWidth; // Tamanho visível do carrossel
        carousel.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    // Adicionar eventos de clique aos botões
    prevButton.addEventListener('click', () => scrollCarousel('prev'));
    nextButton.addEventListener('click', () => scrollCarousel('next'));
});
