import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { slug } = user;
  // eslint-disable-next-line react/prop-types
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1); // Capitalize first letter

  return (
    <div className="column is-one-third">
      <div className="card">
        <Link to={`/${slug}`} className="is-size-5 has-text-primary">
          <div className="card-content">{capitalizedSlug}</div>
        </Link>
      </div>
    </div>
  );
};
