import { useState, useEffect } from 'react';

function getElementPosition(e) {
    const rect = e.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
  

export default function useElementPosition(e) {
  const [elementPosition, setElementPosition] = useState(getElementPosition(e));

  return elementPosition;
}