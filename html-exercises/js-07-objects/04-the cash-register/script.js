function cashRegister(cart){
    let items = Object.keys(cart);
    let sum = 0; 
    
    for (let i = 0; i < items.length; i++) {
      let itemName = items[i]; 
      let itemPrice = cart[itemName];
      sum += Number.parseFloat(itemPrice); 
    }
  
    return sum;
  }
let cartForParty = {
    banana: "1,34",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
   };

console.log(cashRegister(cartForParty));