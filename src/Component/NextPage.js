import React from 'react'
import {Link} from 'react-router-dom'

function NextPage(props) {
 return (
      <div>
        <div className="container text-light mt-5">
        <form onSubmit={props.hPlayerSubmit}>
        <div className="row d-flex justify-content-center">
              <div className="col-md-5">
                  <div className="card p-3 py-1">
                      <h2 className="text-center text-dark">Who is the best cricketer in the world?</h2>
                      <div className="mt-3"> 
                      <select  className="form-control" required onChange={props.hPlayer}>
                          <option>Choose One</option>
                          <option>Sachin Tendulkar</option>
                          <option>Sourav Ganguly</option>
                          <option>Virat Kohli</option>
                          <option>Jacques Kallis</option>
                     </select>
                      </div>
                      <div className="mt-4"> 
                      <button type="submit" value="Submit" className="btn btn-primary button btn-block">Submit</button> 
                    </div>
                  </div>
              </div>
          </div>
        </form>
      </div>
      <div className="text-center mt-4">
     <Link to="/page2" className="">
                  <button type="submit" value="Submit" className="btn btn-danger"><i className="fas fa-arrow-right"></i>  Next</button>
       </Link>
     </div>
      </div>
   
        
    )
}

export default NextPage
