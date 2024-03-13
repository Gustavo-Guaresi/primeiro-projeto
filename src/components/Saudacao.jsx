function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?`
    }


    return(
        <>{
            nome && <p>{gerarSaudacao(nome)}</p> //se há algo em nome, ele imprime a saudação
        }
        </>
    )
}

export default Saudacao