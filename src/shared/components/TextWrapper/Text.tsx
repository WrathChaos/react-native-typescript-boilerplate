import React from "react";
import PropTypes from "prop-types";
import Text from "@freakycoder/react-native-custom-text";
/**
 * ? Local Imports
 */
import fonts from "@fonts";
import colors from "@colors";

const TextWrapper = (props: any) => {
  const { fontFamily, color, children, ...rest } = props;
  return (
    <Text fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </Text>
  );
};

TextWrapper.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
};

TextWrapper.defaultProps = {
  color: colors.gray.dark,
  fontFamily: fonts.seuzOne.regular,
};

export default TextWrapper;
