import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { slug } = user;
  return (
    <div className="column is-one-third">
      <div className="card">
        <Link to={`/user/${slug}`} className="is-size-5 has-text-primary">
          <div className="card-content">{slug}</div>
        </Link>
      </div>
    </div>
  );
};
