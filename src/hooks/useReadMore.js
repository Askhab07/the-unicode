import { useState } from 'react';

/**
 * useReadMore - кастомный хук для управления состоянием "читать далее".
 * @param {Array<string>} initialIds - (опционально) список id для инициализации состояния.
 * @returns {[object, function]} - Состояние и функция для его переключения.
 */
const useReadMore = (initialIds = []) => {
  const [expandedState, setExpandedState] = useState(
    initialIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  );

  const toggleReadMore = (id) => {
    if (!id) return; // Проверка на случай, если id не передан
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return [expandedState, toggleReadMore];
};

export default useReadMore;
