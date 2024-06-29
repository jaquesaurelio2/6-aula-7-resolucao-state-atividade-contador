import * as React from "react";
import styles from "./app.module.css";

/**
  - Crie um state para armazenar o valor do contador
  - Mostre o valor atual do contador na tela, iniciando com 0
  - Utilize os eventos dos botões para criar as funcionalidades de 
  incrementar, decrementar e redefinir o valor do contador

  - Não permita decrementar o valor para números negativos
  - Não permita incrementar o valor para números maiores que 10

  - Ao clicar no botão + deve-se incrementar 1 no valor do contador
  - Ao clicar no botão - deve-se decrementar 1 no valor do contador
  - Ao clicar no botão Redefinir deve-se zerar o valor do contador

*/

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleReset = () => setCount(0);

  return (
    <div className={styles.app}>
      <div className={styles.counter}>
        <button
          className={styles.button}
          disabled={count === 0}
          onClick={handleDecrement}
        >
          -
        </button>
        <div className={styles.display}>{count}</div>
        <button
          className={styles.button}
          disabled={count === 10}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button onClick={handleReset}>Redefinir</button>
    </div>
  );
}
