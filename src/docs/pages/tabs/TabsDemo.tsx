// import {MLTabs} from '../../../components/tabs/MLTabs';
import {DocPage} from '../../components/doc-page/DocPage';
import {DocsContent} from '../../docs-content';
import classes from './TabsDemo.module.scss';
import {MLTabs} from '../../../components/tabs/MLTabs';


export function TabsDemo(props: Record<string, any>) {
  const demoTabs = [
      {key: 'Tab One', value: 'tab-one'},
      {key: 'Tab Two', value: 'tab-two'},
      {key: 'Tab Three', value: 'tab-three'},
      {key: 'Tab Four', value: 'tab-four'}
  ];

  return (
      <DocPage pageContent={DocsContent['buttons']}>
        <div className={classes.TabsDemo}>
          <MLTabs tabs={demoTabs}>
            <h2>Hi</h2>
          </MLTabs>
        </div>
      </DocPage>
  );
}
