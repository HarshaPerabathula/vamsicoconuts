import { useEffect } from 'react';
import * as feather from 'feather-icons/dist/feather.min';

const Icons = ({ name, width="20" }) => {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <span data-feather={name} width={width}></span>
    );
}

export default Icons;