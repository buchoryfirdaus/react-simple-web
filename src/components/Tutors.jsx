import PropTypes from "prop-types";
import "../styles/Tutors.css";
import parse from "html-react-parser";

function Tutors(props) {
  return (
    <div className="tutor-list">
      {props.tutorsList.map((item, index) => {
        return (
          <div className="kartu-tutor" key={index}>
            <img src={item.image} alt={`Tutor ${index}`} />
            <div>{parse(item.name)}</div>
          </div>
        );
      })}
    </div>
  );
}

Tutors.propTypes = {
  tutorsList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tutors;
