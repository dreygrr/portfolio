import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2>Contact</h2>
        <p>If you want to get in touch, feel free to reach out via email or connect with me on social media.</p>
        <ul className="contact-list">
          <li><a href="mailto:dreygrr@gmail.com" target="_blank" className="btn btn-large btn-primary"><i className="fa-regular fa-envelope"></i> dreygrr@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/andrey-assis-70165225b/" target="_blank" className="btn btn-large btn-primary"><i className="fa-brands fa-linkedin"></i> Andrey de Assis</a></li>
          <li><a href="https://www.instagram.com/drey.motion/" target="_blank" className="btn btn-large btn-primary"><i className="fa-brands fa-instagram"></i> drey.motion</a></li>
        </ul>
      </div>
    </>
  );
}

export { Contact };