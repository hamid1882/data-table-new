import './App.css';
import AutoComplete from './components/autocomplete';
import Card from './components/card';
import CollapsableTable from './components/collapsable-table';
import DataTable from './components/data-table';
import Drawer from './components/drawer';
import TransitionGroup from './components/transition-group';

function App() {
  return (
    <div className="App">
      <TransitionGroup />
      <Drawer />
      <DataTable />
      <AutoComplete />
      <Card />
      <CollapsableTable />
    </div>
  );
}

export default App;
