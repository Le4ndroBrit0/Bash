let cinema = `Cineflix`
console.log(cinema)
const filmes = require("./database/catalogo.json")
function addFilme( lista, titulo, duracao, genero, emCartaz){
lista.push({ 
 codigo: lista.lenght + 1,
 titulo,
 duracao,
 genero,
 emCartaz,
 })
return lista
}
console.table(addFilme(filmes, "batima", 500, "açao", true))
function buscarFilmes (lista,codigo){
    let filmeProcurado = lista.find(function(filmes){
    return filmes.codigo == codigo
})
return filmeProcurado
 }
console.table(buscarFilmes(filmes,1))
function alterarStatus(lista,codigo){
    let filmeProcurado =lista.find(function(filmes){
return filmes.codigo == codigo 
    })
if (filmeProcurado.emCartaz == true){
    filmeProcurado.emCartaz = false
}else if (filmeProcurado.emCartaz == false){ 
          filmeProcurado.emCartaz = true 
} 
 return filmeProcurado
}
console.log(alterarStatus(filmes,1))
function listarTodosOsFilmes(lista){
  lista.forEach(filmes => {
 console.log(filmes) 
  }) 
}
listarTodosOsFilmes(filmes)
function listarFilmesEmCartaz (lista){
  let lista2 = lista.filter (function(filmes){
    if(filmes.emCartaz == true){
     return filmes
 }
    })
   return lista2
}
console.table(listarFilmesEmCartaz(filmes))
function longaDuracao(lista, time){
    let lista2 = lista.filter(function(filme){
        if(filme.duracao >=tempo){
     return filmes 


        }
    })
    return lista2
} 










