export let cart;
loadFromStorage();
export function loadFromStorage()
{
    cart = JSON.parse(localStorage.getItem('cart')) || [
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
}

console.log(cart);
function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart));
}

saveToStorage();

export function addToCart(productId)
{
  let found = 0;
        cart.forEach((cartItem)=>{
            if (productId == cartItem.productId)
            {
                found = 1;
                cartItem.quantity++;
            }
        })
        if (!found)
        {
            cart.push({productId, quantity:1, deliveryOptionsId: '1'});
        }
        saveToStorage();
}

export function removeFromCart(productId)
{
    let newCart = [];
    cart.forEach((cartItem) => {
        if (productId !== cartItem.productId)
        {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId)
{
    cart.forEach((cartItem) => {
        if (cartItem.productId == productId)
        {
            cartItem.deliveryOptionId = deliveryOptionId;
        }
    });
    saveToStorage();
}