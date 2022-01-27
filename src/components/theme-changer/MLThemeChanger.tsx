import './MLThemeCharger.scss';


export function MLThemeChanger() {
  function handleThemeCheck(e: any) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  return (
    <label className="theme-changer">
      <input type="checkbox" onChange={handleThemeCheck} />
        Change Theme
    </label>
  );
}
