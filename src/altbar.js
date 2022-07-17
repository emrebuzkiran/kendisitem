import "./altbar.css";

function AltBar() {
  return (
    <div className="AltBar fixed-bottom">
      <div className="altleft">
        <a href="https://twitter.com/reactjs">
          <i class="TopIccon fa-brands fa-twitter-square"></i>
        </a>
      </div>
      <div className="altcenter">
        <a href="https://github.com/emrebuzkiran">
          <i class="TopIccon fa-brands fa-github-square"></i>
        </a>
      </div>
      <div className="altright">
        <a href="https://www.reddit.com/user/kobraemre/">
          <i class="TopIccon fa-brands fa-reddit-square"></i>
        </a>
      </div>
    </div>
  );
}
export default AltBar;
