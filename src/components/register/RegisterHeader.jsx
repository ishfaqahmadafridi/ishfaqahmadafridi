

export default function RegisterHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-block p-4 bg-gradient-to-br from-purple-500 via-purple-600 to-rose-600 rounded-2xl mb-4 shadow-xl animate-bounce-slow">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </div>
      <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 via-purple-700 to-rose-900 bg-clip-text text-transparent uppercase tracking-tighter mb-2">Create Account</h2>
      <p className="text-sm text-gray-600 font-medium">Join the AI Collection Community</p>
    </div>
  );
}
