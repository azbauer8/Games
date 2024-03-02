export type SidebarItem = {
  title: string
  children: SidebarItemChild[]
}
type SidebarItemChild = {
  title: string
  icon: string
  url: string
  type: "Link"
}

const sidebarItems: SidebarItem[] = [
  {
    title: "New Releases",
    children: [
      {
        title: "Trending",
        icon: "fa6-solid:arrow-trend-up",
        url: "/",
        type: "Link",
      },
      {
        title: "Last 30 days",
        icon: "fa6-solid:star",
        url: "/Last30Days",
        type: "Link",
      },
      {
        title: "Past week",
        icon: "fa6-solid:fire",
        url: "/ThisPastWeek",
        type: "Link",
      },

      {
        title: "This month",
        icon: "fa6-regular:calendar",
        url: "/ThisMonth",
        type: "Link",
      },
    ],
  },

  {
    title: "Top",
    children: [
      {
        title: "This year",
        icon: "fa6-solid:trophy",
        url: "/BestOfThisYear",
        type: "Link",
      },

      {
        title: "Last year",
        icon: "ion:podium",
        url: "/BestOfLastYear",
        type: "Link",
      },

      {
        title: "All time",
        icon: "fa6-solid:crown",
        url: "/AllTimeBest",
        type: "Link",
      },
    ],
  },
]

export default sidebarItems
