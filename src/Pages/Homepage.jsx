import React from "react";
import Todoist from "./Todoist";
import { Link } from "react-router-dom";
import homepageparttwo from "../images/homepageparttwo.avif";
import homepageparttwoleft from "../images/homepageparttwoleft.webp";
import homepageparttworight from "../images/homepageparttworight.webp";
import partthreepicone from "../images/partthreepicone.webp";
import homepagepartfourpic from "../images/homepagepartfourpic.webp"

function Homepage() {
  return (
    <div className="homegeneral">
      <div className="navbar">
       <Link to="/"><Todoist /></Link> 
        <div className="navitems">
          <li>Özellikler</li>
          <li>Şablonlsar</li>
          <li>Ekipssler İçin</li>
          <li>Ücretlendirme</li>
          <li>|</li>
          <li>
            <Link to="/login">Giriş Yap</Link>
          </li>
          <li>
            <Link to="/register">Ücretsiz Başla</Link>
          </li>
        </div>
      </div>

      <div className="homepage__partone">
        <h1>iş ve özel hayatını düzenle.</h1>
        <h3>Todoist ile daha odaklı,düzenli ve sakin kal.</h3>
        <h3>Dünyanın #1 numaralı görev yönetimi ve</h3>
        <h3>yapılacaklar-listesi uygulaması.</h3>
        <button id="homepagebtn">Ücretsiz Başla </button>
      </div>

      <div className="homepage__parttwo">
        <img src={homepageparttwo} alt="hpptwo" id="hpptwo" />
        <img src={homepageparttwoleft} alt="hpptwoleft" id="hpptwoleft" />
        {/* <img src={homepageparttworight} alt="hpptworight" id='hpptworight'/> */}
      </div>

      <div className="homepage__partthree">
        <div className="partthreetext">
          <p>Daha fazlasını başar</p>
          <h1 id="partthreeh">
            Görevlerini ekle. Hayatını düzenle. Her gün daha fazlasını başar.
          </h1>
          <p>
            Todoist'in güçlü doğal dil algılama ve tekrar eden tarihlerini
            kullanarak “Her gün sabah saat 10'da işle ilgili e-postaları oku”
            gibi görevler ekleyerek yapılacaklar-listeni saniyeler içinde
            oluştur.
          </p>
        </div>
        <div className="partthreephoto">
          <img src={partthreepicone} alt="ptpicone" id="ptpicone" />
        </div>
      </div>

      <div className="homepage__partfour">
        <div className="partfourphoto">
          <img src={homepagepartfourpic} alt="partfourpic" id="partfourpic" />
        </div>
        <div className="partfourtext">
          <p>Zihnini Boşalt</p>
          <h2>Hep hayalini kurduğun o zihinsel netliğe kavuş.</h2>
          <p>
            Yapılacaklar listelerin Bugün, Yaklaşan ve özel Filtre
            görünümlerinde otomatik olarak düzenlenir ve en önemli işlerine
            odaklanmanı mümkün hale getirir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
