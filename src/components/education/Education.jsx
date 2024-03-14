import React from "react";

function Education() {
  return (
    <section>
      <h1 className="text-center mt-10 text-orange-600 text-5xl font-bold ">
        Education
      </h1>
      <p className="text-center mt-2 text-orange-600 text-mid ">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-10">
        <div className="w-1/2 border-solid border-2 shadow-lg rounded-md p-2">
          <div className="flex bg-gray-300 rounded-md">
            <div className="1/4">
              <img src="./education/itg.png" className="w-28" />
            </div>
            <div className="3/4">
              <h4 className="text-orange-600 text-2xl font-bold">
                Institue of technology Gopeshwar, Chamoli
              </h4>
              <h2 className="text-orange-600 font-bold">
                Bachelor of Technology, Computer Science & Engineering
              </h2>
              <p className="text-orange-600 font-bold">Oct 2021 - June 2024</p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 font-semibold ">
              I am currently pursuing a Bachelor's degree in Computer Science &
              Engineering at Veer Madho Singh Bhandari Campus Institute of
              Technology Gopeshwar, Chamoli, Uttarakhand, India. I have
              completed 7 semesters and have a percentage of 60%.
            </p>
          </div>
        </div>
        <div className=" para w-1/2 pl-10 text-orange-600 font-bold text-2xl">
          <h1>Oct 2021 - June 2024</h1>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-10">
        <div className=" para w-1/2 pl-10 text-orange-600 font-bold text-2xl">
          <h1>Aug 2018 - Oct 2021</h1>
        </div>
        <div className="w-1/2 border-solid border-2 shadow-lg rounded-md p-2">
          <div className="flex bg-gray-300 rounded-md">
            <div className="1/4">
              <img src="./education/polly.png" className="w-28" />
            </div>
            <div className="3/4">
              <h4 className="text-orange-600 text-2xl font-bold">
                Government Polytechnic Dwarahat, Almora
              </h4>
              <h2 className="text-orange-600 font-bold">
                Diploma, Information Technology
              </h2>
              <p className="text-orange-600 font-bold">Aug 2018 - Oct 2021</p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 font-semibold ">
              I have done my Diploma in Information Technology from Government
              Polytechnic Dwarahat, Almora, Uttarakhand, India with 74.90%.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-10">
        <div className="w-1/2 border-solid border-2 shadow-lg rounded-md p-2">
          <div className="flex bg-gray-300 rounded-md">
            <div className="1/4">
              <img src="./education/school.png" className="w-28" />
            </div>
            <div className="3/4">
              <h4 className="text-orange-600 text-2xl font-bold">
                Government Inter College Jalali, Almora, Uttarakhand, India
              </h4>
              <h2 className="text-orange-600 font-bold">
                Intermediate, Science Stream
              </h2>
              <p className="text-orange-600 font-bold">April 2017 - May 2018</p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 font-semibold ">
              I have done my high school from Government Inter College Jalali,
              Almora, Uttarakhand, India. with 60.80%.
            </p>
          </div>
        </div>
        <div className=" para w-1/2 pl-10 text-orange-600 font-bold text-2xl">
          <h1>April 2017 - May 2018</h1>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl my-10">
        <div className=" para w-1/2 pl-10 text-orange-600 font-bold text-2xl">
          <h1>April 2015- May 2016</h1>
        </div>
        <div className="w-1/2 border-solid border-2 shadow-lg rounded-md p-2">
          <div className="flex bg-gray-300 rounded-md">
            <div className="1/4">
              <img src="./education/school.png" className="w-28" />
            </div>
            <div className="3/4">
              <h4 className="text-orange-600 text-2xl font-bold">
                Government Inter college Jalali, Almora, Uttarakhand, India
              </h4>
              <h2 className="text-orange-600 font-bold">
                High School, General
              </h2>
              <p className="text-orange-600 font-bold">April 2015- May 2016</p>
            </div>
          </div>
          <div>
            <p className="text-orange-600 font-semibold ">
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
