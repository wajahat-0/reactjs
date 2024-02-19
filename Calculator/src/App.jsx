import Display from "./Components/Display";

import ButtonContainer from "./Components/ButtonContainer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}
export default App;
