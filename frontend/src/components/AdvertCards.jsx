import PropTypes from "prop-types";

export default function AdvertCard({ details }) {
  return (
    details && (
      <div className="advert_card">
        <h2>{details.name}</h2>
        <img src={details.image} alt={details.image} />
      </div>
    )
  );
}

AdvertCard.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
