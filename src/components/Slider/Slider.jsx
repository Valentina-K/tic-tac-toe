import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './slider.css';
import '../../pictures/catblack.png';
import '../../pictures/catbroun.png';
function Slider(){
    return(<div className="wrapper">
        <input type="radio" name="point" id="slider1" checked/>
        <input type="radio" name="point" id="slider2" />
        <input type="radio" name="point" id="slider3" />
        <input type="radio" name="point" id="slider4" />
        <div className="slider">
            <div className="slides slider1"></div>
            <div className="slides slider2"></div>
            <div className="slides slider3"></div>
            <div className="slides slider4"></div>
        </div>
        <div className="controls">
            <label for="slider1"></label>
            <label for="slider2"></label>
            <label for="slider3"></label>
            <label for="slider4"></label>
        </div>
    </div>);
}

export default Slider;