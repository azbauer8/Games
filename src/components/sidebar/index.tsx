"use client"

import { Icon } from "@iconify/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

import sidebarItems from "./SidebarItems.json"

export default function Sidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	return (
		<>
			<Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
				<DrawerTrigger>
					<nav className="fixed bottom-3 right-3 z-50 max-w-fit cursor-pointer items-center rounded-2xl bg-white p-2 hover:bg-neutral-200 md:hidden">
						<Icon icon="ci:hamburger-md" className="size-11 text-neutral-900" />
					</nav>
				</DrawerTrigger>
				<DrawerContent className="mx-2 outline-none focus:outline-none">
					<DrawerContents />
				</DrawerContent>
			</Drawer>
			<div className="sticky top-0 hidden h-full w-64 flex-col justify-between md:flex">
				<SidebarContents />
			</div>
		</>
	)

	function SidebarContents() {
		return (
			<div className="flex h-screen w-56 flex-col overflow-y-auto">
				<div className="px-6 py-4 pt-16">
					<ul className="space-y-2 font-medium">
						{sidebarItems.map((section) => (
							<>
								<SidebarHeader title={section.title} />
								{section.children.map((link) => (
									<SidebarLink
										key={link.title}
										title={link.title}
										icon={link.icon}
										url={link.url}
									/>
								))}
							</>
						))}
					</ul>
				</div>
				<div className="flex justify-center space-x-5 py-8">
					<a href="https://byzach.dev">
						<Icon
							icon="fa6-solid:hand-peace"
							className="size-7 text-white hover:text-neutral-500 md:size-8"
						/>
					</a>
					<a href="https://github.com/azbauer8/Games">
						<Icon
							icon="fa-brands:github"
							className="size-7 text-white hover:text-neutral-500 md:size-8"
						/>
					</a>
				</div>
			</div>
		)
	}

	function DrawerContents() {
		return (
			<div className="relative mx-auto w-full max-w-2xl p-5 pb-20">
				<div className="flex flex-col space-x-0 sm:flex-row sm:space-x-4">
					{sidebarItems.map((section) => (
						<div className="w-full sm:w-1/2">
							<SidebarHeader title={section.title} isDrawer />
							<div className="grid grid-cols-2 gap-2">
								{section.children?.map((link) => {
									return (
										<SidebarLink
											key={link.title}
											title={link.title}
											icon={link.icon}
											url={link.url}
											isDrawer
										/>
									)
								})}
							</div>
						</div>
					))}
				</div>
				<a href="https://byzach.dev" className="absolute bottom-6 right-[84px]">
					<Icon
						icon="fa6-solid:hand-peace"
						className="size-8 text-white hover:text-neutral-500"
					/>
				</a>
				<a
					href="https://github.com/azbauer8/Games"
					className="absolute bottom-6 right-6"
				>
					<Icon
						icon="fa-brands:github"
						className="size-8 text-white hover:text-neutral-500"
					/>
				</a>
			</div>
		)
	}

	function SidebarHeader({
		title,
		isDrawer,
	}: {
		title: string
		isDrawer?: boolean
	}) {
		return (
			<span
				className={`flex items-center p-2 ${
					isDrawer ? "text-lg" : "text-xl"
				} group rounded-lg text-white font-semibold`}
			>
				{title}
			</span>
		)
	}

	function SidebarLink({
		url,
		title,
		icon,
		isDrawer,
	}: {
		url?: string
		title: string
		icon: string
		isDrawer?: boolean
	}) {
		const pathname = usePathname()
		const urlCheck = url?.substring(1)
		return (
			<Link
				href={url ? url : "/"}
				className={`flex items-center ${
					isDrawer ? "bg-neutral-800 px-4 py-3" : "p-2"
				} group rounded-lg text-white`}
				onClick={() => setSidebarOpen(false)}
			>
				<Icon
					icon={icon ? icon : ""}
					className={`size-5 shrink-0 ${
						pathname === urlCheck ? "text-white" : "text-neutral-500"
					} transition duration-75 group-hover:text-white`}
				/>

				<span
					className={`flex-1 ${isDrawer ? "ml-2" : "ml-3"} whitespace-nowrap`}
				>
					{title}
				</span>
			</Link>
		)
	}
}
