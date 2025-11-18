let counter = 1;

function cambiarImagen(){
    counter++;
    const imagen = document.getElementById("banner");
    imagen.style.opacity = 0;

    setTimeout(() =>{

        //imagen.src = `https://picsum.photos/800/400?random=${counter}`;
        if (counter % 3 === 1){
            imagen.src = "img/banner.jpg";
        } else if (counter % 3 === 2){
            imagen.src = "img/twice2.jpg";
        } else {
            imagen.src = "img/twice3.jpg";
        }
    
        imagen.style.opacity =1; 

    }, 300);
}