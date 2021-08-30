import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['trabalhar','estudar','tomar banho','dormir']

function App() {
  return (
    <>
    {arr.map((cur)=> Task(cur))}
    </>
  );
}

export default App;
