import './App.css';
import ClickableList from './components/ClickableList';

function App() {
  const items = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Vite' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'TypeScript' }
  ];

  return (
    <div className="app-container">
      <h1>Clickable List</h1>
      <ClickableList items={items} />
    </div>
  );
}

export default App;
