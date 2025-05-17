/* Breaking News slider with auto-scroll and expandable description */
import { useState, useEffect, useRef } from 'react';

const BreakingNews = () => {
  const newsItems = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    logo: 'https://via.placeholder.com/30',
    headline: `Breaking News ${i + 1}`,
    description: `Description for news item ${i + 1}. Lorem ipsum dolor sit amet.`,
  }));

  const [selectedNews, setSelectedNews] = useState(null);
  const scrollRef = useRef(null);

  // Auto-scroll slider
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Breaking News</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 hover:animation-pause"
        style={{ animation: 'scroll 20s linear infinite' }}
      >
        {newsItems.map((news) => (
          <div
            key={news.id}
            role="button"
            tabIndex={0}
            aria-label={`View ${news.headline}`}
            className="raised-card flex-shrink-0 w-64 p-4 flex items-center space-x-2"
            onClick={() => setSelectedNews(news)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedNews(news)}
          >
            <img src={news.logo} alt="News logo" className="w-8 h-8" />
            <p className="text-sm">{news.headline}</p>
          </div>
        ))}
      </div>
      {selectedNews && (
        <div className="raised-card p-4 mt-4">
          <h3 className="font-bold">{selectedNews.headline}</h3>
          <p>{selectedNews.description}</p>
          <button
            className="text-[#064e03] mt-2"
            onClick={() => setSelectedNews(null)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default BreakingNews;