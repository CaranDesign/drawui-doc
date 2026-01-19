'use client'

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { componentRegistry } from './DocsComponentsRegistry';

interface ContentBlock {
  type: 'text' | 'heading' | 'code' | 'component';
  value?: string;
  level?: number;
  language?: string;
  componentId?: string;
}

interface DocsComponentsRendererProps {
  content: ContentBlock[];
}

export const DocsComponentsRenderer: React.FC<DocsComponentsRendererProps> = ({ content }) => {
  return (
    <div className="documentation-content space-y-4">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <p key={index}>{block.value}</p>;

          case 'heading':
            const HeadingTag = `h${block.level || 2}` as keyof React.JSX.IntrinsicElements;
            return <HeadingTag key={index}>{block.value}</HeadingTag>;

          case 'code':
            return (
              <SyntaxHighlighter
                key={index}
                language={block.language || 'javascript'}
              >
                {block.value || ''}
              </SyntaxHighlighter>
            );

          case 'component':
            console.log('Looking for component:', block.componentId);

            if (block.componentId) {
              const Component = componentRegistry[block.componentId];
              return Component ? <Component key={index} /> : <div key={index} className="text-red-500">Component not found</div>;
            }
            return <div key={index} className="text-red-500">Component not found</div>;

          default:
            return null;
        }
      })}
    </div>
  );
};
