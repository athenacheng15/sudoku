import { create } from "zustand";

type useCurrentGridStore = {
	currentGrid: number | null;
	setCurrentGrid: (id: number | null) => void;
};

export const useCurrentGrid = create<useCurrentGridStore>((set) => ({
	currentGrid: null,
	setCurrentGrid: (id: number | null) => set({ currentGrid: id }),
}));
