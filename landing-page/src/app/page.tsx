import Navbar from "@/components/Navbar"; 
import Home from "@/components/Home";
import MostViewed from "@/components/MostViewed";
import LatestUpdates from "@/components/LatestUpdates";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatTheySay from "@/components/WhatTheySay";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <MostViewed />
      <LatestUpdates />
      <WhyChooseUs />
      <WhatTheySay />
      <ContactUs />
      <Footer />
    </div>
  );
}
