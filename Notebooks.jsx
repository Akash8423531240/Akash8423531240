/* Notebooks grid with smaller cards */
const Notebooks = () => {
  const notebooks = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/80?text=Notebook+${i + 1}`,
    title: `Notebook ${i + 1}`,
  }));

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Notebooks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {notebooks.map((notebook) => (
          <div key={notebook.id} className="raised-card p-3 flex flex-col items-center">
            <img src={notebook.image} alt={notebook.title} className="w-20 h-28 mb-2" />
            <p className="text-xs text-center">{notebook.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notebooks;