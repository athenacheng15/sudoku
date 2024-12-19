import { create } from "zustand";

type useGridStore = {
	currentGrid: number | null;
	setCurrentGrid: (id: number | null) => void;
};

export const useGrid = create<useGridStore>((set) => ({
	currentGrid: null,
	setCurrentGrid: (id: number | null) => set({ currentGrid: id }),
}));
