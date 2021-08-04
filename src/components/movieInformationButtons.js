export function ShowInfo(props) {
  return (
    <button className="btn-red" onClick={props.onClick}>
      Show Details
    </button>
  );
}

export function HideInfo(props) {
  return (
    <button className="btn-red" onClick={props.onClick}>
      Hide Details
    </button>
  );
}
