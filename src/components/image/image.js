const Image = ({ path, tooltip }) => {
  return (
    <div style={{
      "border-radius": "1rem",
      "border-width": "4px",
      "overflow": "hidden",
      "display": "inline-block",
      "width": "auto", "height": "auto",
      "margin-bottom": "16px"
    }}>
    
    <img src={require("@site/static/img/" + path).default} alt="image" title={tooltip} style={{
      "margin-bottom": "-8px"
    }} />
    </div>
  )
}
export default Image;
