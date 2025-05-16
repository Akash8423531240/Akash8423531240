import React from 'react';
import DropshipBadge from './DropshipBadge';
import { trackDropshipClick } from '../utils/dropshipTrack';

const DropshipBookCard = ({ book }) => {
  const handleBuyClick = () => {
    trackDropshipClick(book._id, book.externalLink);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg relative">
      <DropshipBadge />
      <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
      <p className="text-gray-600">by {book.author}</p>
      <p className="text-green-600 font-bold mt-1">₹{book.price}</p>
      <p className="text-sm text-gray-500">Delivery: {book.deliveryTime}</p>
      {book.shippingCost && <p className="text-sm text-gray-500">Shipping: ₹{book.shippingCost}</p>}
      <a
        href={book.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBuyClick}
        className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Buy from {book.storeName}
      </a>
    </div>
  );
};

export default DropshipBookCard;