import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Log from "@/components/Log";
import Info from "@/components/Info";
import Hero from "@/components/Hero"
import Header from "@/components/Header";


export default function Home() {
  return (
    <div>
   <Header />
   <Hero />
   <Info />
   <Collection />
   <Log/>
   <Footer/>
   </div>
  );
}
