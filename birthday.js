const scenes=[...document.querySelectorAll('.scene')];
const dots=[...document.querySelectorAll('.dot')];
const music=document.getElementById('music');
const sound=document.getElementById('sound');
const typed=document.getElementById('typed');
const confetti=document.getElementById('confetti');
const cake=document.getElementById('cake');
const message='Hôm nay là một ngày thật đặc biệt — ngày của cô gái có nụ cười sáng và đẹp nhất trong trái tim anh. Mong em sẽ luôn vui vẻ, hạnh phúc, luôn cười thật tươi và được bao quanh bởi những điều tử tế. Chúc mừng sinh nhật Vân Anh, cô gái dịu dàng và ngọt ngào nhất anh từng gặp! 🥳';
let current=0,started=false,typeTimer,blown=false,transitioning=false;

function setScene(index){
  if(transitioning||index===current&&started)return;
  transitioning=true;
  scenes[current].classList.add('exit');
  setTimeout(()=>{
    scenes[current].classList.remove('active','exit');
    current=index;
    scenes[current].classList.add('active');
    dots.forEach((dot,i)=>dot.classList.toggle('on',i===current));
    if(current===2)typeMessage();
    if(current===4)burst(150);
    transitioning=false;
  },520);
}

function typeMessage(){
  clearInterval(typeTimer);
  typed.innerHTML='<span class="caret"></span>';
  let i=0;
  typeTimer=setInterval(()=>{
    typed.innerHTML=message.slice(0,++i)+'<span class="caret"></span>';
    if(i>=message.length)clearInterval(typeTimer);
  },26);
}

function tryMusic(){
  music.volume=.48;
  music.play().then(()=>{
    sound.textContent='♫';
    sound.setAttribute('aria-label','Tắt nhạc');
  }).catch(()=>{});
}

document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>{
  if(!started){started=true;tryMusic();}
  setScene(Math.min(current+1,4));
}));

dots.forEach((dot,i)=>dot.addEventListener('click',()=>{
  started=true;
  setScene(i);
}));

sound.addEventListener('click',()=>{
  if(music.paused)tryMusic();
  else{
    music.pause();
    sound.textContent='♪';
    sound.setAttribute('aria-label','Bật nhạc');
  }
});

function blow(){
  if(blown)return;
  blown=true;
  cake.classList.add('blown');
  burst(200);
  setTimeout(()=>setScene(4),1800);
}

document.getElementById('blow').addEventListener('click',blow);
cake.addEventListener('click',blow);
cake.addEventListener('keydown',event=>{
  if(event.key==='Enter'||event.key===' '){event.preventDefault();blow();}
});

document.getElementById('celebrate').addEventListener('click',()=>burst(220));
document.getElementById('replay').addEventListener('click',()=>{
  blown=false;
  cake.classList.remove('blown');
  setScene(0);
});

function burst(count=120){
  const colors=['#ff6fae','#ffd166','#b895ff','#7ef0dc','#fff','#ff9b76'];
  for(let i=0;i<count;i++){
    const piece=document.createElement('i');
    piece.className='confetti';
    piece.style.cssText=`left:${Math.random()*100}%;--x:${(Math.random()-.5)*240}px;--drift:${(Math.random()-.5)*260}px;--r:${Math.random()*360}deg;--d:${2.6+Math.random()*2.4}s;--c:${colors[i%colors.length]}`;
    confetti.appendChild(piece);
    setTimeout(()=>piece.remove(),5200);
  }
}

const ambient=document.getElementById('ambient');
for(let i=0;i<60;i++){
  const spark=document.createElement('i');
  spark.className='spark';
  spark.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--delay:${-Math.random()*5}s`;
  ambient.appendChild(spark);
}
for(let i=0;i<14;i++){
  const floating=document.createElement('i');
  floating.className='floaty';
  floating.textContent=i%3?'♡':'✦';
  floating.style.cssText=`left:${Math.random()*100}%;--s:${14+Math.random()*26}px;--d:${12+Math.random()*13}s;--delay:${-Math.random()*18}s`;
  ambient.appendChild(floating);
}

window.addEventListener('pointermove',event=>{
  document.documentElement.style.setProperty('--mx',`${event.clientX/window.innerWidth*100}%`);
  document.documentElement.style.setProperty('--my',`${event.clientY/window.innerHeight*100}%`);
  document.querySelectorAll('[data-depth]').forEach(element=>{
    const depth=Number(element.dataset.depth);
    const x=(event.clientX/window.innerWidth-.5)*depth;
    const y=(event.clientY/window.innerHeight-.5)*depth;
    element.style.transform=`translate3d(${x}px,${y}px,0)`;
  });
},{passive:true});

window.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight'&&current<4)setScene(current+1);
  if(event.key==='ArrowLeft'&&current>0)setScene(current-1);
});

document.addEventListener('visibilitychange',()=>{
  document.title=document.hidden?'Quay lại nhé, Vân Anh 🥺':'Chúc mừng sinh nhật Vân Anh';
});
