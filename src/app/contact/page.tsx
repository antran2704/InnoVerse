const ContactPage = () => {
  return (
    <div className="bg-[#f8fafc]">
      <section className="container__custom flex items-center justify-center px-5 py-10">
        <div className="lg:w-1/2 md:w-2/3 w-full flex flex-col gap-10">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium mb-5">
                Contact
              </h1>

              <div className="flex flex-col gap-5">
                {/* email */}
                <div>
                  <h2 className="sm:text-base text-sm">Email</h2>
                  <a
                    href="mailto:sales@innoverse.vn"
                    className="sm:text-base text-sm font-medium hover:text-primary-100">
                    sales@innoverse.vn
                  </a>
                </div>

                {/* address */}
                <div>
                  <h2 className="sm:text-base text-sm">Phone</h2>
                  <a
                    href="tel:0943743753"
                    className="sm:text-base text-sm font-medium hover:text-primary-100">
                    0943743753
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/images/contact_us.png"
              alt="contact us"
              title="contact us"
              className="w-1/2"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
          <div className="bg-white flex flex-col w-full px-5 py-10 border-2 rounded-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-primary-100 border-0 py-2 px-6 focus:outline-none hover:bg-primary-200 rounded text-lg transition-all ease-linear duration-100">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
