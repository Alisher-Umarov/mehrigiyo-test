import React from 'react';

import MainPhoto from '../../images/main.png'
import './style.css';

const Bannerinput = ({type}) => {
    return (
        <div className='banner-input bc-color bc-color2'>
            <div className='GlobalWrapper'>
            </div>
            <div className='main-photo'>
                <img src={MainPhoto} alt="" />
            </div>
        </div>
    );
}

export default Bannerinput;
