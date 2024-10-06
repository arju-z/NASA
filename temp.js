document.addEventListener('mousemove', (e) => {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
      const speed = star.style.getPropertyValue('--i');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      star.style.transform = `translate(${x}px, ${y}px)`;
  });
});
document.addEventListener('scroll', () => {
  const sun = document.querySelector('.theSun');
  const scrollY = window.scrollY;

  // Change the opacity and position based on scroll
  sun.style.opacity = Math.max(1 - scrollY / 300, 0); // Fades out as you scroll down
  sun.style.transform = `translateY(${scrollY * 0.5}px)`; // Moves down slightly
});