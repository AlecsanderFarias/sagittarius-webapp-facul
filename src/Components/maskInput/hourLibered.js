import MaskedInput from "react-text-mask";
import React from "react";

export default function TextMaskDate(props) {
  const { inputRef, ...other } = props;

  var mask = function (e) {
    const splited = String(e).split(":");

    let maskArray = [];

    for (let i = 0; i < String(splited[0]).length; i++) {
      maskArray.push(/[0-9]/);
    }

    maskArray.push(":");
    maskArray.push(/[0-5]/);
    maskArray.push(/[0-9]/);

    return maskArray;
  };

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      guide={false}
    />
  );
}
