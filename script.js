document.addEventListener('DOMContentLoaded', () => {

    // --- 0. Luxury Preloader Sequence ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const preloaderLogo = preloader.querySelector('.preloader-logo');
        const preloaderSlogan = preloader.querySelector('.preloader-slogan');

        document.body.classList.add('preloader-lock');

        setTimeout(() => {
            if (preloaderLogo) preloaderLogo.classList.add('show');
        }, 150);

        setTimeout(() => {
            if (preloaderSlogan) preloaderSlogan.classList.add('show');
        }, 700);

        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.remove('preloader-lock');
        }, 3350);

        setTimeout(() => {
            preloader.remove();
        }, 4300);
    }

    // --- 1. Isolated Product Image Configurations ---
    const identityImageMap = {
        black: {
            front: 'images/1000541247.jpg',
            back: 'images/1000541248.jpg'
        },
        white: {
            front: 'images/1000541245.jpg',
            back: 'images/1000541246.jpg'
        }
    };

    const oathImageMap = {
        black: {
            front: 'images/1000541251.jpg',
            back: 'images/1000541252.jpg'
        },
        white: {
            front: 'images/1000541250.jpg',
            back: 'images/1000541249.jpg'
        }
    };

    // --- Dynamic Premium Dark Luxury Theme Styles Injected Safely ---
    const premiumCartStyleBlock = document.createElement('style');
    premiumCartStyleBlock.textContent = `
        /* Premium black luxury sidebar base alignment overrides */
        #cart-sidebar {
            display: flex !important;
            flex-direction: column !important;
            padding: 0 !important;
            background: #0a0a0a !important; /* Premium rich black */
            box-shadow: -5px 0 40px rgba(0,0,0,0.6) !important;
            color: #ffffff !important;
        }

        /* Cart layout close button and header container elements matching light contrast */
        #cart-sidebar h2, 
        #cart-sidebar h3, 
        #cart-sidebar span, 
        #cart-sidebar label {
            color: #ffffff !important;
        }
        
        #close-cart {
            color: #ffffff !important;
            opacity: 0.8;
            transition: opacity 0.2s ease !important;
        }
        #close-cart:hover {
            opacity: 1 !important;
        }

        /* Cart header spacing adjustments */
        #cart-sidebar > :first-child:not(#cart-items-container):not(#cart-total-container):not(#checkout-btn) {
            padding: 30px 24px 20px 24px !important;
            border-bottom: 1px solid #222222 !important;
        }

        /* Scrollable container zone for item lists */
        #cart-items-container {
            flex: 1 !important;
            overflow-y: auto !important;
            padding: 15px 24px !important;
        }

        /* Custom minimal scrollbar track matching dark luxury theme */
        #cart-items-container::-webkit-scrollbar {
            width: 4px;
        }
        #cart-items-container::-webkit-scrollbar-thumb {
            background: #333333;
            border-radius: 2px;
        }

        /* Premium Dark Cart Rows with subtle charcoal bottom border line dividers */
        .premium-cart-row {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 20px 0 !important;
            border-bottom: 1px solid #1a1a1a !important;
            transition: opacity 0.25s ease !important;
        }
        .premium-cart-row:last-child {
            border-bottom: none !important;
        }

        /* Clean luxury text treatments optimized for high-contrast dark readability */
        .cart-item-details h4 {
            font-family: inherit;
            font-size: 14px !important;
            font-weight: 600 !important;
            letter-spacing: 0.8px !important;
            color: #ffffff !important;
            text-transform: uppercase !important;
        }
        .cart-item-details p {
            font-size: 12px !important;
            color: #a0a0a0 !important; /* Muted silver-grey text */
            letter-spacing: 0.3px !important;
        }
        .cart-item-price {
            font-size: 14px !important;
            font-weight: 600 !important;
            color: #ffffff !important;
            letter-spacing: 0.5px !important;
        }

        /* Premium Luxury Quantity Step Adjuster Components */
        .luxury-qty-stepper {
            display: inline-flex !important;
            align-items: center !important;
            border: 1px solid #333333 !important;
            background: #111111 !important;
            padding: 2px !important;
            margin-top: 8px !important;
            border-radius: 0px !important;
        }
        .luxury-qty-btn {
            background: transparent !important;
            border: none !important;
            color: #ffffff !important;
            width: 26px !important;
            height: 26px !important;
            font-size: 14px !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: background 0.2s ease, color 0.2s ease !important;
        }
        .luxury-qty-btn:hover {
            background: #ffffff !important;
            color: #000000 !important;
        }
        .luxury-qty-value {
            font-size: 13px !important;
            font-weight: 600 !important;
            color: #ffffff !important;
            padding: 0 12px !important;
            min-width: 20px !important;
            text-align: center !important;
            letter-spacing: 0.5px !important;
        }

        /* Elegant deletion trigger buttons with premium muted red hover transaction */
        .remove-cart-item-btn {
            background: none !important;
            border: none !important;
            font-size: 20px !important;
            font-weight: 300 !important;
            cursor: pointer !important;
            color: #666666 !important;
            padding: 5px !important;
            line-height: 1 !important;
            transition: color 0.2s ease, transform 0.2s ease !important;
        }
        .remove-cart-item-btn:hover {
            color: #ff4d4d !important;
            transform: scale(1.1);
        }

        /* Bold, clean Fixed Sticky Total and Action Checkout Dock configured for dark mode */
        .premium-cart-footer-dock {
            margin-top: auto !important;
            background: #0a0a0a !important;
            border-top: 1px solid #222222 !important;
            padding: 24px !important;
            z-index: 10 !important;
        }
        .premium-total-row {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            margin-bottom: 20px !important;
        }
        .premium-total-row span:first-child {
            font-size: 12px !important;
            font-weight: 500 !important;
            text-transform: uppercase !important;
            letter-spacing: 1.2px !important;
            color: #a0a0a0 !important;
        }
        .premium-total-row span:last-child {
            font-size: 18px !important;
            font-weight: 700 !important;
            color: #ffffff !important;
            letter-spacing: 0.5px !important;
        }

        /* Ensure checkout button stays perfectly within layout tracking metrics */
        #checkout-btn {
            width: 100% !important;
            margin: 0 !important;
        }
    `;
    document.head.appendChild(premiumCartStyleBlock);

    // --- 2. Functional WhatsApp Shopping Cart Data System ---
    let shoppingCartStorage = [];

    const CART_STORAGE_KEY = 'drskmCart';

    function saveCartToStorage() {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(shoppingCartStorage));
        } catch (e) {
            console.error('Could not save cart to localStorage:', e);
        }
    }

    function loadCartFromStorage() {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    shoppingCartStorage = parsedCart;
                }
            }
        } catch (e) {
            console.error('Could not load cart from localStorage:', e);
        }
    }

    loadCartFromStorage();

    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartBadge = document.querySelector('.cart-badge');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const checkoutButton = document.getElementById('checkout-btn');

    // Create a sticky footer panel to hold both the total section and checkout button seamlessly
    let premiumFooterDock = document.getElementById('premium-footer-dock');
    if (!premiumFooterDock && cartSidebar) {
        premiumFooterDock = document.createElement('div');
        premiumFooterDock.id = 'premium-footer-dock';
        premiumFooterDock.classList.add('premium-cart-footer-dock');
        
        cartSidebar.appendChild(premiumFooterDock);
        
        if (checkoutButton) {
            premiumFooterDock.appendChild(checkoutButton);
        }
    }

    function toggleCartDisplay() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }

    if (cartToggle) cartToggle.addEventListener('click', toggleCartDisplay);
    if (closeCart) closeCart.addEventListener('click', toggleCartDisplay);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCartDisplay);

    // --- Premium Toast Notifications ---
    const toastContainer = document.getElementById('toast-container');

    // Enhanced fallback validation checks for global access inside asynchronous calls
    window.showToastNotificationExternal = function(message, iconClass = 'fa-check', duration = 2000) {
        showToast(message, iconClass, duration);
    };

    function showToast(message, iconClass = 'fa-check', duration = 2000) {
        if (!toastContainer) return;

        const toastElement = document.createElement('div');
        toastElement.classList.add('toast');
        toastElement.innerHTML = `
            <i class="fa-solid ${iconClass} toast-icon"></i>
            <span class="toast-message">${message}</span>
        `;
        toastContainer.appendChild(toastElement);

        requestAnimationFrame(() => {
            toastElement.classList.add('show');
        });

        setTimeout(() => {
            toastElement.classList.remove('show');
            toastElement.addEventListener('transitionend', () => {
                toastElement.remove();
            }, { once: true });
        }, duration);
    }

    // --- Newsletter Signup Validation (Google Apps Script Integration) ---
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            
            const emailValue = emailInput ? emailInput.value.trim() : '';
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailValue || !emailPattern.test(emailValue)) {
                showToast(
                    'Please enter a valid email address.',
                    'fa-triangle-exclamation',
                    3200
                );
                return;
            }

            // Lock UI elements to prevent duplicated data streams
            const originalButtonText = submitButton ? submitButton.textContent : 'SUBSCRIBE';
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'PROCESSING...';
            }
            if (emailInput) {
                emailInput.disabled = true;
            }

            const backendEndpointUrl = 'https://script.google.com/macros/s/AKfycbxZ0yI9L2YToYC792-MrtvwDVGOalsukfWM8Vvb_MsSK5PWhrm36oOyMDAGygO639_bGQ/exec';

            try {
                // Post asynchronous cross-origin content utilizing structural URL payload generation
                await fetch(backendEndpointUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        'email': emailValue
                    })
                });

                // Clear layout fields and trigger high-contrast luxury confirmation window
                showToast(
                    "Welcome to the Archive.",
                    'fa-check',
                    4500
                );
                
                if (newsletterForm) {
                    newsletterForm.reset();
                }

            } catch (networkError) {
                console.error('Subscription Pipeline Exception:', networkError);
                showToast(
                    'An error occurred. Please try again.',
                    'fa-triangle-exclamation',
                    3500
                );
            } finally {
                // Return interaction controls seamlessly back to baseline parameters
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
                if (emailInput) {
                    emailInput.disabled = false;
                }
            }
        });
    }

    // --- Premium Full-Screen Mobile Navigation Menu ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileNavMenu.classList.add('active');
        mobileNavBackdrop.classList.add('active');
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.setAttribute('aria-label', 'Close menu');
        document.body.classList.add('no-scroll');
    }

    function closeMobileMenu() {
        mobileNavMenu.classList.remove('active');
        mobileNavBackdrop.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('no-scroll');
    }

    function toggleMobileMenu() {
        if (mobileNavMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavMenu && mobileNavMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    function parsePriceValue(priceString) {
        const cleanNumber = priceString.replace(/[^0-9]/g, '');
        return parseInt(cleanNumber, 10) || 0;
    }

    function formatCurrencyValue(number) {
        return '₦' + number.toLocaleString();
    }

    function updateCartDisplayUI() {
        saveCartToStorage();

        const totalItemsCount = shoppingCartStorage.reduce((acc, item) => acc + item.quantity, 0);
        if (cartBadge) {
            cartBadge.textContent = totalItemsCount;
        }

        if (!cartItemsContainer) return;

        if (shoppingCartStorage.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; margin-top: 40px; color: #a0a0a0; font-size: 14px; letter-spacing: 0.5px;">Your cart is currently empty.</p>';
            if (premiumFooterDock) {
                const totalRow = document.getElementById('premium-total-row-element');
                if (totalRow) totalRow.remove();
                if (checkoutButton) checkoutButton.style.display = 'none';
            }
            return;
        }

        if (checkoutButton) checkoutButton.style.display = 'block';

        cartItemsContainer.innerHTML = '';
        let runningGrandTotal = 0;

        shoppingCartStorage.forEach((item, index) => {
            const itemTotalCost = item.numericPrice * item.quantity;
            runningGrandTotal += itemTotalCost;

            const rowElement = document.createElement('div');
            rowElement.classList.add('premium-cart-row');

            rowElement.innerHTML = `
                <div class="cart-item-details">
                    <h4 style="margin: 0 0 4px 0;">${item.name}</h4>
                    <p style="margin: 0 0 2px 0;">Color: ${item.color} &middot; Size: ${item.size}</p>
                    <div class="luxury-qty-stepper">
                        <button class="luxury-qty-btn decrease-qty-btn" data-index="${index}">-</button>
                        <span class="luxury-qty-value">${item.quantity}</span>
                        <button class="luxury-qty-btn increase-qty-btn" data-index="${index}">+</button>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div class="cart-item-price">${formatCurrencyValue(itemTotalCost)}</div>
                    <button class="remove-cart-item-btn" data-index="${index}">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(rowElement);
        });

        let totalRowElement = document.getElementById('premium-total-row-element');
        if (!totalRowElement) {
            totalRowElement = document.createElement('div');
            totalRowElement.id = 'premium-total-row-element';
            totalRowElement.classList.add('premium-total-row');
            if (checkoutButton) {
                premiumFooterDock.insertBefore(totalRowElement, checkoutButton);
            } else {
                premiumFooterDock.appendChild(totalRowElement);
            }
        }
        totalRowElement.innerHTML = `
            <span>Total Amount</span>
            <span>${formatCurrencyValue(runningGrandTotal)}</span>
        `;

        // --- Event Listener Assignments for Quantity Steppers ---
        const decreaseButtons = cartItemsContainer.querySelectorAll('.decrease-qty-btn');
        decreaseButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
                if (shoppingCartStorage[targetIndex].quantity > 1) {
                    shoppingCartStorage[targetIndex].quantity -= 1;
                } else {
                    shoppingCartStorage.splice(targetIndex, 1);
                }
                updateCartDisplayUI();
            });
        });

        const increaseButtons = cartItemsContainer.querySelectorAll('.increase-qty-btn');
        increaseButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
                shoppingCartStorage[targetIndex].quantity += 1;
                updateCartDisplayUI();
            });
        });

        // The (×) button now wipes the entire line item completely out of the cart array instantly
        const removeButtons = cartItemsContainer.querySelectorAll('.remove-cart-item-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
                shoppingCartStorage.splice(targetIndex, 1);
                updateCartDisplayUI();
            });
        });
    }

    // --- WhatsApp API Checkout Message Router ---
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (shoppingCartStorage.length === 0) {
                alert('Your cart is empty.');
                return;
            }

            const cleanPhoneTarget = '2349130131222';
            let messageBody = "Hello DRSKM,\n\nI'd like to place an order.\n\n";
            let runningGrandTotal = 0;

            shoppingCartStorage.forEach((item, index) => {
                const itemTotalCost = item.numericPrice * item.quantity;
                runningGrandTotal += itemTotalCost;

                messageBody += `ITEM ${index + 1}:\n\n`;
                messageBody += `Product:\n${item.name}\n\n`;
                messageBody += `Color:\n${item.color.charAt(0).toUpperCase() + item.color.slice(1)}\n\n`;
                messageBody += `Size:\n${item.size}\n\n`;
                messageBody += `Quantity:\n${item.quantity}\n\n`;
                messageBody += `Price:\n${formatCurrencyValue(itemTotalCost)} (${item.quantity} x ${item.price})\n\n`;
                
                if (index < shoppingCartStorage.length - 1) {
                    messageBody += `\n`; 
                }
            });

            messageBody += `Grand Total:\n${formatCurrencyValue(runningGrandTotal)}\n\n`;
            messageBody += "Please let me know the payment process and delivery options.\n\nThank you.";

            const structuredUri = `https://wa.me/${cleanPhoneTarget}?text=${encodeURIComponent(messageBody)}`;
            
            window.open(structuredUri, '_blank');

            shoppingCartStorage = [];
            updateCartDisplayUI();
            toggleCartDisplay();
        });
    }

    // --- 3. Independent Product Selection Action Pipeline ---
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productId = product.getAttribute('id');
        const displayImage = product.querySelector('.product-display-img');
        const viewButtons = product.querySelectorAll('.view-toggle-btn');
        const colorOptions = product.querySelectorAll('.color-option');
        const sizeOptions = product.querySelectorAll('.size-option');
        const addToCartButton = product.querySelector('.add-to-cart');

        const productNameText = product.querySelector('.product-title') ? product.querySelector('.product-title').textContent.trim() : 'Premium Tee';
        const productPriceText = product.querySelector('.price') ? product.querySelector('.price').textContent.trim() : '₦80,000';

        let currentSelectedColor = 'black';
        let currentSelectedSize = 'L';
        let currentSelectedView = 'front';

        const imageSchema = (productId === 'product-oath') ? oathImageMap : identityImageMap;

        function syncProductViewDisplay() {
            if (!displayImage || !imageSchema[currentSelectedColor]) return;
            const targetedImageSrc = imageSchema[currentSelectedColor][currentSelectedView];
            
            displayImage.style.opacity = '0';
            setTimeout(() => {
                displayImage.src = targetedImageSrc;
                displayImage.style.opacity = '1';
            }, 150);
        }

        colorOptions.forEach(colorBtn => {
            colorBtn.addEventListener('click', () => {
                colorOptions.forEach(c => c.classList.remove('active'));
                colorBtn.classList.add('active');

                currentSelectedColor = colorBtn.getAttribute('data-color');
                currentSelectedView = 'front';
                
                viewButtons.forEach(btn => {
                    if (btn.getAttribute('data-view') === 'front') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });

                syncProductViewDisplay();
            });
        });

        viewButtons.forEach(viewBtn => {
            viewBtn.addEventListener('click', () => {
                viewButtons.forEach(v => v.classList.remove('active'));
                viewBtn.classList.add('active');

                currentSelectedView = viewBtn.getAttribute('data-view');
                syncProductViewDisplay();
            });
        });

        sizeOptions.forEach(sizeBtn => {
            sizeBtn.addEventListener('click', () => {
                sizeOptions.forEach(s => s.classList.remove('active'));
                sizeBtn.classList.add('active');
                currentSelectedSize = sizeBtn.textContent.trim();
            });
        });

        if (addToCartButton) {
            addToCartButton.addEventListener('click', () => {
                const existingProductMatch = shoppingCartStorage.find(item => 
                    item.name === productNameText && 
                    item.color === currentSelectedColor && 
                    item.size === currentSelectedSize
                );

                if (existingProductMatch) {
                    existingProductMatch.quantity += 1;
                } else {
                    shoppingCartStorage.push({
                        name: productNameText,
                        color: currentSelectedColor,
                        size: currentSelectedSize,
                        price: productPriceText,
                        numericPrice: parsePriceValue(productPriceText),
                        quantity: 1
                    });
                }

                if (cartBadge) {
                    cartBadge.style.transform = 'scale(1.2)';
                    setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
                }

                updateCartDisplayUI();
                showToast(`${productNameText} added to cart`);
                toggleCartDisplay();
            });
        }
    });

    // --- 4. Luxury Scroll-Linked Intersection Animations ---
    const scrollingAnimationOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollIntersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, scrollingAnimationOptions);

    // Stagger product cards so they don't all appear at once
    const staggeredProductCards = document.querySelectorAll('.product-card.fade-in-on-scroll');
    staggeredProductCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
    });

    // Stagger FAQ items so each answers appears just after the last
    const staggeredFaqItems = document.querySelectorAll('.faq-item.fade-in-on-scroll');
    staggeredFaqItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 100}ms`;
    });

    const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll, .footer-fade-in');
    animatedElements.forEach(element => {
        scrollIntersectionObserver.observe(element);
    });

    updateCartDisplayUI();
});