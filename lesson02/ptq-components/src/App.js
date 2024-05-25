import logo from './logo.svg';
import './App.css';
import FuncJsxQuyen from './components/Func_JSX_Quyền';
import ClassJsxQuyen from './components/Class_JSX_Quyền';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Demo JSX</h1>
      {/* function Component Demo */}
      <FuncJsxQuyen />
      <FuncJsxQuyen fullName = "Phạm Quyền" age = "20" />
      <ClassJsxQuyen />
      <ClassJsxQuyen info = "HIHI" time = "18" />

    </div>
  );
}

export default App;