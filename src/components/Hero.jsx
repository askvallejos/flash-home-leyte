import { Slide } from "react-awesome-reveal";
import backgroundVideo from "../../public/videos/backgroundVideo.mp4";

const Hero = () => {
  return (
    <>
      <Slide direction="up" triggerOnce={true}>
        <div className="font-prompt" id="hero">
          <video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            className="brightness-75 w-screen h-screen object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-110 duration-200">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl min-[320px]:text-2xl text-white font-bold">
              FLASH HOME (HINUNDAYAN - HINUNANGAN)
            </h1>
            <span className="text-white lg:text-base md:text-base sm:text-xs min-[320px]:text-xs">
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
