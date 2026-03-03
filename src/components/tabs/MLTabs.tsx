import classes from './MLTabs.module.scss';
import React, {CSSProperties, useEffect, useRef, useState, useCallback, useLayoutEffect} from 'react';
import {MLButton} from '../button/MLButton';

interface MLTabsProps {
  tabs: any[];
  nameKey?: string;
  valueKey?: string;
  selected?: string;
  id?: string;
  children?: React.ReactNode;
}

export function MLTabs(props: MLTabsProps) {
  const {
    tabs: propsTabs,
    nameKey = 'name',
    valueKey = 'value',
    selected: propsSelected,
    id = 'ml-tabs',
  } = props;

  const [tabs, setTabs] = useState<{ [key: string]: any }[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [sliderStyle, setSliderStyle] = useState({width: 0, left: 0});
  const [ghostStyle, setGhostStyle] = useState({width: 0, left: 0});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const stringToSlug = (str: string) => {
    return str
      .replace(/^\s+|\s+$/g, '')
      .toLowerCase()
      .replace(/[àáäâ]/g, 'a')
      .replace(/[èéëê]/g, 'e')
      .replace(/[ìíïî]/g, 'i')
      .replace(/[òóöô]/g, 'o')
      .replace(/[ùúüû]/g, 'u')
      .replace(/[ñ]/g, 'n')
      .replace(/[ç]/g, 'c')
      .replace(/[·/_,:;]/g, '-')
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  }, []);

  useEffect(() => {
    const processedTabs = typeof propsTabs[0] === 'string'
      ? (propsTabs as string[]).map((tab) => ({
        [nameKey]: tab,
        [valueKey]: stringToSlug(tab),
      }))
      : (propsTabs as { [key: string]: any }[]);

    setTabs(processedTabs);
    if (processedTabs.length > 0) {
      setSelected(propsSelected || processedTabs[0][valueKey]);
    }
    // Check scroll after tabs are loaded
    setTimeout(checkScroll, 100);
  }, [propsTabs, nameKey, valueKey, propsSelected, checkScroll]);

  const updateSliders = useCallback((targetId: string, isGhost = true) => {
    if (!wrapperRef.current) return;

    const targetButton = wrapperRef.current.querySelector(`#${targetId}`) as HTMLElement;
    if (!targetButton) return;

    const width = targetButton.offsetWidth;
    const left = targetButton.offsetLeft;

    setSliderStyle({width, left});
    if (isGhost) {
      setGhostStyle({width, left});
    }
  }, []);

  const autoScroll = useCallback((targetId: string) => {
    if (!wrapperRef.current || !scrollContainerRef.current) return;
    const targetButton = wrapperRef.current.querySelector(`#${targetId}`) as HTMLElement;
    if (!targetButton) return;

    const container = scrollContainerRef.current;
    const buttonLeft = targetButton.offsetLeft;
    const buttonRight = buttonLeft + targetButton.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const scrollRight = scrollLeft + container.offsetWidth;

    if (buttonLeft < scrollLeft) {
      container.scrollTo({left: buttonLeft, behavior: 'smooth'});
    } else if (buttonRight > scrollRight) {
      container.scrollTo({left: buttonRight - container.offsetWidth, behavior: 'smooth'});
    }
  }, []);

  useLayoutEffect(() => {
    if (selected) {
      updateSliders(selected);
    }

    const handleResize = () => {
      if (selected) updateSliders(selected);
      checkScroll();
    };

    window.addEventListener('resize', handleResize);
    const observer = new ResizeObserver(handleResize);
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [selected, updateSliders, checkScroll]);

  const handleTabClick = (value: string) => {
    setSelected(value);
    autoScroll(value);
  };

  const handleTabHover = (value: string) => {
    updateSliders(value, false);
  };

  const handleReset = () => {
    if (selected) {
      updateSliders(selected, false);
    }
  };

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth * 0.75;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const tabVars = {
    '--width--tab-slider': `${sliderStyle.width}px`,
    '--translate-x--tab-slider': `${sliderStyle.left}px`,
    '--width--tab-ghost-slider': `${ghostStyle.width}px`,
    '--translate-x--tab-ghost-slider': `${ghostStyle.left}px`,
  } as CSSProperties;

  return (
    <div className={classes.MLTabs} id={id} style={tabVars}>
      <div className={classes.MLTabs_navigationWrapper}>
        <div className={`${classes.MLTabs_navButton} ${classes.MLTabs_navButton__left} ${canScrollLeft ? classes.MLTabs_navButton__visible : ''}`}>
          <MLButton buttonStyle="icon" clickAction={() => scrollBy('left')}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </MLButton>
        </div>

        <div
          className={classes.MLTabs_scrollContainer}
          ref={scrollContainerRef}
          onScroll={checkScroll}
        >
          <div
            className={classes.MLTabs_tabWrapper}
            ref={wrapperRef}
            onMouseLeave={handleReset}
            onBlur={handleReset}
          >
            {tabs.map((tab, i) => (
              <TabButton
                key={i}
                isActive={selected === tab[valueKey]}
                onClick={() => handleTabClick(tab[valueKey])}
                onHover={() => handleTabHover(tab[valueKey])}
                id={tab[valueKey]}
              >
                {tab[nameKey]}
              </TabButton>
            ))}
            <div className={classes.MLTabs_silderRail}>
              <div className={classes.MLTabs_ghostSlider} />
              <div className={classes.MLTabs_slider} />
            </div>
          </div>
        </div>

        <div className={`${classes.MLTabs_navButton} ${classes.MLTabs_navButton__right} ${canScrollRight ? classes.MLTabs_navButton__visible : ''}`}>
          <MLButton buttonStyle="icon" clickAction={() => scrollBy('right')}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </MLButton>
        </div>
      </div>
    </div>
  );
}

interface TabButtonProps {
  id: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
}

function TabButton({id, children, onClick, onHover}: TabButtonProps) {
  return (
    <button
      className={classes.MLTabButton}
      id={id}
      onClick={onClick}
      onFocus={onHover}
      onMouseOver={onHover}
    >
      <div>{children}</div>
    </button>
  );
}
