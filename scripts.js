document.addEventListener('DOMContentLoaded', (event) => {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, options);
  
    timelineItems.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(50px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });
  });
  