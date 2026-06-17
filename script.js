document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.className='lightbox';
    overlay.innerHTML=`<img src="${img.src}" alt="${img.alt}"><button>Cerrar ✕</button>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click',()=>overlay.remove());
  });
});
const style=document.createElement('style');
style.textContent=`.lightbox{position:fixed;inset:0;background:rgba(30,14,32,.88);z-index:99;display:grid;place-items:center;padding:20px}.lightbox img{max-width:min(96vw,900px);max-height:86vh;border-radius:24px;box-shadow:0 30px 80px #0008}.lightbox button{position:fixed;top:18px;right:18px;border:0;border-radius:999px;background:white;color:#211323;font-weight:900;padding:12px 18px;cursor:pointer}`;
document.head.appendChild(style);
