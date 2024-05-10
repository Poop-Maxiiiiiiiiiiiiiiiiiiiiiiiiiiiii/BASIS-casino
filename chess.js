let ifWhite = true;
white = 500;
black = 500;
function start()
{
  setInterval(function()
              {
                if(ifWhite)
                {
                  white -= 1;
                }
                else
                {
                  black -= 1;
                }
                if(white != 0 && black != 0)
                {
                  update();
                }
              },1000);
}
function white()
{
  ifWhite = true;
}
function black()
{
  ifWhite = false;
}
function update()
{
  document.getElementById("white").value = `${Math.floor(white/60)}:${white % 60}`;
  socument.getElementById("black").value = `${Math.floor(black/60)}:${black % 60}`;
}
