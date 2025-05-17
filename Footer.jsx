/* Footer with navigation links */
const Footer = () => {
  const links = [
    'About',
    'Privacy',
    'Contact',
    'Career',
    'Seller',
    'Dropshipping',
    'Affiliate',
    'Breaking News Publisher',
    'Newspaper Cutting Publisher',
    'Help',
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm hover:underline"
              onClick={(e) => {
                e.preventDefault();
                alert(`${link} clicked`);
              }}
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-center text-sm mt-4">© 2025 ShivExa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;