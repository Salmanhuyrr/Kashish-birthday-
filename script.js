const pages = [...document.querySelectorAll('.page')];

function goTo(id){
  const el=document.getElementById(id);
  if(!el)return;
  if(['letter','roses','surprise'].includes(id)) return;
  el.scrollIntoView({behavior:'smooth'});
}

function openLetter(){showOverlay('letter')}
function openRoses(){showOverlay('roses')}
function openSurprise(){showOverlay('surprise')}

function showOverlay(id){
  pages.forEach(p=>{ if(['letter','roses','surprise'].includes(p.id)) p.style.display='none'; });
  const el=document.getElementById(id);
  el.style.display='flex';
  document.body.style.overflow='hidden';
}
function closeOverlay(){
  ['letter','roses','surprise'].forEach(id=>document.getElementById(id).style.display='none');
  document.body.style.overflow='';
}

function acceptGift(){
  document.getElementById('acceptMessage').textContent='I knew you would say yes. ❤️';
  setTimeout(()=>goTo('memories'),900);
}

function moveNo(){
  const b=document.getElementById('noBtn');
  b.style.position='fixed';
  b.style.left=Math.max(15,Math.random()*75)+'%';
  b.style.top=Math.max(20,Math.random()*70)+'%';
}

function showMemory(src,caption){
  document.getElementById('modalImage').src='assets/'+src;
  document.getElementById('modalCaption').textContent=caption;
  document.getElementById('memoryModal').classList.add('show');
}
function closeMemory(e){
  if(!e || e.target.id==='memoryModal' || e.target.classList.contains('modal-x'))
    document.getElementById('memoryModal').classList.remove('show');
}

function floating(){
  const h=document.createElement('div');
  h.className='floating-heart';
  h.textContent=Math.random()>.35?'♡':'♥';
  h.style.left=Math.random()*100+'%';
  h.style.bottom='-20px';
  h.style.animationDuration=(5+Math.random()*6)+'s';
  document.getElementById('hearts').appendChild(h);
  setTimeout(()=>h.remove(),12000);

  const s=document.createElement('div');
  s.className='sparkle';
  s.style.left=Math.random()*100+'%';
  s.style.top=(70+Math.random()*30)+'%';
  s.style.animationDuration=(4+Math.random()*5)+'s';
  document.getElementById('sparkles').appendChild(s);
  setTimeout(()=>s.remove(),10000);
}
setInterval(floating,700);

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeOverlay();closeMemory();}
});
