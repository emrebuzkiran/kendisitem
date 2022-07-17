import "./page.css";
import Card from "./card";
import React from "react";

class Page extends React.Component {
  state = { showContent: false };
  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };
  clicked() {
    console.log("tryyyyy");
  }

  render() {
    return (
      <div className="Page">
        <div className="content">
          <button className="img" onClick={this.showMore}>
            <img
              className="img"
              src="https://imgs.search.brave.com/NVRpPY36DGYY2pQKKiyZEyboWfzxBoP0PNlco5m-SXk/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL3By/b2ZpbGVfaW1hZ2Vz/LzEzNTc1MDU0MTgv/c3RpY2ttYW5fcHJv/Zl9waWNfNDAweDQw/MC5wbmc"
            ></img>
          </button>

          {this.state.showContent ? <Card /> : null}
        </div>
      </div>
    );
  }
}

export default Page;
