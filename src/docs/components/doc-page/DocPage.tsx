import {Link} from 'react-router-dom';

import classes from './DocPage.module.scss';


export function DocPage(props: Record<string, any>) {
  return (
      <section className={classes.DocPage}>
        <Link to={'/'} className={classes.DocPage_backLink}>
          return to index</Link>
        <h2 className={classes.DocPage_docName}>{props.pageContent.name}</h2>
        <p className={classes.DocPage_docSummary}>
          {props.pageContent.summary}</p>
        <h3 className={classes.DocPage_docDetailHead}>Details</h3>
        <p className={classes.DocPage_docDetails}>
          {props.pageContent.details}</p>
        <h3 className={classes.DocPage_demoHead}>DEMO</h3>
        {props.children}
      </section>
  );
}
