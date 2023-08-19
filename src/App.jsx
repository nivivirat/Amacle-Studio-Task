import Header from "./components/Header"
import './App.css';
import { useEffect } from "react";
import Machine_Frame from "./components/Machine_Frame";
import WhyMicrofab from "./components/Right/Why_Microfab";
import img1 from './assets/Icons/air.svg'
import arrow from './assets/Icons/arrow.svg'
import bootle from './assets/Icons/bottle.svg'
import truck from './assets/Icons/truck.svg'
import Design from './components/Right/Design'
import Sold from "./components/Right/Sold";

export default function App() {

  useEffect(() => {
    // Set the zoom level to 67%
    document.body.style.zoom = '67%';

  }, []);

  return (
    <div className="custom-font flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex flex-row">
        <Machine_Frame />
        <WhyMicrofab />

        {/* BFS */}
        <div className="h-[170px] w-[300px] bg-[#cdd7d8] absolute rounded-[20px]"
          style={{
            top: '380px',
            right: '320px',
            bottom: '570px',
          }}>
          <div className="flex items-center justify-center pt-[60px] gap-8">
            <div className="h-[50px] w-[50px] bg-[#8aa6aa] rounded-full flex justify-center">
              <img src={img1} alt="" className="w-[35px]" />
            </div>
            <p className="text-[40px]">BFS</p>
            <div className="h-[50px] w-[50px] bg-[#8aa6aa] rounded-full flex justify-center">
              <img src={arrow} alt="" className="h[35px] w-[35px]"></img>
            </div>
          </div>

        </div>

        {/* FFS  */}
        <div className="h-[170px] w-[300px] bg-[#cdd7d8] absolute rounded-[20px]"
          style={{
            top: '570px',
            right: '320px',
            bottom: '570px',
          }}>
          <div className="flex items-center justify-center pt-[60px] gap-8">
            <div className="h-[50px] w-[50px] bg-[#8aa6aa] rounded-full flex justify-center">
              <img src={bootle} alt="" className="w-[35px]" />
            </div>
            <p className="text-[40px]">FFS</p>
            <div className="h-[50px] w-[50px] bg-[#8aa6aa] rounded-full flex justify-center">
              <img src={arrow} alt="" className="h[35px] w-[35px]"></img>
            </div>
          </div>
        </div>

        <Design />

        <div className="bg-black overflow-hidden absolute h-[280px] w-[600px] rounded-[20px] bg-gradient-to-br from-[#000000] to-[#142366]" style={{
          top: '760px',
          right: '20px',
          bottom: '570px',
        }}>
          <div className="flex flex-col h-full">
            <div>
            <div className="flex justify-between p-4 rounded-[20px] rotate-180">
                        <div className="flex flex-row gap-8 justify-between">
                            <Sold height="90px" />
                            <Sold height="95px" />
                            <Sold height="83px" />
                            <Sold height="100px" />
                            <Sold height="98px" />
                            <Sold height="80px" />
                            <Sold height="40px" />
                        </div>
                    </div>

                {/* <div className="bg-white w-[40px] h-[100px] rounded-[20px]"></div> */}
            </div>
            <div className="p-4 bg-white rounded-[20px] flex flex-row justify-between m-6">
              <p className="text-[25px] font-bold ml-[20px]">Machinery sold over <br></br>years</p>
              <img src={truck} alt="" className="mr-[100px]"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
