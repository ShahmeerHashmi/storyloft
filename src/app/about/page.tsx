export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-green-500">About StoryLoft</h1>
        
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6 leading-relaxed">
              Welcome to StoryLoft, your premier destination for discovering and enjoying captivating stories from around the world. Our platform is designed to bring readers and stories together in an immersive digital environment.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Our Mission</h2>
            <p className="mb-6 leading-relaxed">
              At StoryLoft, we believe that every story deserves to be told and every voice deserves to be heard. Our mission is to create a vibrant community where readers can explore diverse narratives and connect with stories that resonate with them.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-green-400">What We Offer</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Curated collection of high-quality novels</li>
              <li>User-friendly reading experience</li>
              <li>Personalized recommendations</li>
              <li>Community discussions and reviews</li>
              <li>Regular updates with new content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Join Our Community</h2>
            <p className="mb-6 leading-relaxed">
              Whether you&apos;re an avid reader or just starting your reading journey, StoryLoft is the perfect place for you. Join our growing community of book lovers and embark on countless literary adventures.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-transparent border-2 border-green-500 text-green-500 px-8 py-3 rounded-full font-bold hover:bg-green-500/10 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
