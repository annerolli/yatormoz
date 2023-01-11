import "./Layout.css";

export function Layout({ header, children, footer, aside }) {
  return (
    <div className="Layout">
      <div className="Layout__Header">{header}</div>
      <div className="Layout__Container">
        <div className="Layout__Main">{children}</div>
        <div className="Layout__Aside">{aside}</div>
      </div>
      <div className="Layout__Footer">{footer}</div>
    </div>
  );
}
