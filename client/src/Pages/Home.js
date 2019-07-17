import React from 'react'
import Search from '../Components/Search'
import Popup from '../Components/Popup'
import logo from '../img/logo.png'
import styles from './Home.module.css'

const Home = () => {
  return(
    <div className={styles.home}>
      <div id={styles.imgContainer}>
        <img src={logo} alt="Logo"/>
      </div>
      
      <Search />
      <Popup />
    </div>
  )
}

export default Home