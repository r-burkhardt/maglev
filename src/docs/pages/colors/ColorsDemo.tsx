import {DocPage} from '../../components/doc-page/DocPage';
import {DocsContent} from '../../docs-content';
import {ThemeColorsDemo} from './color-demo.constants';
import {ColorDemoBlock} from './ColorDemoBlock';
import classes from './ColorsDemo.module.scss';
import {DocControlBlock} from '../../components/doc-control-block/DocControlBlock';


export function ColorsDemo(props: Record<string, any>) {
  const colorGroups = Object.keys(ThemeColorsDemo);

  const colorGroupLabels: Record<string, string> = {
    background: 'Application Backgrounds',
    text: 'Typography Colors',
    uiComponents: 'UI Component States',
    green: 'Brand Green Palette',
    blue: 'Brand Blue Palette',
    orange: 'Brand Orange Palette',
    grey: 'Grayscale Palette',
    black: 'Blacks',
    white: 'Whites',
    error: 'Error Palette',
    warning: 'Warning Palette',
  };

  return (
    <DocPage pageContent={DocsContent['colors']}>
      <DocControlBlock>
      </DocControlBlock>
      <div className="DocPage_demoBox">
        {colorGroups.map((group, i) => {
          return (
            <div key={i} className={classes.ColorsDemo}>
              <h4>{colorGroupLabels[group] || group}</h4>
              <div className={classes.ColorsDemo_groups}>
                {/* eslint-disable-next-line max-len */}
                {ThemeColorsDemo[group as keyof typeof ThemeColorsDemo].map((color, i) => {
                  return (
                    <ColorDemoBlock key={i} themeColor={color}>
                    </ColorDemoBlock>
                  );
                })}
              </div>
            </div>
          );
        })}

      </div>
    </DocPage>
  );
}
