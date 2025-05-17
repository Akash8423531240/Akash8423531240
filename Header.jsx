/* Header component with logo, brand name, and cart button */
const Header = () => {
  return (
    <header className="bg-white border-b-2 border-[#064e03] py-4 px-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="ShivExa Logo"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-[#CC0000]">ShivExa</h1>
          <p className="text-xs text-gray-600">Global</p>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="View cart"
        className="raised-card p-2 rounded-full"
        onClick={() => alert('Cart clicked')}
        onKeyDown={(e) => e.key === 'Enter' && alert('Cart clicked')}
      >
        <svg
          className="w-6 h-6 text-[#064e03]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;