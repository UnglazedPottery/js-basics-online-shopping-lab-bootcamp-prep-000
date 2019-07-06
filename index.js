var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var random = 100*Math.random()
  var cartObject = {itemName: item, itemPrice: Math.floor(random)}
  
  cart.push(cartObject)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0)
  {
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1)
  {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else
  {
    var array = []
    for( var i = 0; i < cart.length; i++)
    {
      array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    var array2 = array.slice(0, array.length - 1)
    return "In your cart, you have" + array2 + ", and" + array[array.length - 1] + "."
  }
}

function total() {
  for(var i = 0; i < cart.length; i++)
  {
    var totalValue = 0
    totalValue += cart[i].itemPrice
  }
  return totalValue
}

function removeFromCart(item) {
  if(item === itemName){cart.splice()}
  else{"That item is not in your cart."}
}

function placeOrder(cardNumber) {
  if(sdfs){return "Sorry, we don't have a credit card on file for you."}
  else
  {
    cart = []
    return "Your total cost is $" + total() + `, which will be charged to the card ${cardNumber}.`
  }
}
