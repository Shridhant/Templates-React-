import { useState } from "react";
import { Loader } from "lucide-react";

const Signuptest = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    discipline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful!");
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white p-6 lg:p-12 overflow-hidden">
      {/* Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-violet-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border text-slate-700 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-violet-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border text-slate-700 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-violet-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border text-slate-700 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                required
              />
            </div>

            {/* Discipline Dropdown */}
            <div>
              <label htmlFor="discipline" className="block text-violet-600">
                Discipline
              </label>
              <select
                name="discipline"
                value={formData.discipline}
                onChange={handleChange}
                className="w-full px-3 py-2 border text-slate-700 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                required
              >
                <option value="">Select Discipline</option>
                <option value="Vocal">Vocal</option>
                <option value="Instrumental">Instrumental</option>
                <option value="Theory">Theory</option>
                <option value="Composition">Composition</option>
                <option value="Music Production">Music Production</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full text-white py-2 px-4 rounded-lg ${
                loading ? "bg-violet-600" : "bg-violet-600 hover:bg-violet-700"
              } focus:outline-none`}
              disabled={loading}
            >
              {loading ? (
                <Loader className="animate-spin inline mr-2" />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Visual Section */}
      <div className="hidden lg:flex lg:w-1/2 min-h-[60vh] max-h-[80vh] items-center justify-center bg-gradient-to-br from-[#7FB5C3] to-[#A7D3E0] p-6 lg:p-8 rounded-3xl shadow-xl overflow-hidden">
        <div className="text-white max-w-md mx-auto relative z-10 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Discover the Music World with Us
          </h2>
          <div className="relative w-full h-[250px] mx-auto mb-8">
            <div className="w-full h-full bg-gray-200 rounded-lg"></div>{" "}
            {/* Placeholder for an image or model */}
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

export default Signuptest;
