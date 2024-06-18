import {BrowserRouter as Router} from "react-router-dom"
import NavBar from './NavBar';
import Public from "./Public";
import Container from 'react-bootstrap/Container';
import './FiveAccordions.css';
import WhatsappButton from './Pages/WhatsappButton'; 






function App() {
    return (
        
        <Router >       
          <Container > 
          <div>
      <WhatsappButton />
      </div>
          
           
             
             
             <NavBar  />     
             
              <Public />   
                      
            
          </Container>  
         </Router>    
        
       
  
  )
}
export default App
