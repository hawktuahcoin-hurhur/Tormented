// Tab switching is now handled by CSS + radio inputs. Keep script.js minimal.
document.addEventListener('DOMContentLoaded', ()=>{
  // ensure labels are keyboard-focusable
  document.querySelectorAll('.tab').forEach(t=>t.setAttribute('tabindex','0'));

  const radios = Array.from(document.querySelectorAll('input[name="novel-tab"]'));
  const panels = Array.from(document.querySelectorAll('.tab-panel'));
  const labels = Array.from(document.querySelectorAll('.tab'));

  function sync(){
    const checked = radios.find(r=>r.checked);
    const id = checked && checked.id.replace(/^tab-/, '');
    panels.forEach(p=>p.classList.toggle('active', p.id===id));
    labels.forEach(l=>{
      const is = l.dataset.tab===id;
      l.classList.toggle('active', is);
      l.setAttribute('aria-selected', is? 'true':'false');
    });
    const wrap = document.querySelector('.content-wrap');
    if(wrap) wrap.scrollTop = 0;
  }

  radios.forEach(r=>r.addEventListener('change', sync));
  // initialize
  sync();
});

// --- Simple Soccer Minigame ---
(function(){
  const canvas = document.getElementById('soccer-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width, H = canvas.height;

  // Soccer minigame logic removed
    if(ball.y > H-ball.r){ ball.y = H-ball.r; ball.vy *= -0.7 }
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#0a8a2f'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle = '#0f6'; ctx.fillRect(10,10,W-20,H-20);
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(W/2,20); ctx.lineTo(W/2,H-20); ctx.stroke();
    ctx.fillStyle = '#ddd'; ctx.fillRect(W-8, goalY, 8, goalH);
    ctx.fillStyle = '#ffd27a'; ctx.beginPath(); ctx.arc(player.x, player.y, player.r,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r,0,Math.PI*2); ctx.fill();
  }

  function loop(){ update(); draw(); requestAnimationFrame(loop); }
  reset(); loop();
})();
