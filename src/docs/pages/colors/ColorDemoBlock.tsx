import './ColorDemoBlock.scss';


export function ColorDemoBlock(props: Record<string, any>) {
  const styleBackground = {
    backgroundColor: `var(${props.themeColor})`,
  };

  return (
    <div className="color-block">
      <div className="color-block__head">{props.themeColor}</div>
      <div className="color-block__color" style={styleBackground}></div>
    </div>
  );
}
