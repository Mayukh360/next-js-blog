import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p style={{color:"aliceblue"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate modi,
            tempore assumenda adipisci dolor hic atque quod consequuntur cupiditate. Quasi, nobis veritatis!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone +123 456 789</span>
          <span>YouTube: Techy Freak</span>
          <span>GitHub: Mayukh360</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Kolkata</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer