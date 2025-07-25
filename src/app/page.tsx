import Navbar from '@/components/navbar';
import CommentsSection from '@/components/comments-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Riley Brown</h1>
            <p className="text-xl text-gray-600 mb-1">AI Educator & VibeCode Co-Founder</p>
            <p className="text-gray-500">San Francisco Bay Area</p>
          </header>

          <section className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              AI education creator and entrepreneur passionate about making artificial intelligence 
              accessible to everyone. Currently obsessed with vibe coded agentic applications and 
              the future of AI-powered development.
            </p>
          </section>

          <section className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-900">
                <strong>Recent focus:</strong> Launched VibeCode beta - an AI-powered mobile app 
                builder that creates apps from simple text prompts, like Canva for app development.
              </p>
            </div>
          </section>

          <footer className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic">Building the future where anyone can create with AI</p>
          </footer>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <CommentsSection />
        </div>
      </main>
    </div>
  );
}