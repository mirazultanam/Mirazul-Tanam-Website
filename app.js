history.scrollRestoration='manual';scrollTo(0,0);
const grid=document.querySelector('#projects'),modal=document.querySelector('dialog');
projects.forEach((p,i)=>{const b=document.createElement('button');b.className='project';b.dataset.category=p.category;b.innerHTML=`<div class="cover"><img src="assets/${p.asset}.svg" alt="${p.title} concept illustration" loading="lazy"><span class="view">View work ↗</span></div>`;b.addEventListener('click',()=>openProject(i));grid.append(b)});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{const clear=b.getAttribute('aria-pressed')==='true';document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(!clear&&x===b)));document.querySelectorAll('.project').forEach(p=>p.hidden=!clear&&p.dataset.category!==b.dataset.filter)}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}});modal.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(projectTrigger?.isConnected)projectTrigger.focus({preventScroll:true})});
function setTheme(theme){if(!['default','purple','green','dark'].includes(theme))theme='default';document.body.dataset.theme=theme;document.querySelectorAll('button[data-theme]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.theme===theme)));try{localStorage.setItem('portfolio-theme',theme)}catch{}}
document.querySelectorAll('button[data-theme]').forEach(b=>b.addEventListener('click',e=>{setTheme(b.dataset.theme);if(e.detail)b.blur()}));try{setTheme(localStorage.getItem('portfolio-theme')||'default')}catch{}document.querySelector('#year').textContent=new Date().getFullYear();

// Tilted, wrapping featured-work carousel. No automatic motion while reading.
const carouselStage=document.querySelector('#carousel-stage');
let activeSlide=0;
const slides=projects.map((p,i)=>{const b=document.createElement('button');b.className='slide';b.setAttribute('aria-label',`${p.title}, ${i+1} of ${projects.length}`);b.innerHTML=`<img src="assets/${p.asset}.svg" alt="${p.title} concept illustration" loading="lazy"><span class="slide-label">${p.title} ↗</span>`;b.addEventListener('click',()=>{if(i===activeSlide){grid.children[i].click()}else{activeSlide=i;renderCarousel()}});carouselStage.append(b);return b});
function renderCarousel(){const n=slides.length;slides.forEach((s,i)=>{const delta=(i-activeSlide+n)%n;const role=delta===0?'active':delta===1?'next':delta===n-1?'previous':'';s.className='slide '+role;s.tabIndex=role?0:-1;s.setAttribute('aria-hidden',String(!role));if(role==='active')s.setAttribute('aria-current','true');else s.removeAttribute('aria-current')});document.querySelector('#carousel-status').textContent=`${String(activeSlide+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`}
function moveCarousel(step){activeSlide=(activeSlide+step+slides.length)%slides.length;renderCarousel()}
document.querySelector('#carousel-prev').addEventListener('click',()=>moveCarousel(-1));document.querySelector('#carousel-next').addEventListener('click',()=>moveCarousel(1));document.querySelector('.featured').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();moveCarousel(e.key==='ArrowLeft'?-1:1)}});
let swipeStart=null,suppressClick=false;carouselStage.addEventListener('pointerdown',e=>{swipeStart={x:e.clientX,y:e.clientY}});carouselStage.addEventListener('pointerup',e=>{if(!swipeStart)return;const dx=e.clientX-swipeStart.x,dy=e.clientY-swipeStart.y;swipeStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){suppressClick=true;moveCarousel(dx<0?1:-1);setTimeout(()=>suppressClick=false,100)}});carouselStage.addEventListener('pointercancel',()=>swipeStart=null);carouselStage.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation()}},true);carouselStage.addEventListener('dragstart',e=>e.preventDefault());renderCarousel();

let projectTrigger=null;
function openProject(index){
 const project=projects[index];projectTrigger=document.activeElement;
 document.querySelector('#modal-title').textContent=project.title;
 document.querySelector('#modal-category').textContent=project.category;
 document.querySelector('#modal-description').textContent=project.description;
 const gallery=document.querySelector('#modal-gallery');gallery.replaceChildren();
 (project.images||[]).filter(item=>item && typeof item.src==='string' && item.src.trim()).forEach((item,i)=>{
  const figure=document.createElement('figure');figure.className='gallery-item '+(item.layout==='full'?'gallery-wide':'');
  const img=document.createElement('img');img.src=item.src;img.alt=item.alt||project.title+' image '+(i+1);img.loading=i<2?'eager':'lazy';figure.append(img);
  if(item.caption){const caption=document.createElement('figcaption');caption.textContent=item.caption;figure.append(caption)}
  gallery.append(figure);
 });
 document.body.classList.add('modal-open');modal.showModal();modal.scrollTop=0;
}
document.querySelector('.modal-back').addEventListener('click',()=>modal.close());

// Brand is contextual: from the hero it jumps to contact, elsewhere it returns to the top.
const brand=document.querySelector('.brand'),hero=document.querySelector('.hero');
if(brand&&hero){let queued=false;const onHero=()=>hero.getBoundingClientRect().bottom>0,sync=()=>{queued=false;const label=onHero()?'Scroll to contact':'Back to top';brand.setAttribute('aria-label',label);brand.setAttribute('title',label)};brand.addEventListener('click',e=>{e.preventDefault();onHero()?document.querySelector('#contact').scrollIntoView():scrollTo({top:0})});addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(sync)}},{passive:true});sync()}
