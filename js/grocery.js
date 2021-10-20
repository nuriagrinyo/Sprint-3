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
var total = 0;

// Exercise 1
function addToCartList(id) {
    cartList.push(id);
    console.log(id);
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

        // agafar les id
        switch(id) {
            case 1:
                // sumar a grocery 10.5
                break;
            
            case 2:
                // sumar a grocery
                break;
            
            case 3:
                //sumar a grocery
                break;
            
            case 4:
                // sumar a beauty
                break;

            case 5:
                // sumar a beauty
                break;

            case 6:
                // sumar a beauty
                break;

            case 7:
                //sumar a clothes
                break;

            case 8:
                //sumar a clothes
                break;

            case 9:
                //sumar a clothes
                break;
            

            /*
            GROCERY
            1- Cooking oil  10.5
            2- Pasta 6,25
            3- Inst Cupcake M 5

            BEAUTY
            4- all-in-1 260
            5- zero makeup kit 20.5
            6- lip tints 12.75

            CLOTHES
            7- Lawn dress 15
            8- lawn ch combo 19.99
            9- toddler frock 9.99
            */
                
        }

        

    }

    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    console.log(subtotal);

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
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