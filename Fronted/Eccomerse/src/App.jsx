
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DatProvider from './Context/Data.Context';
import { AuthProvider } from './context/auth.context';
import CarMarket from './pages/Car';
import ProtectedRoute from './pages/ProtectedRoute';
import { SuccessfulRegistration } from './pages/SuccessfulRegistration';
import HomePage from './pages/home';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Shop from './pages/shop';
function App() {


  return (
    <>    <AuthProvider>
      <DatProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />

          </Routes>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/SuccessfulRegistration" element={<SuccessfulRegistration />} />


            <Route element={<ProtectedRoute />}>
              <Route path='/CarMarket' element={<CarMarket />} />

            </Route>

          </Routes>
        </BrowserRouter>

      </DatProvider>
    </AuthProvider>
    </>
  )
}

export default App;
