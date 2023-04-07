import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
 
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
          gap: "50px",
          height: "50px",
          backgroundColor: "yellow",
        }}
      >
        <Navbar />
      </div>
      <AllRoutes />
    </div>
  );
}

export default App;
