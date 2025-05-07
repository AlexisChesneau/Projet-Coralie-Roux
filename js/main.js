window.addEventListener('load', () => {
    const targetSections = document.querySelectorAll('.definition-osteopathie, .a-propos, .pourquoi-osteopathe');
  
    targetSections.forEach(section => {
      const images = section.querySelectorAll('img');
  
      images.forEach(img => {
        if (img.complete) {
          addOrientationClass(img);
        } else {
          img.onload = () => addOrientationClass(img);
        }
      });
    });
  
    function addOrientationClass(img) {
      if (img.naturalHeight > img.naturalWidth) {
        img.classList.add('vertical');
      } else {
        img.classList.add('horizontal');
      }
    }
  });