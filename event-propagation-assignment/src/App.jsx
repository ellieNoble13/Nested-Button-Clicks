import NestedButtons from './NestedButtons';
import './App.css';

function App() {
  return (
      <div className="App">
        <NestedButtons
            innerMsg="Inner button clicked. Propagation stopped."
            outerMsg="Outer container clicked. Event bubbled."
        />
      </div>
  );
}

export default App;