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

  const demoTabs2 = ['Monday', 'Wednesday', 'Friday', 'OMG Saturday'];

  return (
      <DocPage pageContent={DocsContent['tabs']}>
        <div className={classes.TabsDemo}>
          <MLTabs tabs={demoTabs} nameKey={'key'}
              valueKey={'value'} id={'tabs-demo-1'}>
            <h2>Hi</h2>
          </MLTabs>
          <MLTabs tabs={demoTabs2} id={'tabs-demo-2'}>
            <h2>Hi</h2>
          </MLTabs>
        </div>
      </DocPage>
  );
}
