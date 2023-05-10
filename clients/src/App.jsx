import {ChatProvider} from "./context/ChatContex";
import Container from "./Components/Container";
import './App.css'
function App() {
  return (
<div className="App">
      <ChatProvider>
        <Container/>
      </ChatProvider>
   
      </div>
  );
}

export default App;
