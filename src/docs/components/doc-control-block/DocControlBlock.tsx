import './DocControlBlock.scss';


export function DocControlBlock(props: Record<string, any>) {
  return (
    <div className="doc-control-block">
      {props.children}
    </div>
  );
}
