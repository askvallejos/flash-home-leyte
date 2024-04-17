import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <>
      <footer class="flex flex-col space-y-10 justify-center p-10 bg-[#ffec34] font-prompt">
        <div class="flex justify-center space-x-5">
          <Slide direction="up" delay={300}>
            <a
              href="https://www.facebook.com/share/JTMQw4T9W7eaJCrF/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a
              href="https://www.messenger.com/t/61557630058834/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
          </Slide>
        </div>
        <Slide direction="up">
          <div>
            <p class="text-center text-gray-700 font-medium">
              &copy; 2024 Flash Home
            </p>
          </div>
        </Slide>
      </footer>
    </>
  );
};

export default Footer;
