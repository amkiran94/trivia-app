import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Summary() {
    const results = {
        name: "",
        playername: "",
        colors: []
    };

    // useState is state management in hooks
    const [summarry, setSummarry] = useState(results);

    // useeffect renders only once when the componenet loads for the first time
    useEffect(() => {
        setSummarry({
            name: localStorage.getItem("name"),
            playername: localStorage.getItem("playername"),
            colors: localStorage.getItem("colors")
        })
    }, [])
    // we can make the useeffect work again also by invoking the second arguement
    return (
        <div className="container text-light mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-3 py-1 text-dark">
                        <h2 className="text-center">Summary</h2>
                        <h2 className="mt-3">Hello: <span className="text-success">{summarry.name}</span></h2>
                        <h6>Here are the answers selected.</h6>
                        <h5>1. Who is the best cricketer in the world?</h5>
                        <h5>Answer: <span className="text-danger">{summarry.playername}</span></h5>
                        <h5>2. What are the colors in the national flag?</h5>
                        <h5>Answer: <span className="text-danger">{summarry.colors}</span></h5>
                        <div className="mt-4">
                            <Link to="/">
                                <button type="submit" value="Submit" className="btn btn-primary btn-block">Finish</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
