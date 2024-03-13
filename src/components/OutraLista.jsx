
function OutraLista({itens}){
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {
                itens.length > 0 ?(          //O "?" é o if
                    itens.map((item,index) =>  <p key={index}>{item}</p>  )
                ):(                        //O ":" é o else
                    <p>Não há itens na lista!</p>
                )
            }
        </>
    )
}

export default OutraLista;