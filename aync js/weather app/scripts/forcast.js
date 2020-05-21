const key="4nYzVvojG7RWTinPTOWhrNjAHTiGASQt";
const key1="tSGtqWIVdkWTJZ0VZebTAqxMv-HqdIqQispNsAxV684";
//get weather info
const getWeather=async(id) =>{
const base="http://dataservice.accuweather.com/currentconditions/v1/";
const query=`${id}?apikey=${key}`;

const response=await fetch(base+query);
const data =await response.json();

return data[0];


};


//get city details
const getCity= async (city) =>{
const base="http://dataservice.accuweather.com/locations/v1/cities/search";
const query=`?apikey=${key}&q=${city}`;

const response=await fetch(base+query);
const data= await response.json();
return data[0];
};

//get picture of city

const getPicture= async (city)=>{
const base="https://api.unsplash.com/search/photos/";
const query=`?query=${city}&client_id=${key1};
`;

const response=await fetch(base+query);
const data=await response.json();

return data;
};



