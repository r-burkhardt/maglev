import classes from './ColorDemoBlock.module.scss';


export function ColorDemoBlock(props: Record<string, any>) {
  const styleBackground = {
    backgroundColor: `var(${props.themeColor})`,
  };

  return (
      <div className={classes.ColorBlock}>
        <div className={classes.ColorBlock_head}>{props.themeColor}</div>
        <div className={classes.ColorBlock_color} style={styleBackground}></div>
      </div>
  );
}
