import Link from "next/link";
import styles from './Header.module.css'

const Header=()=>{
    return(
      <header className={styles.header}>
        <div className={styles.header__container}>
        <Link href='/'><h1 className={styles.header__logo}>Portal de viagens
        </h1></Link>

        <nav className={styles.header__nav}>
          <Link href='/'>Home</Link>
          <Link href='/paginas/destinos'>Destinos</Link>
          
        </nav>
        </div>
      </header>  
    );
}

export default Header;