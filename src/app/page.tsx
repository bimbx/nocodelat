import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">nocode.lat</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a>
            <a href="#community" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Community</a>
            <a href="#join" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Join Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Create Amazing Effects<br />
          <span className="text-blue-600 dark:text-blue-400">Without Code</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Join our community of creators using smart tools to build stunning visual effects and animations without writing a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#join" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get Started Free
          </a>
          <a href="#demo" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
            Watch Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Smart Tools for Creative Minds</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Drag & Drop",
              description: "Create effects with simple drag and drop interactions",
              icon: "🎨"
            },
            {
              title: "AI-Powered",
              description: "Let AI help you generate and optimize your effects",
              icon: "🤖"
            },
            {
              title: "Real-time Preview",
              description: "See your changes instantly as you create",
              icon: "👁️"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join Our Creative Community Today</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Start creating stunning effects without code. Join thousands of creators already using nocode.lat
          </p>
          <a href="#signup" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © 2025 nocode.lat. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Discord</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
