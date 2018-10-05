import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
};

const generateSlides = ({slides}) => {
    if(slides){
         return (
            <Slider {...settings}>
                {slides.map(function(item){

                const style ={
                    background:`url('/images/covers/${item.cover}')
                    no-repeat`
                }

                    return (
                        <div key={item.id}>
                            <div   className="item_slider" style={style}>
                               <div className="caption">
                                <h4>{item.topic}</h4>
                                <p>{item.title}</p>
                                </div> 
                            </div>
                        </div>
                        )  
                })}
            </Slider>
        )
    }
}

const Featured = (props) => {
    return(
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Featured;