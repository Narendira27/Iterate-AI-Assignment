const exploreDetails = [
  {
    id: 1,
    name: "Book Pujas at Temples",
    iconUrl: "https://project-nxt.b-cdn.net/feature-01.svg",
  },
  {
    id: 2,
    name: "Talk to Astrologers",
    iconUrl: "https://project-nxt.b-cdn.net/feature-02.svg",
  },
  {
    id: 3,
    name: "Offer Chadhava",
    iconUrl: "https://project-nxt.b-cdn.net/feature-03.svg",
  },
  {
    id: 4,
    name: "Read Festival Details",
    iconUrl: "https://project-nxt.b-cdn.net/feature-04.svg",
  },
  {
    id: 5,
    name: "Listen to Divine Music",
    iconUrl: "https://project-nxt.b-cdn.net/feature-05.svg",
  },
  {
    id: 6,
    name: "Do Mandir Darshan",
    iconUrl: "https://project-nxt.b-cdn.net/feature-06.svg",
  },
  {
    id: 7,
    name: "Read Hindu Literature",
    iconUrl: "https://project-nxt.b-cdn.net/feature-07.svg",
  },
  {
    id: 8,
    name: "Read Panchang",
    iconUrl: "https://project-nxt.b-cdn.net/feature-08.svg",
  },
];

interface exploreDetailsType {
  id: number;
  name: string;
  iconUrl: string;
}

const ExploreSection = () => {
  return (
    <section className="py-10 w-full flex justify-center">
      <div className="lg:max-w-screen-xl flex flex-col justify-center items-start px-4">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl lg:text-4xl lg:my-5 font-bold">
            Explore Sri Mandir
          </h1>
        </div>
        <div className="w-full grid grid-cols-4 lg:grid-cols-8 gap-2 mt-3">
          {exploreDetails.map((each: exploreDetailsType) => (
            <div className=" col-span-1 lg:col-span-1 flex flex-col justify-center items-center md:p-2 p-1 ">
              <img className="bg-cover lg:w-20" src={each.iconUrl} />
              <h1 className="text-xs md:text-sm lg:text-lg lg:font-semibold  mt-2 text-center">
                {each.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
