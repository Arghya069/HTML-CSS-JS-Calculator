let a="",b="";
let butt=document.querySelectorAll(".col");
Array.from(butt).forEach((button) =>{
button.addEventListener("click", (e)=>{
    if (e.target.innerHTML == '='){
        //console.log(e.target);
        a= eval(a);
        document.querySelector('input').value = a;
    }
    else if(e.target.innerHTML == 'C'){
        a= "";
        b= "";
        document.querySelector('input').value = a;
    }
    else if(e.target.innerHTML == '<i class="arrow left"></i>'){
        a = a.replace(b,'');
        document.querySelector('input').value = a;
    }
    else{
    console.log(e.target)
    a = a + e.target.innerHTML;
    b = e.target.innerHTML;
    document.querySelector('input').value = a;
}
});})
