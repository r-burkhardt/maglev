import {MLButton} from '../../../components/button/MLButton';
import {DocPage} from '../../components/doc-page/DocPage';
import {DocsContent} from '../../docs-content';
import classes from './ButtonsDemo.module.scss';

export function ButtonsDemo() {
  function buttonAction(evt: any) {
    const target = evt.currentTarget as HTMLButtonElement;
    console.log(target.id, 'button clicked');
  }

  const variations = [
    {label: 'Filled (Default)', style: 'filled'},
    {label: 'Hairline', style: 'hairline'},
    {label: 'Tonal', style: 'tonal'},
    {label: 'Protected', style: 'protected'},
    {label: 'Text', style: 'text'},
    {label: 'Icon', style: 'icon'},
  ];

  return (
    <DocPage pageContent={DocsContent['buttons']}>
      <div className={classes.ButtonsDemo}>
        {variations.map((v) => (
          <div key={v.style} className={classes.ButtonsDemo_group}>
            <h4>{v.label}</h4>
            <div className={classes.ButtonsDemo_row}>
              <div className={classes.ButtonsDemo_item}>
                <span>Default</span>
                <MLButton buttonStyle={v.style} clickAction={buttonAction}>
                  {v.style === 'icon' ? (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  ) : 'Click Me'}
                </MLButton>
              </div>
              <div className={classes.ButtonsDemo_item}>
                <span>Disabled</span>
                <MLButton buttonStyle={v.style} disabled={true}>
                  {v.style === 'icon' ? (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  ) : 'Disabled'}
                </MLButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DocPage>
  );
}
