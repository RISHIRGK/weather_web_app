const city_name=document.getElementById("city_name");
const city_text=document.getElementById("city_text");
const city_temperature=document.getElementById("city_temperature");
const btn_submit= async (e) => {
 

console.log("clked")
 if(city_name.value===null)
 {
  city_temperature.innerHTML="INPUT "
  city_text.innerHTML=" IS EMPTY"
 }
 else
 {
  try
  {
    let api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=aca9919c46339ecd4ed2aeffeded7504`
    const response=await fetch(api_url)
    const data=await response.json() 
    const arrdata=[data]
    console.log(arrdata)
    city_temperature.innerHTML=arrdata[0].main.temp
    city_text.innerHTML=arrdata[0].name
  }
  catch
  {
    city_temperature.innerHTML="INVALID "
    city_text.innerHTML="INPUT"
  }
 }
}