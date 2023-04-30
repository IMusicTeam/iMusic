import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ flex: 1, flexGrow: 1, padding:"10px" }}>
        <div
          style={{
            marginBottom: "20px",
            flexDirection: "row",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            alignItems: "center",
            display: "flex",
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <div>
            <div
              style={{
                border: "1px solid #295d93",
                alignItems: "start",
                display: "flex",
                justifyContent: "space-between",
                height: 100,
                padding: 10,
                flexDirection: "column",
                borderRadius: 5,
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <h6 style={{ fontSize: 10 }}>Wallet ID:</h6>
                <span style={{ fontSize: 12 }}>XXXX XXXX XXXX XX39</span>
              </div>
              <h1 style={{ fontSize: 19, fontWeight: 550 }}>$180.00</h1>
            </div>
            <p style={{marginTop:"20px", textDecoration:"underline", fontSize:12}}>Know more about wallet</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
