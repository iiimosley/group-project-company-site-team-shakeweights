console.log ("hello");

var products = [
    {
        name: "Classic Shakeweight",
        description: "The one and only - how you got hooked on what some call 'the best exercise equipment around, if you're really serious about getting in the best shape of your life'",
        price: "$40",
        url: "img/productImages/classicShakeweight.jpg"
    },
    {
        name: "Extra Heavy Shakeweight",
        description: "For those who are super cereal",
        price: "$45",
        url: "img/productImages/extraHeavyShakeweight.jpg"
    },
    {
        name: "Extra Light Shakeweight",
        description: "You just really enjoy the pumping motion",
        price: "$45", 
        url: "img/productImages/extraLightShakeweight.jpg"  
    },
    {
        name: "Shake Your Weight Down: Exercises Using The Shakeweight",
        description: "The ultimate guide for using that shakeweight to shake in different ways",
        price: "$25",
        url: "img/productImages/exerciseBook.png"
    },
    {
        name: "Excluse Shakeweight Sweatbands",
        description: "For a limited time only, let others know how much you sweat with this one of a kind sweatband",
        price: "$10",
        url: "img/productImages/sweatband.jpg"
    },
    {
        name: "Really Kewl Shakeweight T",
        description: "Just a sweet shirt to wear",
        price: "$20",
        url: "img/productImages/tshirt.jpeg"
    },
    {
        name: "Really Kewl Shakeweight Muscle T",
        description: "You've already given up on life",
        price: "$20",
        url: "img/productImages/muscleT.jpg"
    },
    {
        name: "Exercise Specialty Gloves",
        description: "At this point, why not",
        price: "$15",
        url: "img/productImages/gloves.jpg"
    }
]

for (var i=0; i<products.length; i++) {
        console.log(products[i]);
        if (i === 0) {
            document.getElementById("classic-shakeweight").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        } else if (i === 1) {
            document.getElementById("extra-heavy-shakeweight").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        } else if (i === 2) {
            document.getElementById("extra-light-shakeweight").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        } else if (i === 3) {
            document.getElementById("shake-your-weight-down").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">' 
        } else if (i === 4) {
            document.getElementById("exclusive-shakeweight-sweatbands").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        } else if (i === 5) {
            document.getElementById("kewl-shakeweight-t").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        } else if (i === 6) {
            document.getElementById("not-so-kewl").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        } else if (i === 7) {
            document.getElementById("gloves").innerHTML+=products[i].name + "<br>" + products[i].description + "<br>" + products[i].price + "<br>" + '<img src="' + products[i].url + '">'
        }

        // document.body.insertBefore("")
        // document.getElementById(products[i].description);
        // document.getElementById(products[i].price);
        // document.getElementById(products[i].url);
}
console.log(products);