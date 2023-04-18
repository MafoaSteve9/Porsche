const title= document.querySelector('h1')
const txt = "PORSCHE, SET FREE."
const subtitle = document.querySelector('.subtitle')
const fleche = document.querySelector('.fleche')

function typewriter(text,index) {
if(index>3) subtitle.classList.add("active")
if(index>6) fleche.classList.add("active")
if(index<text.length) 
    setTimeout(()=> {
    title.innerHTML +=`<span>${text[index]}</span>`
    typewriter(text,index+1)
  },200)
}

setTimeout(()=>{
    typewriter(txt,0)
}, 300) 




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log("entry",entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        // else{
        //     entry.target.classList.remove('show');
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=> observer.observe(el))
