import Link from "next/link";

const navLinks = [
  { path: "/", label: "Blog", id: 1 },
  { path: "/about", label: "About", id: 2 },
  { path: "/projects", label: "Projekty", id: 3 }
];

const Home = ({ children }) => {
  return (
    <div className="p-10 font-mono max-w-screen-xl mx-auto">
      <nav className="bg-blue-400 p-5 flex justify-center">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <span className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50 cursor-pointer">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
      <main className="bg-gray-100 p-5">{children}</main>
      <footer className="bg-blue-400 p-5 text-gray-100 text-center">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Home;
