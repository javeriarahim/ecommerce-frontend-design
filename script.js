// Basic JavaScript for Week 3 Tasks
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Search Bar Interaction (Styled only)
    const searchInput = document.getElementById('header-search');
    searchInput.addEventListener('focus', () => {
        searchInput.style.borderColor = '#000';
    });

    // 2. Buy Now / Add to Cart Simulation
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

    // 3. Size selection logic placeholder (for Product Details Page)
    console.log("JavaScript Loaded: Ready for Product Detail Page interactions.");
});
