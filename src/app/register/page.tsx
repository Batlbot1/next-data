import Link from "next/link";

export default function register() {
  return (
    <main className="flex justify-center items-center min-h-screen ml-40 mr-5 pt-10">
      <div className="form-login w-full max-w-md p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
        <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
        <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        >
          Login
        </button>
        <Link className="hover: text-blue-300 inline-block mt-4" href="/login">Login</Link>
      </div>
    </main>
  );
}
