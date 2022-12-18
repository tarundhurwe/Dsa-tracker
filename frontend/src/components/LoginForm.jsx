import React from 'react'

export const LoginForm = () => {
    return (
        <div className="form card">
            <div className="login card-body" id="login">
                <form action="#">
                    <div className="log-form form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput1" placeholder="Username" />
                        <label htmlFor="floatingInput1">Username</label>
                    </div>
                    <div className="log-form form-floating mb-3">
                        <input type="password" className="form-control" id="floatingInput2" placeholder="Password" />
                        <label htmlFor="floatingInput2">Password</label>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button className="btn btn-outline-light" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="signup card-body" id="signup">
                <div className="log-form form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput6" placeholder="email" />
                    <label htmlFor="floatingInput6">Email</label>
                </div>
                <div className="log-form form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput3" placeholder="firstname" />
                    <label htmlFor="floatingInput3">Firstname</label>
                </div>
                <div className="log-form form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput4" placeholder="lastname" />
                    <label htmlFor="floatingInput4">Lastname</label>
                </div>
                <div className="log-form form-floating mb-3">
                    <input type="password" className="form-control" id="floatingInput7" placeholder="password" />
                    <label htmlFor="floatingInput7">password</label>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-outline-light" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
