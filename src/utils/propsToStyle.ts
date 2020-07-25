import { CSSProperties } from "styled-components";

export const propsToStyle = (props: CSSProperties): string => {
  if (!props || typeof props !== 'object') return ""
  
  let output = "";
  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      const casedKey = cssCasing(key);
      const value = (props as any)[key];
      const isNumberToPixel: boolean = typeof value === 'number' && ['width', 'height'].includes(casedKey);
      output = output.concat(`${casedKey}:${isNumberToPixel ? value + 'px' : value} !important;`);
    }
  }
  return output; 
}

const cssCasing = (camelString: string): string => {
  let output = ""
  let stringArr = camelString.split("");

  stringArr.map((sChar) => {
    if (!isUppercase(sChar)) {
      output = output.concat(sChar);
    } else {
      output = output.concat(`-${sChar.toLowerCase()}`);
    }
  })

  return output;
}

const isUppercase = (character: string): boolean => {
  if (character === character.toUpperCase()) return true;
  return false;
}

export default propsToStyle