

function spin()
{
  let symbols = ["🍕","🍟","🥘","🧆","🥖","🍔","🧀","🗿"];
  let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot3 = symbols[Math.floor(Math.random() * symbols.length)];
  document.getElementById('slot1').innerHTML = slot1;
  document.getElementById('slot2').innerHTML = slot2;
  document.getElementById('slot3').innerHTML = slot3;
  let returny = document.getElementById("reutrn");
  if (slot1 == slot2 && slot2 == slot3)
  {
    returny.innerHTML = `Wow! you won! you spun ${slot1}|${slot1}|${slot1}|`; 
  }
}
