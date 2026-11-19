// Meta Pixel — ضع رقم البكسل هنا حتى يشتغل التتبع. فارغ = ما يشتغل.
const META_PIXEL_ID='';
(()=>{
if(!META_PIXEL_ID)return;
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',META_PIXEL_ID);fbq('track','PageView');
document.addEventListener('click',e=>{
 const a=e.target.closest('a[href*="wa.me"]');
 if(a){fbq('track',a.dataset.track==='Lead'?'Lead':'Contact',{content_name:a.textContent.trim().slice(0,60)});return;}
 const v=e.target.closest('.wv-card,.project-video');if(v)fbq('track','ViewContent',{content_name:(v.dataset.title||v.getAttribute('aria-label')||'').slice(0,60)});
},true);
let seen=false;const c=document.getElementById('calculator');
if(c)new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&!seen){seen=true;fbq('trackCustom','CalculatorView');o.disconnect()}},{threshold:.4}).observe(c);
})();
