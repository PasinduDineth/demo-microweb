import './slide1.css';

import { IoIosArrowDropdownCircle } from 'react-icons/io';
function Slide1({isOpen, topOnclick, data}) {
    return (
        <div style={{opacity: !isOpen ? "0" : "1", transition: "all .8s", visibility: !isOpen ? "hidden" : "visible"}}>
            <video autoPlay muted loop className="video_player">
                <source src={data.video} type="video/mp4"/>
            </video>
            <div className="main_wrapper">
                <div className="logo_wrapper">
                    <img src={data.logoImage}/>
                </div>
                <div className="text_content_wrapper">
                    <h1 className="animate__animated animate__fadeInDown">{data.sliderOneHeader}</h1>
                    <div className="underline_rectangle"></div>
                    <p className="animate__animated animate__fadeIn">{data.sliderOneParagraph}</p>
                </div>
                <div className="down_arrow_wrapper">
                    <IoIosArrowDropdownCircle size="3em" onClick={topOnclick} className="swing"/>
                </div>

            </div>
        </div>
    );
}

export default Slide1;
