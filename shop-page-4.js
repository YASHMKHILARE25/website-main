document.addEventListener('DOMContentLoaded', () => {
    const pageOneProducts = products.slice(24, 28);
    renderProductsForPage(pageOneProducts);
  });
  
  function renderProductsForPage(pageProducts) {
    const productContainer = document.querySelector('.js-pro-cont');
    
    productContainer.innerHTML = '';
  
    pageProducts.forEach((product) => {
      const productHTML = `
        <div class="pro" onclick="window.location.href='product.html?id=${product.id}'">
          <img src="${product.image}" alt="${product.name}">
          <div class="des">
            <h5>${product.name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>₹${product.price}</h4>
          </div>
        </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  
    // Reattach cart click events
    document.querySelectorAll('.js-add-to-cart').forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
      });
    });
  }