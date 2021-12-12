import classes from './MLTabs.module.scss';
import {useEffect} from 'react';


export function MLTabs(props: Record<string, any>) {
  const tabs = [
    {name: 'Tab One', value: 'tab-one'},
    {name: 'Tab Two Two', value: 'tab-two'},
    {name: 'Tab Three', value: 'tab-three'},
    {name: 'Tab Four Four Four', value: 'tab-four'}
  ];
  let selected = props.selected || tabs[0].value;
  let tabContainer: HTMLElement;
  let containerLeft = 0;
  // eslint-disable-next-line no-unused-vars
  let sliderGhostWidth = 0;
  // eslint-disable-next-line no-unused-vars
  let sliderGhostPosition = 0;

  function setContainerLeft() {
    containerLeft = document?.getElementById('ml-tabs')?.offsetLeft || 0;
  }

  function setSlider(width: number, transX: number) {
    document.documentElement.style
        .setProperty('--width--tab-slider', `${width}px`);
    document.documentElement.style
        .setProperty('--translate-x--tab-slider', `${transX}px`);
  }

  function getSliderWidth(): number {
    return Number(document.documentElement.style
        .getPropertyValue('--width--tab-slider')
        .substring(0, length - 2));
  }

  // eslint-disable-next-line no-unused-vars
  function setGhostSlider(width: number, transX: number) {
    console.log(width, transX);
    sliderGhostWidth = width;
    sliderGhostPosition = transX;
    document.documentElement.style
        .setProperty('--width--tab-ghost-slider', `${width}px`);
    document.documentElement.style
        .setProperty('--translate-x--tab-ghost-slider', `${transX}px`);
  }

  useEffect(() => {
    setTimeout(() => {
      tabContainer = document.getElementById('ml-tabs')!;
      setContainerLeft();
      const firstButton = tabContainer.querySelector(`#${selected}`);
      setSlider(
          firstButton!.clientWidth,
          (firstButton!.clientLeft - containerLeft) || 0
      );
      console.log(getSliderWidth());
    }, 500);
  }, []);

  function tabClickAction(evt: Event) {
    !containerLeft && setContainerLeft();
    selected = (evt.target as HTMLElement).id;
    const buttonWidth = (evt?.target as HTMLElement)?.clientWidth || 0;
    const transX =
        ((evt?.target as HTMLElement)?.offsetLeft - containerLeft) || 0;
    setSlider(buttonWidth, transX);
    setGhostSlider(buttonWidth, transX);
  }

  function tabHoverAction(evt: Event) {
    setContainerLeft();
    const buttonWidth = (evt?.target as HTMLElement)?.clientWidth || 0;
    const transX =
        ((evt?.target as HTMLElement)?.offsetLeft - containerLeft) || 0;
    setSlider(buttonWidth, transX);
  }

  function tabHoverFocusReset () {
    setSlider(sliderGhostWidth, sliderGhostPosition);
  }

  return (
      <div className={classes.MLTabs} id='ml-tabs'>
        <div className={classes.MLTabs_tabWrapper}
             onMouseOut={tabHoverFocusReset}>
          {tabs.map((tab, i) => {
            return (
                <TabButton key={i} tabClick={tabClickAction}
                    tabHover={tabHoverAction} buttonValue={tab.value}>
                  {tab.name}</TabButton>
            )
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
      <button className={classes.MLTabButton} onClick={props.tabClick}
          onFocus={props.tabClick} onBlur={props.tabClick}
          onMouseOver={props.tabHover} onMouseOut={props.tabMouseOut}
          id={props.buttonValue} >
        <div>{props.children}</div>
      </button>
  );
}
