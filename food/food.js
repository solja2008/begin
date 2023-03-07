let shaurma = {
    name: "shaurma",
    ingridients: ['chicken', 'pita', 'vegetables', 'sauce'],
    costPrice: 80,
    price: 160 
}
let cheeseburger = {
    name: "cheeseburger",
    ingridients: ['meat', 'cheese', 'burger_bun', 'vegetables', 'sauce'],
    costPrice: 120,
    price: 300
}
let french_fries ={
    name: "french_fries",
    ingridients: ['potato', 'salt', 'sauce'],
    costPrice: 25,
    price: 100
}
let hot_dog = {
    name: "hot_dog",
    ingridients: ['sausage', 'cabbage', 'hot_dog_bun', 'sauce'],
    costPrice: 60,
    price: 140
}
 let ingridientsPrice = {
    'chicken': 40,
    'pita': 10,
    'vegetables': 20,
    'sauce': 10,
    'meat': 60,
    'cheese': 40,
    'burger_bun': 10,
    'potato': 10,
    'salt': 5,
    'sausage': 60,
    'cabbage': 50,
    'hot_dog_bun': 10
}

let menu = [shaurma, cheeseburger, french_fries, hot_dog];
console.log(menu);

menu.pop();
console.log(menu);

menu.unshift(hot_dog);
hot_dog.ingridients.splice(3);
console.log(menu)

let profit1 = shaurma.price - shaurma.costPrice;
    profit2 = cheeseburger.price - cheeseburger.costPrice;
    profit3 = french_fries.price - french_fries.costPrice;
    profit4 = hot_dog.price - hot_dog.costPrice 

console.log(profit1, profit2, profit3, profit4)  