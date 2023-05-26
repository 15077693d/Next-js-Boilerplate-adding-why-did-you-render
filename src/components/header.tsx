import { useEffect, useState } from 'react';

const Header = () => {
  const [objState, setObjState] = useState({ name: 'World' });
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setObjState({ name: 'World' });
  }, []);

  return (
    <header>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </button>
      <h1>Hello {objState.name} !</h1>
    </header>
  );
};

export default Header;
