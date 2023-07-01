import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className='download'>
        <div className='text'>
          <h1>Télécharger l'application</h1>
          <div className='btn-dwl' onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rom1code.ebbapp', "_blank")}>Télécharger</div>
        </div>
        <div className='download-img' >
          <img 
            src={assets.ebb5}
            alt="download_png"
            className='img2'
          />
        </div>
    </div>
  )
}

export default Download