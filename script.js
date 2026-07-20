
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));

const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
form.addEventListener('submit', async (e)=>{
 e.preventDefault();
 status.textContent='Sending...';
 const data=new FormData(form);
 try{
   const res=await fetch('https://api.web3forms.com/submit',{method:'POST',body:data});
   const json=await res.json();
   if(json.success){
      status.textContent='Thank you! Your message has been sent.';
      form.reset();
   } else {
      status.textContent='There was a problem sending your message. Please call or email us.';
   }
 }catch(err){
   status.textContent='There was a problem sending your message. Please call or email us.';
 }
});
