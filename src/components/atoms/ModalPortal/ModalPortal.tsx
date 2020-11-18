import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import ClientOnlyPortal from './ClientOnlyPortal';
import { CSSTransition } from 'react-transition-group';

export interface IModalPortalHandler {
  handleToggle: () => void;
}

interface Props {
  children: any;
}

const ModalPortal: ForwardRefRenderFunction<IModalPortalHandler, Props> = (
  { children },
  ref,
) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    handleToggle,
  }));

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <ClientOnlyPortal selector="#modal">
      <CSSTransition
        in={open}
        timeout={200}
        classNames="portal"
        unmountOnExit
        onEnter={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
        <div className="backdrop">
          <div className="modal">{children}</div>
          <style jsx>{`
            :global(body) {
              overflow: hidden;
            }
            .backdrop {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 10000;
            }
            .modal {
              background-color: white;
              position: absolute;
              top: 10%;
              right: 30%;
              bottom: 10%;
              left: 30%;
              padding: 1em;
            }
          `}</style>
        </div>
      </CSSTransition>
    </ClientOnlyPortal>
  );
};
export default forwardRef(ModalPortal);
