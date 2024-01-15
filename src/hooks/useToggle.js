import { useState, useEffect } from "react";

export default function useToggle(initialValue) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, handleChange];
}
