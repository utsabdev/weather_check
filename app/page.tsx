import ClientWrapper from "./components/ClientWrapper";


const fetchWeather = async()=>{
  try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${process.env.API_KEY}&units=metric`,{
      cache:"no-store"
    })
    console.log(res)
    if(!res.ok){
      throw new Error("Failed to fetch data")
    }
     const data =  await  res.json()
       console.log(data)
     return data

  }
  catch(error){
    console.log(error)
    return null
  }
}

export default async function Home() {
  const WeatherData = await fetchWeather()
  

  return (
   <div>
    <ClientWrapper initialState={WeatherData}/>

   </div>
  );
}
