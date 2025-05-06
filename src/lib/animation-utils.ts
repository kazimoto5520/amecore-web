export function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  export function countUp(element: HTMLElement, target: number, duration: number = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start).toString();
      if (start >= target) {
        element.textContent = target.toString();
        clearInterval(timer);
      }
    }, 16);
  }