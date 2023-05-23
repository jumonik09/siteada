document.getElementById("botaoEnviar").addEventListener("click",validarFormulario)


function validarFormulario(){
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  
  if (name =! "" &&  email != "" && phone != "" ){
    alert("Prontinho! Você receberá as novidades por e-mail.")  
  } else{ 
    alert ("Por favor, preencha os campos, nome e-mail.")
    
    alert("Por favor,preencha o número de seu celular.")
  }
}


