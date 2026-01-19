'use client'

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { componentRegistry } from './DocsComponentsRegistry';

// Estrai le chiavi valide dal registry
type ComponentId = keyof typeof componentRegistry;

interface ContentBlock {
  type: 'text' | 'heading' | 'code' | 'component';
  value?: string;
  level?: number;
  language?: string;
  componentId?: ComponentId;
}

interface DocsComponentsRendererProps {
  content: ContentBlock[];
}

export const DocsComponentsRenderer: React.FC<DocsComponentsRendererProps> = ({ content }) => {
  const isValidComponentId = (id: string | undefined): id is ComponentId => {
    return id !== undefined && id in componentRegistry;
  };

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
            if (isValidComponentId(block.componentId)) {
              const Component = componentRegistry[block.componentId];
              return <Component key={index} />;
            }
            return <div key={index} className="text-red-500">Component not found: {block.componentId}</div>;

          default:
            return null;
        }
      })}
    </div>
  );
};