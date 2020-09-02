import React from 'react'
import { Link } from 'react-router-dom'

function NextPage(props) {

    return (
        <div>
            <div className="container text-light mt-5">
                <form id="checksboxes">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5">
                            <div className="card p-3 py-1">
                                <h2 className="text-center text-dark">What are the colors in the Indian national flag?</h2>
                                <div className="mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" id="checkwhite" type="checkbox" value="White" />
                                        <label className="form-check-label text-dark">White</label><br></br>
                                        <input className="form-check-input" id="checkyellow" type="checkbox" value="Yellow" />
                                        <label className="form-check-label text-dark">Yellow</label><br></br>
                                        <input className="form-check-input" id="checkorange" type="checkbox" value="Orange" />
                                        <label className="form-check-label text-dark">Orange</label><br></br>
                                        <input className="form-check-input" id="checkgreen" type="checkbox" value="Green" />
                                        <label className="form-check-label text-dark" >Green</label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" value="Submit" className="btn btn-primary button btn-block" onClick={props.getall}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="text-center mt-4">
                <Link to="/page3" className="">
                    <button type="submit" value="Submit" className="btn btn-danger"><i className="fas fa-arrow-right"></i>  Next</button>
                </Link>
            </div>
        </div>


    )
}

export default NextPage
