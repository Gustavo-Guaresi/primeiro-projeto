import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1998}/>
                <Item marca="Gol " ano_lancamento={1997}/>
                <Item marca="Fiat" ano_lancamento={2000}/>
            </ul>
        </>
    )
}

export default List;