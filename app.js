'use strict';
const clients=[
 ['o3','O3 Ozoon','retail'],['waseet','الوسيط','media'],['nabuya','نبوية تيم','media'],['utv','يو تي في','media'],['alkass','قناة الكاس','media'],
 ['3store','ثري ستور','tech'],['three_stores','المتاجر الثلاثة','tech'],['joyroom','جوي روم','tech'],['wiwu','ويو','tech'],['lenyes','لينيس','tech'],['icenter','آي سنتر','tech'],['modern_axis','المحور الحديث','tech'],['horizon','هورايزن','tech'],
 ['avon','مركز تجميل أفون','beauty'],['kareem','كريم مراد','beauty'],['naseer','الدكتور نصير السوداني','beauty'],['lily','ليلي بوند','beauty'],['shabander','الدكتور أسامة الشابندر','beauty'],['idora','إيدورا العراق','beauty'],['idora','إيدورا سوريا','beauty'],
 ['honey','حلويات العسل','retail'],['abu_rafel','حلويات أبو رافل','retail'],['faqma','الفقمة','retail'],['tuono','مطابخ تونو','retail'],['turkish','المطبخ التركي','retail'],['victor','شركة فكتور','retail'],['maxi','مجمع ماكسي','retail'],['koukh','الكوخ','retail'],['fursad','فرصاد','retail'],['waraq_asmar','ورق أسمر','retail'],['body_car','بدي كار','retail'],
 ['musa','مهندس موسى','media'],['medx','ميدكس بلس','beauty'],['hamza','حمزة الجنابي','media'],['bastia','بسطية','retail'],['ck','سي كي للعطور','beauty'],['baghdad_rotag','بغداد روتاج','beauty'],['mudun','مدن','retail'],['hyper_sultan','هايبر السلطان','retail']
];
const grid=document.getElementById('client-grid');
if(grid.children.length===0)clients.forEach(([asset,name,category])=>{const card=document.createElement('div');card.className='client';card.dataset.category=category;const img=document.createElement('img');img.src=`assets/${asset}.webp`;img.alt=`شعار ${name}`;img.width=130;img.height=78;img.loading='lazy';const label=document.createElement('span');label.textContent=name;card.append(img,label);grid.append(card);});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let count=0;grid.querySelectorAll('.client').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++;});document.getElementById('clients-status').textContent=`عرض ${count} جهة`;setOrbitFilter(button.dataset.filter);}));
const menuButton=document.querySelector('.menu-toggle');const mobileNav=document.getElementById('mobile-nav');
function closeMenu(){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','فتح القائمة');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';mobileNav.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة');});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();menuButton.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();},{passive:true});
const projects={
 o3:{title:'O3 Ozoon',kind:'من أعمالي · قطاع الأزياء',asset:'o3',body:'O3 Ozoon من المشاريع اللي اشتغلت عليها في قطاع الأزياء. الصورة المعروضة من مواد المشروع المنشورة على موقع دوزان.',scope:'تجربة عمل مع O3 Ozoon. تفاصيل الدور ومؤشرات الأداء تُعرض مع تقرير المصدر عند توفرها.',image:'o3-project',source:'أُضيف المشروع بناءً على تأكيد علي أبو الهيل. مصدر الصورة: صفحة O3 Ozoon في موقع دوزان.'},
 waseet:{title:'الوسيط',kind:'ميديا باير · حملات وصول',asset:'waseet',body:'عملت مع الوسيط بصفة ميديا باير على حملات الوصول والوعي لفيديوهات الشركة.',scope:'تخطيط حملات الوصول، اختيار الجمهور والمواضع، متابعة الكلفة يومياً، وتقارير أداء شهرية لكل فيديو.',source:'نتائج الحملات خاصة بالعميل ولا تُنشر.'},
 honey:{title:'حلويات العسل',kind:'ميديا باير · حملات رسائل',asset:'honey',body:'حملات رسائل موسمية هدفها محادثات حقيقية للطلب، مع محتوى وكابشنات بلهجة الجمهور.',scope:'إدارة حملات الرسائل، كتابة الكابشنات، ومتابعة جودة المحادثات اللي توصل.',source:'نتائج الحملات خاصة بالعميل ولا تُنشر.'},
 maxi:{title:'مجمع ماكسي',kind:'محتوى بيعي وإدارة حملات · الأزياء',asset:'maxi',body:'كتابة المحتوى والسكربتات وإدارة حملات Meta. دوري يربط رسالة المنتج بالمحتوى والإعلان، مع متابعة أداء الحملات والتنسيق مع فريق المشروع.',scope:'كتابة السكربتات والكابشنات، إدارة الحملات الإعلانية، وتوجيه المحتوى حسب هدف المشروع. فريق العميل يتولى التصوير والمونتاج والرد ومتابعة الطلبات.',source:'موثّق ضمن ملفات البورتفوليو ومعلومات التعاون التي زوّدتني بها.'},
 three:{title:'ثري ستور',kind:'ميديا باير · الإلكترونيات والتقنيات',asset:'3store',body:'إدارة الحملات الإعلانية لمتجر الإلكترونيات والتقنيات. أرتّب الحملة حسب المنتج والعرض، وأتابع الأداء حتى يكون قرار تطوير الإعلان مبنياً على البيانات.',scope:'إعداد وإدارة الحملات ومتابعة أدائها. توفير المنتجات والمحتوى، والرد على العملاء وتنفيذ الطلبات يكون بالتنسيق مع فريق المتجر.',source:'موثّق ضمن ملفات البورتفوليو ومعلومات التعاون التي زوّدتني بها.'}
};
const dialog=document.getElementById('project-dialog');const content=document.getElementById('dialog-content');let dialogTrigger=null;
function addText(tag,text,className){const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;}
function openProject(key,trigger){const data=projects[key];if(!data)return;dialogTrigger=trigger;content.replaceChildren();const cover=document.createElement('div');cover.className=`dialog-cover ${key}`;const logo=document.createElement('img');logo.src=`assets/${data.asset}.webp`;logo.alt=`شعار ${data.title}`;logo.width=180;logo.height=90;const title=addText('h2',data.title);title.id='dialog-title';cover.append(logo,addText('p',data.kind,'eyebrow'),title);const main=document.createElement('div');main.className='dialog-main';main.append(addText('p',data.body));if(data.stats){const stats=document.createElement('div');stats.className='dialog-stats';data.stats.forEach(([value,label])=>{const cell=document.createElement('div');const n=addText('strong',value);n.dir='ltr';cell.append(n,addText('span',label));stats.append(cell);});main.append(stats,addText('h3','الدليل من مدير الإعلانات'));const proof=document.createElement('img');proof.src=`assets/${data.proof}.webp`;proof.alt=data.proofAlt;proof.className='proof-image';proof.width=key==='waseet'?707:713;proof.height=key==='waseet'?206:866;main.append(proof,addText('p',data.note,'dialog-note'));}else{main.append(addText('h3','نطاق دوري'),addText('p',data.scope));if(data.image){const photo=document.createElement('img');photo.src=`assets/${data.image}.webp`;photo.alt='صورة حملة O3 Ozoon';photo.className='case-photo';photo.width=1300;photo.height=1300;main.append(photo);}}main.append(addText('p',data.source,'dialog-source'));const cta=document.createElement('a');cta.className='button button-orange';cta.href='https://wa.me/9647706429191';cta.target='_blank';cta.rel='noopener noreferrer';cta.textContent='نحچي عن مشروعك';main.append(cta);content.append(cover,main);dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';document.querySelector('.dialog-close').focus();}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project,button)));
const projectTrack=document.querySelector('.work-grid');
// These are client-supplied reels; their names and URLs are used without inferred performance claims.
const videoWorks=[
 {id:'DbLaFABMW4x',name:'العسل',logo:'honey',video:'honey'},
 {id:'DUJVJcYkumF',name:'ماستر ستور',logo:'master',dark:1,video:'master'},
 {id:'DWtpMgpjJKI',name:'ثري ستور',logo:'3store',video:'three'},
 {id:'DObkGl7iIki',name:'أبو رافل',logo:'abu_rafel',video:'abu_rafel'},
 {id:'DU3laxijAF0',name:'الوسيط',logo:'waseet',video:'waseet'},
 {id:'DbOMbXAufL1',name:'مدن',logo:'mudun',video:'mudun'},
 {id:'DdERX0fgATg',name:'O3 Ozoon',logo:'o3',video:'o3'},
 {id:'Dam7MkBooYk',name:'أسامة الشابندر',logo:'shabander',video:'shabander'},
 {id:'DdPI6krMijN',name:'كراند سمارة',image:'grand_samara'},
 {id:'DUYV8gWDC-Q',name:'نبوية تيم',logo:'nabuya',video:'nabuya'}
];
function openVideo(work,trigger){
 if(work.video){const m=document.getElementById('wv-modal'),p=document.getElementById('wv-player');p.src=`assets/work/${work.video}.mp4`;document.getElementById('wv-title').textContent=work.name;m.hidden=false;document.body.style.overflow='hidden';p.muted=false;p.play().catch(()=>{});return;}
 dialogTrigger=trigger;content.replaceChildren();
 const cover=document.createElement('div');cover.className='dialog-cover video-dialog-cover';
 if(work.logo){const logo=document.createElement('img');logo.src=`assets/${work.logo}.webp`;logo.alt=`شعار ${work.name}`;logo.width=180;logo.height=90;cover.append(logo);}
 cover.append(addText('p','فيديو من الأعمال','eyebrow'),addText('h2',work.name));cover.querySelector('h2').id='dialog-title';
 const main=document.createElement('div');main.className='dialog-main video-dialog-main';
 main.append(addText('p','شاهد الفيديو من العمل المنشور لدى الجهة. إنتاج الصورة والصوت من فريق المشروع؛ دوري في التسويق والإعلان بحسب نطاق التعاون.'));
 const frame=document.createElement('iframe');frame.className='work-reel-frame';frame.title=`فيديو ${work.name} على إنستغرام`;frame.src=`https://www.instagram.com/reel/${work.id}/embed/`;frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';frame.setAttribute('allow','autoplay; encrypted-media; picture-in-picture');main.append(frame);
 const link=document.createElement('a');link.href=`https://www.instagram.com/reel/${work.id}/`;link.target='_blank';link.rel='noopener noreferrer';link.className='button button-burgundy video-external';link.textContent='شاهد الفيديو على إنستغرام';main.append(link);
 main.append(addText('p','قد يطلب إنستغرام تسجيل الدخول لعرض الفيديو داخل الموقع؛ الرابط أعلاه يفتح المنشور الأصلي.','dialog-source'));
 content.append(cover,main);dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';document.querySelector('.dialog-close').focus();
}
const dotsContainer=document.querySelector('.carousel-dots');
videoWorks.forEach((work,index)=>{
 const card=document.createElement('button');card.type='button';card.className='project-card project-video';card.dataset.depth='far';card.tabIndex=-1;card.setAttribute('aria-hidden','true');card.setAttribute('aria-haspopup','dialog');card.setAttribute('aria-label',`شاهد فيديو ${work.name}`);
 const visual=document.createElement('div');visual.className='project-visual video-work-visual'+((work.video||work.image)?' has-video':'');
 if(work.video){const v=document.createElement('video');v.className='vw-face';v.src=`assets/work/${work.video}-preview.mp4`;v.poster=`assets/work/${work.video}.webp`;v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.setAttribute('muted','');v.setAttribute('playsinline','');v.preload='metadata';visual.append(v);}
 if(work.image){const im=document.createElement('img');im.className='vw-face';im.src=`assets/work/${work.image}.webp`;im.alt='';im.loading='lazy';visual.append(im);}
 visual.append(addText('span',work.image?'من الأعمال':'فيديو من الأعمال','project-kind'));
 if(work.logo){const b=document.createElement('span');b.className='vw-logo'+(work.dark?' dark':'');const logo=document.createElement('img');logo.src=`assets/${work.logo}.webp`;logo.alt=`شعار ${work.name}`;logo.width=64;logo.height=64;logo.loading='lazy';b.append(logo);visual.append(b);}
 if(!work.video&&!work.image)visual.append(addText('strong',work.name,'video-client-name'));
 visual.append(addText('span','شاهد الفيديو','video-play-label'),addText('span','▶','video-play-mark'));
 const caption=document.createElement('div');caption.className='project-caption';
 const identity=document.createElement('div');identity.append(addText('h3',work.name),addText('p','نموذج فيديو منشور'));caption.append(identity,addText('span','شاهد العمل'));
 card.append(visual,caption);card.addEventListener('click',()=>openVideo(work,card));projectTrack.append(card);
 const dot=document.createElement('button');dot.type='button';dot.dataset.slide=String(index+5);dot.setAttribute('aria-label',`عرض فيديو ${work.name}`);dot.setAttribute('aria-pressed','false');dotsContainer.append(dot);
});
const projectCards=Array.from(projectTrack.querySelectorAll('.project-card'));
let slideIndex=0;
const prev=document.getElementById('project-prev');
const next=document.getElementById('project-next');
const dots=Array.from(document.querySelectorAll('[data-slide]'));
function updateCarousel(index){slideIndex=Math.max(0,Math.min(index,projectCards.length-1));document.getElementById('project-position').textContent=`${String(slideIndex+1).padStart(2,'0')} / ${String(projectCards.length).padStart(2,'0')}`;prev.disabled=slideIndex===0;next.disabled=slideIndex===projectCards.length-1;dots.forEach((dot,i)=>{dot.classList.toggle('active',i===slideIndex);dot.setAttribute('aria-pressed',String(i===slideIndex));});projectCards.forEach((card,i)=>{const depth=(i-slideIndex+projectCards.length)%projectCards.length;card.dataset.depth=depth>4?'far':String(depth);card.setAttribute('tabindex',depth===0?'0':'-1');card.setAttribute('aria-hidden',String(depth!==0));});}
function goToSlide(index){const focusedCard=projectCards.includes(document.activeElement);updateCarousel(index);if(focusedCard)projectCards[slideIndex].focus();}
prev.addEventListener('click',()=>goToSlide(slideIndex-1));next.addEventListener('click',()=>goToSlide(slideIndex+1));dots.forEach(dot=>dot.addEventListener('click',()=>goToSlide(Number(dot.dataset.slide))));
projectTrack.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();goToSlide(slideIndex+(e.key==='ArrowLeft'?1:-1));}});
let gesture=null;let suppressProjectClick=false;
projectTrack.addEventListener('pointerdown',e=>{if(e.isPrimary!==false&&e.button===0)gesture={x:e.clientX,y:e.clientY,id:e.pointerId};},{passive:true});
projectTrack.addEventListener('pointerup',e=>{if(!gesture||e.pointerId!==gesture.id)return;const dx=e.clientX-gesture.x,dy=e.clientY-gesture.y;gesture=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3){suppressProjectClick=true;goToSlide(slideIndex+(dx<0?1:-1));setTimeout(()=>{suppressProjectClick=false;},350);}},{passive:true});
projectTrack.addEventListener('pointercancel',()=>{gesture=null;});
projectTrack.addEventListener('click',e=>{if(suppressProjectClick){e.preventDefault();e.stopImmediatePropagation();}},{capture:true});
updateCarousel(0);
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{content.querySelector('iframe')?.remove();document.body.style.overflow='';dialogTrigger?.focus();});
document.getElementById('year').textContent=String(new Date().getFullYear());
const reducedMotion=({matches:false,addEventListener(){}});
// A six-card orbit cycles through the verified clients and follows sector filters.
const orbitStage=document.getElementById('client-orbit');
const orbitCards=Array.from(orbitStage.querySelectorAll('.orbit-client'));
const orbitPause=document.getElementById('orbit-pause');
let orbitPool=clients,orbitCursor=0,orbitReplaceSlot=0,orbitTimer=null;
let orbitVisible=!('IntersectionObserver' in window),orbitUserPaused=false,orbitForceMotion=false;
function showOrbitClient(card,client){const inn=card.querySelector(".orbit-client-inner");if(inn){inn.classList.remove("swap");void inn.offsetWidth;inn.classList.add("swap");}const [asset,name,category]=client;const img=card.querySelector('img');img.src=`assets/${asset}.webp`;img.alt=`شعار ${name}`;card.querySelector('span').textContent=name;card.dataset.category=category;}
function syncOrbitMotion(){
 const paused=orbitUserPaused||(reducedMotion.matches&&!orbitForceMotion);
 const stopped=paused||document.hidden;
 orbitStage.dataset.paused=String(stopped);orbitStage.dataset.offscreen=String(!orbitVisible);
 orbitStage.dataset.forceMotion=String(orbitForceMotion);
 orbitPause.textContent=paused?'تشغيل الحركة':'إيقاف الحركة';
 orbitPause.setAttribute('aria-pressed',String(paused));
 orbitPause.setAttribute('aria-label',paused?'تشغيل حركة الشعارات':'إيقاف حركة الشعارات');
 if(orbitTimer!==null){clearInterval(orbitTimer);orbitTimer=null;}
 if(!stopped&&orbitVisible&&orbitPool.length>orbitCards.length){
  orbitTimer=setInterval(()=>{showOrbitClient(orbitCards[orbitReplaceSlot],orbitPool[orbitCursor]);orbitCursor=(orbitCursor+1)%orbitPool.length;orbitReplaceSlot=(orbitReplaceSlot+1)%orbitCards.length;},1600);
 }
}
function setOrbitFilter(filter){
 if(filter==='all'){
  const featured=['o3','waseet','3store','honey','avon','joyroom'];
  orbitPool=[...featured.map(asset=>clients.find(client=>client[0]===asset)),...clients.filter(client=>!featured.includes(client[0]))];
 }else orbitPool=clients.filter(client=>client[2]===filter);
 const count=Math.min(orbitPool.length,orbitCards.length);
 orbitCards.forEach((card,i)=>{card.hidden=i>=count;if(i<count){showOrbitClient(card,orbitPool[i]);card.style.animationDelay=`${-i*14/count}s`;}});
 orbitCursor=count%orbitPool.length;orbitReplaceSlot=0;syncOrbitMotion();
}
orbitPause.addEventListener('click',()=>{if(reducedMotion.matches&&!orbitForceMotion){orbitForceMotion=true;orbitUserPaused=false;}else orbitUserPaused=!orbitUserPaused;syncOrbitMotion();});
document.getElementById('show-client-directory').addEventListener('click',()=>{const directory=document.getElementById('client-directory');directory.open=true;directory.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'start'});});
if('IntersectionObserver' in window){const orbitObserver=new IntersectionObserver(entries=>{orbitVisible=entries.some(entry=>entry.isIntersecting);syncOrbitMotion();},{threshold:.05});orbitObserver.observe(orbitStage);}
document.addEventListener('visibilitychange',syncOrbitMotion);
reducedMotion.addEventListener?.('change',syncOrbitMotion);
setOrbitFilter('all');
if(!reducedMotion.matches&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.07});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));reducedMotion.addEventListener?.('change',e=>{if(e.matches){document.documentElement.classList.remove('motion-ready');observer.disconnect();}});}

// Load the reference clips only near the viewport; keep manual pause respected.
const motionMedia=Array.from(document.querySelectorAll('.feature-media')).map(panel=>({video:panel.querySelector('video'),button:panel.querySelector('.video-control'),visible:false,userPaused:false})).filter(item=>item.video&&item.button);
function syncVideoControl(item){const playing=!item.video.paused;item.button.textContent=playing?'إيقاف':'تشغيل';item.button.setAttribute('aria-pressed',String(playing));item.button.setAttribute('aria-label',playing?'إيقاف الفيديو المرجعي':'تشغيل الفيديو المرجعي');}
function playReference(item){if(!item.video.getAttribute('src'))item.video.setAttribute('src',item.video.dataset.src);item.video.play()?.catch(()=>syncVideoControl(item));}
motionMedia.forEach(item=>{item.video.addEventListener('play',()=>syncVideoControl(item));item.video.addEventListener('pause',()=>syncVideoControl(item));item.button.addEventListener('click',()=>{if(item.video.paused){item.userPaused=false;playReference(item);}else{item.userPaused=true;item.video.pause();}});});
if('IntersectionObserver' in window){const clipObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{const item=motionMedia.find(v=>v.video===entry.target);if(!item)return;item.visible=entry.isIntersecting;if(item.visible&&!item.userPaused&&!reducedMotion.matches&&!document.hidden)playReference(item);else item.video.pause();}),{threshold:.15});motionMedia.forEach(item=>clipObserver.observe(item.video));}
document.addEventListener('visibilitychange',()=>motionMedia.forEach(item=>{if(document.hidden)item.video.pause();else if(item.visible&&!item.userPaused&&!reducedMotion.matches)playReference(item);}));
reducedMotion.addEventListener?.('change',e=>motionMedia.forEach(item=>{if(e.matches)item.video.pause();else if(item.visible&&!item.userPaused&&!document.hidden)playReference(item);}));
