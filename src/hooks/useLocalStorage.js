import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defValue) => {
  const [state, setState] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
