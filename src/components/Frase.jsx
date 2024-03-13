import styles from "./Frase.module.css"

function Frase (){
    return (
        <div className={styles.fraseContainer}> 
            <p className={styles.Content}>Este é um componente com um</p>
        </div>
    )
}

export default Frase;