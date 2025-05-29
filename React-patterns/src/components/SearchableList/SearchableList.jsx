import { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const keyFn = itemKeyFn ?? ((_, index) => index); // fallback if not passed

  return (
    <div className="searchable-list space-y-3">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border rounded shadow-sm"
      />
      {searchResults.length > 0 ? (
        <ul className="list-disc list-inside">
          {searchResults.map((item, index) => (
            <li key={keyFn(item, index)}>{children(item)}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No results found.</p>
      )}
    </div>
  );
}
