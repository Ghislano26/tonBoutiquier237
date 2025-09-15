import HeroSection from "@/componentUI/heroSection";
import Categories from "@/componentUI/Categories";
import Tendance from "@/componentUI/tendance";
import Tendance2 from "@/componentUI/tendance2";
import TendanceShoes from "@/componentUI/tendanceShoes";
import NewArrival from "@/componentUI/newArrival";
import NumberClient from "@/componentUI/Temoignage";


export default function Home() {



  return (
    <>
    {/* <Navbar/> */}
        <div className="w-full h-full flex flex-col md:gap-10 pt-[2rem] md:pt-[5rem] md:pl-[19rem] md:pr-[19rem]">
              <HeroSection/>
              
              <Categories/>
              <Tendance/>
              <TendanceShoes/>
              <Tendance2/>
              <NewArrival/>
              <NumberClient/>
              

          </div>
    
    </>
        
        
  );
}
