import styles from './navbar.module.css'
import Search from './search'
import { Link } from 'react-router-dom'

const name = localStorage.getItem('name')


export const NavBar = () => {

  return (
   <nav className={styles.navbar}>
    <section className={styles.navLeft} >
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/perfectMatch'>PerfectMatch</Link></li>
        </ul>
    </section>
    <section className={styles.navCenter} >
      <Search />
    </section>
    <section className={styles.navRight} >
      <ul>
        <li><Link to='/profile'>{name ? "Witaj " + name + "!": "Zaloguj!"}</Link></li>
      </ul>
    </section>
    </nav> 
  )
}
