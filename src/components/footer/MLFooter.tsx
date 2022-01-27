import './MLFooter.scss';
import {MLButton} from '../button/MLButton';


export function MLFooter(props: Record<string, any>) {
  return (
    <footer className="ml-footer">
      <div className="ml-footer__top">
        <div className="ml-footer__top-help">
          <MLButton buttonStyle={'hairline'}>Chat Help</MLButton>
          <MLButton buttonStyle={'text'}>FAQ</MLButton>
        </div>
        <div className="ml-footer__top-email">
          <MLButton buttonStyle={'text'}>help@yapli.com</MLButton>
        </div>
        <div className="ml-footer__top-phone">
          <MLButton buttonStyle={'text'}>1 - 888 - 888 - 8888</MLButton>
        </div>
      </div>
      <div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
        <div>column 1</div>
      </div>
      <div>
        <div>
          Copyright {new Date().getFullYear().toString()} Yapli Inc.
        </div>
        <div>Version 0.0.5</div>
      </div>
    </footer>
  );
}
