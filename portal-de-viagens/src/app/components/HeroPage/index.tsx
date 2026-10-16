import Link from "next/link";
import styles from './HeroPage.module.css'

const HeroPage = () =>{
    return(
        <div className={styles.hero} >
            <div className={styles.hero__div}>
                <h1 className={styles.hero__titulo}>Portal de Viagas</h1>
                <p className={styles.hero__texto} >Encontre as melhores viagens pelos melhores preços aqui!!!</p>
               <Link href='paginas/destinos'> <button className={styles.botao}>Confira as Viagens </button></Link>
            </div>
        </div>
    );
}

export default HeroPage;