import axios from "axios"
import { useState } from "react"

export default function AddUser() {

  const [user, setUser] = useState(
    {
      name: "",
      username: "",
      email: ""
    }
  )

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/user", user)

    // console.log("form submitted", user)

  }

  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
        <h2 className="text-center m-4">
          Register user
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your name" name="name" value={user.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your username" name="username" value={user.username} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your email" name="email" value={user.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <button type="reset" className="btn btn-outline-danger mx-2">Cancel</button>
        </form>
      </div>
    </div >
  </div >
}
