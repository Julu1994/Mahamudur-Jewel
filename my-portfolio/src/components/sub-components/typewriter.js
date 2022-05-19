import React, { useState, useEffect, useRef } from "react";

function Typewriter({ props }) {
    const index = useRef(0);
    const [currentType, setCurrentType] = useState(" ");

    useEffect(() => {
        index.current = 0;
        setCurrentType("");
    }, [props]);

    useEffect(() => {
        const TimeOut = setTimeout(() => {
            setCurrentType((value) => value + props.charAt(index.current));
            index.current += 1;
        }, 1000);
        return () => {
            clearTimeout(TimeOut);
        };
    }, [currentType, props]);
    return (
        <div>
            <p>{currentType}</p>
        </div>
    );
}

export default Typewriter;
