import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const bookingDetails = [
  {
    id: "bfb75899-e6df-4c6a-b538-839527447c0b",
    name: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    description: "For Prevention of Misfortunes and Adversities",
    place: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
    imgUrl: "https://project-nxt.b-cdn.net/puja-1-l.webp",
  },
  {
    id: "9344f1b7-9218-40ad-bb11-9f27e735770d",
    name: "Maa Bagalamukhi Tantra Yukta Havan",
    description: "For Victory in Court Cases and Victory over Enemies",
    place: "Maa Bagalamukhi Temple, Haridwar, Uttarakhand",
    date: "21 July, Sunday, Ashadha Shukla Chaturdashi",
    imgUrl: "https://project-nxt.b-cdn.net/puja-2-l.webp",
  },

  {
    id: "e96e4fc5-d20b-4a25-9c4b-18a817ca6144",
    name: "Divya Mahakali Tantrokta Havan",
    description: "For Courage and Protection from Obstacles",
    place: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
    date: "20 July, Saturday, Ashadha Shukla Purnima ",
    imgUrl: "https://project-nxt.b-cdn.net/puja-3-l.webp",
  },

  {
    id: "ca954455-9be4-41e3-a5a0-1ceadac6e469",
    name: "1008 Dakshinamurthy Mool Mantra Jaap and Havan and Omkareshwar Rudrabhishekn",
    description: "To Find Purpose and Achieve Stability in Life",
    place: "Shri Omkareshwar Jyotirlinga Temple , Khandwa, Madhya Pradesh",
    date: "21 July, Sunday, Ashadha Shukla Purnima",
    imgUrl: "https://project-nxt.b-cdn.net/puja-4-l.webp",
  },

  {
    id: "9d1dce13-04a5-4df4-ba94-d4df7271b33f",
    name: "Rahu-Guru Shanti Special Guru Chandal Dosha Nivaran Mahapuja",
    description: "For Prosperity and Material Well-Be",
    place: "Shri Brihaspati Temple, Kashi, Uttar Pradesh",
    date: "21 July, Sunday, Ashadha Shukla Purnima",
    imgUrl: "https://project-nxt.b-cdn.net/puja-5-l.webp",
  },

  {
    id: "ab0f6dbb-1a53-43f7-98bc-314505b30f85",
    name: "Satyanarayan Katha and Navagraha Shanti Puja",
    description:
      "For Enhancing Material Prosperity and Promoting Emotional Well-Being",
    place: "Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh",
    date: "21 July, Sunday, Ashadha Shukla Purnima",
    imgUrl: "https://project-nxt.b-cdn.net/puja-6-l.webp",
  },
];

const PujaDetailsSection = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [bookStatus, setBookStatus] = useState(false);

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div>
      {bookingDetails.map((each) =>
        each.id === id ? (
          <div className="w-full h-full  flex justify-center items-center lg:items-stretch">
            <div className=" px-2 py-2 lg:max-w-screen-xl w-full flex flex-col lg:flex-wrap justify-between ">
              <img
                className="w-3/3  lg:w-1/3 lg:h-2/3 h-2/3 py-2 rounded-lg"
                src={each.imgUrl}
              />
              <div className="flex flex-col justify-center lg:justify-between mt-10 ">
                <h1 className="text-2xl font-semibold py-2">{each.name}</h1>
                <p className="text-gray-700 text-xl font-medium py-2">
                  {each.description}
                </p>
                <div className="flex mr-4 py-4 sm:py-2">
                  <img
                    className="mr-2"
                    src={"https://project-nxt.b-cdn.net/puja-location.svg"}
                  />
                  <p className="text-lg">{each.place}</p>
                </div>
                <div className="flex mr-4 py-4 sm:py-2">
                  <img
                    className="mr-2"
                    src={"https://project-nxt.b-cdn.net/puja-date.svg"}
                  />
                  <p className="text-lg">{each.date}</p>
                </div>

                <p className="text-md font-light text-gray-500 ">
                  Till now{" "}
                  <span className="text-orange-500"> 2,00,000+ Devotees </span>
                  have participated in Pujas conducted by Sri Mandir Puja Seva.
                </p>
                <button
                  onClick={() => {
                    setBookStatus(true);
                  }}
                  className="w-full text-white bg-green-600 rounded-md p-2 my-2 sm:my-4"
                >
                  {!bookStatus ? "Book Now" : "Booked"}
                </button>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default PujaDetailsSection;
