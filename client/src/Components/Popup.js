import React from 'react'

import styles from './Popup.module.css'

class Popup extends React.Component {
  state = {
    showing: false
  }

  openModal = e => {
    this.setState({showing: this.state.showing ? false : true})
  }

  render() {
    return (
      <div className={styles.popup}>     
        <button id="myBtn" onClick={this.openModal}>Need Help?</button>
        {this.state.showing && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <span className={styles.close} onClick={this.openModal}>&times;</span>
                <h2>How it works</h2>
              </div>
              <div className={styles.modalBody}>
                <p>Step 1: Search for the product</p>
                <p>Step 2: Add to cart</p>
                <p>Step 3: And save!</p>
              </div>
              <div className={styles.modalFooter}>
                <h3>SAVE UP TO 90% or MORE!</h3>
              </div>
            </div>
          </div>
        )}
      </div> 
    ) 
  }
}
export default Popup
