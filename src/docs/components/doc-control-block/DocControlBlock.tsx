import classes from './DocControlBlock.module.scss';


export function DocControlBlock(props: Record<string, any>) {
  return (
      <div className={classes.DocControlBlock}>
        {props.children}
      </div>
  )
}
