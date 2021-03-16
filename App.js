import React from 'react';

const App = () => {
    const [temperatureValue, setTemperatureValue] = useState(10);

    returtn( <
        <
        div className = "app-container" >
        <
        div className = "temperature-display-container" >
        <
        div className = "temperature-display" > 10 C < /div>  <
        /div >

        <
        div className = "button-container" > < /div> <
        button onClick = {
            () => setTemperatureValue(temperatureValue + 1) } > + < /button>  <
        button onClick = {
            () => setTemperatureValue(temperatureValue + 1) } > - < /button>

        <
        /div>  <
        /div>

    )

}


export default App;