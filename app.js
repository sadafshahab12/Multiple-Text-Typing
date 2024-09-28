const sec_text = document.querySelector(".sec-text");

const text_load = ()=>{
    setTimeout(()=>{
        sec_text.textContent = " Front-End Developer "
    },0)
    setTimeout(()=>{
        sec_text.textContent = " Graphics Designer"
    },4000)
    setTimeout(()=>{
        sec_text.textContent = "Web Designer"
    },8000)
}
text_load();
setInterval(text_load, 12000);