import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route exact path="/auth" element={
            <header className="App-header">
              <Login />
            </header>
          }/>

          <Route exact path="/" element={
            <Dashboard />
          }/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
