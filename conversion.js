'use strict';
(() => {
  const flow = document.getElementById('brief-flow');
  if (!flow) return;
  const sectors = {
    fashion: {label:'أزياء ومتاجر',related:'شوف تجربة مجمع ماكسي',project:'maxi',href:'#work'},
    food: {label:'مطاعم وحلويات',related:'شوف شغلي ويا حلويات العسل',project:'honey',href:'#work'},
    tech: {label:'إلكترونيات وتقنيات',related:'شوف تجربة ثري ستور',project:'three',href:'#work'},
    beauty: {label:'عيادات وتجميل',related:'شوف الجهات من قطاع الجمال والعناية',filter:'beauty',href:'#clients'},
    services: {label:'شركات وخدمات',related:'شوف تجاربي مع القطاعات المختلفة',href:'#clients'},
    other: {label:'مجال آخر',related:'شوف الأعمال المختارة',href:'#work'}
  };
  const scopes = {ads:'إدارة حملات',content:'حملات ومحتوى',strategy:'استراتيجية ومتابعة'};
  const needs = {
    messages: {label:'رسائل تجي، والطلب ما يكتمل',scope:'strategy',copy:'نراجع العرض ونوع الرسائل وطريقة الرد ويا فريقك، ونربط بيانات الحملة بمسار الطلب حتى نحدد الخطوة المناسبة.'},
    cost: {label:'كلفة الإعلان عالية',scope:'ads',copy:'نراجع هدف الحملة والإعلان والجمهور، ونرتب اختبارات وتوزيع ميزانية بناءً على بيانات حسابك.'},
    content: {label:'المحتوى يحتاج رسالة أقوى',scope:'content',copy:'نرتب الرسالة والسكربتات والكابشنات، ونوجّه الفكرة لفريق التصوير عندك ونربطها بهدف الحملة.'},
    launch: {label:'أريد أبدأ بخطة واضحة',scope:'strategy',copy:'نحدد الهدف والجمهور والعرض ومؤشرات القياس، ونرتب أولويات المحتوى والإعلان قبل الإطلاق.'}
  };
  const state = {sector:null,need:null,step:0};
  const steps = Array.from(flow.querySelectorAll('[data-brief-step]'));
  const sectorButtons = Array.from(flow.querySelectorAll('[data-sector]'));
  const needButtons = Array.from(flow.querySelectorAll('[data-need]'));
  const progress = Array.from(flow.querySelectorAll('[data-brief-progress]'));
  const scopeLinks = Array.from(document.querySelectorAll('[data-cooperation]'));
  const back = document.getElementById('brief-back');
  const reset = document.getElementById('brief-reset');
  const related = document.getElementById('brief-related-work');
  const whatsapp = document.getElementById('brief-whatsapp');

  function whatsappURL(scope, suggested) {
    const lines = ['هلا علي، أريد نناقش التعاون.'];
    if (state.sector) lines.push(`مجال مشروعي: ${sectors[state.sector].label}`);
    if (state.need) lines.push(`احتياجي: ${needs[state.need].label}`);
    lines.push(`${suggested?'المسار المقترح':'النطاق اللي أريد نناقشه'}: ${scopes[scope]}`);
    lines.push('شنو نحتاج حتى نبدأ؟');
    return `https://wa.me/9647706429191?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function syncScopeLinks() {
    scopeLinks.forEach(link => link.setAttribute('href',whatsappURL(link.dataset.cooperation,false)));
  }

  function syncChoices() {
    sectorButtons.forEach(button => button.setAttribute('aria-pressed',String(button.dataset.sector===state.sector)));
    needButtons.forEach(button => button.setAttribute('aria-pressed',String(button.dataset.need===state.need)));
  }

  function showStep(index, focus=true) {
    state.step=index;
    steps.forEach(step => {step.hidden=Number(step.dataset.briefStep)!==index;});
    progress.forEach((item,i) => {
      item.setAttribute('aria-current',i===index?'step':'false');
      item.classList.toggle('is-complete',i<index);
    });
    document.getElementById('brief-position').textContent=`${String(index+1).padStart(2,'0')} / 03`;
    document.getElementById('brief-progress-fill').style.width=`${(index+1)*100/3}%`;
    back.hidden=index===0;
    reset.hidden=index!==2;
    document.getElementById('brief-status').textContent=['اختار مجال مشروعك.','اختار الأولوية الحالية.','ظهر نطاق التعاون المقترح.'][index];
    if (focus) document.getElementById(['brief-sector-title','brief-need-title','brief-result-title'][index]).focus({preventScroll:true});
  }

  function renderResult() {
    const need=needs[state.need];
    const sector=sectors[state.sector];
    document.getElementById('brief-result-title').textContent=scopes[need.scope];
    document.getElementById('brief-result-copy').textContent=need.copy;
    document.getElementById('brief-selected-sector').textContent=sector.label;
    document.getElementById('brief-selected-need').textContent=need.label;
    whatsapp.setAttribute('href',whatsappURL(need.scope,true));
    whatsapp.textContent='دز احتياجك ونرتّب البداية';
    related.textContent=sector.related;
    related.setAttribute('href',sector.href);
    syncScopeLinks();
  }

  sectorButtons.forEach(button => button.addEventListener('click',() => {
    const key=button.dataset.sector;
    if (!Object.hasOwn(sectors,key)) return;
    state.sector=key;
    state.need=null;
    syncChoices();
    syncScopeLinks();
    showStep(1);
  }));
  needButtons.forEach(button => button.addEventListener('click',() => {
    const key=button.dataset.need;
    if (!state.sector||!Object.hasOwn(needs,key)) return;
    state.need=key;
    syncChoices();
    renderResult();
    showStep(2);
  }));
  back.addEventListener('click',() => {if(state.step>0)showStep(state.step-1);});
  reset.addEventListener('click',() => {
    state.sector=null;
    state.need=null;
    syncChoices();
    syncScopeLinks();
    whatsapp.setAttribute('href','https://wa.me/9647706429191');
    showStep(0);
  });
  related.addEventListener('click',event => {
    if (!state.sector) return;
    const sector=sectors[state.sector];
    if (sector.project&&typeof openProject==='function') {
      event.preventDefault();
      openProject(sector.project,related);
    } else if (sector.filter) {
      const button=Array.from(document.querySelectorAll('[data-filter]')).find(item=>item.dataset.filter===sector.filter);
      button?.click();
      const cd=document.getElementById('client-directory');if(cd)cd.open=true;
    }
  });
  syncScopeLinks();
  showStep(0,false);
  flow.classList.add('brief-ready');
})();
