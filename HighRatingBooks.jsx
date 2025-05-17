/* High Rating Books grid with star ratings */
const HighRatingBooks = () => {
  const books = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/100?text=High+Rating+${i + 1}`,
    title: `High Rating Book ${i + 1}`,
    rating: (4 + Math.random() * 0.9).toFixed(1),
  }));

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">High Rating Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.id} className="raised-card p-4 flex flex-col items-center">
            <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
            <p className="text-sm text-center">{book.title}</p>
            <p className="text-sm text-yellow-500">★ {book.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighRatingBooks;