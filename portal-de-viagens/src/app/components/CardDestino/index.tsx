import {Viagem} from '@/types/types'
import styles from './CardDestino.module.css'
type Card ={
    viagem :Viagem;
}

const CardDestino=({viagem}:Card)=>{
    //Aqui separa os dados recebidos
    const {id,nome,imagem,descricao} = viagem;
    return(
        <div key={id} className={styles.card} >
            
            <div  > 
                <h2 className={styles.card__titulo}>{nome}</h2>
                <img src={imagem} className={styles.card__img}/>
                <p className={styles.card__texto}>{descricao}</p>
            </div>
        </div>
    );

}
export default CardDestino;