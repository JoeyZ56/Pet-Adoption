import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  //If the current value of the ref (elRef.current) is null
  //(meaning it hasn't been set yet), it creates a new div element
  //and assigns it to elRef.current.
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  //Uses createPortal to render the children of the Modal component
  //into the DOM element referenced by elRef.current.
  //This allows the modal content to be rendered outside the normal hierarchy
  //of the parent components.
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

/*
1. useRef is another React hook used to create mutable object that persists across renders.

2. createPortal is a method from react-dom used for
 rendering children into a DOM node that exists outside
the DOM hierarchy of the parent component.




*/
