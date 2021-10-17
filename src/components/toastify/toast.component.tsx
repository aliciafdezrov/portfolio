import * as React from "react";
import classes from "./toast.component.scss";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notify = (message, containerId) => toast(message, {
    position: "top-right",
    hideProgressBar: false,
    autoClose: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    containerId: containerId
});

export interface Props {
    showDialog: boolean;
    message: string;
    containerId: string;
    onClick: () => void;
}

export const Toast = (props: Props) => {
    const {showDialog, message, containerId, onClick} = props;

    React.useEffect(() => {
        if (showDialog) {
            notify(message, containerId);
        }
    }, [showDialog]);

    return (
        <ToastContainer containerId={containerId}
                        toastClassName={classes.toast}
                        onClick={onClick}
                        position={toast.POSITION.TOP_LEFT}/>
    );
};
