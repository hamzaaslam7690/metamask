import logo from "./logo.svg";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/components/wallet/connectors";
function App() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
      await activate(injected);
      console.log("account", account);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      alert("call");
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connect}> connact</button>
        <br />
        {account}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={disconnect}> disconnacted</button>
        <br />
      </header>
    </div>
  );
}

export default App;
