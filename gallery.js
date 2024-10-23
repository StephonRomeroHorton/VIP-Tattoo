document.getElementById('mobile-menu').addEventListener('click', function() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('open');
  
  if (dropdown.classList.contains('open')) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
  } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
  }
});

// JavaScript to close the menu when a link is clicked
document.querySelectorAll('.dropdown-navbar-menu li a').forEach(link => {
  link.addEventListener('click', function() {
      // Remove the 'open' class from the dropdown
      document.querySelector('.dropdown').classList.remove('open');
      // Enable scrolling again
      document.body.style.overflow = 'auto';
  });
});

// JavaScript to ensure scrolling is enabled on larger viewports
window.addEventListener('resize', function() {
  if (window.innerWidth > 992) {
      // Enable scrolling when viewport is larger than 992px
      document.body.style.overflow = 'auto';
      // Ensure dropdown menu is closed on larger viewports
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.remove('open');
  }
});





// Retrieve the artistName from localStorage
let artistName = localStorage.getItem('artistName');
let artistDiv = document.querySelector('.artist-container');

if (artistName === 'Sam Gothic') {
  artistDiv.innerHTML = `
  <div class="artist-info">
    <p>Sam Gothic</p>
    <span>Sam Gothic combines dark elegance with exceptional skill to create captivating tattoos. Known for intricate designs and a unique style, Sam transforms your ideas into stunning, personalized artwork. Experience the artistry of Sam Gothic for a tattoo that truly stands out.</span>
  </div>
  <div class="image-socials-div">
    <div class="gallery-artist-img">
      <img src="pexels-paul-reicherdt-1677258059-27914910.jpg" alt="">
    </div>
    <div class="social-icons-div">
        <a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/en/" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>`;
}else if (artistName === 'Riley') {
  artistDiv.innerHTML = `
  <div class="artist-info">
    <p>Riley</p>
    <span>Riley crafts impressive tattoos with a keen eye for detail and a passion for artistry. Known for unique and custom designs, Riley transforms your ideas into standout pieces of art. Trust Riley to make your tattoo vision a reality.</span>
  </div>
  <div class="image-socials-div">
    <div class="gallery-artist-img">
      <img src="pexels-szafran-19417399.jpg" alt="">
    </div>
    <div class="social-icons-div">
       <a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/en/" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>`;
}else if (artistName === 'Johnny Ink') {
  artistDiv.innerHTML = `
  <div class="artist-info">
    <p>Johnny Ink</p>
    <span>Johnny Ink creates bold and distinctive tattoos with a flair for creativity and precision. His unique approach ensures every design is personalized and impactful. Trust Johnny Ink to bring your tattoo vision to life with unforgettable artistry.</span>
  </div>
  <div class="image-socials-div">
    <div class="gallery-artist-img">
      <img src="pexels-reymundo-tadena-1675363251-27847255.jpg" alt="">
    </div>
    <div class="social-icons-div">
        <a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/en/" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>`;
}else if (artistName === 'Daniel') {
  artistDiv.innerHTML = `
  <div class="artist-info">
    <p>Daniel</p>
    <span>Daniel specializes in crafting striking tattoos with exceptional artistry and precision. His attention to detail and innovative designs make each tattoo a standout piece. Experience Daniel’s talent and turn your ideas into a lasting work of art.</span>
  </div>
  <div class="image-socials-div">
    <div class="gallery-artist-img">
      <img src="pexels-pavel-danilyuk-6593514.jpg" alt="">
    </div>
    <div class="social-icons-div">
         <a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/en/" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>`;
}else if (artistName === 'Beth Ann') {
  artistDiv.innerHTML = `
  <div class="artist-info">
    <p>Beth Ann</p>
    <span>Beth Ann delivers stunning tattoos with a blend of creativity and skill. Known for her attention to detail and unique designs, she transforms your vision into a personalized work of art. Trust Beth Ann to create a tattoo that’s truly special.</span>
  </div>
  <div class="image-socials-div">
    <div class="gallery-artist-img">
      <img src="pexels-shkrabaanthony-7005737.jpg" alt="">
    </div>
    <div class="social-icons-div">
        <a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/en/" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>`;
}else if (artistName === 'Eduardo') {
  artistDiv.innerHTML = `
  <div class="artist-info">
    <p>Eduardo</p>
    <span>Eduardo creates exceptional tattoos with creativity and precision. His unique designs and attention to detail ensure that each tattoo is a personal masterpiece. Let Eduardo turn your ideas into unforgettable art.</span>
  </div>
  <div class="image-socials-div">
    <div class="gallery-artist-img">
      <img src="pexels-eduardordone-2928342.jpg" alt="">
    </div>
    <div class="social-icons-div">
         <a href="https://www.facebook.com/home.php" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/en/" target="_blank"><i class="fab fa-tiktok"></i></a>
          <a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </div>`;
}


  


