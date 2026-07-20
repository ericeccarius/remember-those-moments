const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const subject=encodeURIComponent('Remember Those Moments consultation request');
  const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nPreferred contact: ${d.get('preferred')}\n\nProject details:\n${d.get('message')}`);
  window.location.href=`mailto:rememberthosemoments@yahoo.com?subject=${subject}&body=${body}`;
});
