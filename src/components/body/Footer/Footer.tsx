import React from "react";
import './Footer.css'

function Footer(){
    const InstagramIcon = require('./InstagramIcone.png')
    const FacebookIcon = require('./FacebookIcone.png')

    return(
        <div id="Footer">
            <div id="meet">
                <p>Conheça o Danna em outras plataformas...</p>
                <ul>
                    <li>
                        <img src={InstagramIcon} alt="Icone Instagram" />
                        <a href="https://www.instagram.com/dannatattoo/" target="_blank" rel="noreferrer">
                            dannatatoo
                        </a>
                    </li>

                    <li>
                        <img src={InstagramIcon} alt="Icone Instagram" />
                        <a href="https://www.instagram.com/little_vi/" target="_blank" rel="noreferrer">
                            little_vi
                        </a>
                    </li>

                    <li>
                        <img src={FacebookIcon} alt="Icone Facebook" />
                        <a href='https://www.facebook.com/vitoria.ellen.56' target="_blank" rel="noreferrer">
                            Vitória Ellen
                        </a>
                    </li>

                    <li>
                        <img src={InstagramIcon} alt="Icone Instagram" />
                        <a href="https://www.instagram.com/juliagraz.piercer/" target="_blank" rel="noreferrer">
                            juliagraz.piercer
                        </a>
                    </li>
                </ul>

                <h1>Danna Tattoo e Piercing</h1>
            </div>
        </div>
    )
}

export default Footer;