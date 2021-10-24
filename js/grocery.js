// Exercise 10
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [
    //aquí s'han d'afegir els productes
];
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};

var productsId;


// Exercise 1
function addToCartList(id) {

    //buscar el produccte a l'array PRODUCTS
    for (let i = 0; i < products.length; i++) {

        //buscar el producte a l'array products
        productsId = products[id - 1];
    }
    //afegir el producte a l'array cart list
    cartList.push(productsId);
    console.log(cartList);
}


// Exercise 2
function cleanCart() {

    while (cartList.length > 0) {
        cartList.pop();
    }

    console.log(cartList);

}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    for (let i = 0; i < cartList.length; i++) {

        switch(cartList[i]) {
            case products[0]:
                subtotal.grocery.value = subtotal.grocery.value + 10.5;
                break;
            
            case products[1]:
                subtotal.grocery.value = subtotal.grocery.value + 6.25;
                break;
            
            case products[2]:
                subtotal.grocery.value = subtotal.grocery.value + 5;
                break;
            
            case products[3]:
                subtotal.beauty.value = subtotal.beauty.value + 260;
                break;

            case products[4]:
                subtotal.beauty.value = subtotal.beauty.value + 20.5;
                break;

            case products[5]:
                subtotal.beauty.value = subtotal.beauty.value + 12.75;
                break;

            case products[6]:
                subtotal.clothes.value = subtotal.clothes.value + 15;
                break;

            case products[7]:
                subtotal.clothes.value = subtotal.clothes.value + 19.99;
                break;

            case products[8]:
                subtotal.clothes.value = subtotal.clothes.value + 9.99;
                break;          
        } //final switch
    } // final bucle for
    console.log(subtotal);
}


//variable global total
var total = 0;

// Exercise 4
function calculateTotal() {  
    for (let sub in subtotal) {

        for (let val in subtotal[sub]) {
            
            //console.log(sub, val, subtotal[sub][val]);

            total += subtotal[sub][val];
        }
    }
    console.log(total);
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, 
    // instead each item of this array "cart" shows the quantity of product.

    /*
    
    -bucle per anar passant per cada producte del cartList
    -si el producte no existeix a cart, afegir-lo per primer cop i crear la propietat quantitat
    -si el prodicte SÍ exsteix a cart, +1 a quantitat
    */
    



    for (let i = 0; i < cartList.length; i++) {
        
        //si el producte no existeix: + agregar la propietat quantity amb valor 1
        let myBoolean = cart.includes(cartList[i]);

        cartList[i].quantity = 0;

        if (myBoolean == false) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        } else {
            for (let y = 0; y < cart.length; y++) {
                cartList[i].quantity = cartList[i].quantity + 1;
            } 
        }
    }
    
    console.log(cart);
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 7
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}