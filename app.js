const btn=document.querySelectorAll('.button');
const cartValue=document.getElementById('cart-value');
const cart=document.getElementById('cart');

let bill="";

var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

function displayCount() {
    let itemCount=0;
    for(let i=0;i<items.length;i++) {
        itemCount+= items[i].quantity;
    }
cartValue.innerText=itemCount;
}

for (let i=0;i<btn.length;i++) {
    btn[i].onclick=()=>{
        items[i].quantity++;
        displayCount();
    }
}

let totalCents=0;
let totalDollars=0;

function countPrice() {
    let cents=0;
    for (let i=0;i<items.length;i++) {
        cents+= items[i].quantity*(items[i].dollars*100+items[i].cents);
    }
    totalDollars=Math.floor(cents/100);
    totalCents=cents%100;
}

cart.onclick=()=>{
    countPrice();

    for (let i=0;i<items.length;i++) {
        if (items[i].quantity!=0) {
            bill+=`Items name: ${items[i].name} - Quantity: ${items[i].quantity} \n`;
        }
    }

    bill+= `\n-------------------------------------\nThe total amount is ${totalDollars} $ and ${totalCents} cents`;

    console.log(bill);
}