import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../Components/Hooks/useAuthContext";

const Login = () => {
    const {loginUser} = useAuthContext()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get( 'email' )
        const password = form.get('password')
        
        loginUser(email , password)
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
        <div className="w-full max-w-sm p-6 bg-white rounded shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <p className="p-2 text-center">Don&#39;t have an account? Please <Link className="font-medium underline text-blue-500" to={'/register'}>Register</Link></p>
        </div>
      </div>
    );
};

export default Login;