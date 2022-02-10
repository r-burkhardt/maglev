import { useEffect } from 'react';
import './MLPanelGroup.scss';


export function MLPanelGroup(props: Record<string, any>) {
  let panelGroup: HTMLElement;
  let panels: Element[];
  let currentPanel = 0;

  useEffect(() => {
    panelGroup = document.getElementById(props.id)!;
    panels = Array.from(panelGroup.querySelectorAll('.ml-panel'));
    currentPanel = props.index;
    activatePanel(props.index);
  }, []);

  function activatePanel(index: number) {
    console.log(currentPanel, index);
    panels[currentPanel].classList.add('ml-panel__hidden');
    panels[index].classList.remove('ml-panel__hidden');
    currentPanel = index;
    console.log();
  }

  return <div className="ml-panel-group" id={props.id}>{props.children}</div>;
}
