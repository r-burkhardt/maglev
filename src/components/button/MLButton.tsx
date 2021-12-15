import classes from './MLButton.module.scss';


export function MLButton(props: Record<string, any>) {
  // const buttonDisabled = false;
  let buttonStyles = classes.MLButton;

  switch (props.buttonStyle) {
    case 'hairline':
      buttonStyles += ` ${classes.MLButton__hairline}`;
      break;
    case 'text':
      buttonStyles += ` ${classes.MLButton__text}`;
      break;
    case 'tonal':
      buttonStyles += ` ${classes.MLButton__tonal}`;
      break;
    case 'protected':
      buttonStyles += ` ${classes.MLButton__protected}`;
      break;
    default:
      buttonStyles += ` ${classes.MLButton__filled}`;
  }

  // if (props.disabled) buttonDisabled = true;

  return (
    <button className={buttonStyles}
      id={props.buttonStyle || 'filled'}
      disabled={props.disabled || false}
      onClick={props.clickAction}>
      {props.children}
    </button>
  );
}
