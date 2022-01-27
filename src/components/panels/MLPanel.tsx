import './MLPanel.scss';

export function MLPanel(props: Record<string, any>) {
  return <div className="ml-panel ml-panel__hidden">{props.children}</div>;
}
