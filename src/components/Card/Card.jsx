// eslint-disable-next-line react/prop-types
export const Card = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { id, image, name, ingredients, price, historia } = data;
  return (
    <div key={id} className="column is-12-mobile is-4-tablet is-4-desktop">
      <div className="card rounded-lg shadow-md card-hover-effect">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={name} className="is-rounded" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h3 className="title is-4">{name}</h3>
            <p>
              <strong>Ingredients:</strong> {ingredients}
            </p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p className="mt-2">
              <strong>Historia:</strong> {historia}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
