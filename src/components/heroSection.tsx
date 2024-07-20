const HeroSection = () => {
  return (
    <section className="w-full bg-seashell flex justify-center items-center">
      <div className="max-w-screen-xl flex py-8 px-4 ">
        <div className="lg:grid lg:grid-cols-8 lg:gap-8">
          <div className=" col-span-4 flex flex-col justify-center ">
            <div className="flex items-center justify-start">
              <img src="https://project-nxt.b-cdn.net/hero-section-img.webp" />
              <h1 className="text-brassScorpion font-normal md:text-[14px] ml-1 text-[12px] mdLap:text-[16px]">
                WORLD'S LARGEST APP FOR HINDU DEVOTEES
              </h1>
            </div>
            <h1 className="text-4xl mt-2 mb-4 font-bold">
              <span>
                Pray daily with <span className="text-pantone">Sri Mandir</span>
                .<br></br>
              </span>
              <span>
                One App for all your <br />
              </span>
              <span>devotional needs.</span>
            </h1>
            <div className=" hidden lg:flex">
              <img
                className="w-48 h-16 mr-4"
                src="https://project-nxt.b-cdn.net/hero-section-play-store.svg"
              />
              <img
                className="w-48 h-16 "
                src="https://project-nxt.b-cdn.net/hero-section-app-store.svg"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-6 flex justify-center ">
            <img
              className="md:w-4/4 md:h-3/3 w-3/3 h-3/3"
              src="https://project-nxt.b-cdn.net/hero-section-main-img.webp"
            />
          </div>

          <div className=" lg:hidden flex justify-center mt-4">
            <img
              className="w-2/4 h-14 mr-4"
              src="https://project-nxt.b-cdn.net/hero-section-play-store.svg"
            />
            <img
              className="w-2/4 h-14 "
              src="https://project-nxt.b-cdn.net/hero-section-app-store.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
