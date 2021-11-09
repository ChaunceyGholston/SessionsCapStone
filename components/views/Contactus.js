export default () => `
<section id="Contactus">
    <h2>Become a Artist!!</h2>
    <div>
      <p>Tell us about yourself</p>
    </div>

    <form action="cgholston89@gmail.com" method="POST"
      <div>
        <label>First Name</label>
        <input type="text" name="name" id="firstname" required>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="name" id="lastname" required>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="name" id="email" required>
      </div>
      <div>
        <p>Creative Category</p>
      </div>

      <ul>
        <li>
          <label>Visual Arts<label>
          <input type="radio" name="visualarts" id="visual art">
        </li>
        <li>
        <label>Photography<label>
        <input type="radio" name="photograhpy" id="photography">
      </li>
      <li>
      <label>Performance Media<label>
      <input type="radio" name="performancemedia" id="performancemedia">
    </li>
    <li>
    <label>Fashion<label>
    <input type="radio" name="fashion" id="fashion">
  </li>
  <li>
  <label>Other<label>
  <input type="radio" name="order" id="other">
</li>
</ul>
<p>Tell us more?!</p>
How would you describe yourself and you style of art?
<textarea>
</textarea>
<p>Show your Sessions pieces</p>
<div>
  <input type="file" id="myFile" name="file1">
  <input type="file" id="myFile" name="file2">
  <input type="file" id="myFile" name="file3">
</div>
      <input type="submit"/>
    </form>

    </section>`;
