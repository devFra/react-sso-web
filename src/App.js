import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Authenticator} from './hooks/useAuth';
import { Auth } from 'aws-amplify';
import config from './aws-exports';

Auth.configure(config);

function App() {
  return (

    <div className="App">

      <Authenticator>
        <BrowserRouter>
          <Routes>

            <Route exact path="/login" element={
              <header className="App-header">
                <Login />
              </header>
            }/>

            <Route exact path="/" element={ 
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> }>
            
            </Route>
              
            
          </Routes>
        </BrowserRouter>
      </Authenticator>

    </div>
  );
}

export default App;
