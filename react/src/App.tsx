import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (code.trim()) {
      console.log("Code entered:", code);
      alert("Code submitted!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-10 w-full max-w-lg transform transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Enter Code</h1>
          <p className="text-gray-600 text-lg">
            Please provide your access code
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter your code"
              className={`w-full px-6 py-5 bg-gray-50 border-2 rounded-2xl text-gray-800 placeholder-gray-500 text-center text-xl font-medium tracking-wider transition-all duration-300 focus:outline-none ${
                isFocused
                  ? "border-blue-500 bg-white shadow-lg shadow-blue-500/20"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              autoComplete="off"
            />
            {isFocused && (
              <div className="absolute inset-0 -m-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-sm -z-10"></div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!code.trim()}
            className={`w-full py-5 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
              code.trim()
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 active:scale-95"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {code.trim() ? (
              <span className="flex items-center justify-center">
                Submit Code
                <svg
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            ) : (
              "Enter a code to continue"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Secure • Encrypted • Protected
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
