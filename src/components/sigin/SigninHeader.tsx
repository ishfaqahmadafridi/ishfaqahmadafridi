export default function SigninHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-block p-4 bg-gradient-to-br from-rose-500 via-rose-600 to-purple-600 rounded-2xl mb-4 shadow-xl animate-bounce-slow">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 via-rose-700 to-purple-900 bg-clip-text text-transparent uppercase tracking-tighter mb-2">Sign In</h2>
      <p className="text-sm text-gray-600 font-medium">Welcome back to AI Coolection</p>
    </div>
  );
}
