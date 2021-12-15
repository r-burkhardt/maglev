import classes from './MLThemeCharger.module.scss';


export function MLThemeChanger() {
  function handleThemeCheck(e: any) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  return (
    <label className={classes.ThemeChanger}>
      <input type="checkbox" onChange={handleThemeCheck} />
        Change Theme
    </label>
  );
}
