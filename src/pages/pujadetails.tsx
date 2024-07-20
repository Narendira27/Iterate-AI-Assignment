import Navbar from "../components/navbar";
import PujaDetailsSection from "../components/pujadetailsmain";

const PujaDetails = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col  items-center">
        <PujaDetailsSection />
      </main>
    </>
  );
};

export default PujaDetails;
