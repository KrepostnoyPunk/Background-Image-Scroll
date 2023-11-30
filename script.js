const bgImgEl=document.getElementById('bg-image')

function updateImg() {
    bgImgEl.style.opacity = 1 - window.pageYOffset/800
    bgImgEl.style.backgroundSize=160-window.pageYOffset /12 + '%'
}

window.addEventListener('scroll', ()=>{
    updateImg()
})