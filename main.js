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
