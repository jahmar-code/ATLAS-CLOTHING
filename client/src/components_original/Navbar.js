
import { Link } from "react-router-dom"



// styles
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}><Link to="/">Atlas Clothing</Link></li>
        
          <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </>
        
        
      </ul>
    </nav>
  )
}
