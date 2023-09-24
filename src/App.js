import './App.css';
import AutoComplete from './components/autocomplete';
import Card from './components/card';
import CollapsableTable from './components/collapsable-table';
import DataTable from './components/data-table';

function App() {
  return (
    <div className="App">
      <h1> Data Table </h1>
      <DataTable />
      <AutoComplete />
      <Card />
      <CollapsableTable />
    </div>
  );
}

export default App;
