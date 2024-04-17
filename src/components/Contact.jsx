import { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <div className="font-prompt">
        <section id="contact">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <Slide direction="down">
              <div className="mb-4">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                  <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                    Get in Touch
                  </h2>
                </div>
              </div>
            </Slide>
            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2">
                <Slide>
                  <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600">
                      Please feel free to contact us using the information below
                      or fill out the form, and we will get back to you as soon
                      as possible.
                    </p>
                    <ul className="mb-6 md:mb-0">
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffec34] text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                            Our Address
                          </h3>
                          <p className="text-gray-600">
                            National Road, Barangay Poblacion,
                          </p>
                          <p className="text-gray-600">
                            Hinunangan, 6608 Southern Leyte
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffec34] text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                            Contact
                          </h3>
                          <p className="text-gray-600">Mobile: 09550793323</p>
                          <p className="text-gray-600">
                            Email: kst.blanco03@gmail.com
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffec34] text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M12 7v5l3 3"></path>
                          </svg>
                        </div>
                        <div className="ml-4 mb-4">
                          <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                            Working hours
                          </h3>
                          <p className="text-gray-600">
                            Monday - Saturday: 09:00 AM - 06:00 PM
                          </p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Slide>
                <Slide direction="right">
                  <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold">Send a message</h2>
                    <form id="contactForm">
                      <div className="mb-6">
                        <div className="mx-0 mb-1 sm:mb-4">
                          <div className="mx-0 mb-1 sm:mb-4">
                            <label
                              for="name"
                              className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                              type="text"
                              id="name"
                              autocomplete="given-name"
                              placeholder="Your name"
                              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                              name="name"
                            />
                          </div>
                          <div className="mx-0 mb-1 sm:mb-4">
                            <label
                              for="email"
                              className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                              type="email"
                              id="email"
                              autocomplete="email"
                              placeholder="Your email address"
                              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            for="textarea"
                            className="pb-1 text-xs uppercase tracking-wider"
                          ></label>
                          <textarea
                            id="textarea"
                            name="textarea"
                            cols="30"
                            rows="5"
                            placeholder="Write your message..."
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          ></textarea>
                        </div>
                      </div>
                      <div className="text-center">
                        <a
                          href="mailto:kst.blanco03@gmail.com"
                          type="submit"
                          className="w-full bg-[#ffec34] px-6 py-3 font-xl rounded-md sm:mb-0 hover:shadow-md"
                        >
                          Send Message
                        </a>
                      </div>
                    </form>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
