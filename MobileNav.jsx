/* Mobile bottom navigation with icons */
const MobileNav = () => {
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Wallet', icon: 'M3 3h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm6 14h6m-3-3v6' },
    { name: 'Orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Profile', icon: 'M12 2a5 5 0 00-5 5v2a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5zm0 16a7 7 0 01-7-7h14a7 7 0 01-7 7z' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#064e03] flex justify-around py-2 md:hidden z-10">
      {navItems.map((item) => (
        <div
          key={item.name}
          role="button"
          tabIndex={0}
          aria-label={`Navigate to ${item.name}`}
          className="flex flex-col items-center p-2 border-2 border-[#064e03] rounded-full"
          onClick={() => alert(`${item.name} clicked`)}
          onKeyDown={(e) => e.key === 'Enter' && alert(`${item.name} clicked`)}
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
              d={item.icon}
            />
          </svg>
          <span className="text-xs text-[#064e03]">{item.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default MobileNav;