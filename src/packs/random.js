import React, { useEffect, useState } from 'react';

const Random = ({ prct, prctMax, children }) => {
const [content, setContent] = useState(null);

useEffect(() => {
const i = Math.floor(Math.random() * prctMax) + 1;
const chosenChild = React.Children.toArray(children).find(child =>
child.type === (i >= prct ? High : Low)
);
setContent(chosenChild ? React.cloneElement(chosenChild) : null);
}, [prct, prctMax, children]);

return <div>{content}</div>;
};

const High = ({ children }) => <>{children}</>;
const Low = ({ children }) => <>{children}</>;

export { Random, High, Low };