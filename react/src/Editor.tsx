import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [theme, setTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(14);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [editorValue, setEditorValue] = useState(`// Welcome to JavaScript! 🚀
console.log("Hello, World!");

function greet(name) {
  return \`Hello, \${name}! Welcome to coding.\`;
}

// Try editing this code
const message = greet("Developer");
console.log(message);

// Example: Working with arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Example: Async function
async function fetchData() {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, data: "Hello from API!" };
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData().then(result => console.log(result));`);

  const editorRef = useRef(null);

  // Add timeout fallback in case Monaco doesn't load
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn("Monaco Editor taking too long to load, showing fallback");
        setHasError(true);
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const themes = [
    { value: "vs-dark", label: "Dark", icon: "🌙" },
    { value: "light", label: "Light", icon: "☀️" },
    { value: "hc-black", label: "High Contrast", icon: "⚫" },
  ];

  function handleEditorDidMount(editor, monaco) {
    console.log("Editor mounted successfully", editor, monaco);
    editorRef.current = editor;
    setIsLoading(false);
    setHasError(false);
  }

  function handleEditorChange(value) {
    setEditorValue(value || "");
  }

  function handleEditorValidation(markers) {
    // Handle validation markers if needed
    console.log("Validation markers:", markers);
  }

  function formatCode() {
    if (editorRef.current) {
      editorRef.current.trigger("keyboard", "editor.action.formatDocument");
    }
  }

  function toggleFullscreen() {
    setIsFullscreen(!isFullscreen);
  }

  function runCode() {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      console.log("Running code:", code);
      // You can add code execution logic here
      alert("Code would be executed! Check the console for the code.");
    }
  }

  function resetCode() {
    const defaultCode = `// Welcome to JavaScript! 🚀
console.log("Hello, World!");

function greet(name) {
  return \`Hello, \${name}! Welcome to coding.\`;
}

// Start coding here...`;

    if (editorRef.current) {
      editorRef.current.setValue(defaultCode);
    }
    setEditorValue(defaultCode);
  }

  // Loading Component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-4 mx-auto"></div>
        <p className="text-white text-lg font-medium">
          Loading JavaScript Editor...
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Please wait while we initialize Monaco Editor
        </p>
      </div>
    </div>
  );

  // Error Component
  const ErrorFallback = () => (
    <div className="flex items-center justify-center h-full bg-gray-900">
      <div className="text-center max-w-md">
        <div className="text-red-500 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h3 className="text-white text-xl font-bold mb-2">
          Editor Failed to Load
        </h3>
        <p className="text-gray-400 mb-6">
          Don't worry! You can still write JavaScript code in the fallback
          editor below.
        </p>
        <textarea
          value={editorValue}
          onChange={(e) => setEditorValue(e.target.value)}
          placeholder="// Start writing your JavaScript code here..."
          className="w-full h-64 bg-gray-800 text-white font-mono text-sm p-4 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
          spellCheck={false}
        />
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Try Reload
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`${
        isFullscreen ? "fixed inset-0 z-50" : ""
      } bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen`}
    >
      {/* Header */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">JS</span>
            </div>
            <span className="text-white font-medium">JavaScript Editor</span>
            {isLoading && (
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="animate-spin w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                <span className="text-xs">Loading...</span>
              </div>
            )}
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme */}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-xs focus:outline-none focus:border-yellow-500"
            >
              {themes.map((themeOption) => (
                <option key={themeOption.value} value={themeOption.value}>
                  {themeOption.label}
                </option>
              ))}
            </select>

            {/* Font Size */}
            <select
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-xs focus:outline-none focus:border-yellow-500"
            >
              <option value={12}>12px</option>
              <option value={14}>14px</option>
              <option value={16}>16px</option>
              <option value={18}>18px</option>
            </select>

            {/* Buttons */}
            {!isLoading && !hasError && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={formatCode}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  title="Format Code"
                >
                  Format
                </button>

                <button
                  onClick={runCode}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  title="Run Code"
                >
                  Run
                </button>

                <button
                  onClick={resetCode}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  title="Reset"
                >
                  Reset
                </button>
              </div>
            )}

            <button
              onClick={toggleFullscreen}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? "Exit" : "Fullscreen"}
            </button>
          </div>
        </div>
      </div>

      {/* Editor Container */}
      <div
        className={`${
          isFullscreen ? "h-[calc(100vh-60px)]" : "h-[calc(100vh-120px)]"
        } relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 pointer-events-none"></div>

        {hasError ? (
          <ErrorFallback />
        ) : (
          <Editor
            height="100%"
            language="javascript"
            theme={theme}
            value={editorValue}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            onValidate={handleEditorValidation}
            loading={<LoadingSpinner />}
            options={{
              fontSize: fontSize,
              fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: "on",
              lineNumbers: "on",
              theme: theme,
            }}
            beforeMount={(monaco) => {
              console.log("Monaco is mounting...", monaco);
            }}
            onError={(error) => {
              console.error("Monaco Editor Error:", error);
              setHasError(true);
              setIsLoading(false);
            }}
          />
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-2">
        <div className="flex items-center justify-between text-gray-300 text-xs">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  hasError
                    ? "bg-red-500"
                    : isLoading
                    ? "bg-yellow-500 animate-pulse"
                    : "bg-green-500"
                }`}
              ></div>
              <span>
                {hasError ? "Error" : isLoading ? "Loading" : "Ready"}
              </span>
            </span>
            <span>🟨 JavaScript</span>
            <span>{fontSize}px</span>
            <span>{editorValue.split("\n").length} lines</span>
          </div>

          <div className="flex items-center space-x-3">
            <span>Monaco Editor</span>
            <span className={hasError ? "text-red-400" : "text-green-400"}>
              {hasError ? "Disconnected" : "Connected"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
