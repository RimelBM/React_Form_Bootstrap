import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App" >
      
      
      <h2 class="text-primary text-center">Inscription</h2>
      <div class="d-flex justify-content-center align-items-center container">
            
            <form>
              <div class="form-group ">
              
                    <input type="text" class="form-control" id="pseudo"  placeholder="Your pseudo"/>
                    
              </div>

              <div class="form-group">
                  <input type="email" class="form-control" id="emailAdress" aria-describedby="emailHelp" placeholder="e-mail"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div class="form-group">
                  <input type="password" class="form-control" id="Password" placeholder="Your password"/>

              </div>

              <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>

              </div>


            </form>
    
      
      </div>
    </div>
  );
}

export default App;
