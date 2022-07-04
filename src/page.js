import "./page.css";

function Page() {
  return (
    <div className="Page">
      <div className="content">
        <img
          className="contentImg"
          src="https://imgs.search.brave.com/NVRpPY36DGYY2pQKKiyZEyboWfzxBoP0PNlco5m-SXk/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL3By/b2ZpbGVfaW1hZ2Vz/LzEzNTc1MDU0MTgv/c3RpY2ttYW5fcHJv/Zl9waWNfNDAweDQw/MC5wbmc"
        ></img>
        <button type="button" className="btn btn-outline-secondary top">
          Custom button
        </button>
      </div>
    </div>
  );
}

export default Page;
