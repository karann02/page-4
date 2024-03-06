import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  imageBackground,
  templates,
  propPadding,
  templatesDisplay,
}) => {
  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const templatesStyle = useMemo(() => {
    return {
      display: templatesDisplay,
    };
  }, [templatesDisplay]);

  return (
    <button className="rectangle-parent53" style={groupButtonStyle}>
      <div className="frame-child60" />
      <img className="image-background-icon" alt="" src={imageBackground} />
      <div className="templates2" style={templatesStyle}>
        {templates}
      </div>
    </button>
  );
};

export default GroupComponent;
