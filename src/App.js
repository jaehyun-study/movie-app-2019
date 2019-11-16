import React from "react";
import PropTypes from "prop-types";

function People({ name, age }) {
  return (
    <h4>
      I like {name}({age}).
    </h4>
  );
}

const PeopleILike = [
  {
    id: 1,
    name: "John",
    age: 32
  },
  {
    id: 2,
    name: "Kay",
    age: 36
  },
  {
    id: 3,
    name: "Pororo",
    age: 5
  }
];

People.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

function renderMan(man) {
  return <People key={man.id} name={man.name} age={man.age} />;
}

function App() {
  return <div className="App">{PeopleILike.map(renderMan)}</div>;
}

export default App;
