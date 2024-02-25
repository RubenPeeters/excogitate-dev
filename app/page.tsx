import { Contact } from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import { Services } from "@/components/custom/services";
import { Testimonials } from "@/components/custom/testimonies";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center">
    <div className="max-w-7xl h-screen"><Hero></Hero></div>

    <div className="max-w-screen-2xl pb-48"><Services></Services></div>
    <div className=" w-full"><Testimonials></Testimonials></div>
    <div className=" w-full py-48"><Contact></Contact></div>
    <div className=" w-full"><Footer></Footer></div>
    
    </div>
    </>
  );
}
