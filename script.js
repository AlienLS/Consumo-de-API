document.addEventListener("DOMContentLoaded", () =>{
    const divCard_produto = document.getElementById('card_produto');
    function load(){
      fetch("https://fabiooliveira.cloud/atividade_avaliativa/")
      .then(api => api.json())
      .then(data =>{
        data.forEach(content =>{ 
          divCard_produto.innerHTML += `
            <div class="container">
              <div class="box_imagem">
                <img src="${content.foto}" class="foto">
              </div>
              <div class="box_descricao">
                <p class="codigo">Cód. do produto: ${content.id}</p>
                <p class="descricao">${content.descricao_curta}</p>
                <p class"preco">${content.valor}</p>
                <p class="informacao">${content.cidade} ${content.estado} ${content.tamanho} ${content.qtdQuartos} quarto(s) e ${content.qtdBanheiros} banheiro(s)</p>
              </div>
            </div>
          `;
            })
      })

  }
  load();
})