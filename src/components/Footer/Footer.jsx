import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <>
    <div class="footer_redes"> 
      <div class="footer_redes_icons"><a href="http://www.twitter.com" target="_blanck"><img class="img" src="./assets/twitter.png" alt="Icono de Facebook"/></a></div>
      <div class="footer_redes_icons"><a href="https://github.com/javier73castillo" target="_blanck"><img class="img" src="./assets/git.png" alt="Icono de github"/></a></div>
      <div class="footer_redes_icons"><a href="https://www.instagram.com/corazon_de_viaje/" target="_blanck"><img class="img" src="./assets/instagram.png" alt="Icono de Facebook"/></a></div>
      <div class="footer_redes_icons"><a href="https://www.linkedin.com/in/javier-castillo-1752b044/" target="_blanck"><img class="img" src="./assets/linkedin.png" alt="Icono de Facebook"/></a></div>
         
    </div> 
 
    <div className='parrafo_foot_copyright'>
    <p class="parrafo_foot_copyright">© 2022 Javier Castillo. Proyecto inicial React | upgrade Hub.</p>
    </div>
  </>
  )
}