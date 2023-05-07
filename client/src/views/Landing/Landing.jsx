import React from 'react';
import style from './Landing.css'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
    <div className={style.body}>
    <h2 className={style.p}>Welcome to Henry food</h2>
  </div>
  <div className={style.container}>
  <Link to='/home' className={style.animatedword}>
    ENJOY
  </Link>
</div>
</>
  )
}
