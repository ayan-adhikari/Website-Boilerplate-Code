//Sends a console.log when page loads
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
  setTimeout(() => {
    console.log(`Page loaded`)
    //Hide main loading screen and wrapper
    document.getElementById("loading-screen").classList.add("hidden")
    document.getElementById("loader-wrapper").classList.add("hidden")
    //Remove flexbox so they dont take up space
    document.getElementById("loading-screen").classList.remove("flexbox")
    document.getElementById("loader-wrapper").classList.remove("flexbox")
    document.getElementById("outer-loader").classList.remove("flexbox")
    document.getElementById("middle-loader").classList.remove("flexbox")
    document.getElementById("inner-loader").classList.remove("flexbox")
    //Show main page
    document.getElementById("page-content").classList.remove("hidden")
  }, 1); /*This is the delay which can be increased for testing and is 1ms by default*/
    
  
  
  }
//Function for generating numbers between min to max (including min and max)
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
