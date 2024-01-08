import { create } from "zustand"

type Store = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const globalState = create<Store>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
}))

export default globalState
