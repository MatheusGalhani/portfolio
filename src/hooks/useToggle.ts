import { useState } from 'react';

const useToggle = (initialValue = false) => {
    const [isShown, setIsShown] = useState<boolean>(initialValue);
    const toggle = () => setIsShown(!isShown);

    return [isShown, toggle] as const;
};

export default useToggle;
