const products = [
    {
        id: 'PRO1234100',
        image: 'imgs/cake-pic/ig (1).jpg',
        name: 'Mix Fruit Classique Cake',
        price: 520,
        dis: 'Vanilla sponge topped with fresh fruit pieces and layered with mixed fruit filling in each layer.'
    },
    {
        id: 'PRO1234101',
        image: 'imgs/cake-pic/ig (2).jpg',
        name: 'Opera Cake',
        price: 480,
        dis: 'Premium vanilla sponge, each layer filled with strawberry, blueberry, and pineapple fillings.'
    },
    {
        id: 'PRO1234102',
        image: 'imgs/cake-pic/ig (3).jpg',
        name: 'Golden Fantasy Cake',
        price: 600,
        dis: 'Premium chocolate sponge with one layer of mousse chocolate and one layer of truffle.'
    },
    {
        id: 'PRO1234103',
        image: 'imgs/cake-pic/ig (4).jpg',
        name: 'Tri Chocolate Cake',
        price: 560,
        dis: 'Chocolate sponge layered with mousse cream and covered with a chocolate net.'
    },
    {
        id: 'PRO1234104',
        image: 'imgs/cake-pic/ig (5).jpg',
        name: 'Death by Chocolate Cake',
        price: 450,
        dis: 'Chocolate sponge layered with dark chocolate and chocochips.'
    },
    {
        id: 'PRO1234105',
        image: 'imgs/cake-pic/ig (6).jpg',
        name: 'Chocolate Holic Cake',
        price: 570,
        dis: 'Chocolate sponge layered with mousse chocolate, topped with chocolate flakes.'
    },
    {
        id: 'PRO1234106',
        image: 'imgs/cake-pic/ig (7).jpg',
        name: 'Caramel Butter Scotch Cake',
        price: 700,
        dis: 'Chocolate sponge layered with whipped cream and caramel filling, covered with butterscotch nuts.'
    },
    {
        id: 'PRO1234107',
        image: 'imgs/cake-pic/ig (8).jpg',
        name: 'Chocolate Shimmer Cake',
        price: 550,
        dis: 'Chocolate sponge layered with mousse cream and dark chocochips.'
    },
    {
        id: 'PRO1234108',
        image: 'imgs/cake-pic/ig (9).jpg',
        name: 'Dutch Supreme Cake',
        price: 620,
        dis: 'Chocolate sponge with one layer of mousse cream and one layer of truffle chocolate, covered with chocolate flakes.'
    },
    {
        id: 'PRO1234109',
        image: 'imgs/cake-pic/ig (10).jpg',
        name: 'Chocolate Royal Cake',
        price: 480,
        dis: 'Chocolate sponge layered with vanilla cream and truffle.'
    },
    {
        id: 'PRO1234110',
        image: 'imgs/cake-pic/ig (11).jpg',
        name: 'Crown Chocolate Cake',
        price: 540,
        dis: 'Chocolate sponge layered with truffle and chocochips.'
    },
    {
        id: 'PRO1234111',
        image: 'imgs/cake-pic/ig (12).jpg',
        name: 'Hazelnut Cake',
        price: 590,
        dis: 'Chocolate sponge layered with hazelnut paste and nuts.'
    },
    {
        id: 'PRO1234112',
        image: 'imgs/cake-pic/ig (13).jpg',
        name: 'Butter Scotch Cake',
        price: 610,
        dis: 'Vanilla sponge layered with whipped cream and butterscotch filling, sprinkled with butterscotch.'
    },
    {
        id: 'PRO1234113',
        image: 'imgs/cake-pic/ig (14).jpg',
        name: 'Zebra Tortue Cake',
        price: 520,
        dis: 'Chocolate sponge layered with vanilla cream.'
    },
    {
        id: 'PRO1234114',
        image: 'imgs/cake-pic/ig (15).jpg',
        name: 'Choco Crunch Cake',
        price: 530,
        dis: 'Chocolate sponge layered with mousse cream and chocochips.'
    },
    {
        id: 'PRO1234115',
        image: 'imgs/cake-pic/ig (16).jpg',
        name: 'Mango Pineapple Cake',
        price: 560,
        dis: 'Vanilla sponge layered with mango and pineapple filling and fresh chopped pineapple pieces.'
    },
    {
        id: 'PRO1234116',
        image: 'imgs/cake-pic/ig (17).jpg',
        name: 'Mango Cake',
        price: 580,
        dis: 'Vanilla sponge layered with mango filling and whipped cream.'
    },
    {
        id: 'PRO1234117',
        image: 'imgs/cake-pic/ig (18).jpg',
        name: 'Pineapple Cake',
        price: 600,
        dis: 'Vanilla sponge layered with pineapple filling and pineapple pieces.'
    },
    {
        id: 'PRO1234118',
        image: 'imgs/cake-pic/ig (19).jpg',
        name: 'Chocolate Celebration Cake',
        price: 620,
        dis: 'Chocolate sponge layered with mousse cream, chocochips, and butterscotch.'
    },
    {
        id: 'PRO1234119',
        image: 'imgs/cake-pic/ig (20).jpg',
        name: 'Caramel Choco Chips Cake',
        price: 640,
        dis: 'Chocolate sponge layered with caramel filling and chocochips.'
    },
    {
        id: 'PRO1234120',
        image: 'imgs/cake-pic/ig (21).jpg',
        name: 'Rasmalai Cake',
        price: 660,
        dis: 'Vanilla sponge layered with whipped cream, mixed with rasmalai pieces, and soaked with rasmalai milk.'
    },
    {
        id: 'PRO1234121',
        image: 'imgs/cake-pic/ig (22).jpg',
        name: 'Black Forest Cake',
        price: 680,
        dis: 'Chocolate sponge layered with whipped cream, strawberry crush, cherry pieces, and covered with chocolate flakes.'
    },
    {
        id: 'PRO1234122',
        image: 'imgs/cake-pic/ig (23).jpg',
        name: 'Chocolate Strand Cake',
        price: 700,
        dis: 'Chocolate sponge layered with mousse cream and covered with colorful strands.'
    },
    {
        id: 'PRO1234123',
        image: 'imgs/cake-pic/ig (24).jpg',
        name: 'White Forest Cake',
        price: 720,
        dis: 'Vanilla sponge layered with orange crush and covered with white chocolate flakes.'
    },
    {
        id: 'PRO1234124',
        image: 'imgs/cake-pic/ig (25).jpg',
        name: 'Dutch Truffle Cake',
        price: 740,
        dis: 'Chocolate sponge layered with truffle chocolate and dark chocolate.'
    },
    {
        id: 'PRO1234125',
        image: 'imgs/cake-pic/ig (26).jpg',
        name: 'Irish Coffee Cake',
        price: 760,
        dis: 'Cappuccino-flavored cake.'
    },
    {
        id: 'PRO1234126',
        image: 'imgs/cake-pic/ig (27).jpg',
        name: 'Chocolate Delight Cake',
        price: 780,
        dis: 'Chocolate sponge layered with mousse cream and truffle chocolate.'
    },
    {
        id: 'PRO1234127',
        image: 'imgs/cake-pic/ig (28).jpg',
        name: 'Blueberry Cake',
        price: 800,
        dis: 'Vanilla sponge layered with blueberry crush and covered with blueberry gel.'
    },
];


document.addEventListener('DOMContentLoaded', () => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Find the specific product
    const product = products.find(p => p.id === productId);

    if (product) {
        // Render single product details
        renderProductDetails(product);

        // Render featured products (excluding current product)
        const featuredProducts = products
            .filter(p => p.id !== productId)
            .slice(0, 8);
        renderFeaturedProducts(featuredProducts);

        // Setup cart functionality
        setupAddToCartButton(product);
        updateCartQuantity();
    } else {
        console.error('Product not found');
    }
});

function renderProductDetails(product) {
    const productContainer = document.querySelector('.js-product-single');
    if (!productContainer) return;

    productContainer.innerHTML = `
        <div class="single-pro-details">
            <div class="single-pro-img">
                <img src="${product.image}" width="100%" id="mainimg" alt="${product.name}">
            </div>
            <div class="single-pro-details-text">
                <h6>Home / Cakes</h6>
                <h4>${product.name}</h4>
                <h2>₹ <span id="product-price">${product.price}</span></h2>
                
                <div class="form-group">
                 <select name="size" id="size" class="form-control">
                    <option value="medium" selected>Select Size</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="pastries">Pastries</option>
                </select>

                </div>

                <div class="form-group">
                    <input type="number" 
                           value="1" 
                           min="1" 
                           class="js-quantity-input form-control" 
                           placeholder="Quantity">
                </div>

                <div class="form-group">
                    <button class="js-add-to-cart-btn" 
                        data-product-id="${product.id}"
                        data-product-name="${product.name}"
                        data-product-image="${product.image}"
                        data-product-price="${product.price}">
                        Add to Cart
                    </button>
                </div>

                <h4>Description</h4>
                <span>
                    Indulge in our delectable ${product.name}, ${product.dis}
                </span>
            </div>
        </div>
    `;

    // Attach event listener for size change
    const sizeSelect = document.getElementById('size');
    sizeSelect.addEventListener('change', (e) => {
        updatePriceBasedOnSize(product, e.target.value);
    });
}

function updatePriceBasedOnSize(product, size) {
    const priceElement = document.getElementById('product-price');
    // console.log("priceElement", priceElement);
    
    let updatedPrice = product.price;

    // Modify the price based on selected size
    if (size === 'large') {
        updatedPrice = product.price + 300;  // Add ₹200 for large size
    } else if (size === 'pastries') {
        updatedPrice = product.price - 100;  // Reduce ₹50 for pastries
    }

    // Update the price displayed on the page
    priceElement.textContent = updatedPrice;

    return updatedPrice;
}


function renderFeaturedProducts(products) {
    const featuredContainer = document.querySelector('.js-pro-cont');
    if (!featuredContainer) return;

    featuredContainer.innerHTML = products.map(product => `
      <div class="pro" onclick="navigateToProductPage('${product.id}')">
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

    // Attach event listeners for featured product cart buttons
    document.querySelectorAll('.js-add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const productId = button.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    // Attach click events for product navigation
    document.querySelectorAll('.pro').forEach(product => {
        product.addEventListener('click', (e) => {
            if (!e.target.closest('.js-add-to-cart')) {
                const productId = product.querySelector('.js-add-to-cart').getAttribute('data-product-id');
                navigateToProductPage(productId);
            }
        });
    });
}

function setupAddToCartButton(product) {
    const addToCartBtn = document.querySelector('.js-add-to-cart-btn');
    if (!addToCartBtn) return;

    addToCartBtn.addEventListener('click', () => {
        const quantityInput = document.querySelector('.js-quantity-input');
        const quantity = parseInt(quantityInput.value) || 1;

        const sizeSelect = document.getElementById('size');
        const selectedSize = sizeSelect.value;

        // console.log("product",product,"selected", selectedSize);

        const updatedPrice = updatePriceBasedOnSize(product, selectedSize);  // Get the updated price

        // console.log("updatedPrice", updatedPrice);

        const cartProduct = {
            productId: product.id,
            productName: product.name,
            productImg: product.image,
            productPrice: updatedPrice,  // Use the updated price
            productQuantity: quantity,
            productSize: selectedSize  // Include the selected size
        };

        // console.log("cartProduct", cartProduct);

        addToCart(cartProduct);
    });
}


function addToCart(cartProduct) {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const existingProduct = cartProducts.find(p => p.productId === cartProduct.productId && p.productSize === cartProduct.productSize);

    if (existingProduct) {
        existingProduct.productQuantity += cartProduct.productQuantity;
    } else {
        cartProducts.push(cartProduct);
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

function navigateToProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Cart click event
document.querySelectorAll('.js-cart-click').forEach((carticon) => {
    carticon.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
});