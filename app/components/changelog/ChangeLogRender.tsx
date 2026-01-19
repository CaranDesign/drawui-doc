'use client'

import { useWindowWidthContext } from "@/app/context/ContextScreenSize";
import { DrawuiCard } from "@carandesign/drawui";
import React, { useLayoutEffect, useRef, useState } from "react";

type ChangelogItem = {
  version: string;
  date?: string;
  changes: {
    title: string;
    type: "add" | "change" | "fix" | "remove" | string;
    items: string[];
  }[];
};

interface ChangelogProps {
  changelog: ChangelogItem[];
}


export const ChangelogRenderer: React.FC<ChangelogProps> = ({ changelog }) => {
   const screenWidth = useWindowWidthContext()
   
   const ref = useRef<HTMLUListElement>(null);
   const [mounted, setMounted] = useState(false)

   //needed for rendering correct width after page loading
   useLayoutEffect(() => {
      setMounted(true)
   }, [changelog])
   
   //background color of changes 
   const typeColorMap: Record<string,string> = {
      "add":"#c8ebd4ff",
      "fix":"#e38787ff",
      "edit":"#c0e1deff",
   }

   if (!mounted) return null
   

  return (
    <section className="drawui-changelog p-6 space-y-6">
      {changelog.map((version) => (
         <DrawuiCard key={version.version} width={screenWidth - 50} backgroundColor="transparent" >
           <article
             className="drawui-changelog-version rounded-md p-4"
           >
             <header className="drawui-changelog-header mb-4">
               <h2 className="drawui-changelog-title text-2xl font-bold text-gray-900">
                 Version {version.version}{" "}
                 {version.date && (
                   <time className="drawui-changelog-date text-gray-500 text-sm">
                     ({version.date})
                   </time>
                 )}
               </h2>
             </header>
   
             <div className="drawui-changelog-changes space-y-4">
               {version.changes.map((section, idx) => (
                  <DrawuiCard
                     key={idx}
                      backgroundColor={typeColorMap[section.type]}
                     width={screenWidth - 90}
                  > 
                    <section
                      className={`drawui-changelog-section p-3 rounded-md`}
                    >
                      <h3 className="drawui-changelog-section-title font-semibold text-lg mb-2">
                        {section.title}
                      </h3>
                      <ul  ref={ref} className="drawui-changelog-items list-disc list-inside space-y-1">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="drawui-changelog-item text-gray-700 text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                 </DrawuiCard>
               ))}
             </div>
           </article>
        </DrawuiCard>
      ))}
    </section>
  );
};
