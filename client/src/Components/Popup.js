import React from 'react';

import styles from './popup.module.css';

class Popup extends React.Component {
    state = {showing: false}
   
    openModal = e => {
      this.setState({showing: this.state.showing ? false : true})
    }

  render() {
  return (
            <div className={styles.popup}>
                <h2>Get started!</h2>
            
            {/* //Trigger/Open The Modal  */}
            <button id="myBtn" onClick={this.openModal}>need help?</button>
            
            {/* //The Modal */}
            <div className={this.state.showing ? styles.modal : styles.modalhidden}>
            
                {/* <!-- Modal content --> */}
                <div className={styles.modalcontent}>
                    <div className={styles.modalheader}>
                    <span className={styles.close} onClick={this.openModal}>&times;</span>
                    <h2>How it works</h2>
                    </div>
                    <div className={styles.modalbody}>
                    <p>Step 1: Search for the product</p>
                    <p>Step 2: Add to cart</p>
                    <p>Step 3: And save!</p>
                    </div>
                    <div className={styles.modalfooter}>
                    <h3>SAVE UP TO 90% or MORE!</h3>
                    </div>
                </div>
            
            </div>

            </div>
            
  ) 
    }
}
export default Popup;
