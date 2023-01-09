import React, { useState } from "react";
import { IconButton } from "../../IconButton/IconButton";
import { ReactComponent as Play } from './assets/icons/play.svg';
import {ReactComponent as Pause} from './assets/icons/stop.svg'


export function PlayIconButton () {
    const [state, setState] = useState(true);
    
    return (
        <IconButton onClick={() => setState(!state)}>
            {state ? <Play/> : <Pause/>}
        </IconButton>
    );
}
