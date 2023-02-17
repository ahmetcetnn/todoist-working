import React from 'react'
import Todoist from './Todoist'
function Homepage() {
  return (
    <div>
            <div className='navbar'>
                 <Todoist/>
                <div className='navitems'>
                    <li>Özellikler</li>
                    <li>Şablonlar</li>
                    <li>Ekipler İçin</li>
                    <li>Ücretlendirme</li>
                    
                    <li>Giriş Yap</li>
                    <li>Ücretsiz Başla</li>
                </div>

            </div>
      
    </div>
  )
}

export default Homepage
