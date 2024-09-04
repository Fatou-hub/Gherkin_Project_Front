import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Item(props) {
    // eslint-disable-next-line
    const { id, content } = props;

    const style = {
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        margin: "10px 0",
        background: "white"
    }

    return <div style={style}>{content}</div>;
}


const SortableItem = ({ id, content }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
        id
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
        padding: 10,
        margin: '0 0 10px 0',
        backgroundColor: '#fff',
        border: '1px solid #ccc'
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {content}
        </div>
    );
};

export default SortableItem;
