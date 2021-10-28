// Exercise 10
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'Cooking oil',
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

/*
//EXERCICIS 1 I 5 (botó add to cart)
// Exercise 1
function addToCartList(id) {

    //buscar el produccte a l'array PRODUCTS
    for (let i = 0; i < products.length; i++) {
        productsId = products[id - 1];
    }
    //afegir el producte a l'array cart list
    cartList.push(productsId);
    console.log(cartList);
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, 
    // instead each item of this array "cart" shows the quantity of product.

        for (let i = 0; i < cartList.length; i++) {
            
            let comprovar = cart.includes(cartList[i]) == true;
    
            if (comprovar == false) {
                cartList[i].quantity = 1;
                cart.push(cartList[i]);     
            } else if (comprovar) {          
                cartList[i].quantity++ + 1;
            }
        }
        console.log(cart);
    }
*/
    


    // Exercici 7 (botó Cart)
function addToCart(id) {
    
    for (let j = 0; j < products.length; j++) {
        productId = products[id - 1];
    }
    comprovar = cart.includes(productId);
    
    if (comprovar == false) {
        cart.push(productId);
        productId.quantity = 1;
    } else if (comprovar) {
        productId.quantity = productId.quantity + 1;
    }
    console.log(cart);
    }


    


// Exercise 2
function cleanCart() {

    while (cartList.length > 0) {
        cartList.pop();
    }

    console.log(cartList);

}

/*
// Exercise 3 (amb exercicis 1 i 5)
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
*/

//Exercici 3 amb exercici 7

function calculateSubtotals() {
    for (let i = 0; i < cart.length; i++) {

        switch(cart[i]) {
            case products[0]:
                subtotal.grocery.value = subtotal.grocery.value + (products[0].price * cart[i].quantity);
                break;
            
            case products[1]:
                subtotal.grocery.value = subtotal.grocery.value + (products[1].price * cart[i].quantity);
                break;
            
            case products[2]:
                subtotal.grocery.value = subtotal.grocery.value + (products[2].price * cart[i].quantity);
                break;
            
            case products[3]:
                subtotal.beauty.value = subtotal.beauty.value + (products[3].price * cart[i].quantity);
                break;

            case products[4]:
                subtotal.beauty.value = subtotal.beauty.value + (products[4].price * cart[i].quantity);
                break;

            case products[5]:
                subtotal.beauty.value = subtotal.beauty.value + (products[5].price * cart[i].quantity);
                break;

            case products[6]:
                subtotal.clothes.value = subtotal.clothes.value + (products[6].price * cart[i].quantity);
                break;

            case products[7]:
                subtotal.clothes.value = subtotal.clothes.value + (products[7].price * cart[i].quantity);
                break;

            case products[8]:
                subtotal.clothes.value = subtotal.clothes.value + (products[8].price * cart[i].quantity);
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



// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // - buscar ampolles d'oli
    // - si hi ha 3 o més ampolles d'oli, fer el descompte
    // - buscar mescles per a fer pastís
    //


    for (let i = 0; i < cart.length; i++) {

        if (cart[i].name == "Cooking oil") {

            let preuOli = cart[i].price;
            let quantitatOli = cart[i].quantity;

            if (cart[i].quantity >= 3) {
                cart[i].subtotalWithDiscount = (preuOli - 0.5)*quantitatOli;
            }
        }
        
        if (cart[i].name == "Instant cupcake mixture") {
            
            let preuMixture = cart[i].price;
            let quantitatMixture = cart[i].quantity;

            if (cart[i].quantity >= 10) {
                cart[i].subtotalWithDiscount = ((2/3)*preuMixture)*quantitatMixture;
            }
        }
        console.log(cart);
    }
}



// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}