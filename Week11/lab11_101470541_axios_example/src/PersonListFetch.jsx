import React from "react";

export default class PersonListFetch extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(r => r.json())
      .then(data => this.setState({ persons: data.results }))
      .catch(err => console.error("Fetch error:", err));
  }

  render() {
    return (
      <div className="container py-4">
        <h2 className="mb-3 text-center">User List (fetch)</h2>
        <ul className="list-group">
          {this.state.persons.map((p, i) => (
            <li className="list-group-item d-flex align-items-center gap-3" key={i}>
              <img src={p.picture.thumbnail} alt="" className="rounded-circle" />
              <span>{p.name.first} {p.name.last} — {p.email}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
