import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <Fade damping={0.5} triggerOnce={true} direction="up">
        <div
          className="relative h-screen w-full bg-[url('../public/images/background.jpg')] bg-cover bg-no-repeat bg-center bg-fixed font-prompt"
          id="hero"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <h1 className="text-4xl text-white font-bold">
              FLASH HOME (HINUNDAYAN - HINUNANGAN)
            </h1>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Hero;
