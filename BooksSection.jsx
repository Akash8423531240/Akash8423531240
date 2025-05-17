/* Books Section with categorized grids for Men, Kids, Women, Teens */
const BooksSection = () => {
  const categories = {
    Men: Array.from({ length: 4 }, (_, i) => ({
      id: i,
      image: `https://via.placeholder.com/100?text=Men+Book+${i + 1}`,
      title: `Men's Book ${i + 1}`,
    })),
    Kids: Array.from({ length: 4 }, (_, i) => ({
      id: i,
      image: `https://via.placeholder.com/100?text=Kids+Book+${i + 1}`,
      title: `Kids' Book ${i + 1}`,
    })),
    Women: Array.from({ length: 4 }, (_, i) => ({
      id: i,
      image: `https://via.placeholder.com/100?text=Women+Book+${i + 1}`,
      title: `Women's Book ${i + 1}`,
    })),
    Teens: Array.from({ length: 4 }, (_, i) => ({
      id: i,
      image: `https://via.placeholder.com/100?text=Teens+Book+${i + 1}`,
      title: `Teens' Book ${i + 1}`,
    })),
  };

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-4">Men's Books</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.Men.map((book) => (
              <div key={book.id} className="raised-card p-4 flex flex-col items-center">
                <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
                <p className="text-sm text-center">{book.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Kids' Books</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.Kids.map((book) => (
              <div key={book.id} className="raised-card p-4 flex flex-col items-center">
                <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
                <p className="text-sm text-center">{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-4">Women's Books</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.Women.map((book) => (
              <div key={book.id} className="raised-card p-4 flex flex-col items-center">
                <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
                <p className="text-sm text-center">{book.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Teens' Books</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.Teens.map((book) => (
              <div key={book.id} className="raised-card p-4 flex flex-col items-center">
                <img src={book.image} alt={book.title} className="w-24 h-32 mb-2" />
                <p className="text-sm text-center">{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;