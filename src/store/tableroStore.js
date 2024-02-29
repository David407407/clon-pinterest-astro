import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTableroStore = create(
    persist(
        (set, get) => ({
            isSave: false,
            favorites: [],
            tableros: [
                {
                    nombre: 'favorites',
                    pines: [],
                    oculto: true
                }
            ],
            setFavorites: (favorites) => set({favorites}),
            setTableros: (tableros) => set({tableros}),
        }), {
            name: 'tablero',
            getStorage: () => createJSONStorage(() => localStorage)
        }
    )
);