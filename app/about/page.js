// pages/about.js

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do. We believe in innovation, quality, and customer satisfaction. Thank you for visiting our page, and we look forward to serving you.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to deliver high-quality products that bring value to our customers. We strive to exceed expectations and continuously improve our processes.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          <p className="text-gray-600 mt-2">
            Our team consists of talented individuals from diverse backgrounds, all working together to achieve our common goals. We value collaboration, creativity, and integrity.
          </p>
        </div>
      </div>
    </div>
  );
}