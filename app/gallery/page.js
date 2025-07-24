const GalleryPage = () => {
  const galleryCategories = [
    {
      title: "Conference Sessions",
      description: "Highlights from our keynotes and technical presentations",
      imageCount: "50+ Photos"
    },
    {
      title: "Workshops & Villages",
      description: "Hands-on learning moments from our interactive sessions",
      imageCount: "75+ Photos"
    },
    {
      title: "Networking & Community",
      description: "Building connections and fostering relationships",
      imageCount: "40+ Photos"
    },
    {
      title: "Behind the Scenes",
      description: "Organizing team and volunteer moments",
      imageCount: "30+ Photos"
    }
  ];

  const previousYears = [
    { year: "2024", theme: "Securing Tomorrow", participants: "2,500+" },
    { year: "2023", theme: "Cyber Resilience", participants: "2,000+" },
    { year: "2022", theme: "Digital Defense", participants: "1,800+" },
    { year: "2021", theme: "Virtual Security", participants: "3,000+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Gallery</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Relive the memories from previous Seasides conferences and get a glimpse of what awaits you in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {galleryCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-3">{category.description}</p>
              <div className="text-blue-600 font-semibold text-sm">{category.imageCount}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Previous Editions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previousYears.map((year, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:border-blue-300 transition-colors cursor-pointer">
                <div className="text-3xl font-bold text-blue-600 mb-2">{year.year}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{year.theme}</div>
                <div className="text-gray-600">{year.participants} Participants</div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  View Photos
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nostalgia - Seasides Through the Years</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🎤</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Memorable Talks</h4>
              <p className="text-gray-600">Industry experts sharing cutting-edge research and insights</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Community Building</h4>
              <p className="text-gray-600">Fostering connections that last beyond the conference</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🎉</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Celebration</h4>
              <p className="text-gray-600">Creating unforgettable moments and lifelong memories</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Share Your Moments</h2>
          <p className="text-gray-600 mb-6">
            Help us build the Seasides 2026 gallery by sharing your photos and experiences using our official hashtag.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              #Seasides2026
            </button>
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Submit Photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
