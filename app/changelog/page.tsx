import React from 'react';
import changelog from '../content/changelog/changelog.json';
import { ChangelogRenderer } from '../components/changelog/ChangeLogRender';

export default function page() {
  return (
    <div>
      <ChangelogRenderer changelog={changelog} />
    </div>
  )
}
