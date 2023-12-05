import React from 'react'

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}

export default SignUp