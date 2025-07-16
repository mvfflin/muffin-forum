import Image from "next/image";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <main>
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3f3f46" strokeWidth="0.1"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
            </svg>
        </div>

        <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
                Connect. Discuss. Grow.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 animate-fade-in-up delay-200">
                Join Muffin Forum, your vibrant community for engaging discussions, shared knowledge, and endless possibilities.
            </p>
            <a href="#" className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-zinc-200 transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-400">
                Explore Forums
            </a>
        </div>
    </section>

    <section id="features" className="py-20 bg-zinc-800 text-zinc-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">Why Choose Muffin Forum?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-700 transform hover:scale-105 transition duration-300">
                    <div className="text-white text-5xl mb-6">💡</div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Diverse Topics</h3>
                    <p className="text-zinc-400">
                        From tech to hobbies, find communities on every subject imaginable.
                    </p>
                </div>
                <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-700 transform hover:scale-105 transition duration-300">
                    <div className="text-white text-5xl mb-6">💬</div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Engaging Discussions</h3>
                    <p className="text-zinc-400">
                        Participate in lively conversations and share your unique insights.
                    </p>
                </div>
                <div className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-700 transform hover:scale-105 transition duration-300">
                    <div className="text-white text-5xl mb-6">🤝</div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Supportive Community</h3>
                    <p className="text-zinc-400">
                        Connect with like-minded individuals and build lasting relationships.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-zinc-900 text-zinc-100 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Join the Conversation?</h2>
            <p className="text-xl text-zinc-300 mb-10">
                Sign up today and become a part of our growing community!
            </p>
            <a href="#" className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-zinc-200 transition duration-300 transform hover:scale-105 shadow-lg">
                Create Your Account
            </a>
        </div>
    </section>

    <footer className="bg-zinc-900 text-zinc-400 py-8">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Muffin Forum. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
            </div>
        </div>
    </footer>
    </main>
  );
}
