// import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { UserData } from './Data';
import { useState } from 'react';

function App() {
  const [userData]= useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1", 
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,

    },
  ],
})


  return (
    <div className="App" style = {{display: "flex"}}>
      <div style = {{ width: 700, height: 600}}>
        <BarChart chartData={userData} />
      </div>
      <div style = {{ width: 700, height: 600}}>
        <LineChart chartData={userData} />
      </div>
      <div style = {{ width: 700, height: 400}}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
