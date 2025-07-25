import Navbar from '@/components/navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact</h1>
          <div className="prose prose-lg text-gray-700">
            <p>Contact information coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}