import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSubmit = () => {
    if (code.trim() && selectedLanguage) {
      console.log("Code entered:", code);
      console.log("Language selected:", selectedLanguage);
      alert(`Code submitted for ${selectedLanguage}!`);
    }
  };

  const languages = [
    { value: "javascript", label: "JavaScript", icon: "🟨" },
    { value: "typescript", label: "TypeScript", icon: "🔷" },
    { value: "python", label: "Python", icon: "🐍" },
    { value: "java", label: "Java", icon: "☕" },
    { value: "csharp", label: "C#", icon: "🔵" },
    { value: "cpp", label: "C++", icon: "⚡" },
    { value: "c", label: "C", icon: "🔧" },
    { value: "php", label: "PHP", icon: "🟣" },
    { value: "ruby", label: "Ruby", icon: "💎" },
    { value: "go", label: "Go", icon: "🐹" },
    { value: "rust", label: "Rust", icon: "🦀" },
    { value: "swift", label: "Swift", icon: "🍎" },
    { value: "kotlin", label: "Kotlin", icon: "🎯" },
    { value: "scala", label: "Scala", icon: "🔺" },
    { value: "html", label: "HTML", icon: "🌐" },
    { value: "css", label: "CSS", icon: "🎨" },
    { value: "json", label: "JSON", icon: "📋" },
    { value: "xml", label: "XML", icon: "📄" },
    { value: "yaml", label: "YAML", icon: "⚙️" },
    { value: "markdown", label: "Markdown", icon: "📝" },
    { value: "sql", label: "SQL", icon: "🗃️" },
    { value: "shell", label: "Shell/Bash", icon: "💻" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Card */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 w-full max-w-2xl transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mx-auto mb-8 w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Code Playground
          </h1>
          <p className="text-gray-600 text-xl font-medium">
            Enter your code and choose your language
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-8">
          {/* Code Input */}
          <div className="relative group">
            <label className="block text-gray-700 text-lg font-semibold mb-4">
              Your Code
            </label>
            <div className="relative">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Type your code here..."
                className={`w-full px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 text-xl font-mono tracking-wide transition-all duration-300 focus:outline-none ${
                  isFocused
                    ? "border-blue-500 bg-white shadow-xl shadow-blue-500/20 scale-105"
                    : "border-gray-300 hover:border-blue-400 hover:shadow-lg"
                }`}
                autoComplete="off"
              />
              {isFocused && (
                <div className="absolute inset-0 -m-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-lg -z-10 animate-pulse"></div>
              )}
            </div>
          </div>

          {/* Language Selection */}
          <div className="relative group">
            <label className="block text-gray-700 text-lg font-semibold mb-4">
              Programming Language
            </label>
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-8 py-6 bg-gradient-to-r from-gray-50 to-purple-50/50 border-2 border-gray-300 rounded-2xl text-gray-800 text-xl font-medium focus:outline-none focus:border-purple-500 focus:bg-white focus:shadow-xl focus:shadow-purple-500/20 focus:scale-105 hover:border-purple-400 hover:shadow-lg transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="py-2">
                  Select your language...
                </option>
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value} className="py-3">
                    {lang.icon} {lang.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Selected Language Display */}
          {selectedLanguage && (
            <div className="flex items-center justify-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 animate-fade-in">
              <span className="text-2xl mr-3">
                {
                  languages.find((lang) => lang.value === selectedLanguage)
                    ?.icon
                }
              </span>
              <span className="text-green-700 font-semibold text-lg">
                Ready to code in{" "}
                {
                  languages.find((lang) => lang.value === selectedLanguage)
                    ?.label
                }
                !
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!code.trim() || !selectedLanguage}
            className={`w-full py-6 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform ${
              code.trim() && selectedLanguage
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
                : "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 cursor-not-allowed"
            }`}
          >
            {code.trim() && selectedLanguage ? (
              <span className="flex items-center justify-center">
                🚀 Launch Code Editor
                <svg
                  className="w-7 h-7 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            ) : (
              <span className="flex items-center justify-center">
                ⏳ Complete both fields to continue
              </span>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Secure
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
                  clipRule="evenodd"
                />
              </svg>
              Encrypted
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Fast
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
