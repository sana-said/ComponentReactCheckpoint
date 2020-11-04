import './App.css'
import ProfilPhoto from './component/profile/ProfilPhoto'
import FullName from './component/profile/FullName'
import Address from './component/profile/Address'

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName />
      <Address/>
    </div>
  );
}

export default App;
