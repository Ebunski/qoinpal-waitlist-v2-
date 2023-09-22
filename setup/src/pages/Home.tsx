import { useEffect, useState } from "react";
// import Congratulations from "../components/Congratulations";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer";
// import MobileCongratulations from "../components/MobileCongratulations";
import MobileFAQ from "../components/FAQ/MobileFAQ";
import MobileNewsLetter from "../components/MobileNewsLetter";
import Newsletters from "../components/Newsletters";
import MobileFooter from "../components/MobileFooter";
import Services from "../components/Services/Services"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Modal from "../components/Modal/Modal"


const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 428);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 428);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="">
            <section className="min-h-screen bg-black">
                <Navbar />
                <HeroSection />
            </section>
            <Services />
                <Modal />
            {isMobile ? (
                <>
                    <MobileNewsLetter />
                    <MobileFAQ />
                    <MobileFooter />
                    {/* <MobileCongratulations /> */}
                </>
            ) : (
                <>
                    
                    <Newsletters />
                    <FAQ />
                    <Footer />
                    {/* <Congratulations /> */}
                </>
            )}
        </div>
    );
};

export default Home;
