import './MLPanel.module.scss';
// import classNames from 'classnames'

export function MLPanel(props: Record<string, any>) {
  // const panelClasses = {classes.MLPanel_hidden};

  return <div className={'MLPanel MLPanel_hidden'}>{props.children}</div>;
}
