// 0 - Adicionar evento em botão para executar contexto da função

async function executar(){
    const elementoInput = document.getElementById("idPersonagem")
    const id = elementoInput.value
    const response = await buscarRespostaDePokemonDaAPI(id)
    const pokemon = await response.json()
    const statusCode = response.status;
    configuraTelaPokemon(statusCode, pokemon);
}

function configuraTelaPokemon(statusCode, pokemon){
    const elementoImg = document.getElementById("imgPersonagem")
    const elementoNome = document.getElementById("nomePersonagem")
    if(statusCode == 200){
        elementoImg.src = pokemon.sprites.front_shiny
        elementoNome.innerHTML = `${pokemon.id} - ${pokemon.name}`
    }else {
        elementoImg.src = "./userDefault.jpg"
        elementoNome.innerHTML = "Pokemon não Encontrado"
    }
}

async function buscarRespostaDePokemonDaAPI(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    return response
}