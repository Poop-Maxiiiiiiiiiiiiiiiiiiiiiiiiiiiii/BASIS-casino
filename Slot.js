

function spin()
{
  let symbols = ["🍕","🍟","🥘","🧆","🥖","🍔","🧀","🗿"];
  let slot1 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot2 = symbols[Math.floor(Math.random() * symbols.length)];
  let slot3 = symbols[Math.floor(Math.random() * symbols.length)];
  document.getElementById('slot1').innerHTML = slot1;
  document.getElementById('slot2').innerHTML = slot2;
  document.getElementById('slot3').innerHTML = slot3;
  setTimeout(function()
             {
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
               slot2 = symbols[Math.floor(Math.random() * symbols.length)];
               slot3 = symbols[Math.floor(Math.random() * symbols.length)];
               document.getElementById('slot1').innerHTML = slot1;
               document.getElementById('slot2').innerHTML = slot2;
               document.getElementById('slot3').innerHTML = slot3;
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;
               
             },600
  );
  setTimeout(function()
             {
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
               slot2 = symbols[Math.floor(Math.random() * symbols.length)];
               slot3 = symbols[Math.floor(Math.random() * symbols.length)];
               document.getElementById('slot1').innerHTML = slot1;
               document.getElementById('slot2').innerHTML = slot2;
               document.getElementById('slot3').innerHTML = slot3;
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;

             },900
  );

  setTimeout(function()
             {
              
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;

             },300
  );
  setTimeout(function()
             {
               
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;

             },1200
  );

  setTimeout(function()
             {
               
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;

             },1500
  );
  setTimeout(function()
             {
              
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;

             },1900
  );

  setTimeout(function()
             {
               
               slot1 = symbols[Math.floor(Math.random() * symbols.length)];
                slot2 = symbols[Math.floor(Math.random() * symbols.length)];
                slot3 = symbols[Math.floor(Math.random() * symbols.length)];
                document.getElementById('slot1').innerHTML = slot1;
                document.getElementById('slot2').innerHTML = slot2;
                document.getElementById('slot3').innerHTML = slot3;

             },2000
  );


  let returny = document.getElementById("reutrn");
  if (slot1 == slot2 && slot2 == slot3)
  {
    returny.innerHTML = `Wow! you won! you spun ${slot1}|${slot1}|${slot1}|`; 
  }
  else
  {
    returny.innerHTML = ``; 
  }
}
