import { useState } from "react";
import { userLogin } from "functions/axiosApi";
import { UseUserDataContext } from "@context/userDataCtx";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { changeUserData } = UseUserDataContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await userLogin(username, password);
    console.log("res: ", res.data);
    changeUserData(res.data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
