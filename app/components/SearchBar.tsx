import { useState } from "react";
import { Link } from "@remix-run/react";

const pages = [
  { path: "/", label: "Home", content: "Welcome to the home page" },
  {
    path: "/about",
    label: "About",
    content: "About us and our company shipping faq",
  },
  {
    path: "/contact",
    label: "Contact",
    content: "Get in touch with us email phone",
  },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filtered = pages.filter(
    (page) =>
      page.label.toLowerCase().includes(query.toLowerCase()) ||
      page.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search pages...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // className='px-3 py-1 rounded border border-white bg-white text-black'
        className='invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20'
      />
      {query && (
        <ul className='absolute left-0 mt-2 w-full bg-white text-black border rounded shadow-sm z-10'>
          {filtered.length > 0 ? (
            filtered.map((page) => (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className='block px-4 py-2 hover:bg-blue-100'
                  onClick={() => setQuery("")}
                >
                  {page.label}
                </Link>
              </li>
            ))
          ) : (
            <li className='px-4 py-2 text-gray-500'>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
