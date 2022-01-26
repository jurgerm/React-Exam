import { classnames } from "../utils/Classnames";
import { Element } from "./Element";

export const Content = ({ children }) => <div className="content">{children}</div>;

export const Card = ({ ...props }) => Element({ as: "div", className: "card", ...props });

export const CardContent = ({ children }) => <div className="card-content">{children}</div>;

export const CardHeader = ({ className, ...props }) =>
        Element({ as: "div", className: classnames("card-header", className), ...props });

export const CardHeaderTitle = ({ as = "span", className, ...props }) =>
    Element({ as, className: classnames("card-header-title", className), ...props });

export const CardFooter = ({ className, ...props }) =>
    Element({ as: "div", className: classnames("card-footer", className), ...props });

export const CardFooterItem = ({ as = "div", className,  ...props }) =>
    Element({ as, className: classnames("card-footer-item", className), ...props });
