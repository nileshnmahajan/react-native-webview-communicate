import * as React from 'react';
import {Text} from 'react-native';
const MyText = ({
  h0,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  h11,
  h12,
  h13,
  p,
  bold,
  medium,
  light,
  semibold,
  italic,
  title,
  style,
  children,
  center,
  color,
  fontSize,
  extrabold,
  u,
  justify,
  ...rest
}) => {
  return (
    <Text
      style={[
        {fontFamily: 'Poppins-Regular', color: '#1D232B'},
        justify && {textAlign: 'justify'},
        h0 && {fontSize: 35},
        h1 && {fontSize: 25},
        h2 && {fontSize: 22},
        h3 && {fontSize: 20},
        h4 && {fontSize: 18},
        h5 && {fontSize: 16},
        h6 && {fontSize: 14},
        h7 && {fontSize: 12},
        h8 && {fontSize: 10},
        h9 && {fontSize: 8},
        h10 && {fontSize: 6},
        h11 && {fontSize: 4},
        h12 && {fontSize: 2},
        h13 && {fontSize: 1},

        p && {fontSize: 14},

        p && {fontSize: 12},
        u && {textDecorationLine: 'underline'},
        fontSize && {fontSize},
        color && {color},
        center && {textAlign: 'center'},
        bold && {fontFamily: 'Poppins-Bold'},
        medium && {fontFamily: 'Poppins-Medium'},
        light && {fontFamily: 'Poppins-Light'},
        semibold && {fontFamily: 'Poppins-SemiBold'},
        extrabold && {fontFamily: 'Poppins-ExtraBold'},
        italic && {fontFamily: 'Poppins-ExtraBoldItalic'},
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default MyText;
