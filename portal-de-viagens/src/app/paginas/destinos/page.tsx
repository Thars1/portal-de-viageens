import CardDestino from "@/app/components/CardDestino";
import {viagens } from "@/lib/viagens";
import styles from './Destinos.module.css'
const Destinos = () => {

    
return(
    <section>
        <div className={styles.titulo__background}>
            <h1 className={styles.destinos__titulo}>Destinos</h1>
        </div>
        
        <div className={styles.destinos}>
            {viagens.map(viagem => <CardDestino key={viagem.id}  viagem={viagem} />)}
            
        </div>
    </section>
);
};
export default Destinos;