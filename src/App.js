// src/App.js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    // initial state: person object + shows boolean + elapsed seconds
    this.state = {
      person: {
        fullName: "Augustine Utsuekie",
        bio: "Frontend developer — building accessible, performant UIs.",
        imgSrc: "https://i.pravatar.cc/300?img=12", // placeholder avatar
        profession: "Frontend Developer"
      },
      shows: false,
      secondsSinceMount: 0
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // capture mount time and start interval that updates secondsSinceMount every second
    this._mountedAt = Date.now();
    this._timer = setInterval(() => {
      const elapsedMs = Date.now() - this._mountedAt;
      const seconds = Math.floor(elapsedMs / 1000);
      this.setState({ secondsSinceMount: seconds });
    }, 1000);
  }

  componentWillUnmount() {
    // cleanup interval
    if (this._timer) clearInterval(this._timer);
  }

  toggleShow() {
    this.setState((prev) => ({ shows: !prev.shows }));
  }

  render() {
    const { person, shows, secondsSinceMount } = this.state;
    const cardStyle = {
      maxWidth: 720,
      margin: "20px auto",
      padding: 18,
      borderRadius: 12,
      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
      background: "#fff"
    };
    const imgStyle = {
      width: 140,
      height: 140,
      objectFit: "cover",
      borderRadius: 8,
      marginRight: 18
    };

    return (
      <div style={{ padding: 24, fontFamily: "system-ui, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 8 }}>Class Component — Person Profile</h1>
          <p style={{ color: "#475569", marginTop: 0 }}>
            Time since component mounted: <strong>{secondsSinceMount} s</strong>
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
            <button
              onClick={this.toggleShow}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #111827",
                background: shows ? "#111827" : "#e2e8f0",
                color: shows ? "#fff" : "#111827",
                cursor: "pointer",
                fontWeight: 700
              }}
            >
              {shows ? "Hide Profile" : "Show Profile"}
            </button>

            <div style={{ color: "#6b7280" }}>
              (Toggle to show/hide the person. The timer continues running.)
            </div>
          </div>

          {shows && (
            <div style={{ ...cardStyle, marginTop: 18 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={person.imgSrc} alt={person.fullName} style={imgStyle} />
                <div>
                  <h2 style={{ margin: "0 0 6px 0" }}>{person.fullName}</h2>
                  <div style={{ color: "#6b7280", marginBottom: 8 }}>{person.profession}</div>
                  <p style={{ margin: 0 }}>{person.bio}</p>
                </div>
              </div>

              <div style={{ marginTop: 14, color: "#374151" }}>
                <strong>Profile meta:</strong>
                <div>• Age / Years experience: (you can add more fields)</div>
                <div>• Last updated: {new Date().toLocaleString()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
