import { useState, ChangeEvent } from "react";
import { DrawuiInput, DrawuiIconButton, DrawuiCard } from "@carandesign/drawui";

// Tipi per i JSON
interface SectionItem {
  id: string;
  label: string;
  path: string;
  description?: string;
}

interface ChangelogItem {
  version: string;
  date: string;
  changes: {
    title: string;
    type: string;
    items: string[];
  }[];
}

// Tipi per i risultati unificati
interface ResultItem {
  id: string;
  label: string;
  path: string;
  description?: string;
}

// Importa i tuoi JSON
import documentation from "../content/docs/docs.json";
import changelog from "../content/changelog/changelog.json";

export default function SearchInput() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ResultItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  // Flatten sections
  const sectionItems: ResultItem[] = documentation.sections.flatMap((section: { items: SectionItem[] }) =>
    section.items.map((item: SectionItem) => ({
      id: item.id,
      label: item.label,
      path: item.path,
      description: item.description,
    }))
  );

  // Flatten changelog
  const changelogItems: ResultItem[] = (changelog as ChangelogItem[]).flatMap((entry) =>
    entry.changes.flatMap((change, idx) =>
      change.items.map((i: string) => ({
        id: `${entry.version}-${idx}-${i}`,
        label: i,
        path: `/changelog/`,
        description: change.title,
      }))
    )
  );

  const allItems: ResultItem[] = [...sectionItems, ...changelogItems];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);

    if (!q) {
      setResults([]);
      setOpen(false);
      return;
    }

    const filtered: ResultItem[] = allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q.toLowerCase()) ||
        (item.description?.toLowerCase().includes(q.toLowerCase()) ?? false)
    );

    setResults(filtered); 
    setOpen(true);
  };

  return (
    <div className="relative w-80">
      <div className="flex items-center gap-2">
        <DrawuiInput
          backgroundColor="transparent"
          radius="lg"
          inputSize="md"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {open && results.length > 0 && (
           <div className="fixed mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
               <DrawuiCard backgroundColor="transparent">
               {results.map((item) => (
                  <a
                     key={item.id}
                     href={item.path}
                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100/30 cursor-pointer"
                     onClick={() => setOpen(false)}
                  >
                     <div className="font-medium">{item.label}</div>
                     {item.description && <div className="text-xs text-gray-500">{item.description}</div>}
                  </a>
               ))}
               </DrawuiCard>
           </div>
      )}
    </div>
  );
}
