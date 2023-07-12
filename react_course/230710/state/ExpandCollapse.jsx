
import { useState } from 'react';

const ExpandCollapse = () => {
    const [isExpand, setisExpand] = useState(false);

    const handleExpand = () => {
        setisExpand(!isExpand);
    }

    return (
        <>
            <button onClick={handleExpand}> {isExpand ? 'Hide' : 'Show'} description</button>
            {isExpand && <h2>Description</h2>}
        </>
    )
}

export default ExpandCollapse;
