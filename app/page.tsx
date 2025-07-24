import Image from "next/image";
import Navbar from "@/componentUI/navbar";
import HeroSection from "@/componentUI/heroSection";
import Categories from "@/componentUI/Categories";

export default function Home() {






  return (
      <main className="flex w-screen h-screen flex-col">
        <Navbar/>
        
          <div className="w-full h-full flex flex-col md:gap-10 pt-[2rem] md:pt-[5rem] md:pl-[18rem] md:pr-[18rem]">
              <HeroSection/>
              <Categories/>

          </div>
        
      </main>
  );
}
