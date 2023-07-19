import React from 'react'
import assets from '../assets';


const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`${reverse ? 'section-reverse' : 'section' } ${banner}  `}>
        <div className={`${reverse ? 'section-sub-reverse' : 'section-sub' } }`}>
            <div className={` ${reverse ? 'section-text-reverse' : 'section-text'} ${reverse ? 'translateRight' : 'translateLeft'} `}>
              <p className='section-title'>{title}</p>
              <p className='section-desc'>{description}</p>
                {showBtn && (
                    <a href='https://play.google.com/store/apps/details?id=com.rom1code.ebbapp'>
                      <img src={assets.badge} className='img' width={200} height={100}/>
                    </a>
                )}
            </div>
        </div>
        <div className={`${reverse ? 'section-img-reverse' : 'section-img' }`} >
            <img src={mockupImg}  className={` ${reverse ? 'img-wrapper-reverse' : 'img-wrapper'} ${reverse ? 'translateLeft' : 'translateRight'}`}/>
        </div>
    </div>
  )
}

export default SectionWrapper