import { InputHTMLAttributes, ComponentType, useRef, useState, useCallback } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}


export function Input({ icon: Icon, isPassword = false, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);


  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        {...rest}
        ref={inputRef}
        type={isPasswordVisible ? 'text' : rest.type}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isPassword &&
        (isPasswordVisible ? (
          <FaEye
            onClick={() => setIsPasswordVisible
              (!isPasswordVisible)}
            size={20}
            color="#00e676"
            className="icon-click"
          /* className="icon-click" */
          />
        ) : (
          <FaEyeSlash
            onClick={() => setIsPasswordVisible
              (!isPasswordVisible)}
            size={20}
            color="#00e676"
            className="icon-click"
          />
        ))}
    </Container>
  );
}
