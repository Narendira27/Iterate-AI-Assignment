import Navbar from "../components/navbar";
import YourPujaElement from "../components/yourpuja";

const YourPuja = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col    items-center">
        <YourPujaElement />
      </main>
    </>
  );
};

export default YourPuja;
