import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedResidences from "@/components/FeaturedResidences";
import InvestmentCase from "@/components/InvestmentCase";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedResidences />
        <Services />
        <Testimonials />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
