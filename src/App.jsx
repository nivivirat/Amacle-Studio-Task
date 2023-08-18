import Header from "./components/Header"
import './App.css';
import Machine_Frame from "./components/Machine_Frame";

export default function App() {
  return (
    <div className="custom-font flex flex-col">
      <div>
        <Header />
      </div>
      <div className="">
        <Machine_Frame/>
      </div>
    </div>
  )
}
