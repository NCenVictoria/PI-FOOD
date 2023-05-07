import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.css'

export default function NavBar() {
  return (
    <div className={style.maincontainer}>
         <Link to='/home'>HOME</Link>
         <Link to='/create'>CREATE RECIPE</Link>
    </div>
  )
}
