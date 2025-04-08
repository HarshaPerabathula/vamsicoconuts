import { useEffect } from 'react';
import * as feather from 'feather-icons/dist/feather.min';

const Icons = ({ name, width="20", color="" }) => {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <span data-feather={name} style={{ color: `${color}` }} width={width}></span>
    );
}

export default Icons;