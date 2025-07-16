import Link from "next/link";

export default function Signup() {
  return (
    <main>


      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 py-12">
        <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-700 w-full max-w-md">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center">Create Your Account</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-zinc-300 mb-2 font-semibold">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-300 mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-zinc-300 mb-2 font-semibold">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Create a password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-zinc-900 font-bold py-3 rounded-full hover:bg-zinc-200 transition duration-300 shadow-lg mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="text-zinc-400 text-center mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-white underline hover:text-zinc-200">Log in</Link>
          </p>
        </div>
      </section>

      <footer className="bg-zinc-900 text-zinc-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Muffin Forum. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="#" className="hover:text-white transition duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
