import { useNavigate } from "react-router-dom";

const YourPujaElement = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full  flex justify-center ">
      <div className="w-full mt-28 px-8 lg:p-0 lg:max-w-screen-xl flex flex-col justify-center items-center">
        <img src={"https://project-nxt.b-cdn.net/your-puja-img.svg"} />
        <div className="max-w-md flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl mb-5">
            No Puja has been booked yet
          </h1>
          <p className="text-lg text-center font-semibold text-gray-400 mb-5">
            Book your Puja online at Popular Temples of India. Panditji will
            take sankalp with your name and gotra during the Puja
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/bookpuja");
          }}
          className="mt-1 bg-orange-400 p-4 rounded-full text-white font-semibold"
        >
          Book Pooja Now
        </button>
      </div>
    </section>
  );
};

export default YourPujaElement;
