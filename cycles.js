// про чётные///
for   (let i = 1; i<=10; i++) {  
   if (i%2===0) {

    alert(i);
   }
}
// про прерывание///
let i = 1;
while (true) {
  alert(i++);
   if (i===5)  {
        break;
   };
 }   


// про меню

 let shaurma = {
  name: "shaurma",
  ingridients: ["chicken", "pita", "vegetables", "sauce"],
  Price: 200, 
  costPrice: 0
}
let cheeseburger = {
  name: "cheeseburger",
  ingridients: ["meat", "cheese", "burger_bun", "vegetables", "sauce"],
  Price: 300,
  costPrice: 0
}
let french_fries ={
  name: "french_fries",
  ingridients: ["potato", "salt", "sauce"],
  Price: 100 ,
  costPrice: 0
}
let hot_dog = {
  name: "hot_dog",
  ingridients: ["sausage", "cabbage", "hot_dog_bun", "sauce"],
  Price: 200,
  costPrice: 0
}

let menu = [shaurma, 
            cheeseburger,
            french_fries,
            hot_dog
];


 let ingPrice = {
  chicken: 40,
  pita: 10,
  vegetables: 20,
  sauce: 10,
  meat: 60,
  cheese: 40,
  burger_bun: 10,
  potato: 10,
  salt: 5,
  sausage: 60,
  cabbage: 50,
  hot_dog_bun: 10
};


//себебстоимость


for (let i = 0; i < menu.length; i++) {
    let cost = 0;
    for (let k = 0; k < menu[i].ingridients.length; k++) {
    cost = ingPrice[menu[i].ingridients[k]] + cost;  
    }
    menu[i].costPrice = cost;
} ;
   console.log(menu);


// про доход            

             
for (let i = 0; i < menu.length; i++) {
    menu[i].profit = menu[i].Price - menu[i].costPrice
}
 console.log(menu)


