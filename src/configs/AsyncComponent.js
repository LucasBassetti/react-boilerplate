import React, { useState, useEffect } from 'react';

export default importComponent => props => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      const { default: comp } = await importComponent();

      setComponent(() => comp);
    }

    fetchComponent();
  }, []);

  const C = component;

  return C ? <C {...props} /> : null;
};
