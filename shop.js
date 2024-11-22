document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    const productsPerPage = 8;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
  
    // Slice products based on page number
    const pageProducts = products.slice(startIndex, endIndex);
    
    renderProducts(pageProducts);
    setupPageNavigation(currentPage);
    attachCartEvents();
  });
  
  function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('shop-page-1.html')) return 1;
    if (path.includes('shop-page-2.html')) return 2;
    if (path.includes('shop-page-3.html')) return 3;
    if (path.includes('shop-page-4.html')) return 4;
    return 1;
  }
  
  function renderProducts(pageProducts) {
    const productContainer = document.querySelector('.js-pro-cont');
    if (!productContainer) return;
  
    // If no products for this page, show a message
    if (pageProducts.length === 0) {
      productContainer.innerHTML = '<p>No products found for this page.</p>';
      return;
    }
  
    productContainer.innerHTML = pageProducts.map(product => `
      <div class="pro" data-product-id="${product.id}">
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
          <h4>₹ ${product.price}</h4>
        </div>
        <a href="#" class="cart js-add-to-cart" data-product-id="${product.id}">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    `).join('');
  }
  
  function setupPageNavigation(currentPage) {
    const pageLinks = document.querySelectorAll('#pagenavi a');
    pageLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(`shop-page-${currentPage}.html`)) {
        link.classList.add('active');
      }
    });
  }
  
  function attachCartEvents() {
    document.querySelectorAll('.js-add-to-cart').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
      });
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
  
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const existingProduct = cartProducts.find(p => p.productId === productId);
  
    if (existingProduct) {
      existingProduct.productQuantity += 1;
    } else {
      cartProducts.push({
        productId: product.id,
        productName: product.name,
        productImg: product.image,
        productPrice: product.price,
        productQuantity: 1
      });
    }
  
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    updateCartQuantity();
  }
  
  function updateCartQuantity() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const totalQuantity = cartProducts.reduce((total, product) => total + product.productQuantity, 0);
    
    document.querySelectorAll('.js-shop-quantity').forEach(element => {
      element.textContent = totalQuantity;
    });
  }
  
  // Ensure this runs on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantity();
  });