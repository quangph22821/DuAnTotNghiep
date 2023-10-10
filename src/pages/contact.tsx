const ContactPage = () => {
  return (
    <>
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container mx-auto sm:px-4">
          <div className="contact_section_2">
            <div className="flex flex-wrap ">
              <div className="md:w-1/2 pr-4 pl-4">
                <div className="mail_section_1">
                  <h1 className="contact_taital">Contact Us</h1>
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Name"
                    name="text"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Email"
                    name="text"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Phone Number"
                    name="text"
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Massage"
                    rows={5}
                    id="comment"
                    name="Massage"
                    defaultValue={""}
                  />
                  <div className="send_bt">
                    <a href="#">SEND</a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 pr-4 pl-4">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                      width={600}
                      height={360}
                      frameBorder={0}
                      style={{ border: 0, width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
    </>
  );
};

export default ContactPage;
