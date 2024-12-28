import { useState } from "react";
import { Eye, EyeOff, Mail, Loader2 } from "lucide-react";
import Spline from "@splinetool/react-spline";

const Test = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Success! You have successfully signed in.");
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white p-6 lg:p-12 overflow-hidden">
      {/* Login Form */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold mb-1 text-gray-900">
            Nagaland Conservatory of Music
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Access the Nagaland Conservatory of Music School Journal Portal
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="relative">
              <input
                type="email"
                placeholder="hello@example.com"
                className="pl-10 py-6 text-black w-full bg-gray-50/50 border-gray-200 focus:border-blue-400 focus:ring-blue-500 transition-all rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail
                className="absolute mr-2 left-3 top-6 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pl-10 py-6 text-black w-full bg-gray-50/50 border-gray-200 focus:border-blue-400 focus:ring-blue-500 transition-all rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-primary border-2 text-black hover:bg-blue-300 transition-all rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                  Please wait
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Visual Section */}
      <div className="hidden lg:flex lg:w-1/2 min-h-[60vh] max-h-[80vh] items-center justify-center bg-gradient-to-br from-[#7FB5C3] to-[#A7D3E0] p-6 lg:p-8 rounded-3xl shadow-xl overflow-hidden">
        <div className="text-white max-w-md mx-auto relative z-10 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Explore the World of Music with Us
          </h2>
          <div className="relative w-full h-[250px] mx-auto mb-8">
            <Spline
              scene="https://prod.spline.design/T4LUNA7R-aP-SM2j/scene.splinecode"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
                Learn
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
                Practice
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium">
                Perform
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
