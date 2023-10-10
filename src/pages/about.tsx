const AboutPage = () => {
  return (
    <>
      {/* about section start */}
      <div className="about_section layout_padding mt-6">
        <div className="container mx-auto sm:px-4">
          <div className="about_section_2">
            <div className="flex flex-wrap ">
              <div className="md:w-1/2 pr-4 pl-4">
                <div className="image_2">
                  <img src="../../../src/assets/images/products/product4.jpg" />
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4">
                <h1 className="about_taital text-6xl text-gray-800 font-medium mb-4 capitalize">About Us</h1>
                <p className="about_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
    </>
  );
};

export default AboutPage;
