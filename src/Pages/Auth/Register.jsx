import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../Components/Hooks/useAuthContext";

const Register = () => {
    const {createUser} = useAuthContext()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get( 'email' )
        const password = form.get('password')
        
        createUser(email , password)
        .then(result => {
            const user = result.user
            console.log(user);
            navigate('/')
        }).then(err => {
            console.log('ERROR', err);
        })
    }


    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-center">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
          <p className="p-2 text-center">Already have an account? Please <Link className="font-medium underline text-blue-500" to={'/login'}>Login</Link></p>
        </div>
      </div>
    );
};

export default Register;