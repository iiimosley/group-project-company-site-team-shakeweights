console.log ("hello");

var products = [
    {
        name: "Classic Shakeweight",
        description: "The one and only - how you got hooked on what some call 'the best exercise equipment around, if you're really serious about getiing in the best shape of your life'",
        price: 40,
        url: "https://images-na.ssl-images-amazon.com/images/I/31yJZRTzyKL.jpg"
    },
    {
        name: "Extra Heavy Shakeweight",
        description: "For those who are super cereal",
        price: 45,
        url: " "
    },
    {
        name: "Extra Light Shakeweight",
        description: "You just really enjoy the pumping motion",
        price: 45,   
    },
    {
        name: "Shake Your Weight Down: Exercises Using The Shakeweight",
        description: "The ultimate guide for using that shakeweight to shake in different ways",
        price: 25,
    },
    {
        name: "Excluse Shakeweight Sweatbands",
        description: "For a limited time only, let others know how much you sweat with this one of a kind sweatband",
        price: 10,
    },
    {
        name: "Really Kewl Shakeweight T",
        description: "Just a sweet shirt to wear",
        price: 20,
    },
    {
        name: "Really Kewl Shakeweight Muscle T",
        description: "You've already given up on life",
        price: 20,
    },
    {
        name: "Exercise Specialty Gloves",
        description: "At this point, why not",
        price: 15,
    }
]

for (var i=0; i<products.length; i++) {
        console.log(products[i]);
        document.getElementById("classic-shakeweight").innerHTML+=products[i].name;

        // document.body.insertBefore("")
        // document.getElementById(products[i].description);
        // document.getElementById(products[i].price);
        // document.getElementById(products[i].url);
}
console.log(products);