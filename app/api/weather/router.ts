export default async function GET(req: Request) {
    const { searchParams} = new URL(req.url);
    const city = searchParams.get("city")|| "Kathmandu";
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
  
     const data = await res.json();

  return Response.json(data);

}
