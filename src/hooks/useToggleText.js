import { useState } from 'react';

const useToggleText = () => {
  const [expandedState, setExpandedState] = useState({});

  const toggle = (id) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const isExpanded = (id) => expandedState[id];

  return { isExpanded, toggle };
};

export default useToggleText;
