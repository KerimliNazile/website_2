const body=document.querySelector('body')
const image_right=document.getElementById('image_right')
body.addEventListener('mousemove',(e)=>{
    let x=Math.floor(e.clientX/100)
    let y=Math.floor(e.clientY/100)
    image_right.style.transform=`translate(${-x}px,${-y}px)`
})




const btnleft=document.querySelector(".fa-angle-right")
const btnright=document.querySelector(".fa-angle-left")
const image=document.querySelector("#image_right")
btnleft.onclick=()=>{
    if(image.src==='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'){
        image.src='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png'
        image.style.transition='0.5s'
    }else {
        image.src='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'
        image.style.transition='0.5s'
    }

    
}
btnright.onclick=()=>{
    if(image.src==='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png'){
        image.src='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'
        image.style.transition='0.5s'
    }else {
        image.src='https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png'
        image.style.transition='0.5s'
    }
}