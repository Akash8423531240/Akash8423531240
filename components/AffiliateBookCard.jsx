toimport React from 'react';
import { trackClick } from '../utils/trackClick';

const AffiliateBookCard = ({ book }) => {
  const handleBuyClick = () => {
    trackClick(book._id, book.affiliateLink);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg relative">
      <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Affiliate</span>
      <img src={book.imageUrl} alt={book.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{book.name}</h3>
      <p className="text-gray-600">by {book.author}</p>
      <p className="text-green-600 font-bold mt-1">₹{book.price}</p>
      <a
        href={book.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBuyClick}
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buy on {book.platform}
      </a>
    </div>
  );
};

export default AffiliateBookCard;
