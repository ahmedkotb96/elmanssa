import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  ChevronRight,
  Play,
  CheckCircle,
  Globe,
  Smartphone,
  Headphones,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Menu, // Added for mobile menu
  X,      // Added for mobile menu
} from 'lucide-react';

export default function LandingPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  // Effect to prevent scrolling when a modal or mobile menu is open
  useEffect(() => {
    if (showSignIn || showSignUp || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSignIn, showSignUp, isMenuOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setShowPassword(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModals();
  };

  const AuthModal: React.FC<{ isSignUp: boolean; onClose: () => void } & { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ isSignUp, onClose, onSubmit }) => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl transform transition-all relative animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{isSignUp ? 'Create Your Account' : 'Welcome Back'}</h2>
          <p className="text-gray-600">{isSignUp ? 'Join thousands of learners worldwide' : 'Sign in to continue your learning journey'}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your email" 
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                name="password" 
                type={showPassword ? 'text' : 'password'} 
                value={formData.password} 
                onChange={handleInputChange} 
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                placeholder="Enter your password" 
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  name="confirmPassword" 
                  type={showPassword ? 'text' : 'password'} 
                  value={formData.confirmPassword} 
                  onChange={handleInputChange} 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Confirm your password" 
                  required 
                />
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={() => { 
                if (isSignUp) { 
                  setShowSignUp(false); 
                  setShowSignIn(true); 
                } else { 
                  setShowSignIn(false); 
                  setShowSignUp(true); 
                } 
              }} 
              className="text-blue-600 font-semibold ml-1 hover:text-blue-700 transition-colors"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
        >
          <span className="text-xl leading-none">×</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduPlatform
              </span>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-block px-2">Features</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-block px-2">Courses</a>
              <a href="#instructors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-block px-2">Instructors</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-block px-2">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium inline-block px-2">Contact</a>
            </div>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => setShowSignIn(true)}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg animate-in fade-in duration-300">
            <div className="flex flex-col items-center space-y-4 py-8">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
              <a href="#instructors" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">Instructors</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <div className="border-t border-gray-200 w-3/4 my-4"></div>
              <button
                onClick={() => { setShowSignIn(true); setIsMenuOpen(false); }}
                className="w-3/4 px-4 py-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors border-2 border-blue-500 rounded-lg"
              >
                Sign In
              </button>
              <button
                onClick={() => { setShowSignUp(true); setIsMenuOpen(false); }}
                className="w-3/4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {showSignIn && (
        <AuthModal isSignUp={false} onClose={closeModals} onSubmit={handleSubmit} />
      )}
      {showSignUp && (
        <AuthModal isSignUp={true} onClose={closeModals} onSubmit={handleSubmit} />
      )}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Responsive Typography for Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Transform Your Future with Learning
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join millions of students worldwide in our comprehensive learning ecosystem. Master new skills, advance your career, and unlock your potential with expert-led courses and cutting-edge technology.
          </p>
          
          {/* Responsive Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => setShowSignUp(true)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.03] transition-all duration-200 shadow-2xl flex items-center animate-fade-up w-full sm:w-auto justify-center"
              aria-label="Start Learning Today"
            >
              Start Learning Today <ChevronRight className="ml-2 w-5 h-5" />
              <span className="ml-3 w-2 h-2 rounded-full bg-white/30 animate-pulse-strong" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all flex items-center w-full sm:w-auto justify-center">
              <Play className="mr-2 w-5 h-5" /> Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Why Choose EduPlatform?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of online learning with our innovative features and comprehensive educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Instructors</h3>
              <p className="text-gray-600 leading-relaxed">Learn from industry professionals and world-class educators with years of real-world experience.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] duration-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Learning</h3>
              <p className="text-gray-600 leading-relaxed">Access your courses anywhere, anytime with our responsive platform and mobile apps.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] duration-200">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Certificates & Badges</h3>
              <p className="text-gray-600 leading-relaxed">Earn recognized certifications and showcase your achievements to advance your career.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] duration-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Schedule</h3>
              <p className="text-gray-600 leading-relaxed">Learn at your own pace with lifetime access to course materials and resources.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] duration-200">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Global Community</h3>
              <p className="text-gray-600 leading-relaxed">Connect with learners worldwide, participate in discussions, and build your network.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-all hover:scale-[1.02] duration-200">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">Get help whenever you need it with our dedicated support team and extensive knowledge base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Most Popular Courses
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our top-rated courses designed to help you master in-demand skills and advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Web Development Bootcamp",
                instructor: "Sarah Johnson",
                students: "45,230",
                rating: "4.9",
                duration: "40 hours",
                price: "$89",
                image: "bg-gradient-to-br from-blue-400 to-blue-600",
                skills: ["HTML/CSS", "JavaScript", "React", "Node.js"]
              },
              {
                title: "Data Science & Machine Learning",
                instructor: "Dr. Michael Chen",
                students: "38,420",
                rating: "4.8",
                duration: "60 hours",
                price: "$129",
                image: "bg-gradient-to-br from-purple-400 to-purple-600",
                skills: ["Python", "Pandas", "TensorFlow", "Statistics"]
              },
              {
                title: "Digital Marketing Mastery",
                instructor: "Emma Rodriguez",
                students: "52,100",
                rating: "4.9",
                duration: "35 hours",
                price: "$79",
                image: "bg-gradient-to-br from-pink-400 to-pink-600",
                skills: ["SEO", "Social Media", "Analytics", "PPC"]
              },
              {
                title: "UI/UX Design Fundamentals",
                instructor: "Alex Thompson",
                students: "29,850",
                rating: "4.7",
                duration: "45 hours",
                price: "$99",
                image: "bg-gradient-to-br from-green-400 to-green-600",
                skills: ["Figma", "Prototyping", "User Research", "Design Systems"]
              },
              {
                title: "Cloud Computing with AWS",
                instructor: "David Park",
                students: "31,200",
                rating: "4.8",
                duration: "50 hours",
                price: "$149",
                image: "bg-gradient-to-br from-orange-400 to-orange-600",
                skills: ["AWS", "Docker", "Kubernetes", "DevOps"]
              },
              {
                title: "Mobile App Development",
                instructor: "Lisa Wang",
                students: "26,730",
                rating: "4.6",
                duration: "55 hours",
                price: "$119",
                image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
                skills: ["React Native", "Flutter", "iOS", "Android"]
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform-gpu hover:scale-[1.03] duration-300 overflow-hidden">
                <div className={`h-48 ${course.image} relative group overflow-hidden`}>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-bold text-gray-800">{course.price}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">By {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">{course.students} students</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{course.duration}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-[1.02]">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Learn from the Best
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our world-class instructors bring years of industry experience and passion for teaching to every course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Senior Full-Stack Developer", company: "Google", courses: "12 courses", students: "85K+" },
              { name: "Dr. Michael Chen", role: "AI Research Scientist", company: "Stanford AI Lab", courses: "8 courses", students: "62K+" },
              { name: "Emma Rodriguez", role: "Marketing Director", company: "HubSpot", courses: "15 courses", students: "120K+" },
              { name: "Alex Thompson", role: "Lead UX Designer", company: "Apple", courses: "10 courses", students: "75K+" }
            ].map((instructor, index) => (
              <div key={index} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 transform-gpu group-hover:scale-[1.04] transition-transform duration-300"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                <p className="text-gray-600 mb-1">{instructor.role}</p>
                <p className="text-sm text-blue-600 mb-2">{instructor.company}</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>{instructor.courses}</span>
                  <span>•</span>
                  <span>{instructor.students} students</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to fit your learning goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              {
                name: "Basic",
                price: "$29",
                period: "/month",
                features: ["Access to 100+ courses", "Mobile & web access", "Basic support", "Course completion certificates"],
                highlight: false
              },
              {
                name: "Premium",
                price: "$59",
                period: "/month",
                features: ["Access to ALL courses", "Offline downloads", "Priority support", "Advanced certificates", "1-on-1 mentoring", "Career services"],
                highlight: true
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "/month",
                features: ["Everything in Premium", "Team management", "Custom learning paths", "Analytics dashboard", "API access", "Dedicated success manager"],
                highlight: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`${plan.highlight ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white transform md:scale-[1.08] glow' : 'bg-white text-gray-800'} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02]'`}
              >
                 <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                 <div className="mb-6">
                   <span className="text-4xl font-bold">{plan.price}</span>
                   <span className={`text-lg ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>{plan.period}</span>
                 </div>
                 <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 ${plan.highlight ? 'text-blue-200' : 'text-green-500'} mr-3`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-transform duration-200 hover:scale-[1.02] ${plan.highlight ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Have questions? We're here to help you on your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">support@eduplatform.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Website</h4>
                    <p className="text-gray-600">www.eduplatform.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Headphones className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Support Hours</h4>
                    <p className="text-gray-600">24/7 Customer Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" name="name" id="name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Enter your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" id="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Enter your email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
            <div className="text-center md:text-left">
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                EduPlatform
              </span>
            </div>
            
            {/* Responsive Footer Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-white text-sm">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a>
              <a href="#instructors" className="hover:text-blue-400 transition-colors">Instructors</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © 2025 EduPlatform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}