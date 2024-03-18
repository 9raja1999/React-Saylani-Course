import React from 'react'
import { memo } from 'react'

function Child({ count, bool }) {
    return (
        <div>Count {count}</div>
    )
}

export default memo(Child)