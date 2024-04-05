import './style.css';
import Man from '../../image/men.svg';
import Celend from '../../image/celend.svg';
import Setting from '../../image/setting.svg';
import Computer from '../../image/computer.svg';
import Tel from '../../image/tel.svg';
import Mail from '../../image/mail.svg';

export const Main = () => {
    return(
        <> 
        <div className='backg'>
            <h1 className='title'>Швидкі бухгалтерські рішення</h1>
            <button className='btn'>Зв'язатися</button>
            <nav>
                <ul className='list'>
                    <li className='item'>Головна</li>
                    <li className='item'>ПМЖ</li>
                    <li className='item'>Готові рішення</li>
                    <li className='item'>Консультація</li>
                    <li className='item'>Контакти</li>
                </ul>
            </nav>
        </div>
        <section className='hero'>
        <div className='sect'>
         <h2 className='debet'>Дебет Плюс</h2>
         </div>
         <h2 className='text'>Програмний комплекс для автоматизації бухгалтерського, оперативного та фінансового обліку.</h2>
        </section>
        <section className='poslygu'>
            <h2 className='pos-title'>Послуги з автоматизації бухгалтерського обліку</h2>
            <div className='posit'>
            <div className='box'>
              <h2 className='box-title'>Розробка</h2>
              <div className='bag'>
                <p className='box-text'>програмного забезпечення для вашого бізнесу</p>
              </div>
            </div>
            <div className='box'>
            <h2 className='box-title'>Впровадження</h2>
              <div className='bag'>
                <p className='box-text'>програмного забезпечення під вашу систему</p>
              </div>
            </div>
            <div className='box'>
            <h2 className='box-title'>Супровід</h2>
              <div className='bag'>
                <p className='box-text'>клієнта після впровадження програми</p>
              </div>
            </div>
            </div>
            <button className='box-btn'>Замовити</button>
        </section>
        <section className='decision'>
             <h2 className='decision-title'>Готові галузеві рішення</h2> 
             <div className='decision-posit'>
             <div className='decision-box'>
                <p className='decision-text'>Бюджетна сфера</p>
             </div>
             <div className='decision-box-two'>
                <p className='decision-text'>Медичні заклади</p>
             </div>
             <div className='decision-box-three'>
                <p className='decision-text'>Навчальні заклади</p>
             </div>
             </div>
        </section>
        <section className='info'>
            <div className='info-box'>
                <img src={Man} alt="man" />
                <h2 className='info-title'>1000+</h2>
                <p className='info-text'>організацій на підтримці</p>
            </div>
            <div className='info-box'>
                <img src={Celend} alt="celendar" />
                <h2 className='info-title'>30</h2>
                <p className='info-text'>років досвіду</p>
            </div>
            <div className='info-box'>
                <img src={Setting} alt="setting" />
                <h2 className='info-title'>16</h2>
                <p className='info-text'>підсистем та модулів</p>
            </div>
            <div className='info-box'>
                <img src={Computer} alt="computer" />
                <h2 className='info-title'>50+</h2>
                <p className='info-text'>навчальних закладів у співпраці</p>
            </div>
        </section>
        <footer className='footer'>
            <address className='address'>
              <div className='footer-box'>
                <img src={Tel} alt="phone" />
                <a href="tel:+380675520168" className='link'>0675520168</a>
              </div>
              <div className='footer-box'>
              <img src={Tel} alt="phone" />
                <a href="tel:+380675520168" className='link'>0675520168</a>
              </div>
              <div className='footer-box'>
                <img src={Mail} alt="email" />
              <a href="mail:it@gmail.com" className='link'>it@gmail.com</a>
              </div>
            </address>
               <div>
                <h2 className='footer-title'>Потрібна допомога ?</h2>
                <input type="tel" name="tel" id="tel" placeholder='+380' className='input'/>
                <button className='button'>Зв'язатися</button>
               </div>
        </footer>
        </>
    )
}