import * as React from 'react';

export const CenteredLayout: React.FC = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            height: '100vh',
            width: '100vw',
            boxSizing: 'border-box',
            position: 'relative',
        }}
        >
            {props.children}
        </div>

    )
}
