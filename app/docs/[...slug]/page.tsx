// docs/[...slug]/page.tsx
import React from 'react';
import docs from '../../content/docs/docs.json';
import { componentRegistry } from '@/app/components/docs/DocsComponentsRegistry';
import { DocsComponentsRenderer } from '@/app/components/docs/DocsRenderer';

type ComponentId = keyof typeof componentRegistry;
type BlockType = 'text' | 'heading' | 'code' | 'component';

interface ContentBlock {
  type: BlockType;
  value?: string;
  level?: number;
  language?: string;
  componentId?: ComponentId;
}

interface Props {
  params: Promise<{ slug?: string[] }>;
}

const isValidComponentId = (id: unknown): id is ComponentId => {
  return typeof id === 'string' && id in componentRegistry;
};

const isValidBlockType = (type: unknown): type is BlockType => {
  return type === 'text' || type === 'heading' || type === 'code' || type === 'component';
};

const normalizeContentBlock = (block: unknown): ContentBlock | null => {
  if (!block || typeof block !== 'object') return null;

  const b = block as Record<string, unknown>;

  // Valida il tipo
  if (!isValidBlockType(b.type)) return null;

  const normalized: ContentBlock = {
    type: b.type,
    value: typeof b.value === 'string' ? b.value : undefined,
    language: typeof b.language === 'string' ? b.language : undefined,
    level: typeof b.level === 'number' ? b.level : undefined,
  };

  // Aggiungi componentId solo se valido
  if (isValidComponentId(b.componentId)) {
    normalized.componentId = b.componentId;
  }

  return normalized;
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
    .flatMap(cat => cat.items)
    .find(item => item.path === currentSlug);

  if (!section) {
    return <p>Page not found: {currentSlug}</p>;
  }

  const contentWithComponents: ContentBlock[] = section.content
    .map(normalizeContentBlock)
    .filter((block): block is ContentBlock => block !== null);

  return (
    <article className="prose mx-auto py-8">
      <h1 className="font-bold text-2xl mb-4">{section.title}</h1>
      <DocsComponentsRenderer content={contentWithComponents} />
    </article>
  );
}