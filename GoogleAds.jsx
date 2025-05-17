/* Google Ads slider with raised cards */
import { useEffect, useRef } from 'react';

const GoogleAds = () => {
  const ads = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/300x100?text=Ad+${i + 1}`,
  }));

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
      <h2 className="text-xl font-bold mb-4">Sponsored Ads</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 hover:animation-pause"
      >
        {ads.map((ad) => (
          <div key={ad.id} className="raised-card flex-shrink-0 w-80 p-4">
            <img src={ad.image} alt={`Ad ${ad.id + 1}`} className="w-full h-24" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleAds;