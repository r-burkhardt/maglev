import classes from './MLTabs.module.scss';
import { CSSProperties, useEffect } from 'react';


interface MLTabsProps {
  tabs: Record<string, any>[]|string[];
  children?: any;
  nameKey?: string;
  valueKey?: string;
  selected?: string;
  selectedIndex?: number;
  id?: string;
  panelGroup?: string;
  index?: number;
  onTabChange?: Function;
}

export function MLTabs(props: MLTabsProps) {
  let tabs: Record<string, any>[];
  if (typeof props.tabs[0] === 'string') {
    tabs = props.tabs.map((tab) => {
      return {name: tab, value: stringToSlug(tab as string)};
    });
  } else {
    tabs = props.tabs as Record<string, any>[];
  }
  const nameKey = props.nameKey || 'name';
  const valueKey = props.valueKey || 'value';
  let selected = props.selected || tabs[0][valueKey];
  let tabContainer: HTMLElement;
  let containerLeft = 0;
  let sliderGhostWidth = 0;
  let sliderGhostPosition = 0;
  const tabVars = {
    '--width--tab-slider': 0,
    '--width--tab-ghost-slider': 0,
    '--translate-x--tab-slider': 0,
    '--translate-x--tab-ghost-slider': 0};

  function setContainerLeft() {
    containerLeft = tabContainer.offsetLeft || 0;
  }

  function setSlider(width: number, transX: number) {
    tabContainer.style
        .setProperty('--width--tab-slider', `${width}px`);
    tabContainer.style
        .setProperty('--translate-x--tab-slider', `${transX}px`);
  }

  function setGhostSlider(width: number, transX: number) {
    sliderGhostWidth = width;
    sliderGhostPosition = transX;
    tabContainer.style
        .setProperty('--width--tab-ghost-slider', `${width}px`);
    tabContainer.style
        .setProperty('--translate-x--tab-ghost-slider', `${transX}px`);
  }

  useEffect(() => {
    tabContainer = document.getElementById(props.id || 'ml-tabs')!;
    setContainerLeft();
    const firstButton = tabContainer.querySelector(`#${selected}`);
    sliderGhostWidth = firstButton!.scrollWidth;
    sliderGhostPosition =
        ((firstButton as HTMLElement)!.offsetLeft - containerLeft) || 0;
    setSlider(sliderGhostWidth, sliderGhostPosition);
    setGhostSlider(sliderGhostWidth, sliderGhostPosition);
  }, []);

  function tabClickAction(evt: Event) {
    selected = (evt.target as HTMLElement).id;
    const buttonWidth = (evt?.target as HTMLElement)?.clientWidth || 0;
    const transX =
        ((evt?.target as HTMLElement)?.offsetLeft - containerLeft) || 0;
    setSlider(buttonWidth, transX);
    setGhostSlider(buttonWidth, transX);
    if (props.onTabChange) {
    //   console.log('func');
      const index = tabs.findIndex((tab) => tab[valueKey] === selected);
      console.log(index);
      // props.onTabChange(index, props.panelGroup);
    }
  }

  function tabHoverAction(evt: Event) {
    const buttonWidth = (evt?.target as HTMLElement)?.clientWidth || 0;
    const transX =
        ((evt?.target as HTMLElement)?.offsetLeft - containerLeft) || 0;
    setSlider(buttonWidth, transX);
  }

  function tabHoverFocusReset() {
    setSlider(sliderGhostWidth, sliderGhostPosition);
  }

  function stringToSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0; i < from.length; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

  return (
    <div className={classes.MLTabs} id={props.id || 'ml-tabs'}
      style={tabVars as CSSProperties}>
      <div className={classes.MLTabs_tabWrapper}
        onMouseOut={tabHoverFocusReset}
        onBlur={tabHoverFocusReset}>
        {tabs.map((tab: any, i: number) => {
          return (
            <TabButton key={i} tabClick={tabClickAction}
              tabHover={tabHoverAction}
              buttonValue={tab[valueKey]}>
              {tab[nameKey]}</TabButton>
          );
        })}
      </div>
      <div className={classes.MLTabs_silderRail}>
        <div className={classes.MLTabs_ghostSlider}></div>
        <div className={classes.MLTabs_slider}></div>
      </div>
    </div>
  );
}

function TabButton(props: Record<string, any>) {
  return (
    <button className={classes.MLTabButton} id={props.buttonValue}
      onClick={props.tabClick}
      onFocus={props.tabHover}
      onMouseOver={props.tabHover}
      onMouseOut={props.tabMouseOut}>
      <div>{props.children}</div>
    </button>
  );
}
