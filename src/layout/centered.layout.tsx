import * as React from 'react';

export const CenteredLayout: React.FC = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                height: '100vh',
                width: '100vw',
                boxSizing: 'border-box',
                backgroundImage: "url(../../assets/ash-edmonds-510566-unsplash-min.webp)",
                //filter: "blur(8px)",
                //"-webkit-filter": "blur(8px)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {props.children}
        </div>

    )
}
