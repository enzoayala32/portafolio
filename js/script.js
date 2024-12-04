//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copyButton');
  const textToCopy = document.getElementById('textoACopiar').innerText;

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyButton.innerHTML = '<i class="fas fa-check"></i>'; // Cambia el icono temporalmente
      setTimeout(() => {
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
      }, 4000); // Cambiar de nuevo el icono después de 4 segundos
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('Hubo un error al intentar copiar el texto.');
    }
  });
});


//formulario de contacto

const form=document.getElementById("form")

form.addEventListener("submit",handleSubmit)

async function handleSubmit(event){
  event.preventDefault()
  const formDat=new FormData(this)
  const response=await fetch(this.action,{
    method:this.method,
    body:formDat,
    headers:{
      "Accept":"application/json"
    }
  })
  if (response.ok){
    this.reset()
    Swal.fire({
      title: "Gracias por contactarme",
      text: "Te contestare a la brevedad",
      icon: "success"
    });
  }
}
