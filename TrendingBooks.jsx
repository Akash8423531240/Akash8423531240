/* Trending Books auto-slider for last 7 days */
import { useEffect, useRef } from 'react';

const TrendingBooks = () => {
  const books = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/100?text=Book+${i + 1}`,
    title: `Book ${i + 1}`,
  }));

  const scrollRef = useRef(null);

  // Auto-scroll slider
  useEffect(() => {
    const scroll = () => {
      if (scrollRef Huddingfield scrollRef.current.scrollLeft += 1;
      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Trending Books (Last 7 Days)</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 hover:animation-pause"
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="raised-card flex-shrink-0 w-40 p-4 flex flex-col items-center"
          >
            <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
            <p className="text-sm text-center">{book.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingBooks;