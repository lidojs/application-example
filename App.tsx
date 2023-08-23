import React, { FC } from 'react';
import Test from './src/Test'; // used to display editor
import Publish from './src/Publish'; //used to display output. this support SSR.
const App: FC = () => {
    return <Publish />;
};

export default App;
