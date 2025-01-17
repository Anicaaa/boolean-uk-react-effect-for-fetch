//Hooks
import { useEffect, useState } from "react";

//Components
import UsersList from "./components/UsersList";

function UsersSection() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((parsedData) => {
        console.log(parsedData.results);
        setUser(parsedData.results);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <UsersList user={user} />
    </section>
  );
}

export default UsersSection;
