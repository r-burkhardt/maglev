import {Link} from 'react-router-dom';

import './DocPage.scss';


export function DocPage(props: Record<string, any>) {
  return (
    <section className="doc-page">
      <Link to={'/'} className="doc-page__back-link">
          return to index</Link>
      <h2 className="doc-page__doc-name">{props.pageContent.name}</h2>
      <p className="doc-page__doc-summary">
        {props.pageContent.summary}</p>
      <h3 className="doc-page__doc-detail-head">Details</h3>
      <p className="doc-page__doc-details">
        {props.pageContent.details}</p>
      <h3 className="doc-page__demo-head">DEMO</h3>
      {props.children}
    </section>
  );
}
