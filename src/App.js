import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';

function App() {
  const [ UserData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain)
    }]
  })
  return (
    <div className="App">
      <BarChart chartData={UserData}/>
    </div>
  );
}

export default App;
