"use client";

export default function CategoriesPage() {
  const categories = [
    { name: "Romance", count: 150, color: "from-pink-500 to-red-500" },
    { name: "Mystery", count: 120, color: "from-purple-500 to-indigo-500" },
    { name: "Science Fiction", count: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Fantasy", count: 110, color: "from-emerald-500 to-teal-500" },
    { name: "Non-Fiction", count: 80, color: "from-orange-500 to-amber-500" },
    { name: "Horror", count: 60, color: "from-gray-500 to-slate-800" },
    { name: "Adventure", count: 95, color: "from-yellow-500 to-orange-500" },
    { name: "Historical", count: 70, color: "from-brown-500 to-amber-800" },
  ];

  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse by Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`relative overflow-hidden rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out
                bg-gradient-to-br ${category.color} 
                hover:scale-105 hover:shadow-lg transform-gpu`}
              onClick={() => console.log(`Navigating to ${category.name} category`)}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-white/80">{category.count} Books</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
