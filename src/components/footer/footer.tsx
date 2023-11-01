import style from './footer.module.css';
import React from 'react';
import Image from 'next/image';
import logo from '../navbar/media/logo.svg'

export default function Footer(){
    return(
        <div className={style.footerContainer}>
            <div className={style.footerParteDeArriba}>
                <div className={style.footerUp}>
                <Image 
                src={logo}
                alt="Mi Logo"
                width={100}  // Ancho deseado
                height={100}/></div>
                <div className={style.footerUp}>
                <ul>
                        <li>MARKETPLACE</li>
                        <li>GALLERY</li>
                        <li>MAIL: MAIL@GMAIL.COM</li>
                        <li>TEL: +54 11 000 000</li>
                    </ul>
                </div>
                <div className={style.footerUp}>
                    <ul>
                        <li>FACEBOOK</li>
                        <li>INSTAGRAM</li>
                        <li>TWITTER</li>
                        <li>LINKEDIN</li>
                    </ul>
                </div>
                <div className={style.footerUp}>Stay in the know — we’ll <br/>
send you offers & more. <div className={style.signupButtonFooter}>SING UP</div></div>
            </div>
            <div className={style.footerParteDeAbajo}>
                <div className={style.footerDown}>© 2023 Digital Design. All right reserved.</div>
                <div className={style.footerDown}>Design by Luca Giallonardi</div>
            </div>
        </div>
    )
}