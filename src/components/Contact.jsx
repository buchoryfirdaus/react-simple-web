import "../styles/Contact.css";
import YoutubeIcon from "../assets/svg/youtube";
import FacebookIcon from "../assets/svg/facebook";
import parse from "html-react-parser";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.contactSection.map((item, index) => {
            return (
              <div key={index} className="footer-section">
                {parse(item.content)}
              </div>
            );
          })}
          <div className="footer-section">
            <h3>Social</h3>
            <div className="icons-container">
              <YoutubeIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  contactSection: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contact;
