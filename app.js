const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="5bb5285cc0fc4199d47b26331278f0e0";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const image=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data= await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        
        if(data.weather[0].main==="Clouds"){
            image.src="images/clouds.png"
        }
        if(data.weather[0].main==="Rain"){
            image.src="images/rain.png"
        }
        if(data.weather[0].main==="Mist"){
            image.src="images/mist.png"
        }
        if(data.weather[0].main==="Clear"){
            image.src="images/clear.png"
        }
        if(data.weather[0].main==="Drizzle"){
            image.src="images/drizzle.png"
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none";
    }
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})