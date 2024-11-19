import border3 from "../assets/border-3.png";

const styles = {
  heading: "main-font text-3xl text-dark",
  para: "para-font text-xl text-medium",
};

const VenueDetails = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="main-font uppercase text-5xl text-dark">Wedding Venue</h1>
      <img src={border3} alt="Border" />
      <div className="content mt-20 flex gap-28 items-center">
        <div className="details">
          <div>
            <h1 className={styles.heading}>Wedding Ceremony</h1>
            <p className={styles.para}>
              📍 The Grand Lotus Banquet Hall <br />
              123 Celebration Street, Jaipur, Rajasthan <br /> 🕒 Monday, 18th
              November 2024 | 5:00 PM Onwards
            </p>
          </div>
          <div>
            <h1 className={styles.heading}>Travel & Stay</h1>
            <p className={styles.para}>
              For outstation guests, accommodation details will be provided upon
              RSVP.
            </p>
          </div>
          <div>
            <h1 className={styles.heading}>Dress Code</h1>
            <p className={styles.para}>
              Traditional Indian attire preferred for both events.
            </p>
          </div>
        </div>
        <div className="map h-full w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0714666892856!2d75.78126827500547!3d26.927099476608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f3953edf0f%3A0xc1c18b2dd5a7c67a!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709840000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VenueDetails;
