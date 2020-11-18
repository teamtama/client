import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { css } from '@emotion/react';
import { CSSTransition } from 'react-transition-group';

export interface IModalWrapperHandler {
  handleToggle: () => void;
}

interface OwnProps {
  children: any;
}

type Props = OwnProps;

const ModalWrapper: ForwardRefRenderFunction<IModalWrapperHandler, Props> = (
  { children },
  ref,
) => {
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    handleToggle,
  }));

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div
      css={css`
        .modal-enter {
          opacity: 0;
          transform: translate(-50%, 0);
        }
        .modal-enter-active {
          opacity: 1;
          transform: translate(-50%, -50%);
          transition: all 200ms;
        }
        .modal-exit {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
        .modal-exit-active {
          opacity: 0;
          transform: translate(-50%, 0);
          transition: all 200ms;
        }
      `}
    >
      <CSSTransition
        in={open}
        timeout={200}
        classNames="modal"
        unmountOnExit
        onEnter={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
        <div
          css={css`
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          `}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default forwardRef(ModalWrapper);
