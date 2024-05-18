const box = document.getElementById("box-produto");
const tbory = document.getElementById("box-tbody");
const button = document.getElementById("button")




const getProdutos = ()=>{
    fetch("http://localhost/servidor_php/index.php")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      tbory.innerHTML="";
      data.forEach(element => {
          adicionar(element)
      });
    });
}



  const adicionar = ({Nome, cod_produto, Quantidade})=>{
    
    const element = document.createElement("tr");
    element.className = "produto";
    element.innerHTML = `<td>${Nome}</td> <td>${cod_produto}</td> <td>${Quantidade}</td>`
    tbory.appendChild(element)
  }

  const adicionar2 =(data)=>{
    console.log(da)
  }


document.addEventListener("DOMContentLoaded",getProdutos)
 // document.addEventListener("DOMContentLoaded", adic)


 const form = document.getElementById('meuForm');
const nome = document.getElementById("nome")
const valor = document.getElementById("valor")
const quantidade = document.getElementById("quantidade")



 

 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Evita o submit padrão

    var produto = {
        'nome': nome.value,
        'valor': valor.value,
        'quantidade':quantidade.value
    }

    var dados = JSON.stringify(produto);
 


     $.ajax({
        url: 'http://localhost/servidor_php/inserirProduto.php',
        type: 'POST',
        data: {data: dados},
        success: function(result){
          
          getProdutos()
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("deu errado")
        }
      });


     
 });


