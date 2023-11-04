import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Card } from "../Card/Card";
import { api } from "../../hooks/fetch";
import "./List.css";

const List = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await api.users.list();
        const foundUser = users.find((user) => user.slug === slug);
        if (!foundUser) {
          throw new Error("User not found");
        }
        setUser(foundUser);
        const links = await api.links.fetch(foundUser.url);
        setList(links);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Layout>
      <div className="container mt-5 p-3" style={{ minHeight: "60vh" }}>
        {isLoading ? (
          <div className="has-text-centered mt-5">
            <i className="fas fa-spinner fa-spin fa-3x" />
          </div>
        ) : user ? (
          <div className="columns is-multiline is-centered">
            {list.map((data) => (
              <Card key={data.name} data={data} />
            ))}
          </div>
        ) : (
          <div className="has-text-centered mt-5">
            <h2 className="title is-2">No se ha encontrado el usuario :(</h2>
            <p className="subtitle is-5">Por favor, inténtelo nuevamente.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export { List };
