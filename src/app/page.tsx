import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Intro from "@/components/home/intro/Intro";
import Services from "@/components/home/services/Services";
import WhyChooseUs from "@/components/home/whychooseus/WhyChooseUs";
import Collaborators from "@/components/home/collaborators/Collaborators";
import ReadyToUpgrade from "@/components/home/readyToUpgrade/ReadyToUpgrade";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Collaborators />
        <Services />
        <WhyChooseUs />
        <ReadyToUpgrade />
      </main>
      <Footer />
    </>
  );
}
