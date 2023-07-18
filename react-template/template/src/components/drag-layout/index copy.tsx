//// @ts-nocheck
import React, { useState } from 'react'
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import './index.scss'
import { SortableItem } from './Sortable'

const GridLayout = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const initialLayout = [
    {
      id: 'item1',
      content: 'Item 1',
      row: 1,
      column: 1,
      items: [
        { id: 'item11', content: 'Item 11' },
        { id: 'item12', content: 'Item 12' },
      ],
    },
    {
      id: 'item2',
      content: 'Item 2',
      row: 1,
      column: 2,
      items: [{ id: 'item22', content: 'Item 22' }],
    },
    {
      id: 'item3',
      content: 'Item 3',
      row: 2,
      column: 1,
      items: [{ id: 'item33', content: 'Item 33' }],
    },
    {
      id: 'item4',
      content: 'Item 4',
      row: 2,
      column: 2,
      items: [{ id: 'item44', content: 'Item 44' }],
    },
  ]

  const [layout, setLayout] = useState(initialLayout)

  function onDragStart(e) {
    console.log('onDragStart', e)
  }

  function onDragOver(e) {
    console.log('onDragOver', e)
  }

  function onDragEnd(event) {
    console.log('onDragEnd', event)
    const { active, over } = event

    if (active.id !== over.id) {
      setLayout((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id)
        const newIndex = items.findIndex((i) => i.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      // onDragEnd={handleDragEnd}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={layout} strategy={verticalListSortingStrategy}>
        {/* {layout.map((item) => (
          <SortableItem key={item.id} id={item.id}>
            <div
              className='grid-item'
              style={{ gridRow: item.row, gridColumn: item.column }}
            >
              {item.content}
            </div>
          </SortableItem>
        ))} */}
        {layout.map((container) => (
          <div
            key={container.id}
            className='grid-item'
            // label={minimal ? undefined : `Column ${containerId}`}
            // columns={columns}
            // items={items[containerId]}
            // scrollable={scrollable}
            // style={containerStyle}
            // unstyled={minimal}
            // onRemove={() => handleRemove(containerId)}
          >
            <SortableContext
              items={container.items}
              strategy={rectSortingStrategy}
            >
              {container.items.map((value, index) => {
                return (
                  <SortableItem
                    // disabled={isSortingContainer}
                    key={value.id}
                    id={value.id}
                    index={index}
                    // handle={handle}
                    // style={getItemStyles}
                    // wrapperStyle={wrapperStyle}
                    // renderItem={renderItem}
                    // containerId={containerId}
                    // getIndex={getIndex}
                  >
                    <div
                      className='grid-sub-item'
                      // style={{ gridRow: item.row, gridColumn: item.column }}
                    >
                      {value.content}
                    </div>
                  </SortableItem>
                )
              })}
            </SortableContext>
          </div>
        ))}
      </SortableContext>
    </DndContext>
  )
}

export default GridLayout
