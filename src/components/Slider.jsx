import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Banner from '../statics/Banner.jpg'

function Slider() {

    const [banner, setState] = useState({
        value: 0,
        slides: [
            (<img src={Banner} />),

        ],
    })
    const onchange = (value) => {
        if (value > 0) {
            setState({ value });
        }

    }

    return (
        <div>
            <Carousel
                value={banner.value}
                slides={banner.slides}
                onChange={onchange}
            />
            <Dots value={banner.value} onChange={onchange} number={banner.slides.length} />
        </div>


    );
}

export default Slider;