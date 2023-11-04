import { useEffect, useState } from "react";
import { api } from "../../hooks/fetch";
import { Layout } from "../Layout/Layout";
import { User } from "../User/User";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await api.users.list();
        setUsersList(fetchedUsers);
      } catch (error) {
        setError("Error fetching users");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="container p-5" style={{ minHeight: "80vh" }}>
        {isLoading ? (
          <div className="has-text-centered mt-5">
            <i className="fas fa-spinner fa-spin fa-3x" />
          </div>
        ) : error ? (
          <div className="notification is-danger">{error}</div>
        ) : (
          <div className="columns is-multiline">
            {usersList.map((user) => (
              <User key={user.slug} user={user} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export { Users };
