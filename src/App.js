import './App.css';
import Slide1 from "./components/slide1/slide1";
import Slide2 from "./components/slide2/slide2";
import {useEffect, useState, useRef} from "react";
import { ImSpinner2 } from "react-icons/im"
import Slider from "react-slick";

// endpoint - https://mocki.io/v1/97408452-3946-458d-9d42-24003a27cc9d
function App() {
  const [openSlide, setOpenSlide] = useState(1)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const dataFetchedRef = useRef(false);
    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        setIsLoading(true)
        fetch('https://mocki.io/v1/97408452-3946-458d-9d42-24003a27cc9d')
            .then((response) => response.json())
            .then((res) =>{
                setTimeout(function(){
                    setIsLoading(false)
                    setData(res[0])
                }, 2000);
            });
    },[])

    function topOnclick() {
        setOpenSlide(openSlide === 1 ? 2 : 1)
    }
  return (
      <div style={{height: "100vh"}}>
          {
              isLoading ? <div className="main_loading_wrapper"><ImSpinner2 size="40px" color="#0055ff" className="icon-spin" /><h3>Loading</h3></div> :
                <div style={{height: "100vh"}}>
                    <Slide1 data={data} isOpen={openSlide === 1 && true} topOnclick={topOnclick}/>
                    <Slide2 data={data} isOpen={openSlide === 2 && true}/>
                    <div className="right_control_wrapper">
                      <div className="top_rectangle" style={{backgroundColor: openSlide === 1 ? "#0055ff" : "#555", width: openSlide === 1 ? "70px" : "50px"}} onClick={topOnclick}></div>
                      <div className="bottom_rectangle" style={{backgroundColor: openSlide === 1 ? "#555" : "#0055ff", width: openSlide === 2 ? "70px" : "50px"}} onClick={topOnclick}></div>
                    </div>
                </div>
          }
      </div>
  );
}

export default App;
