/* Top Products slider with search filter */
import { useEffect, useRef } from 'react';

const TopProducts = ({ searchQuery }) => {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
    name: `Product ${i + 1}`,
    price: (19.99 + i * 5).toFixed(2),
    launchDate: `2025-05-${10 + i}`,
  }));

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <h2 className="text-xl font-bold mb-4">Top Products</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 hover:animation-pause"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="raised-card flex-shrink-0 w-48 p-4 flex flex-col items-center"
          >
            <img src={product.image} alt={product.name} className="w-32 h-32 mb-2" />
            <p className="text-sm font-bold">{product.name}</p>
            <p className="text-sm">${product.price}</p>
            <p className="text-xs text-gray-600">{product.launchDate}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;