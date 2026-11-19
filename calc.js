(()=>{
const box=document.querySelector('.calc-card');if(!box)return;
const btns=[...box.querySelectorAll('.calc-sectors button')],r=box.querySelector('#calc-budget'),out=box.querySelector('#calc-budget-out'),range=box.querySelector('#calc-range'),cpc=box.querySelector('#calc-cpc b'),cta=box.querySelector('#calc-cta'),note=box.querySelector('#calc-note');
const f=n=>Math.round(n).toLocaleString('en-US');
const round=n=>n>=1000?Math.round(n/50)*50:n>=100?Math.round(n/10)*10:Math.round(n);
let cur=btns[0];
function update(){
 const b=+r.value,min=+cur.dataset.min,max=+cur.dataset.max;
 out.textContent='$'+f(b);
 r.style.setProperty('--p',((b-r.min)/(r.max-r.min)*100)+'%');
 range.textContent=f(round(b/max))+' – '+f(round(b/min));
 cpc.textContent='$'+min.toFixed(2)+' – $'+max.toFixed(2);
 note.textContent=cur.dataset.est?'تقدير عام لهذا المجال. النتيجة الفعلية تعتمد على العرض والمحتوى وسرعة الرد، والرسائل مو مبيعات.':'تقدير مبني على حملات أديرها بهذا المجال. النتيجة الفعلية تعتمد على العرض والمحتوى وسرعة الرد، والرسائل مو مبيعات.';
 const msg=`هلا علي، حسبت بالموقع:\n• المجال: ${cur.dataset.n}\n• الميزانية: $${f(b)} بالشهر\nأريد نحچي عن حملتي.`;
 cta.href='https://wa.me/9647706429191?text='+encodeURIComponent(msg);
 range.classList.remove('bump');void range.offsetWidth;range.classList.add('bump');
}
btns.forEach(bt=>bt.addEventListener('click',()=>{btns.forEach(x=>{x.classList.toggle('on',x===bt);x.setAttribute('aria-checked',String(x===bt))});cur=bt;update()}));
r.addEventListener('input',update);update();
})();
