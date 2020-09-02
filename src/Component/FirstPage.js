import React from 'react'
import {Link} from 'react-router-dom'

function FirstPage(props) {
    return (
        <div>
        <div className="container text-light">
        <h1 className="mt-5 text-center">Trivia App</h1>
        <div className="container mt-5">
        <form onSubmit={props.hNameSubmit}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <div className="card p-3 py-1">
                <h2 className="text-center text-dark">What is your name?</h2>
                <div className="mt-3">
                  <input type="text" onChange={props.hName} className="form-control" placeholder="Full Name" required />
                </div>
                <div className="mt-4">
                  <button type="submit" value="Submit" className="btn btn-primary button btn-block">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
     <div className="text-center mt-4">
     <Link to="/page1" className="">
                  <button type="submit" value="Submit" className="btn btn-danger"><i className="fas fa-arrow-right"></i>  Next</button>
       </Link>
     </div>
      </div>
    )
}

export default FirstPage
