import React from 'react'
import Todoist from './Todoist'
import { Link } from 'react-router-dom'
import homepageparttwo from '../images/homepageparttwo.avif'
import homepageparttwoleft from "../images/homepageparttwoleft.webp"
import homepageparttworight from "../images/homepageparttworight.webp"

function Homepage() {
  return (
    <div className='homegeneral'>
            <div className='navbar'>
                 <Todoist/>
                <div className='navitems'>
                    <li>Özellikler</li>
                    <li>Şablonlar</li>
                    <li>Ekipler İçin</li>
                    <li>Ücretlendirme</li>
                    <li>|</li>
                    <li><Link to="/login">Giriş Yap</Link></li>
                    <li><Link to ="/register">Ücretsiz Başla</Link></li>
                </div>
            </div>
        
        
        
        
            <div className='homepage__partone'>
                <h1>iş ve özel hayatını düzenle.</h1>
                <h3>Todoist ile daha odaklı,düzenli ve sakin kal.</h3>
                <h3>Dünyanın #1 numaralı görev yönetimi ve</h3>
                <h3>yapılacaklar-listesi uygulaması.</h3>
                <button id='homepagebtn'>Ücretsiz Başla </button>
            </div>



            <div className='homepage__parttwo'>
                <img src={homepageparttwo} alt="hpptwo" id='hpptwo'/>
                <img src={homepageparttwoleft} alt="hpptwoleft" id='hpptwoleft'/>
                {/* <img src={homepageparttworight} alt="hpptworight" id='hpptworight'/> */}
            </div>

            <div className='homepage__partthree'>
                
            </div>
    </div>
  )
}

export default Homepage
