const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
export default st => `
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
<section id="jumbotron">
    <h2>Savvy Coders Jan. 2020 Cohort</h2>
    <a href="">"Call to Action" "Button"</a>
</section>


<div>
    <p>Welcome to Sessions:
        A Place for made for Artist
        Built for Artist...
    </p>
    <img src="https://i.pinimg.com/564x/4e/0e/be/4e0ebe451972b3982815eb006f0113eb.jpg">
        <div class="img2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGA01tpIbkSaPOp4iBRbU5lWROUpLuyit2Q&usqp=CAU">
    </div>
</h2>
</div>`;
