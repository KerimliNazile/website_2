const body=document.querySelector('body')
const image_right=document.getElementById('image_right')
body.addEventListener('mousemove',(e)=>{
    let x=Math.floor(e.clientX/100)
    let y=Math.floor(e.clientY/100)
    image_right.style.transform=`translate(${-x}px,${-y}px)`
})