import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BugTeasers
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize computer science education by bridging the gap 
              between understanding concepts and implementing them in code.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To overcome inefficiencies in computer science education by reducing instructor workload 
                and giving students instant, personalized feedback on correctness, efficiency, and style 
                through an AI-driven learning platform.
              </p>
              <p className="text-gray-600">
                We believe that every student deserves access to personalized, intelligent tutoring that 
                helps them not just learn to code, but to think like a programmer.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Problem We Solve</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Students understand logic but struggle with implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Lack of targeted practice for specific skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Limited real-time insights for instructors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Minimal feedback from existing platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Innovative Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven educational methodologies 
              to create a truly transformative learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Driven Problem Generation</h3>
              <p className="text-gray-600">
                Our NLP and AI models automatically generate coding assignments tailored to course topics, 
                ensuring students get the right practice at the right time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Assistance</h3>
              <p className="text-gray-600">
                Our AI tutor provides instant hints and feedback without revealing the full solution, 
                helping students learn through guided discovery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Comprehensive analytics track real-time student progress and identify weak areas, 
                enabling targeted interventions before students fall behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge algorithms and technologies to ensure accuracy, 
              performance, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Code Analysis Algorithms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Levenshtein Distance</h4>
                  <p className="text-gray-600 text-sm">
                    Measures character-level edits for detecting minor code variations and plagiarism.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tokenization + Jaccard Similarity</h4>
                  <p className="text-gray-600 text-sm">
                    Analyzes code structure while ignoring formatting and variable names.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Abstract Syntax Tree (AST) Hashing</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced structural analysis using Winnowing algorithm for logical similarity detection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI & Machine Learning</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Natural Language Processing</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced NLP models for generating contextual hints and educational content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Code Quality Analysis</h4>
                  <p className="text-gray-600 text-sm">
                    ML algorithms that evaluate code efficiency, style, and best practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adaptive Learning</h4>
                  <p className="text-gray-600 text-sm">
                    Personalized learning paths based on individual student progress and patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Architecture</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Sandboxing</h4>
                  <p className="text-gray-600 text-sm">
                    Safe code execution environment with enterprise-grade security measures.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-Time Processing</h4>
                  <p className="text-gray-600 text-sm">
                    High-performance architecture for instant feedback and analysis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scalable Infrastructure</h4>
                  <p className="text-gray-600 text-sm">
                    Cloud-native design supporting thousands of concurrent users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student-Centric</h3>
              <p className="text-gray-600">
                Every feature is designed with student success and learning outcomes in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible in educational technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of collaborative learning and community-driven education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our platform and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Transforming Education
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the revolution that's making coding education more accessible, 
            effective, and engaging for students worldwide.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;