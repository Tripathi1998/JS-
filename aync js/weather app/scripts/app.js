const cityForm=document.querySelector('.change-location');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');

const updateUI=(data)=>{
    console.log(data);
const cityDets=data.cityDetails;
const weatherDets=data.weather;
const photoDets=data.cityPhoto;
//upadte the ui
details.innerHTML=`
<h5 class="my-3">${cityDets.EnglishName}</h5>
              <div class="my-3">${weatherDets.WeatherText}</div>
              <div class="display-4 my-4">
                <span>${weatherDets.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
`;
//weather icon
const weathersrc=`images/icons/${weatherDets.WeatherIcon}.svg`;
icon.setAttribute('src', weathersrc);
//city image
let timeSrc=photoDets.results[0].urls.raw;
//if(timeSrc.requestText===200){
time.setAttribute('src', timeSrc);
//}else {
   // time.setAttribute('src', "images/screen-10.jpg");  
//}

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
}
};

const updateCity=async(city)=>{
const cityDetails=await getCity(city);
const weather = await getWeather(cityDetails.Key);
const cityPhoto=await getPicture(city);
return{
    cityDetails:cityDetails,
    weather:weather,
    cityPhoto:cityPhoto

};
};

cityForm.addEventListener('submit',(e)=>{
e.preventDefault();
const city=cityForm.city.value.trim();
cityForm.reset();
updateCity(city).then(data=>updateUI(data))
.catch(err=>console.log(err))
});