import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Programs from "@/components/landing/Programs";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <Programs />
    <Features />
    <Testimonials />
    <Footer />
  </>
  );
}
