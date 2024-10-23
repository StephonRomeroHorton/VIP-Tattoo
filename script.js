window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollPosition = window.scrollY;

  // Calculate 90vh in pixels
  const triggerHeight = window.innerHeight * 1;

  // Apply the blur effect when scrolling past 90vh
  if (scrollPosition > triggerHeight) {
    navbar.classList.add('blur-background');
  } else {
    navbar.classList.remove('blur-background');
  }
});

// Export a variable to store the artist name


// Select all elements with the class 'gallery-link-div span'


let artistElements = document.querySelectorAll('.gallery-link-div span');
let artistName ='';



// Loop through each element and add a click event listener
artistElements.forEach(function(element) {
  element.addEventListener('click', function() {
    // Get the innerText of the clicked element
    artistName = element.innerText;
    // Use the artistName variable as needed
    console.log(artistName);
    localStorage.setItem('artistName', artistName);
    window.location.href = "gallery.html";

  
  });
});


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
