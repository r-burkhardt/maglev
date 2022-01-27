import './MLButton.scss';


export function MLButton(props: Record<string, any>) {
  // const buttonDisabled = false;
  let buttonStyle = '';

  switch (props.buttonStyle) {
    case 'hairline':
      buttonStyle += ' ml-button__hairline';
      break;
    case 'text':
      buttonStyle += ' ml-button__text';
      break;
    case 'tonal':
      buttonStyle += ' ml-button__tonal';
      break;
    case 'protected':
      buttonStyle += ' ml-button__protected';
      break;
    default:
      buttonStyle += ' ml-button__filled';
  }

  // if (props.disabled) buttonDisabled = true;

  return (
    <button className={`ml-button${buttonStyle}`}
      id={props.buttonStyle || 'filled'}
      disabled={props.disabled || false}
      onClick={props.clickAction}>
      {props.children}
    </button>
  );
}
