import React from 'react'
import Search from '../Components/Search'
import logo from '../img/logo.png'
import styles from "./Home.module.css"
const Home = () => {
  return(
    <div className={styles.home}>
      <div id={styles.imgContainer}>
        <img src={logo} alt="Logo"/>
      </div>
      
      <Search />
    </div>
  )
}

export default Home