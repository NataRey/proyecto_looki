var file =document.getElementById("inImg");
var img  =document.getElementById("perfil");
file.addEventListener("change", (e)=>{
    img.src= URL.createObjectURL(e.target.files[0])
})

var file2 =document.getElementById("inImg1");
var img2  =document.getElementById("portadas");
file2.addEventListener("change", (e)=>{
    img2.src= URL.createObjectURL(e.target.files[0])
})