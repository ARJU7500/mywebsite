import React, { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    console.log(contact);

    // Connect your API / EmailJS here later
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[#050B24]
        text-white
        px-5
        py-20
        lg:px-16
        xl:px-24
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          -left-40
          top-20
          w-96
          h-96
          rounded-full
          bg-purple-600/10
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          -right-40
          bottom-0
          w-96
          h-96
          rounded-full
          bg-pink-600/10
          blur-3xl
        "
      ></div>


      {/* ================= DECORATIVE DOTS ================= */}

      <div
        className="
          absolute
          right-10
          top-20
          hidden
          lg:grid
          grid-cols-5
          gap-4
          opacity-30
        "
      >
        {[...Array(25)].map((_, index) => (
          <span
            key={index}
            className="w-1 h-1 rounded-full bg-purple-400"
          ></span>
        ))}
      </div>


      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <p
            className="
              text-purple-400
              font-semibold
              uppercase
              tracking-[0.3em]
              text-sm
              mb-4
            "
          >
            Let's Connect
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
            "
          >
            Let's{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-violet-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Talk
            </span>
          </h1>

          <div
            className="
              w-24
              h-1
              mx-auto
              mt-6
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-pink-500
            "
          ></div>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-gray-400
              text-base
              md:text-lg
              leading-7
            "
          >
            Have a project, job opportunity, or just want to
            connect? Feel free to send me a message.
          </p>

        </div>


        {/* ================= CONTACT GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-5
            gap-8
            items-stretch
          "
        >


          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div className="lg:col-span-2">

            <div
              className="
                h-full
                rounded-2xl
                p-[1px]
                bg-gradient-to-br
                from-purple-500/60
                via-violet-500/30
                to-pink-500/60
                shadow-xl
                shadow-purple-500/10
              "
            >

              <div
                className="
                  h-full
                  rounded-2xl
                  bg-[#080F2A]
                  p-7
                  md:p-8
                "
              >

                {/* Title */}

                <p
                  className="
                    text-purple-400
                    text-sm
                    uppercase
                    tracking-widest
                    font-semibold
                    mb-3
                  "
                >
                  Contact Information
                </p>

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  Get In Touch
                </h2>

                <p
                  className="
                    mt-4
                    text-gray-400
                    leading-7
                  "
                >
                  I'm always open to discussing new opportunities,
                  interesting projects, collaborations, and
                  professional connections.
                </p>


                {/* ================= CONTACT ITEMS ================= */}

                <div className="mt-8 space-y-4">


                  {/* Location */}

                  <div
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-xl
                      bg-[#050B24]
                      border
                      border-purple-500/10
                      hover:border-purple-500/40
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-purple-500/10
                        text-2xl
                      "
                    >
                      📍
                    </div>

                    <div>
                      <p className="text-xs text-purple-400 uppercase">
                        Location
                      </p>

                      <p className="text-gray-300 mt-1">
                        New Delhi, India
                      </p>
                    </div>

                  </div>


                  {/* Email */}

                  <div
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-xl
                      bg-[#050B24]
                      border
                      border-purple-500/10
                      hover:border-purple-500/40
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-purple-500/10
                        text-2xl
                      "
                    >
                      ✉️
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs text-purple-400 uppercase">
                        Email
                      </p>

                      <a
                        href="mailto:an096237@gmail.com"
                        className="
                          block
                          mt-1
                          text-gray-300
                          hover:text-purple-400
                          transition-colors
                          truncate
                        "
                      >
                        an096237@gmail.com
                      </a>

                    </div>

                  </div>


                  {/* Phone */}

                  <div
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-xl
                      bg-[#050B24]
                      border
                      border-purple-500/10
                      hover:border-purple-500/40
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-purple-500/10
                        text-2xl
                      "
                    >
                      📱
                    </div>

                    <div>

                      <p className="text-xs text-purple-400 uppercase">
                        Phone
                      </p>

                      <a
                        href="tel:+917668213002"
                        className="
                          block
                          mt-1
                          text-gray-300
                          hover:text-purple-400
                          transition-colors
                        "
                      >
                        +91 7668213002
                      </a>

                    </div>

                  </div>


                  {/* WhatsApp */}

                  <div
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-xl
                      bg-[#050B24]
                      border
                      border-purple-500/10
                      hover:border-purple-500/40
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-purple-500/10
                        text-2xl
                      "
                    >
                      💬
                    </div>

                    <div>

                      <p className="text-xs text-purple-400 uppercase">
                        WhatsApp
                      </p>

                      <a
                        href="https://wa.me/917668213002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          block
                          mt-1
                          text-gray-300
                          hover:text-purple-400
                          transition-colors
                        "
                      >
                        +91 7668213002
                      </a>

                    </div>

                  </div>

                </div>


                {/* ================= SOCIAL ================= */}

                <div className="mt-8">

                  <p
                    className="
                      text-sm
                      text-gray-500
                      uppercase
                      tracking-widest
                      mb-4
                    "
                  >
                    Find Me Online
                  </p>

                  <div className="flex gap-3">

                    <a
                      href="https://github.com/ARJU7500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-2.5
                        rounded-lg
                        border
                        border-purple-500/20
                        bg-[#050B24]
                        text-gray-300
                        hover:text-white
                        hover:border-purple-500
                        transition-all
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/arjunegi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-2.5
                        rounded-lg
                        border
                        border-purple-500/20
                        bg-[#050B24]
                        text-gray-300
                        hover:text-white
                        hover:border-purple-500
                        transition-all
                      "
                    >
                      LinkedIn
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT SIDE - FORM */}
          {/* ================================================= */}

          <div className="lg:col-span-3">

            <div
              className="
                rounded-2xl
                p-[1px]
                bg-gradient-to-br
                from-purple-500/60
                via-violet-500/30
                to-pink-500/60
                shadow-xl
                shadow-purple-500/10
              "
            >

              <div
                className="
                  rounded-2xl
                  bg-[#080F2A]
                  p-7
                  md:p-8
                "
              >

                <div className="mb-7">

                  <p
                    className="
                      text-purple-400
                      text-sm
                      uppercase
                      tracking-widest
                      font-semibold
                    "
                  >
                    Send a Message
                  </p>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-white
                      mt-2
                    "
                  >
                    Start a Conversation
                  </h2>

                </div>


                <form
                  onSubmit={handleSubmitData}
                  className="space-y-5"
                >

                  {/* Name + Email */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name */}

                    <div>

                      <label
                        htmlFor="name"
                        className="
                          block
                          mb-2
                          text-sm
                          font-medium
                          text-gray-300
                        "
                      >
                        Full Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="
                          w-full
                          px-4
                          py-3
                          rounded-xl
                          bg-[#050B24]
                          border
                          border-purple-500/20
                          text-white
                          placeholder-gray-600
                          outline-none
                          focus:border-purple-500
                          focus:ring-2
                          focus:ring-purple-500/10
                          transition-all
                        "
                      />

                    </div>


                    {/* Email */}

                    <div>

                      <label
                        htmlFor="email"
                        className="
                          block
                          mb-2
                          text-sm
                          font-medium
                          text-gray-300
                        "
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="
                          w-full
                          px-4
                          py-3
                          rounded-xl
                          bg-[#050B24]
                          border
                          border-purple-500/20
                          text-white
                          placeholder-gray-600
                          outline-none
                          focus:border-purple-500
                          focus:ring-2
                          focus:ring-purple-500/10
                          transition-all
                        "
                      />

                    </div>

                  </div>


                  {/* Subject */}

                  <div>

                    <label
                      htmlFor="subject"
                      className="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-300
                      "
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contact.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-[#050B24]
                        border
                        border-purple-500/20
                        text-white
                        placeholder-gray-600
                        outline-none
                        focus:border-purple-500
                        focus:ring-2
                        focus:ring-purple-500/10
                        transition-all
                      "
                    />

                  </div>


                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-300
                      "
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={contact.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      required
                      rows="7"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-[#050B24]
                        border
                        border-purple-500/20
                        text-white
                        placeholder-gray-600
                        outline-none
                        resize-none
                        focus:border-purple-500
                        focus:ring-2
                        focus:ring-purple-500/10
                        transition-all
                      "
                    ></textarea>

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="
                      group
                      w-full
                      py-3.5
                      rounded-xl
                      font-semibold
                      text-white
                      bg-gradient-to-r
                      from-purple-600
                      to-pink-500
                      hover:from-purple-500
                      hover:to-pink-500
                      transition-all
                      duration-300
                      shadow-lg
                      shadow-purple-500/20
                    "
                  >

                    <span className="flex items-center justify-center gap-2">

                      Send Message

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                    </span>

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;