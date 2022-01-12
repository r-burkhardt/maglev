import React from 'react';
import {Link} from 'react-router-dom';

import {DocsContent} from './docs-content';
import classes from './DocsIndex.module.scss';


export function DocsIndex() {
  const contentKeys = Object.keys(DocsContent);

  return (
    <section className={classes.DocsIndex}>
      <h3 className={classes.DocsIndex_header}>
          Maglev Library, a custom ReactJS library.</h3>
      {/* for Yapli sites */}
      <p className={classes.DocsIndex_summary}>
          This is a library of components, providers, and styles .</p>
      <div className={classes.DocsIndex_category}>
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
