import * as React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {MyDocument} from "../components";
import Button from "react-md/lib/Buttons";
const cv = require('../../assets/CV.pdf');

export const PDF = () => {
    return (
        <>
            <BrowserView>
                <MyDocument key="cv"/>
            </BrowserView>
            <MobileView>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    height: '100vh',
                    width: '100vw'
                }}>
                    <Button primary raised href={cv} download>
                        ¡Pulsa para descargar!
                    </Button>
                </div>
            </MobileView>
        </>
    );
}