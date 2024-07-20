import { useNavigate } from "react-router-dom";

const bookingDetails = [
  {
    id: "bfb75899-e6df-4c6a-b538-839527447c0b",
    name: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    description: "For Prevention of Misfortunes and Adversities",
    place: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
    imgUrl: "https://project-nxt.b-cdn.net/puja-1.webp",
  },
  {
    id: "9344f1b7-9218-40ad-bb11-9f27e735770d",
    name: "Maa Bagalamukhi Tantra Yukta Havan",
    description: "For Victory in Court Cases and Victory over Enemies",
    place: "Maa Bagalamukhi Temple, Haridwar, Uttarakhand",
    date: "21 July, Sunday, Ashadha Shukla Chaturdashi",
    imgUrl: "https://project-nxt.b-cdn.net/puja-2.webp",
  },

  {
    id: "e96e4fc5-d20b-4a25-9c4b-18a817ca6144",
    name: "Divya Mahakali Tantrokta Havan",
    description: "For Courage and Protection from Obstacles",
    place: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
    date: "20 July, Saturday, Ashadha Shukla Purnima ",
    imgUrl: "https://project-nxt.b-cdn.net/puja-3.webp",
  },

  {
    id: "ca954455-9be4-41e3-a5a0-1ceadac6e469",
    name: "1008 Dakshinamurthy Mool Mantra Jaap and Havan and Omkareshwar Rudrabhishekn",
    description: "To Find Purpose and Achieve Stability in Life",
    place: "Shri Omkareshwar Jyotirlinga Temple , Khandwa, Madhya Pradesh",
    date: "21 July, Sunday, Ashadha Shukla Purnima",
    imgUrl: "https://project-nxt.b-cdn.net/puja-4.webp",
  },

  {
    id: "9d1dce13-04a5-4df4-ba94-d4df7271b33f",
    name: "Rahu-Guru Shanti Special Guru Chandal Dosha Nivaran Mahapuja",
    description: "For Prosperity and Material Well-Be",
    place: "Shri Brihaspati Temple, Kashi, Uttar Pradesh",
    date: "21 July, Sunday, Ashadha Shukla Purnima",
    imgUrl: "https://project-nxt.b-cdn.net/puja-5.webp",
  },

  {
    id: "ab0f6dbb-1a53-43f7-98bc-314505b30f85",
    name: "Satyanarayan Katha and Navagraha Shanti Puja",
    description:
      "For Enhancing Material Prosperity and Promoting Emotional Well-Being",
    place: "Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh",
    date: "21 July, Sunday, Ashadha Shukla Purnima",
    imgUrl: "https://project-nxt.b-cdn.net/puja-6.webp",
  },
];

const ViewPoojaBooking = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-100 flex justify-center">
      <div className="max-w-screen-xl w-full py-5 px-2  ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {bookingDetails.map((each, index) => (
            <div
              onClick={() => {
                navigate(`/pujadetails?id=${each.id}`);
              }}
              key={index}
              className="bg-white cursor-pointer  p-3 rounded-md flex flex-col justify-between"
            >
              <img className="rounded-md" src={each.imgUrl} />
              <h1 className="text-xl font-semibold py-2">{each.name}</h1>
              <p className="text-lg font-medium py-0.5">{each.description}</p>
              <div className="flex items-start mt-4 ">
                <img
                  className="mr-2"
                  src={"https://project-nxt.b-cdn.net/puja-location.svg"}
                />
                <p className="text-md">{each.place}</p>
              </div>
              <div className="flex items-start  mt-4 ">
                <img
                  className="mr-2"
                  src={"https://project-nxt.b-cdn.net/puja-date.svg"}
                />
                <p className="text-md">{each.date}</p>
              </div>
              <div className="flex ">
                <button className="text-lg w-full  align-bottom  text-center rounded-md p-2 mt-4 bg-green-400 ">
                  Participate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPoojaBooking;
