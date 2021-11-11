export default st => `
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)}F
<section id="jumbotron">

    <a href="">"Show Your Work"</a>
</section>


<div class="home">
    <p>Welcome to Sessions:
        A Place for made for Artist
        Built for Artist...
    </p>
    <title>Slideshow images</title>

    </style>
    <div class="slider">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <div class="image-container">
        <img src="https://i.pinimg.com/564x/4e/0e/be/4e0ebe451972b3982815eb006f0113eb.jpg">
        <a href="Contactus.js">
        <img src="https://users.stlcc.edu/departments/mcart/Images/gallery1.gif"
        width= "564"
        height="376"></a>
      </div>
      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>

    <div class="img2">
    </div>
</div>`;

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);



