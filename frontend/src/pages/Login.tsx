import { useState, type SubmitEventHandler } from "react";
import { FirebaseError } from "firebase/app";
import GoogleIcon from "../components/GoogleIcon";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEmailLogin: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      if (err instanceof FirebaseError)
        setError(err.message || "Failed to create account");
      else if (err instanceof Error)
        setError(err.message || "Failed to create account");
      else setError("Failed to create an account");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      if (err instanceof FirebaseError)
        setError(err.message || "Failed to create account");
      else if (err instanceof Error)
        setError(err.message || "Failed to create account");
      else setError("Failed to create an account");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border border-gray-200 p-4 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={handleEmailLogin}>
          <div className="space-y-2 pb-4">
            <p className="text-sm/4 text-gray-500">Please enter your details</p>
            <p className="text-3xl font-bold text-gray-800">Welcome back</p>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email adress"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
          <div className="flex items-center justify-between pb-2">
            <label className="flex cursor-pointer items-center gap-2 pl-1 select-none">
              <input
                id="remember"
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-gray-300 bg-gray-50 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-xs font-medium text-gray-600">
                Remember for 30 days
              </span>
            </label>

            <a
              href="/forgot-password"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            className="border-gray-30000 flex size-12 w-full items-center justify-center rounded-md border bg-blue-500 text-white"
            type="submit"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex size-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center justify-center gap-1 text-xs">
            <p className="leading-none text-gray-500">
              Already have an account?
            </p>

            <a
              href="/register"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
