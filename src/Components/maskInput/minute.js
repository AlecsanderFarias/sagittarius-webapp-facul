import MaskedInput from 'react-text-mask';
import React from 'react';

export default function TextMaskHour(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-5]/, /[0-9]/]}
      guide={false}
    />
  );
}
