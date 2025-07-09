import classes from "./App.module.scss";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <a href="#" className="button button--primary">
        View Plans
      </a>

      <a href="#" className="button button--secondary">
        View Plans
      </a>

      <div className={classes.app}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        laudantium atque dignissimos nostrum dolorem, earum dolores alias
        deserunt, eaque adipisci voluptatum neque commodi non corrupti dolore
        minus iure! Ex, harum.
      </div>
    </>
  );
}

export default App;
