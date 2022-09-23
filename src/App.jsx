import './assets/stylesheet/App.scss';
import ComponentsLayoutHeader from './components/layout/header/header';
import Routing from './routing/routing';

function App() {
  return (
    <div className="App">
      <ComponentsLayoutHeader />
      <Routing />
    </div>
  );
}

export default App;
