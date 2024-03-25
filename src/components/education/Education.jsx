import React from "react";

function Education() {
  return (
    <section className="px-4 lg:px-10" id="education">
      <h1 className="text-center mt-10 text-orange-600 text-[30px] font-bold md:text-4xl">
        Education
      </h1>
      <p className=" text-center mt-2 text-orange-600 text-[16px] md:text-xl">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      {/* B. TECH.  */}
      <div className=" flex flex-row flex-wrap justify-between mx-auto px-4 my-10 lg:px-4 lg:flex lg:justify-start">
        <div className=" border-solid border-2 shadow-lg rounded-md p-2 lg:w-[60%]">
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded-md p-2 md:flex md:flex-row md:justify-start">
            <div>
              <img src="./education/itg.png" className="w-[150px]" />
            </div>
            <div className="">
              <h4 className="text-orange-600 text-xl text-center font-bold md:text-2xl">
                Institute of technology Gopeshwar, Chamoli
              </h4>
              <h2 className="text-orange-600 text-center text-sm md:text-xl">
                Bachelor of Technology, Computer Science & Engineering
              </h2>
              <p className="text-orange-600  text-center text-sm md:text-xl lg:text-start md:flex md:justify-start md:items-start lg:flex lg:items-start">
                Oct 2021 - June 2024
              </p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 p-2 md:text-xl">
              I am currently pursuing a Bachelor's degree in Computer Science &
              Engineering at Veer Madho Singh Bhandari Campus Institute of
              Technology Gopeshwar, Chamoli, Uttarakhand, India. I have
              completed 7 semesters and have a percentage of 60%.
            </p>
          </div>
        </div>
        <div className=" para pl-5 text-orange-600 font-bold text-2xl hidden lg:block lg:text-3xl lg:w-[40%]">
          <h1>Oct 2021 - June 2024</h1>
        </div>
      </div>
      {/* DIPLOMA  */}
      <div className=" flex flex-row flex-wrap justify-between mx-auto px-4 my-10 lg:px-4 lg:flex">
        <div className=" para pl-5 text-orange-600 font-bold text-2xl hidden lg:block lg:text-3xl lg:w-[40%]">
          <h1 className="lg:flex lg:items-end lg:justify-end lg:mr-5">
            Aug 2018 - Oct 2021
          </h1>
        </div>
        <div className=" border-solid border-2 shadow-lg rounded-md p-2 lg:w-[60%]">
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded-md p-2 md:flex md:flex-row md:justify-start">
            <div>
              <img src="./education/polly.png" className="w-[150px]" />
            </div>
            <div className="md:ml-5 lg:pl-5">
              <h4 className="text-orange-600 text-xl text-center font-bold md:text-2xl">
                Government Polytechnic Dwarahat, Almora
              </h4>
              <h2 className="text-orange-600 text-center text-sm md:text-xl md:flex md:justify-start md:items-start lg:flex lg:items-start">
                Diploma, Information Technology
              </h2>
              <p className="text-orange-600  text-center text-sm md:text-xl lg:text-start md:flex md:justify-start md:items-start lg:flex lg:items-start">
                Aug 2018 - Oct 2021
              </p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 p-2 md:text-xl">
              I have done my Diploma in Information Technology from Government
              Polytechnic Dwarahat, Almora, Uttarakhand, India with 74.90%.
            </p>
          </div>
        </div>
      </div>
      {/* Intermediate */}
      <div className=" flex flex-row flex-wrap justify-between mx-auto px-4 my-10 lg:px-4 lg:flex lg:justify-start">
        <div className=" border-solid border-2 shadow-lg rounded-md p-2 lg:w-[60%]">
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded-md p-2 md:flex md:flex-row md:justify-start">
            <div>
              <img src="./education/school.png" className="w-[150px]" />
            </div>
            <div className="  md:ml-10 lg:pl-5">
              <h4 className="text-orange-600 text-xl text-center font-bold md:text-2xl md:flex md:justify-start">
                Government Inter college Jalali, Almora
              </h4>
              <h2 className="text-orange-600 text-center text-sm md:text-xl md:flex md:justify-start md:items-start lg:flex lg:items-start">
                Intermediate, Science Stream
              </h2>
              <p className="text-orange-600  text-center text-sm md:text-xl lg:text-start md:flex md:justify-start md:items-start lg:flex lg:items-start">
                April 2017 - May 2018
              </p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 p-2 md:text-xl">
              I have done my Intermediate from Government Inter College Jalali,
              Almora, Uttarakhand, India. with 60.80%.
            </p>
          </div>
        </div>
        <div className=" para pl-5 text-orange-600 font-bold text-2xl hidden lg:block lg:text-3xl">
          <h1>April 2017 - May 2018</h1>
        </div>
      </div>
      {/* HIGHSCHOOL  */}
      <div className=" flex flex-row flex-wrap justify-between mx-auto px-4 my-10 lg:px-4 lg:flex">
        <div className=" para pl-5 text-orange-600 font-bold text-2xl hidden lg:block lg:text-3xl lg:w-[40%]">
          <h1 className="lg:flex lg:items-end lg:justify-end lg:mr-5">
            April 2015- May 2016
          </h1>
        </div>
        <div className=" border-solid border-2 shadow-lg rounded-md p-2 lg:w-[60%]">
          <div className="flex flex-col justify-center items-center bg-gray-300 rounded-md p-2 md:flex md:flex-row md:justify-start">
            <div>
              <img src="./education/school.png" className="w-[150px]" />
            </div>
            <div className=" md ml-10 lg:pl-5">
              <h4 className="text-orange-600 text-xl text-center font-bold md:text-2xl">
                Government Inter college Jalali, Almora
              </h4>
              <h2 className="text-orange-600 text-center text-sm md:text-xl md:flex md:justify-start md:items-start lg:flex lg:items-start">
                High School, General
              </h2>
              <p className="text-orange-600  text-center text-sm md:text-xl md:flex md:justify-start md:items-start lg:flex lg:items-start lg:text-start">
                April 2015- May 2016
              </p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 p-2 md:text-xl">
              I have done my high school from Government Inter College Jalali,
              Almora, Uttarakhand, India. with 61.40%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
