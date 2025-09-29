// Maria's Gotham Pie Co. — little JS for UX polish
(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && menu){
    navToggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if (menu.classList.contains('open')) menu.classList.remove('open');
      }
    })
  });
})();

function handleContact(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  alert(`Thanks, ${data.name}! This is a demo form. We’ll get back to you at ${data.email}.`);
  e.target.reset();
  return false;
}
