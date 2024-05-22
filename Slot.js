
  
function spin()
{
  let symbols = ["🍕","🍟","🥘","🧆","🥖","🍔","🧀","🗿"];
  let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot3 = symbols[Math.floor(Math.random() * symbols.length)];
  let return = document.getElementByI("reutrn");
  if (slot1 == slot2 && slot2 == slot3)
  {
    return.innerHTML = `Wow! you won! you spun ${slot1}|${slot1}|${slot1}|`; 
  }
}

