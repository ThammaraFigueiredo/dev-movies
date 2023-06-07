
import { Swiper, SwiperSlide } from "swiper/react"

import Card from "../Card"
import { Caixote } from "./styles"


function Slider ({ info, title }){

    return (
        <Caixote>
       <h2>{title}</h2>
       <Swiper 
       grabCursor
       spaceBetween={10}
       slidesPerView={'auto'}
       className="swiper"
       >
        {info.map((item,index) =>(
            <SwiperSlide key={index}>
              
                   <Card item={item}/>
                    

            </SwiperSlide>
        ) )}
        
       </Swiper>
    
        </Caixote>
    )
}


export default Slider