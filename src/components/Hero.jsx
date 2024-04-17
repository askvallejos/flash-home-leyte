import { Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <Slide direction="up" triggerOnce={true}>
        <div
          className="relative h-screen w-full bg-[url('../public/images/background.jpg')] bg-cover bg-no-repeat bg-center bg-fixed font-prompt"
          id="hero"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[60%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-black bg-opacity-50 rounded">
            <h1 className="text-4xl sm:text-3xl text-white font-bold">
              FLASH HOME (HINUNDAYAN - HINUNANGAN)
            </h1>
            <span className="text-white text-base">
              Integrated e-commerce logistics service provider and integrated
              service delivery platform.
            </span>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Hero;
