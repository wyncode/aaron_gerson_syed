import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import styles from './Navbar.module.css'

const Navbar = (props) => {

  return(
    <div className={styles.navbar}>
      <Link to="/" ><img id={styles.logo} src={logo} alt="Logo"/></Link>
      <Search initialValue={props.initialValue || ''} />
    </div>
  )
}

export default Navbar