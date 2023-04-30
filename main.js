function addSmoothScroll(id, targetID) {
    let anchor = document.getElementById(id);

    anchor.addEventListener('click', () => {        
        let el = document.getElementById(targetID)
        el.scrollIntoView({behavior: "smooth"});
    });
}

particlesJS.load('particles-js', 'particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


if (document.getElementById('about-overlay') != null) {
  addSmoothScroll("about-anchor", "fake-nav");
  addSmoothScroll("project-anchor", "projects-title");
  addSmoothScroll("experience-anchor", "experience-title");
  addSmoothScroll("gallery-anchor", "gallery-title");
}

if (document.getElementById('about-opener') != null) {
  addSmoothScroll("about-anchor", "about-section");
  addSmoothScroll("project-anchor", "project-section");
  addSmoothScroll("experience-anchor", "experience-section");
  addSmoothScroll("skill-anchor", "skill-section");
  addSmoothScroll("gallery-anchor", "gallery-section");
}

if (document.getElementById('about-opener') != null) {
  let children = document.getElementsByClassName('skill-bubble');

  for (let i = 0; i < children.length; i++) {
    let size = (12 - i + 1)  / 2;
    children[i].style.width = String(size) + 'em';
    children[i].style.height = String(size) + 'em';

    children[i].style.backgroundColor = "rgb(" + String(Math.random() * 255) + ', 255' + ',' + String(Math.random() * 255) +')';
  }
}
