
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
    let deck = [ 
        './images/El-Cotorro.jpg',
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
         './images/Las-Jaras.jpg.jpeg',
         './images/ElCEO.jpeg'
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


