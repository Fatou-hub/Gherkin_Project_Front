import React, { useState, useEffect } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Container from "../utils/container";
import { Item } from '../utils/sortable_items';

const wrapperStyle = {
  display: "flex",
  flexDirection: "row"
};

const defaultAnnouncements = {
  onDragStart(id) {
    console.log(`Picked up draggable item ${id}.`);
  },
  onDragOver(id, overId) {
    if (overId) {
      console.log(`Draggable item ${id} was moved over droppable area ${overId}.`);
      return;
    }
    console.log(`Draggable item ${id} is no longer over a droppable area.`);
  },
  onDragEnd(id, overId) {
    if (overId) {
      console.log(`Draggable item ${id} was dropped over droppable area ${overId}`);
      return;
    }
    console.log(`Draggable item ${id} was dropped.`);
  },
  onDragCancel(id) {
    console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
  }
};

export default function DragAndDropContainerCatalog({ pathFilter }) {
  const [items, setItems] = useState({ root: [], container1: [] });
  const [activeId, setActiveId] = useState();
  const [featureName, setFeatureName] = useState(''); // État pour le nom de la feature
  const [featuresData, setFeaturesData] = useState([]); // État pour stocker les données de features

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('Fetching steps data from server...');
        const responseSteps = await fetch('http://localhost:5000/steps?limit=5', {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!responseSteps.ok) {
          throw new Error('Network response was not ok');
        }

        const stepsData = await responseSteps.json();
        console.log('Steps data fetched:', stepsData);

        setItems({
          root: stepsData.map(item => ({ id: item._id, content: item.value })),
          container1: []
        });

        if (stepsData.length > 0) {
          setFeatureName(stepsData[0].name); // Remplace "name" par le champ correct si différent
        }

        // Nouvelle requête pour récupérer les données de features
        console.log('Fetching features data from server...');
        const responseFeatures = await fetch('http://localhost:5000/features', {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!responseFeatures.ok) {
          throw new Error('Network response was not ok');
        }

        const featuresData = await responseFeatures.json();
        console.log('Features data fetched:', featuresData);

        setFeaturesData(featuresData); // Mettre à jour l'état avec les données de features

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [pathFilter]);


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  function findContainer(id) {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key) => items[key].some(item => item.id === id));
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  }

  function handleDragOver(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over || {}; // Ajoutez une vérification pour over
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);
    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }
    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const activeIndex = activeItems.findIndex(item => item.id === id);
      const overIndex = overItems.findIndex(item => item.id === overId);
      let newIndex;
      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = over && overIndex === overItems.length - 1 && event.rect && event.rect.offsetTop > over.rect.offsetTop + over.rect.height;
        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }
      return {
        ...prev,
        [activeContainer]: [...prev[activeContainer].filter((item) => item.id !== active.id)],
        [overContainer]: [...prev[overContainer].slice(0, newIndex), items[activeContainer][activeIndex], ...prev[overContainer].slice(newIndex, prev[overContainer].length)]
      };
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);
    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
      return;
    }
    const activeIndex = items[activeContainer].findIndex(item => item.id === active.id);
    const overIndex = items[overContainer].findIndex(item => item.id === overId);
    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }));
    }
    setActiveId(null);
  }

  const getItemContentById = (id) => {
    for (const container of Object.values(items)) {
      const foundItem = container.find(item => item.id === id);
      if (foundItem) return foundItem.content;
    }
    return null;
  };

  return (
    <>
      <header>
        <div className="App">
        </div>
      </header>
      <h4 id="DnD_title">Welcome to Backstage<em>{featureName}</em> Page</h4>
      <div id="DND_BTN">
      <div id="edition_gherkin_container" className="container_DnD" style={wrapperStyle}>        
        <DndContext
        announcements={defaultAnnouncements}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Container id="root" items={items.root} />
        <Container id="container1" items={items.container1} />
        <DragOverlay>{activeId ? <Item id={activeId} content={getItemContentById(activeId)} /> : null}</DragOverlay>
      </DndContext>
      </div>
      <div className="button-container">
          <button>Envoyer</button>
        </div>
      </div>
    </>
  );
}
