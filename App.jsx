/* Main App component orchestrating the layout and hero background cross-fade */
import { useState, useEffect } from 'react';
import Header from './Header';
import BreakingNews from './BreakingNews';
import NewsCuttings from './NewsCuttings';
import TopProducts from './TopProducts';
import TrendingBooks from './TrendingBooks';
import BooksSection from './BooksSection';
import PdfBooks from './PdfBooks';
import GoogleAds from './GoogleAds';
import HighRatingBooks from './HighRatingBooks';
import Notebooks from './Notebooks';
import Footer from './Footer';
import MobileNav from './MobileNav';

const App = () => {
  // Hero background images for cross-fade
  const heroImages = [
    'https://via.placeholder.com/1920x400?text=Hero+1',
    'https://via.placeholder.com/1920x400?text=Hero+2',
    'https://via.placeholder.com/1920x400?text=Hero+3',
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Cross-fade hero background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Hero Background with Cross-Fade */}
      <div className="absolute inset-0 -z-10 h-64 overflow-hidden md:h-80">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Main Layout */}
      <Header />
      <div className="raised-card mx-4 my-2 p-4 flex flex-col sm:flex-row items-center justify-between">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profile-upload"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                document.getElementById('profile-img').src = reader.result;
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <label htmlFor="profile-upload" className="cursor-pointer">
          <img
            id="profile-img"
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </label>
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded px-4 py-2 my-2 sm:my-0 w-full sm:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          role="button"
          tabIndex={0}
          aria-label="Filter products"
          className="p-2"
          onClick={() => alert('Filter clicked')}
          onKeyDown={(e) => e.key === 'Enter' && alert('Filter clicked')}
        >
          <svg
            className="w-6 h-6 text-[#064e03]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1m-17 4h14m-7 4h7m-14 4h14"
            />
          </svg>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8 space-y-8">
        <BreakingNews />
        <NewsCuttings />
        <TopProducts searchQuery={searchQuery} />
        <TrendingBooks />
        <BooksSection />
        <PdfBooks />
        <GoogleAds />
        <HighRatingBooks />
        <Notebooks />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;