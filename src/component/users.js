import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersAction";

const Users = (props) => {
  const [jokes, setNewJokes] = useState(true);
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      props.getUsers("sport");
    }
  }, [jokes]);

  console.log(props.users.users);

  return (
    <div>
      <button onClick={() => setNewJokes(!jokes)}>New Jokes</button>
      {props.users.users.map((u) => (
        <React.Fragment key={u.id}>
          <h6>{u.value}</h6>
          <h6>{u.created_at}</h6>
        </React.Fragment>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, { getUsers })(Users);
