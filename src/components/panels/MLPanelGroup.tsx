import { useEffect } from 'react';


export function MLPanelGroup(props: Record<string, any>) {
  let panelGroup: HTMLElement;
  let panels: Element[];
  let currentPanel = 0;

  useEffect(() => {
    panelGroup = document.getElementById(props.id)!;
    panels = Array.from(panelGroup.querySelectorAll('.MLPanel'));
    currentPanel = props.index;
    activatePanel(props.index);
    // setInterval(() => {
    //   activatePanel((currentPanel + 1) % panels.length);
    // }, 2500);
  }, []);

  function activatePanel(index: number) {
    console.log(currentPanel, index);
    panels[currentPanel].classList.add('MLPanel_hidden');
    panels[index].classList.remove('MLPanel_hidden');
    currentPanel = index;
    console.log();
  }

  return <div className={'MLPanelGroup'} id={props.id}>{props.children}</div>;
}
