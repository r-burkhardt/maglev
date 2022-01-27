import {DocPage} from '../../components/doc-page/DocPage';
import {DocsContent} from '../../docs-content';
import {ThemeColorsDemo} from './color-demo.constants';
import {ColorDemoBlock} from './ColorDemoBlock';
import './ColorsDemo.scss';
import {DocControlBlock} from '../../components/doc-control-block/DocControlBlock';


export function ColorsDemo(props: Record<string, any>) {
  const colorGroups = Object.keys(ThemeColorsDemo);

  return (
    <DocPage pageContent={DocsContent['colors']}>
      <DocControlBlock>
      </DocControlBlock>
      <div className="DocPage_demoBox">
        {colorGroups.map((group, i) => {
          return (
            <div key={i} className="colors_demo">
              <h4>{`${group.charAt(0).toUpperCase()}${group.substring(1)}`}
              </h4>
              <div className="colors-demo__groups">
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
