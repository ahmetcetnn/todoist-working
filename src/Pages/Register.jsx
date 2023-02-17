import React from 'react'
import todokayıtfoto from '../images/todokayıtfoto.jpg'
import { Link } from 'react-router-dom'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import Todoist from './Todoist'
function Userpage() {
  return (
    <div >
      <div className='logon'> <Todoist/></div>
      <h1> Kayıt Ol</h1>

        <div className='section'>
      <div className='login'>
      <button><FcGoogle/> Google ile devam et</button>
      <button><BsFacebook/> Facebook ile devam et</button>
      <button><DiApple/> Apple ile devam et</button>

      <br></br>
      <input type="e-mail" placeholder='E-posta Adresinizi Girin.'></input>
      <input type="password" placeholder='Şifrenizi Girin.'></input>
      <button id='turuncu'> E-posta ile Kayıt Ol</button>
      <p>Parolanızı mı unuttunuz?</p>
      <p>Google, Apple, veya e-posta ile devam ederek Todoist'in Hizmet Kullanım Şartlarını 
        ve <span>Gizlilik Politikasını </span> kabul etmiş olursun.</p>
        <p>Zaten kaydoldun mu? <Link to="/login">Giriş Yap</Link></p>
        <Link to="/">home</Link>
      </div>

      
      
      
      
      
      <div className='fotosection'>
        <img src={todokayıtfoto} alt="foto"/>
       


      </div>
      </div>
    </div>
  )
}

export default Userpage
