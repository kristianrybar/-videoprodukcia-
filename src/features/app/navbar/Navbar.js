import logo from './assets/logo-dark.svg'
import css from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header className={css.wrapper}> 
        <a className={css.logo} href="!#">
            <img src={logo} alt="logo" />
        </a>
        <ul className={css.list}>
            <a className={css.item} href="!#">
                <li>HOME</li>    
            </a>
            <a className={css.item} href="!#">
                <li>CALENDAR</li>    
            </a>
            <a className={css.item} href="!#">
                <li>DATA</li>    
            </a>
            <a className={css.item} href="!#">
                <li>STUDIO</li>    
            </a>
        </ul>
    </header>
  )
}

export default Navbar