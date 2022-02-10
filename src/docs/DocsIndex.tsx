import React from 'react';
import {Link} from 'react-router-dom';

import {DocsContent} from './docs-content';
import './DocsIndex.scss';


export function DocsIndex() {
  const contentKeys = Object.keys(DocsContent);

  return (
    <section className="docs-index">
      <h3 className="docs-index__header">
          Maglev Library, a custom ReactJS library.</h3>
      <p className="docs-index__summary">
          This is a library of components, providers, and styles .</p>
      <div className="docs-index__category">
        <div>
          <h4>Appearance</h4>
          {contentKeys.map((key, i) => {
            const content = DocsContent[key as keyof typeof DocsContent];
            if (content.type === 'appearance') {
              return (
                <Link key={i} to={content.demo_path}>{content.name}</Link>
              );
            }
          })}
        </div>
        <div>
          <h4>Components</h4>
          {contentKeys.map((key, i) => {
            const content = DocsContent[key as keyof typeof DocsContent];
            if (content.type === 'component') {
              return (
                <Link key={i} to={content.demo_path}>{content.name}</Link>
              );
            }
          })}
        </div>
        <div>
          <h4>Providers</h4>
          {contentKeys.map((key, i) => {
            const content = DocsContent[key as keyof typeof DocsContent];
            if (content.type === 'provider') {
              return (
                <Link key={i} to={content.demo_path}>{content.name}</Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
