/* eslint-disable @typescript-eslint/no-explicit-any, no-param-reassign */
import PropTypes, { Validator } from "prop-types";
import { ANIMATION_STATE_CLASSES } from "./constants.js";
import { isPercentage } from "./utils.js";

const heightPropType: Validator<string | number> = (
  props,
  propName: string,
  componentName: string
) => {
  const value = props[propName];

  if (
    (typeof value === "number" && value >= 0) ||
    isPercentage(value) ||
    value === "auto"
  ) {
    return null;
  }

  return new TypeError(
    `value "${value}" of type "${typeof value}" is invalid type for ${propName} in ${componentName}. ` +
      'It needs to be a positive number, string "auto" or percentage string (e.g. "15%").'
  );
};

export function attachPropTypes(component: any) {
  component.propTypes = {
    "aria-hidden": PropTypes.bool,
    animateOpacity: PropTypes.bool,
    animationStateClasses: PropTypes.object,
    applyInlineTransitions: PropTypes.bool,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.string,
    height: heightPropType,
    id: PropTypes.string,
    onAnimationEnd: PropTypes.func,
    onAnimationStart: PropTypes.func,
    style: PropTypes.object,
  };

  component.defaultProps = {
    animateOpacity: false,
    animationStateClasses: ANIMATION_STATE_CLASSES,
    applyInlineTransitions: true,
    duration: 250,
    delay: 0,
    easing: "ease",
    style: {},
  };
}
