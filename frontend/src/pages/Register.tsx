import GoogleIcon from "../components/GoogleIcon";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border border-gray-200 p-4 shadow-md sm:p-6 lg:p-8">
        <form className="space-y-6">
          <div className="space-y-2 pb-4">
            <p className="text-sm/4 text-gray-500">Please enter your details</p>
            <p className="text-3xl font-bold text-gray-800">
              Create an account
            </p>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email adress"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />

          <button
            className="border-gray-30000 flex size-12 w-full items-center justify-center rounded-md border bg-blue-500 text-white hover:bg-blue-600"
            type="submit"
          >
            Sign up
          </button>

          <button className="flex size-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none">
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center justify-center gap-1 text-xs">
            <p className="leading-none text-gray-500">
              Already have an account?
            </p>

            <a
              href="/login"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
