import React from 'react'
<<<<<<< HEAD
import './HomeStyle.css'
import NewsCard from '../../components/NewsCard/NewsCard'
import sliderEx from './../../images/sliderEx.png'
import ApplicationSec from '../../components/ApplicationSec/ApplicationSec'
import OrganicPlantation from './../../components/SectionPlantation/OrganicPlantation';
import OnlineDoctor from './../../components/OnlineDoctor/OnlineDoctor';
import Ambulance from './../../components/Ambulance/Ambulance';
=======
import Bannerinput from '../../components/bannerInput/bannerInput';
import Banner from '../Banner/Banner';
import Infosection from '../InfoSection/InfoSection';
import Bannercard from './../../components/bannerCard/bannerCard';
>>>>>>> 4b5226cbdf7a1ac157f012e007932330b1e2b986

function Home() {
    const slide  = [
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
          
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
       
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
           
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
            
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
           
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
           
        },
    ]
    
  return (
    <>
<<<<<<< HEAD
    <div className='pageStyle1'>
    <OnlineDoctor />
    <OrganicPlantation />
    <Ambulance />
    <ApplicationSec />
    <div className='GlobalWrapper '>

        <div>
    <div className='nostyle'><h3>So'nggi yangiliklar</h3></div>
        <div><nav className='navigate3'>
            <ul>
                <li style={{color: "#53B175"}}>Hammasi</li>
                <li>Mahsulotlar haqida</li>
                <li>Shifokorlar tavsiya qiladilar</li>
                <li>Ozish</li>
                <li>Salomatlik</li>
                <li>Detoks</li>
            </ul>
            </nav></div></div>
       
            <div className='slideComp'> {slide.map(item => (
       <NewsCard
       img={item.img}
       category={item.category}
       time={item.time}
       theme={item.theme}
       info={item.info}
       />
        ))}
        </div>
    </div>
    </div>
  
=======
      <Banner/>
      <Bannerinput/>
      <Bannercard/>
      <Infosection/>
      {/* <Infosection title="Tez to'lov" text="100% xavfsiz to'lov"/> */}
>>>>>>> 4b5226cbdf7a1ac157f012e007932330b1e2b986
    </>
  );
}

export default Home;
