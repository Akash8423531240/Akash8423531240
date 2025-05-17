/* PDF Books grid with download alert */
const PdfBooks = () => {
  const books = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/100?text=PDF+Book+${i + 1}`,
    title: `PDF Book ${i + 1}`,
  }));

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">PDF Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            role="button"
            tabIndex={0}
            aria-label={`Download ${book.title}`}
            className="raised-card p-4 flex flex-col items-center"
            onClick={() => alert(`Downloading ${book.title}...`)}
            onKeyDown={(e) => e.key === 'Enter' && alert(`Downloading ${book.title}...`)}
          >
            <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
            <p className="text-sm text-center">{book.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PdfBooks;