
  const symbols = ["🍕","🍟","🥘","🧆","🥖","🍔","🧀","🗿"];

  function shuffle(array)
  {
  	
  	for(let i = 7; i > 0; i--)
      {
  		const j = Math.floor(Math.random() * (i + 1));
  			[array[i], array[j]] = [array[j], array[i]];
  	}
  }
  
  function output(symbols)
  {
    shuffle(symbols);
    document.getElementById("slotone").innerHTML = symbol[0];
    shuffle(symbols);
    document.getElementById("slottwo").innerHTML = symbol[0];
    shuffle(symbols);
    document.getElementById("slotthree").innerHTML = symbol[0];
  }

