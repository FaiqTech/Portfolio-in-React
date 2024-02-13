import Vector from "../../assets/icons/Vectordribble.svg";
import Github from "../../assets/icons/Vectorgithub.svg";
import Twitter from "../../assets/icons/Vectortwitter.svg";

function Icon() {
  return (
    <div className="icon">
      <img src={Github} alt="Github" />
      <img src={Twitter} alt="Twitter" />
      <img src={Vector} alt="Vector" />
    </div>
  );
}

export default Icon;
