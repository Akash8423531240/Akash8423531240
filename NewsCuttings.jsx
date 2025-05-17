/* News Cuttings slider with fullscreen overlay on click */
import { useState, useEffect, useRef } from 'react';

const NewsCuttings = () => {
  const cuttings = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    logo: 'https://via.placeholder.com/30',
    image: `https://via.placeholder.com/100?text=Cutting+${i + 1}`,
  }));

  const [selectedCutting, setSelectedCutting] = useState(null);
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
      <h2 className="text-xl font-bold mb-4">News Paper Cuttings</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 hover:animation-pause"
      >
        {cuttings.map((cutting) => (
          <div
            key={cutting.id}
            role="button"
            tabIndex={0}
            aria-label={`View cutting ${cutting.id + 1}`}
            className="raised-card flex-shrink-0 w-48 p-4 flex flex-col items-center"
            onClick={() => setSelectedCutting(cutting)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedCutting(cutting)}
          >
            <img src={cutting.logo} alt="Paper logo" className="w-8 h-8 mb-2" />
            <img src={cutting.image} alt="News cutting" className="w-32 h-32" />
          </div>
        ))}
      </div>
      {selectedCutting && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          role="button"
          tabIndex={0}
          aria-label="Close overlay"
          onClick={() => setSelectedCutting(null)}
          onKeyDown={(e) => e.key === 'Enter' && setSelectedCutting(null)}
        >
          <img
            src={selectedCutting.image}
            alt="Full cutting"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
};

export default NewsCuttings;