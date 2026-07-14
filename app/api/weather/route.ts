export  async function GET(req: Request) {
  try{
      const { searchParams} = new URL(req.url);
    const city = searchParams.get("city")|| "Kathmandu";
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`,{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("Failed to fetch data")
    }
  
     const data = await res.json();

  return Response.json(data)

  }
  catch(error){
    console.error("Error fetching weather data:", error);
    return new Response("Failed to fetch weather data", { status: 500 });
  }
}
