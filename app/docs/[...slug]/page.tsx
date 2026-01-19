// docs/[...slug]/page.tsx
import React from 'react';
import docs from '../../content/docs/docs.json';
import { componentRegistry } from '@/app/components/docs/DocsComponentsRegistry';
import { DocsComponentsRenderer } from '@/app/components/docs/DocsRenderer';

interface Props {
  params: Promise<{ slug?: string[] }>; 
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params; 
  
  const slugArray = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug
    : resolvedParams.slug
    ? [resolvedParams.slug]
    : [];

  const currentSlug = '/docs/' + slugArray.join('/');

  const section = docs.sections
    .flatMap(cat => cat.items)
    .find(item => item.path === currentSlug);

  if (!section) {
    return <p>Page not found: {currentSlug}</p>;
  }

  const contentWithComponents = section.content.map((block) => {
    if (block.type === 'component' && block.componentId) {
      const Comp = componentRegistry[block.componentId];
      if (!Comp) {
        return { ...block, value: `Component "${block.componentId}" not found` };
      }
      return { ...block, Component: Comp };
    }
    return block;
  });

  return (
    <article className="prose mx-auto py-8">
      <h1 className="font-bold text-2xl mb-4">{section.title}</h1>
      <DocsComponentsRenderer content={contentWithComponents} />
    </article>
  );
}
