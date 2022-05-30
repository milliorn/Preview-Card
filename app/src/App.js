import "./App.css";
import avatar from "./images/image-avatar.png";
import clock from "./images/icon-clock.svg";
import equilibrium from "./images/image-equilibrium.jpg";
import ethereum from "./images/icon-ethereum.svg";

function App() {
  let equilibriumRng = Math.floor(Math.random() * 255 + 1);
  let daysRng = Math.floor(Math.random() * 5 + 2);
  let coinRng = (Math.random()).toPrecision(3);

  return (
    <div class="card">
      <img class="nft-card-image" src={equilibrium} alt="equilibrium preview" />
      <div class="img-overlay">
        <img src="./images/icon-view.svg" alt="view icon" />
      </div>
      <h2>Equilibrium #{equilibriumRng}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="container">
        <div class="price">
          <img src={ethereum} alt="Eth icon" />
          <div>{coinRng} ETH</div>
        </div>
        <div class="time">
          <img src={clock} alt="time icon" />
          <div>{daysRng} Days Left</div>
        </div>
      </div>
      <div class="creator">
        <img src={avatar} alt="avatar" />
        <div>
          Creation of <span>Lorem Ipsum</span>
        </div>
      </div>
    </div>
  );
}

export default App;
