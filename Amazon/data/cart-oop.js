const cart = {
    cartItems: undefined,

    loadFromStorage: function () {
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || [
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }
        ];
    },

    saveToStorage: function () {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },

    addToCart: function (productId) {
        let found = false;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                found = true;
                cartItem.quantity++;
            }
        });

        if (!found) {
            this.cartItems.push({
                productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        
        this.saveToStorage();
    },

    removeFromCart: function (productId) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
        this.saveToStorage();
    },

    updateDeliveryOption: function (productId, deliveryOptionId) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                cartItem.deliveryOptionId = deliveryOptionId;
            }
        });

        this.saveToStorage();
    }
};

cart.loadFromStorage();
