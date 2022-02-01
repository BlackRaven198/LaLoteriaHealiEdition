
// array method 2 
let cards = [ './images/El-Cotorro.jpg',
 './images/El-Femenist.jpg',
  './images/El-Melon.jpg',
  './images/El-mundo.jpg',
  './images/El-Sol.jpeg', 
  './images/El-Venado.png',
  './images/El-WFH.jpg',
  './images/ElArbol.jpg',
  './images/ElBarril.webp',
  './images/ElNopal.jpeg',
  './images/ElSoldado.jpeg',
  './images/la_mano.jpg',
  './images/La-Bandera.jpg',
  './images/La-Dama.jpg',
  './images/La-Luna.jpg',
  './images/LaCampana.jpg',
  './images/LaCatrina.jpg',
  './images/LaCorona.jpeg.jpeg',
  './images/LaEscalera.jpg',
  './images/LaPera.jpg',
  './images/Las-Jaras.jpg.jpeg'
]
console.log(Array.isArray(cards))
console.log(cards[18])


//Practice posting an image from an array to a specific div 'box1' and 'box2'
// This uses the direct link to replace the image in box 1
// const box1 = document.getElementById('box1');
// box1.innerHTML = " <img src='./images/El-Cotorro.jpg' style='height: 100%; width: 100%; object-fit: contain'> "

// this uses the array cards[2] to grab the image
// const box2 = document.getElementById('box2');
// box2.innerHTML = '<img  style="height:100%; width:100%; object-fit:contain" src="'+cards[20] +'"  /> '




function randomCard() {
    // let deck = [ 
    //     './images/El-Cotorro.jpg',
    //     './images/El-Femenist.jpg',
    //      './images/El-Melon.jpg',
    //      './images/El-mundo.jpg',
    //      './images/El-Sol.jpeg', 
    //      './images/El-Venado.png',
    //      './images/El-WFH.jpg',
    //      './images/ElArbol.jpg',
    //      './images/ElBarril.webp',
    //      './images/ElNopal.jpeg',
    //      './images/ElSoldado.jpeg',
    //      './images/la_mano.jpg',
    //      './images/La-Bandera.jpg',
    //      './images/La-Dama.jpg',
    //      './images/La-Luna.jpg',
    //      './images/LaCampana.jpg',
    //      './images/LaCatrina.jpg',
    //      './images/LaCorona.jpeg.jpeg',
    //      './images/LaEscalera.jpg',
    //      './images/LaPera.jpg',
    //      './images/Las-Jaras.jpg.jpeg',
    //      './images/ElCEO.jpeg'
    //     ]
    let deck = [
        './img/Advisory.jpeg',
        './img/AI.jpeg',
        './img/appstore.jpeg',
        './img/b2b.jpeg',
        './img/BugBash.jpeg',
        './img/Caffeine.jpeg',
        './img/Conferences.jpeg',
        './img/Dash.jpeg',
        './img/Dpp.jpeg',
        './img/Eatmore.jpeg',
        './img/Elartista.jpeg',
        './img/elceo.jpeg',
        './img/eldiabetes.jpeg',
        './img/Elmateo.jpeg',
        './img/Elscientist.jpeg',
        './img/facebook.jpeg',
        './img/GP.jpeg',
        './img/Grocery.jpeg',
        './img/Heali.jpeg',
        './img/Healthy.jpeg',
        './img/Heartdisease.jpeg',
        './img/HomeOffice.jpeg',
        './img/ImageReview.jpeg',
        './img/Innovation.jpeg',
        './img/Intern.jpeg',
        './img/International.jpeg',
        './img/keto.jpeg',
        './img/Ladietitian.jpeg',
        './img/lamachinelearning.jpeg',
        './img/Leaf.jpeg',
        './img/Linkedin.jpeg',
        './img/meddiet.jpeg',
        './img/Missing.jpeg',
        './img/MNT.jpeg',
        './img/Movefast.jpeg',
        './img/networking.jpeg',
        './img/Omega3s.jpeg',
        './img/Parker.jpeg',
        './img/publicity.jpeg',
        './img/Research.jpeg',
        './img/slack.jpeg',
        './img/tiktok.jpeg',
        './img/twitter.jpeg',
        './img/WFH.jpeg',
        './img/worklife.jpeg'


        

    ]
    let count = deck.length;
    console.log(count)

    while(count) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1) [0]);
        count-=1;
    }
    document.getElementById('container').innerHTML = ''
    for (let i = 0; i<16; i ++) {
        let container = document.getElementById('container')
        container.innerHTML += '<img  style="height:100%; width:100%; object-fit:contain background-color:white;" src="'+deck[i] +'"  /> '
    }
  


    console.log(deck)


}
randomCard()


function printDiv() {
    var divContents = document.getElementById("card").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>Div contents are <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

// rnadom card source: 
// https://medium.com/swlh/the-javascript-shuffle-62660df19a5d
///Users/josediaz/CODE/Practice/January2022Practice/La-Loteria-Card-Generator