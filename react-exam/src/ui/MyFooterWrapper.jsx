import { Element } from "./Element";
import { classnames } from "../utils/Classnames";

export const MyFooterWrapper = ({ className, ...props }) =>
  Element({ as: "footer", className: classnames("footer", className), ...props });
