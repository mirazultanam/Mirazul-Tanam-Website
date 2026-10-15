// Progressively darken each paragraph's words as it crosses the reading zone.
(()=>{
 const paragraphs=[...document.querySelectorAll('.about-statement')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const groups=paragraphs.map(paragraph=>{
  const walker=document.createTreeWalker(paragraph,NodeFilter.SHOW_TEXT);const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){const fragment=document.createDocumentFragment();for(const part of node.textContent.split(/(\s+)/)){if(!part)continue;if(/^\s+$/.test(part)){fragment.append(document.createTextNode(part));continue}const span=document.createElement('span');span.className='reading-word';span.textContent=part;fragment.append(span)}node.replaceWith(fragment)}
  return {paragraph,words:[...paragraph.querySelectorAll('.reading-word')]};
 });
 let queued=false;
 function update(){queued=false;const h=window.innerHeight;for(const {paragraph,words} of groups){const rect=paragraph.getBoundingClientRect();const distance=rect.height+h*.28;const progress=Math.max(0,Math.min(1,(h*.72-rect.top)/distance));words.forEach((word,i)=>{const fill=reduced.matches?1:Math.max(0,Math.min(1,progress*(words.length+3)-i));word.style.setProperty('--read-ink',`${35+65*fill}%`)})}}
 function schedule(){if(!queued){queued=true;requestAnimationFrame(update)}}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);addEventListener('pageshow',schedule);reduced.addEventListener('change',schedule);document.fonts?.ready.then(schedule);update();
})();
