import logo from './logo.svg';
import './App.css';
import { Card } from 'component-lib/dist/components/componentOne';
import { Button } from 'component-lib/dist/components/Button';


function App() {
  return (
    <div className="App">
      <Card title="Welcome! Hello" paragraph="This is from card component" />
      <Button title="Welcome Again!" paragraph="This is from Button component" />
    </div>
  );
}

export default App;
