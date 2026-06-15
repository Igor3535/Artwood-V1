
document.addEventListener('DOMContentLoaded',()=>{
const images=[...document.querySelectorAll('.gallery-grid img')];
const box=document.getElementById('lightbox');
const img=document.getElementById('lightbox-img');
const close=document.querySelector('.lightbox-close');
const prev=document.querySelector('.lightbox-prev');
const next=document.querySelector('.lightbox-next');

let current=0;

function openLightbox(i){
 current=i;
 img.src=images[current].src;
 box.classList.add('active');
}

function showNext(){
 current=(current+1)%images.length;
 img.src=images[current].src;
}

function showPrev(){
 current=(current-1+images.length)%images.length;
 img.src=images[current].src;
}

images.forEach((el,i)=>el.addEventListener('click',()=>openLightbox(i)));
close.addEventListener('click',()=>box.classList.remove('active'));
next.addEventListener('click',showNext);
prev.addEventListener('click',showPrev);

box.addEventListener('click',(e)=>{
 if(e.target===box) box.classList.remove('active');
});
});
