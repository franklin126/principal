 document.addEventListener('click', function(e){
    const t = e.target;
    if(t.classList.contains('gallery-item') || t.classList.contains('enhanced-img')){
      openLightbox(t.src, t.alt);
    }
  });

  function openLightbox(src, alt){
    let box = document.createElement('div');
    box.className = 'lb';
    box.innerHTML = `\n    <div class="lb-inner">\n      <img src="${src}" alt="${alt}">\n      <button class="lb-close">Cerrar</button>\n    </div>\n  `;
    document.body.appendChild(box);
    box.addEventListener('click', function(ev){
      if(ev.target.classList.contains('lb') || ev.target.classList.contains('lb-close')){
        box.remove();
      }
    });
  }

  const lbStyles = document.createElement('style');
  lbStyles.innerHTML = `
  .lb{position:fixed;inset:0;background:rgba(2,6,23,0.85);display:flex;align-items:center;justify-content:center;z-index:2000}
  .lb-inner{max-width:90%;max-height:90%;}
  .lb-inner img{max-width:100%;max-height:80vh;border-radius:10px}
  .lb-close{display:block;margin:14px auto 0;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.06);color:#fff;border:0}
  `;
  document.head.appendChild(lbStyles);

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        ent.target.style.opacity = 1;
        ent.target.style.transform = 'translateY(0)';
        io.unobserve(ent.target);
      }
    });
  },{threshold:0.15});

  document.querySelectorAll('.card, .gallery-item, .project, .examples .example').forEach(el=>{
    el.style.opacity = 0; el.style.transform = 'translateY(14px)'; el.style.transition = 'all .7s cubic-bezier(.2,.9,.3,1)';
    io.observe(el);
  });

  const wa = document.getElementById('wa-float');
  if(wa) wa.setAttribute('title','Chatear por WhatsApp');

  const imagenes = document.querySelectorAll(".imagen");
  const visor = document.getElementById("visor");
  const imgGrande = document.getElementById("imgGrande");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      imgGrande.src = img.src;
      visor.classList.add("mostrar");
    });
  });

  visor.addEventListener("click", () => {
  visor.classList.remove("mostrar");
  });

