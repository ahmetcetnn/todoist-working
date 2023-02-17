import React from 'react'
import todofoto from '../images/todofoto.png'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import Todoist from './Todoist'
import { Link } from 'react-router-dom'
function Userpage() {
  return (
    <div >
        <div className='logon'> <Todoist/></div>
      <h1> Giriş Yap</h1>

        <div className='section'>
      <div className='login'>
      <button><FcGoogle/> Google ile devam et</button>
      <button><BsFacebook/> Facebook ile devam et</button>
      <button><DiApple/> Apple ile devam et</button>

      <br></br>
      <input type="e-mail" placeholder='E-posta Adresinizi Girin.'></input>
      <input type="password" placeholder='Şifrenizi Girin.'></input>
      <button id='turuncu'> GİRİŞ YAP</button>
      <p>Parolanızı mı unuttunuz?</p>
      <p>Google, Apple, veya e-posta ile devam ederek Todoist'in Hizmet Kullanım Şartlarını 
        ve <span>Gizlilik Politikasını </span> kabul etmiş olursun.</p>
        <p>Üyeliğin yok mu? <Link to="/register"> Kayıt Ol</Link></p>
      </div>

      
      
      
      
      
      <div className='fotosection'>
        <img src={todofoto} alt="foto"/>

      </div>
      </div>
    </div>
  )
}

export default Userpage
