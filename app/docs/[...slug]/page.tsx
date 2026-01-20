// docs/[...slug]/page.tsx
import React from 'react';
import docs from '../../content/docs/docs.json';
import { DocsComponentsRenderer } from '@/app/components/docs/DocsRenderer';

type BlockType = 'text' | 'heading' | 'code' | 'component';

interface ContentBlock {
  type: BlockType;
  value?: string;
  level?: number;
  language?: string;
  componentId?: string;
}

interface DocSection {
  title: string;
  path: string;
  content: unknown[];
}

interface Props {
  params: Promise<{ slug?: string[] }>;
}

const isValidBlockType = (type: unknown): type is BlockType => {
  return type === 'text' || type === 'heading' || type === 'code' || type === 'component';
};

const normalizeBlock = (block: unknown): ContentBlock | null => {
  if (!block || typeof block !== 'object') return null;

  const b = block as Record<string, unknown>;

  if (!isValidBlockType(b.type)) return null;

  return {
    type: b.type,
    value: typeof b.value === 'string' ? b.value : undefined,
    level: typeof b.level === 'number' ? b.level : undefined,
    language: typeof b.language === 'string' ? b.language : undefined,
    componentId: typeof b.componentId === 'string' ? b.componentId : undefined,
  };
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;

  const slugArray = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug
    : resolvedParams.slug
    ? [resolvedParams.slug]
    : [];

  const currentSlug = '/docs/' + slugArray.join('/');

  const section = docs.sections
    .flatMap((cat: Record<string, unknown>) => {
      const items = cat.items;
      return Array.isArray(items) ? items : [];
    })
    .find((item: Record<string, unknown>) => item.path === currentSlug) as DocSection | undefined;

  if (!section) {
    return <p>Page not found: {currentSlug}</p>;
  }

  const contentWithComponents: ContentBlock[] = section.content
    .map((block: unknown) => normalizeBlock(block))
    .filter((block: ContentBlock | null): block is ContentBlock => block !== null);

  return (
    <article className="prose mx-auto py-8">
      <h1 className="font-bold text-2xl mb-4">{section.title}</h1>
      <DocsComponentsRenderer content={contentWithComponents} />
    </article>
  );
}