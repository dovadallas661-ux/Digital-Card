function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">

        <img
          src="https://avatars.githubusercontent.com/u/228327337?s=400&u=2b1430deed72a8161292e21e5a79f0acdbb93617&v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

        <h1 className="text-2xl font-bold">OBIKODI UCHENNA EMMANUEL</h1>
        <h2 className="text-gray-500 mb-4">Aspiring Web Developer</h2>

          <div className="flex justify-between space-x-4">
            <a href = "https://www.linkedin.com/in/uchenna-emmanuel-81a854332/"  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">linkedin</a>
          
            <a href="https://github.com/yourusername" class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">GitHub</a>


          <a
            href="mailto:dovadallas661@gmail.com"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
           Email
          </a>
                  </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">About Me</h3>
          <p className="text-sm text-gray-600">
            I'm passionate about coding, education, and off-course i like movies. <em>plus Everything that gives money</em>
          </p>
      </div>
      

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-1">Interests</h3>
          <p className="text-sm text-gray-600">i like building modern websites and learning new technologies that solve real problems. </p>
        </div>      


       </div>

      <footer className="mt-6 text-sm text-gray-500">
       <i> © 2025 Uchenna Emmanuel AKA dovadallas </i>
      </footer>
    </div>
  );
}

export default App;
