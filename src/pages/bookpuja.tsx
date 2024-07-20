import Navbar from "../components/navbar";
import ViewPoojaBooking from "../components/viewpujabooking";
import ViewPoojaHero from "../components/viewpujahero";

const BookPuja = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen  items-center">
        <ViewPoojaHero />
        <ViewPoojaBooking />
      </main>
    </>
  );
};

export default BookPuja;
