import {MLButton} from '../../../components/button/MLButton';
import {DocPage} from '../../components/doc-page/DocPage';
import {DocsContent} from '../../docs-content';
import './ButtonsDemo.scss';


export function ButtonsDemo(props: Record<string, any>) {
  function buttonAction(evt: Event) {
    // @ts-ignore
    console.log(evt.target?.id, 'button clicked');
  }

  return (
    <DocPage pageContent={DocsContent['buttons']}>
      <div className="buttons-demo">
        <div>
          <h4>Filled(default)</h4>
          <MLButton clickAction={buttonAction}>Filled</MLButton>
        </div>
        <div>
          <h4>Hairline</h4>
          <MLButton buttonStyle={'hairline'}
            clickAction={buttonAction}>
              Hairline</MLButton>
        </div>
        <div>
          <h4>Text</h4>
          <MLButton buttonStyle={'text'} clickAction={buttonAction}>
              Text</MLButton>
        </div>
        <div>
          <h4>Tonal</h4>
          <MLButton buttonStyle={'tonal'} clickAction={buttonAction}>
              Tonal</MLButton>
        </div>
        <div>
          <h4>Protected</h4>
          <MLButton buttonStyle={'protected'}
            clickAction={buttonAction}>
              Protected</MLButton>
        </div>
      </div>
    </DocPage>
  );
}
