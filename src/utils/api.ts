const open_weather_api_key = "521310a7b5b33b90b7dc261149fb6af0";
export interface OpenWeatherApiData{
    name: string,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    }
    weather: {
        description: string,
        icon: string,
        id: number,
        main: string
    }[]
    wind:{
        deg: number,
        speed: number
    }
}
export async function featherWeatherDetails(city: string): Promise<OpenWeatherApiData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${open_weather_api_key}`
  );
  console.log(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${open_weather_api_key}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data: OpenWeatherApiData = await res.json();
  return data;
}
