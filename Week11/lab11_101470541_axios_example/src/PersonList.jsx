import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(err => console.error("Fetch error:", err));
  }

  render() {
    const headerStyle = {
      backgroundColor: "#28a745",
      color: "white",
      textAlign: "center",
      padding: "10px",
      fontSize: "24px",
      fontWeight: "bold",
    };

    const cardStyle = {
      backgroundColor: "#0097a7",
      color: "white",
      borderRadius: "8px",
      marginBottom: "15px",
      padding: "15px",
    };

    const topInfoStyle = {
      backgroundColor: "#007c91",
      padding: "8px 12px",
      borderRadius: "6px",
      marginBottom: "10px",
      fontWeight: "bold",
      fontSize: "18px",
    };

    const btnStyle = {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "6px 12px",
      cursor: "pointer",
    };

    return (
      <div style={{ backgroundColor: "#ffffffff", minHeight: "100vh", padding: "10px" }}>
        <div style={headerStyle}>User List</div>

        {this.state.persons.map((p, index) => (
          <div key={index} style={{ backgroundColor: "white", margin: "15px", borderRadius: "10px" }}>
            <div style={cardStyle}>
              
              {/* 🔹 title, name, and UUID */}
              <div style={topInfoStyle}>
                {p.name.title} {p.name.first} {p.name.last} — {p.login.uuid}
              </div>

              {/* 🔹 card content */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={p.picture.large}
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    width: "120px",
                    height: "120px",
                    marginRight: "15px",
                    border: "3px solid white",
                  }}
                />
                <div>
                  <p>User Name: {p.login.username}</p>
                  <p>Gender: {p.gender.toUpperCase()}</p>
                  <p>Time Zone Description: {p.location.timezone.description}</p>
                  <p>Address: {p.location.street.number} {p.location.street.name}, {p.location.city}, {p.location.country}</p>
                  <p>Email: {p.email}</p>
                  <p>Birth Date and Age: {p.dob.date} ({p.dob.age})</p>
                  <p>Registered Date: {p.registered.date}</p>
                  <p>Phone#: {p.phone}</p>
                  <p>Cell#: {p.cell}</p>
                  <button style={btnStyle}>Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
