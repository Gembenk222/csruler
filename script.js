// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product purchase buttons functionality
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        alert(`Вы выбрали продукт: ${productName}\nВ данный момент доступна только демо версия...`);
        // Здесь можно добавить перенаправление на страницу оплаты
    });
});

// Support button functionality
document.querySelector('.btn-contact').addEventListener('click', function() {
    alert('Свяжитесь с нами через Telegram: @cs2ruler_support или email: support@cs2ruler.com');
});

// Simple animation on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    
    if (scrollPosition > 100) {
        header.style.background = 'rgba(26, 26, 31, 0.9)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = '#1a1a1f';
        header.style.boxShadow = 'none';
    }
});