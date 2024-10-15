import PropTypes from "prop-types";
import "../styles/Partners.css";

function Partners(props) {
  return (
    <div className="partner-list">
      {props.partnersList.map((item, index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={item.image} alt={`Partner ${index}`} />
          </div>
        );
      })}
    </div>
  );
}

Partners.propTypes = {
  partnersList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Partners;
