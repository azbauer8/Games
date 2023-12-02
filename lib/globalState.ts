import { create } from "zustand";

type Store = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  pageNum: number;
  setPageNum: (pageNum: number) => void;
};

const globalState = create<Store>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  pageNum: 1,
  setPageNum: (pageNum: number) => set({ pageNum }),
}));

export default globalState;
