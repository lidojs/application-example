import React from 'react';
import { Frame } from '@lidojs/screen';
import { data } from '../data';
import { getPageSize } from '@lidojs/core';

const Publish = () => {
    const size = getPageSize(data);
    return (
        <div
            css={{
                minWidth: '100vw',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Frame width={size.width} height={size.height} data={data} />
        </div>
    );
};

export default Publish;
