async function include(selector, url){
  const el = document.querySelector(selector);
  if(!el) return;
  try{
    const res = await fetch(url, {cache:"no-store"});
    el.innerHTML = await res.text();
    // mark current nav link
    const here = location.pathname.replace(/\/+$/,'') || '/';
    document.querySelectorAll('nav a').forEach(a=>{
      const href = new URL(a.href);
      if (href.pathname.replace(/\/+$/,'') === here) a.setAttribute('aria-current','page');
    });
  }catch(e){ console.error('include failed', url, e); }
}
document.addEventListener('DOMContentLoaded', ()=>{
  include('header','.\/partials/header.html');
  include('footer','.\/partials/footer.html');
});
