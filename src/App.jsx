import React from "react";

import axios from "axios";

import "./index.scss";

import { Success } from "./components/Success";
import { Users } from "./components/Users";


function App() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    setLoading(true)

    axios
      .get("https://63e08d9159bb472a742402db.mockapi.io/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error getting users");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSentInvites = () => {
    setSuccess(true);
  };

  return (

    <div className="App">
      {success ?
        (
          <Success count={invites.length} />
        ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users}
            isLoading={isLoading}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSentInvites={onClickSentInvites}
          />
        )
      }
    </div>
  );
}

export default App;
