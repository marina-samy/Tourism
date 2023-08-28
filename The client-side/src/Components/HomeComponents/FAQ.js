import React, { useState } from "react";
import HeaderSec from "../Helpers/HeaderSec";

const FAQ = () => {

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  return (

    <>
      <div className="flex flex-col justify-center items-center py-5 my-10 md:mx-5">
      <HeaderSec head="WE HERE TO HELP YOU" title="HOW CAN WE HELP" desc="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat." />

        <div className="w-[100%] h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
         dark:border-gray-700">
          {/* Title "HOW CAN WE HELP?" */}
          <ul
            className="w-100 bg-sky-950 text-sm font-medium text-center text-white divide-x divide-gray-200 
            rounded-lg dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <button
              id="faq-tab"
              data-tabs-target="#faq"
              type="button"
              role="tab"
              aria-controls="faq"
              aria-selected="false"
              className="inline-block w-full p-4 rounded-tr-lg focus:outline-none dark:bg-gray-700 
              dark:hover:bg-gray-600"
            >
              HOW CAN WE HELP?
            </button>
          </ul>

          <div
            id="fullWidthTabContent"
            className="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              className="p-4 bg-white rounded-lg dark:bg-gray-800"
              id="faq"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classNamees="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classNamees="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-gray-500 text-left border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                    onClick={()=>{ isClicked1 ? setIsClicked1(false) : setIsClicked1(true);  }}
                  >
                    <span className={` ${isClicked1 ? 'text-black' : 'text-gray-500'} `}>Why My Card Payment Is Failing?</span>
                    
                    <i className={`bi bi-chevron-up ${isClicked1 ? 'block text-black' : 'hidden'} `}></i>
                    <i className={`bi bi-chevron-down ${isClicked1 ? 'hidden' : 'block '} `}></i>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  // style={{display: "none",}}
                  // hidden
                  className={`${isClicked1 ? 'block' : 'hidden'}   h-fit `}
                  aria-labelledby="accordion-flush-heading-1"
                >
                  {/* bg-blue-400 */}
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, inventore cumque veniam, praesentium velit incidunt
                      rem quas a, quos eos ipsum, reprehenderit voluptatem.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, quos eos ipsum, reprehenderit voluptatem.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                    onClick={()=>{ isClicked2 ? setIsClicked2(false) : setIsClicked2(true);  }}
                  >
                    <span className={` ${isClicked2 ? 'text-black' : 'text-gray-500'} `}>Can I Upload Attachments?</span>
                    <i className={`bi bi-chevron-up ${isClicked2 ? 'block text-black' : 'hidden'} `}></i>
                    <i className={`bi bi-chevron-down ${isClicked2 ? 'hidden' : 'block'} `}></i>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  className={`${isClicked2 ? 'block' : 'hidden'}   h-fit `}
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, inventore cumque veniam, praesentium velit incidunt
                      rem quas a, quos eos ipsum, reprehenderit voluptatem.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, quos eos ipsum, reprehenderit voluptatem.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                    onClick={()=>{ isClicked3 ? setIsClicked3(false) : setIsClicked3(true);  }}
                  >
                    <span className={` ${isClicked3 ? 'text-black' : 'text-gray-500'} `}>What Is The Price Of Posting?</span>

                    <i className={`bi bi-chevron-up ${isClicked3 ? 'block text-black' : 'hidden'} `}></i>
                    <i className={`bi bi-chevron-down ${isClicked3 ? 'hidden' : 'block'} `}></i>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  className={`${isClicked3 ? 'block' : 'hidden'}  h-fit`}
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, inventore cumque veniam, praesentium velit incidunt
                      rem quas a, quos eos ipsum, reprehenderit voluptatem.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, inventore cumque veniam, praesentium velit incidunt
                      rem quas a, quos eos ipsum, reprehenderit voluptatem.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa, inventore cumque veniam, praesentium velit incidunt
                      rem quas a, quos eos ipsum, reprehenderit voluptatem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FAQ;