import { 
  Code, 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  BookOpen,
  Target
} from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered platform revolutionizes coding education with 
              cutting-edge features designed for both students and instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Real-Time Code Editor */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Interactive Code Editor</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                A powerful web-based IDE with syntax highlighting, auto-complete, and real-time AI assistance 
                that helps students write better code faster.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Multi-language support (Python, Java, JavaScript, C++)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Real-time syntax highlighting and error detection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Intelligent auto-completion and code suggestions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Integrated testing and debugging tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">main.py</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-blue-400">class</span> <span className="text-yellow-400">BinaryTree</span>:</div>
                <div className="ml-4"><span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span>(self, value):</div>
                <div className="ml-8">self.value = value</div>
                <div className="ml-8">self.left = <span className="text-purple-400">None</span></div>
                <div className="ml-8">self.right = <span className="text-purple-400">None</span></div>
                <div className="mt-4 text-blue-400">💡 AI Suggestion: Add type hints for better code clarity</div>
              </div>
            </div>
          </div>

          {/* AI-Powered Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">AI Tutor Assistant</h4>
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Student:</strong> I'm stuck on this sorting algorithm
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>AI Tutor:</strong> Let's break it down! What's the first step in bubble sort? 
                      Think about comparing adjacent elements...
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Hint:</strong> Try using a nested loop structure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">AI-Powered Learning</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced AI tutor provides personalized guidance, hints, and feedback 
                without giving away the solution, helping students learn through discovery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Contextual hints based on current code</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Code quality and efficiency suggestions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Personalized learning path recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Automatic problem generation based on skill gaps</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Advanced Analytics</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Comprehensive analytics dashboard that provides real-time insights into student 
                progress, helping instructors make data-driven decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Real-time student progress tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Identify struggling students early</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Class-wide performance visualization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Detailed code quality metrics</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-gray-900">Class Performance</h4>
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Problem Solving</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Code Quality</span>
                    <span>72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Efficiency</span>
                    <span>68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features designed to enhance the coding education experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Shield className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Platform</h3>
              <p className="text-gray-600">
                Role-based access control with enterprise-grade security for student data protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Zap className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Feedback</h3>
              <p className="text-gray-600">
                Real-time code analysis with immediate feedback on correctness and efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Users className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Learning</h3>
              <p className="text-gray-600">
                Enable peer learning with shared workspaces and collaborative coding sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Monitor className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Device Support</h3>
              <p className="text-gray-600">
                Access your coding environment from any device with seamless synchronization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <BookOpen className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Curriculum Integration</h3>
              <p className="text-gray-600">
                Easily integrate with existing curricula and learning management systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Target className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adaptive Learning</h3>
              <p className="text-gray-600">
                Personalized learning paths that adapt to individual student progress and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience These Features Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the revolution in coding education and see how our features can transform your classroom.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <span>Start Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;