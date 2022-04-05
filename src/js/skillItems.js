(function() {
  // Show/Hide Skills Items 
  const skillItems = document.querySelectorAll('section.skills .skill');

  skillItems.forEach(skill => {
      skill.querySelector('.head').addEventListener('click', () => {
          skill.querySelector('.items').classList.toggle('show-items');
      })
  })


  // Box Shadow on Scroll 
  window.addEventListener('scroll', () => {
      document.querySelector('nav').classList.toggle('show-box-shadow',
          window.scrollY > 0)
  })
})()