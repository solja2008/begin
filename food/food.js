let shaurma = {
    name: "shaurma",
    ingridients1: ['chicken', 'pita', 'vegetables', 'sauce'],
    costPrice1: 80,
    price1: 160 
}
let cheeseburger = {
    name: "cheeseburger",
    ingridients2: ['meat', 'cheese', 'burger_bun', 'vegetables', 'sauce'],
    costPrice2: 120,
    price2: 300
}
let french_fries ={
    name: "french_fries",
    ingridients3: ['potato', 'salt', 'ketchup'],
    costPrice3: 10,
    price3: 100
}
let hot_dog = {
    name: "hot_dog",
    ingridients4: ['sausage', 'cabbage', 'hot_dog_bun', 'ketchup', 'mayonaisse'],
    costPrice4: 60,
    price4: 140
}
let menu = [shaurma, cheeseburger, french_fries, hot_dog];
console.log(menu);

menu.pop();
console.log(menu);

menu.unshift(hot_dog);
hot_dog.ingridients4.splice(4);
console.log(menu)

console.log(price1+price2+price3+price4-costPrice1-costPrice2-costPrice3-costPrice4)  