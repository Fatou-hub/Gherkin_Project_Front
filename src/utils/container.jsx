import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./sortable_items";
import '../css/edition_gherkin_container.css';

const containerStyle = {
    background: "#bdbeda",
    padding: 10,
    margin: 10,
    flex: 1
};

export default function Container({ id, items }) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <SortableContext key={id} id={id} items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
            <div ref={setNodeRef} style={containerStyle}>
                {items.map((item) => (
                    <SortableItem key={item.id} id={item.id} content={item.content} />
                ))}
            </div>
        </SortableContext>
    );
}

