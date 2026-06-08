import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

function App() {

  const Dashboard = () => (
    <>
      <Sidebar />
      <Navbar />
    </>
  );

  return (
      <Dashboard/>
  )
}

export default App