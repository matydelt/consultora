import React from "react";
import PropTypes from "prop-types";

const CrossIcon = (props) => {
  const getCrossStyle = (type) => {
    return {
      position: "absolute",
      width: 3,
      height: 14,
      transform: type === "before" ? "rotate(45deg)" : "rotate(-45deg)",
    };
  };

  var icon;
  var buttonWrapperStyle = {
    position: "absolute",
    width: 24,
    height: 24,
    right: 8,
    top: 8,
  };
  var buttonStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    border: "none",
    fontSize: 0,
    background: "transparent",
    cursor: "pointer",
  };

  if (props.customIcon) {
    let extraProps = {
      className: `bm-cross ${props.customIcon.props.className || ""}`.trim(),
      style: {
        ...{ width: "100%", height: "100%" },
        ...props.styles.bmCross,
      },
    };
    icon = React.cloneElement(props.customIcon, extraProps);
  } else {
    icon = (
      <span style={{ position: "absolute", top: "6px", right: "14px" }}>
        {["before", "after"].map((type, i) => (
          <span
            key={i}
            className={`bm-cross ${props.crossClassName}`.trim()}
            style={{
              ...getCrossStyle(type),
              ...props.styles.bmCross,
            }}
          />
        ))}
      </span>
    );
  }

  return (
    <div
      className={`bm-cross-button ${props.className}`.trim()}
      style={{
        ...buttonWrapperStyle,
        ...props.styles.bmCrossButton,
      }}
    >
      <button
        id="react-burger-cross-btn"
        onClick={props.onClick}
        style={buttonStyle}
        tabIndex={props.isOpen ? 0 : -1}
      >
        Close Menu
      </button>
      {icon}
    </div>
  );
};

CrossIcon.propTypes = {
  crossClassName: PropTypes.string,
  customIcon: PropTypes.element,
  isOpen: PropTypes.bool,
  styles: PropTypes.object,
};

CrossIcon.defaultProps = {
  crossClassName: "",
  className: "",
  styles: {},
  isOpen: false,
};

export default CrossIcon;
