//Sends a console.log when page loads
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
  console.log(`Page loaded`)
  //Hide main loading screen and wrapper
  document.getElementById("loading-screen").classList.add("hidden")
  document.getElementById("loader-wrapper").classList.add("hidden")
  //Remove flexbox so they dont take up space
  document.getElementById("loading-screen").classList.remove("flexbox")
  document.getElementById("loader-wrapper").classList.remove("flexbox")
  //Show main page
  document.getElementById("page-content").classList.remove("hidden")
}
//Function for generating numbers between min to max (including min and max)
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
