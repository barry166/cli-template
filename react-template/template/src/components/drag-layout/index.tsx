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
import DroppableContainer from './DroppableContainer'

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

  function findContainerById(layout, id) {
    for (const container of layout) {
      if (container.items.some((child) => child.id === id)) {
        return container
      }
    }
    return null
  }

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      const activeContainer = findContainerById(layout, active.id)
      const overContainer = findContainerById(layout, over.id)
      const activeIndex = activeContainer.items.findIndex(
        (child) => child.id === active.id
      )
      const overIndex = overContainer.items.findIndex(
        (child) => child.id === over.id
      )

      // 创建副本并更新副本中的子项位置
      const updatedLayout = [...layout]
      const activeChildren = [...activeContainer.items]
      const draggedItem = activeChildren.splice(activeIndex, 1)[0]
      overContainer.items.splice(overIndex, 0, draggedItem)
      updatedLayout[updatedLayout.indexOf(activeContainer)].items =
        activeChildren

      // 更新布局状态
      setLayout(updatedLayout)
    }
  }

  console.log('layout', layout)

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={handleDragEnd}
    >
      {/* <SortableContext items={layout} strategy={rectSortingStrategy}>
        {layout.map((container) => (
          <div key={container.id} className='grid-item'>
            <SortableContext
              items={container.items}
              strategy={rectSortingStrategy}
            >
              {container.items.map((value, index) => {
                return (
                  <SortableItem key={value.id} id={value.id} index={index}>
                    <div
                      className='grid-sub-item'
                    >
                      {value.content}
                    </div>
                  </SortableItem>
                )
              })}
            </SortableContext>
          </div>
        ))}
      </SortableContext> */}

      <SortableContext items={layout} strategy={rectSortingStrategy}>
        {layout.map((item) => (
          <DroppableContainer id={item.id} items={item.items} key={item.id}>
            {/* <div>{item.content}</div> */}
            <SortableContext items={item.items} strategy={rectSortingStrategy}>
              {item.items.map((child) => (
                <SortableItem key={child.id} id={child.id}>
                  <div>{child.content}</div>
                </SortableItem>
              ))}
            </SortableContext>
          </DroppableContainer>
        ))}
      </SortableContext>
    </DndContext>
  )
}

export default GridLayout
