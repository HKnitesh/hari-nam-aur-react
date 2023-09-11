import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'


const store = (set) => ({
    items: [],
    addItem: (item) => {
        set((state) => ({
            items: [item, ...state.items],
        }))
    },
    removeItem:(itemID) => {
        set((state) => ({
            items: state.items.filter((i) => i.id !== itemID)
        }))
    },
    toggleItemStatus: (itemID) => {
        set((state) => ({
            items: state.items.map((item) => item.id === itemID ? {...item, completed: !item.completed} : item)
        }))
    }
})

const useStore = create(
    devtools(
        persist(store, {
            name: "items",
        })
    )
)

export default useStore;