import Explore from "../components/explore";
import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col  items-center">
        <HeroSection />
        <Explore />
      </main>
    </>
  );
};

export default Home;
