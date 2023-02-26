import './App.css'
import React from 'react';

function Show(value) {
    const show = value.show;
    if (show) {
        return (
            <div>true</div>
        );
    }
    else {
        return (
            <div>false</div>
            );
    }
}
function Arr() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const renderArr =
        <ul>
            {arr.map((items) => (<li key={items}>{items}</li>))}
        </ul>
    return (
        <div>{renderArr}</div>
        );
}

class Text extends React.Component {
    getText() {
        return <p>method getText</p>;
    }

    render() {
        const gettext = this.getText();
        return (
            <div>{gettext}</div>
            );
    }
}

class Numbers extends React.Component {
    getNum1() {
        return 1;
    }

    getNum2() {
        return 2;
    }

    render() {
        const num1 = this.getNum1();
        const num2 = this.getNum2();
        const sum = num1 + num2;

        return (
            <div>
                <p>The sum of {num1} and {num2} is {sum}.</p>
            </div>
        );
    }
}

function App() {
    const string = "Line2";

    const string2 = <p>Line3</p>;

    const text1 = <p>text1</p>;
    const text2 = <p>text2</p>;

    const attr = 'block';

    const str = 'block';
    const styles = {
    backgroundColor: "green",
    borderRadius: "30px",
    border: "1px solid black",
    padding: "10px"
    };
    return (
      <div className="App">
          <div>Line1</div>
          <div>{string}</div>
          <div>{string2}</div>
          <div>{text1}
              <p>!!!</p>
              {text2}</div>
          <div id={attr}>{attr}</div>
          <div className={str}>{str}</div>
                <div style={styles}>green background with border-radius 30</div>
                <Show show={false} />
            <Arr />
            <Text/>
            <Numbers />
            </div>
  );
}

export default App;
