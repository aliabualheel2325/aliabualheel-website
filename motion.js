(()=>{
// progress bar
const bar=document.createElement('div');bar.className='scroll-bar';document.body.appendChild(bar);
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
// reveal everything
const sel='.section-heading,.section h2,.evidence-case,.service-panel,.cooperation-card,.faq-list details,.about-copy>*,.experience-row,.client-filters,.portfolio-book,.brief-flow,.contact-card,.video-tags,.phone-video,.hero-feature,.brand-marquee>p,.footer-message,.chapter-card,.wv-card,.wv-head,.res-big,.calc-card,.offer-inner';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('m-in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll(sel).forEach((el,i)=>{if(el.closest('.hero'))return;el.classList.add('m-up');const sib=[...el.parentElement.children].indexOf(el);el.style.setProperty('--d',(Math.min(sib,4)*0.08)+'s');io.observe(el)});
document.querySelectorAll('.about-image,.contact-landscape,.service-panel img').forEach(el=>{el.classList.add('m-img');io.observe(el)});
// count-up numbers
const nums=document.querySelectorAll('.res-num,.mm-num,.about-experience strong');
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,txt=el.textContent.trim(),m=txt.match(/[\d,.]+/);if(!m)return;const raw=m[0],dec=(raw.split('.')[1]||'').length,val=parseFloat(raw.replace(/,/g,''));const t0=performance.now(),dur=1600;const fmt=v=>v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec});(function step(t){const p=Math.min((t-t0)/dur,1),k=1-Math.pow(1-p,3);el.textContent=txt.replace(raw,fmt(val*k));if(p<1)requestAnimationFrame(step);else el.textContent=txt})(t0)}),{threshold:.5});
nums.forEach(n=>cio.observe(n));
// videos: autoplay muted in view, sound button
const vids=[...document.querySelectorAll('.phone-video video')];
const vio=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){v.play().catch(()=>{})}else v.pause()}),{threshold:.35});
vids.forEach(v=>vio.observe(v));
document.querySelectorAll('.phone-video').forEach(fig=>{const v=fig.querySelector('video'),b=fig.querySelector('.sound-btn');b.addEventListener('click',()=>{const on=v.muted;vids.forEach(o=>{if(o!==v){o.muted=true;o.closest('.phone-video').querySelector('.sound-btn').classList.remove('on');o.closest('.phone-video').querySelector('.sound-btn').textContent='🔊 شغّل بالصوت'}});v.muted=!on;if(on){v.currentTime=0;v.play().catch(()=>{})}b.classList.toggle('on',on);b.textContent=on?'🔇 اكتم':'🔊 شغّل بالصوت'})});
})();
// ===== hero cards: shuffle + sway =====
(()=>{
const card=document.querySelector('.hero-case');if(!card)return;
const img=card.querySelector('.hero-case-photo'),name=card.querySelector('.hero-case-label>span'),sub=card.querySelector('.hero-case-label small');
const slides=[
 {src:'assets/portrait-ali.webp',n:'ALI ABUALHEEL',s:'ميديا باير · موشن · ماركتنك',go:'#about'},
 {src:'assets/o3-project.webp',n:'O3 OZOON',s:'من الأعمال اللي اشتغلت عليها',o3:1},
 {src:'assets/nabuya-photo.webp',n:'نبوية تيم',s:'ميديا باير · مبيعات وإعلانات',go:'#about'},
 {src:'assets/waseet-card.webp',n:'الوسيط',s:'ميديا باير · حملات وصول',go:'#work'}
];
slides.forEach(s=>{const i=new Image();i.src=s.src});
let k=0;
card.addEventListener('click',e=>{const s=slides[k];if(!s.o3){e.preventDefault();e.stopImmediatePropagation();document.querySelector(s.go)?.scrollIntoView({behavior:'smooth'})}},true);
setInterval(()=>{
 card.classList.add('hc-out');
 setTimeout(()=>{k=(k+1)%slides.length;const s=slides[k];img.src=s.src;card.classList.toggle('hc-logo',!!s.logo);name.textContent=s.n;sub.textContent=s.s;card.classList.remove('hc-out');card.classList.add('hc-in');setTimeout(()=>card.classList.remove('hc-in'),700)},520);
},3200);
})();
// ===== work videos =====
(()=>{
const cards=[...document.querySelectorAll('.wv-card')];if(!cards.length)return;
const io=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target.querySelector('video');if(e.isIntersecting){v.preload='auto';v.play().catch(()=>{})}else v.pause()}),{threshold:.3});
cards.forEach(c=>io.observe(c));
const modal=document.getElementById('wv-modal'),player=document.getElementById('wv-player'),title=document.getElementById('wv-title');
const close=()=>{player.pause();player.removeAttribute('src');player.load();modal.hidden=true;document.body.style.overflow=''};
cards.forEach(c=>c.addEventListener('click',()=>{player.src=c.dataset.video;title.textContent=c.dataset.title;modal.hidden=false;document.body.style.overflow='hidden';player.muted=false;player.play().catch(()=>{})}));
modal.querySelector('.wv-close').addEventListener('click',close);
modal.addEventListener('click',e=>{if(e.target===modal)close()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)close()});
})();
