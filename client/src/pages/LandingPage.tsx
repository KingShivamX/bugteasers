import {
  Code,
  Brain,
  Users,
  BarChart3,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bridge the Gap Between

            </h1>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Logic and Code
            </span>
            <p className="text-xl text-gray-600 mb-8 mt-2 max-w-3xl mx-auto">
              Revolutionary AI-powered platform that transforms computer science education.
              Get instant feedback, personalized hints, and real-time assistance while learning to code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Start Learning Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Core Challenges in Learning to Code
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students understand the logic but struggle to translate it into error-free code.
              We're here to bridge that gap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Approach vs. Implementation Gap
              </h3>
              <p className="text-gray-600">
                Students understand the logic but get stuck translating that logic into error-free, working code.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lack of Targeted Practice
              </h3>
              <p className="text-gray-600">
                After learning concepts, students struggle to find curated problems that reinforce specific skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Limited Instructor Insights
              </h3>
              <p className="text-gray-600">
                Teachers can't see where students struggle in real-time, making timely intervention difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Solution: AI-Powered Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive platform that combines real-time AI assistance with powerful analytics
              to revolutionize how students learn to code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Real-Time Interactive Code Editor
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">AI tutor provides instant hints without revealing solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Syntax highlighting and auto-complete features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Real-time code execution and testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Code complexity analysis with improvement suggestions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">code-editor.py</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-blue-400">def</span> <span className="text-yellow-400">fibonacci</span>(n):</div>
                <div className="ml-4"><span className="text-purple-400"># AI Hint: Consider using recursion</span></div>
                <div className="ml-4"><span className="text-blue-400">if</span> n &lt;= 1:</div>
                <div className="ml-8"><span className="text-blue-400">return</span> n</div>
                <div className="ml-4"><span className="text-blue-400">return</span> fibonacci(n-1) + fibonacci(n-2)</div>
                <div className="mt-4 text-green-500">✓ Code complexity: O(2^n) - Consider optimization</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Problem Generation</h4>
              <p className="text-gray-600">Auto-generate coding assignments tailored to course topics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h4>
              <p className="text-gray-600">Track student progress and identify weak areas in real-time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h4>
              <p className="text-gray-600">Role-based access with privacy and authentication controls</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Feedback</h4>
              <p className="text-gray-600">Get immediate analysis on correctness, efficiency, and code quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Student Engagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Faster Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-blue-100">Reduced Instructor Workload</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Educators Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "BugTeasers has transformed how my students learn programming. The AI feedback is incredibly helpful."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">DR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Sarah Johnson</div>
                  <div className="text-gray-500">Computer Science Professor</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The real-time analytics help me identify struggling students before they fall behind."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Prof. Michael Chen</div>
                  <div className="text-gray-500">Software Engineering Instructor</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "My students are more engaged and confident in their coding abilities than ever before."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">ER</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Emily Rodriguez</div>
                  <div className="text-gray-500">Programming Bootcamp Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Coding Education?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of educators and students who are already experiencing the future of programming education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;