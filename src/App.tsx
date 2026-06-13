
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./authentication/ProtectedRoute";
import Login from "./authentication/Login";

import Content from "./content/Content";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

function App() {

  const Dashboard = () => (
    <>
      <Sidebar />
      <div className="container-fluid page-body-wrapper">
        <Navbar />
          <div className="main-panel">
            <Content />
            <Footer />
          </div>
      </div>
    </>
  );

  return (
      <div className="container-scroller">
        <Router>
            <Routes>
              <Route element={<ProtectedRoute />}>
                    <Route path="/*" element={<Dashboard />} />
              </Route>
              <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
      </div>
  )
}

export default App