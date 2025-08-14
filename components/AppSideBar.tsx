
const items = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Inbox",
    url: "#",
    icon: <Inbox />,
  },
  {
    title: "Calendar",
    url: "#",
    icon: <Calendar />,
  },
  {
    title: "Search",
    url: "#",
    icon: <Search />,
  },
  {
    title: "Settings",
    url: "#",
    icon: <Settings />,
  },

]


import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronDown, ChevronUp, FolderPlus, Home, Inbox, LogOut, Plus, Projector, Search, Settings, User,} from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";


const AppSideBar = () => {
  return (
      <Sidebar collapsible="icon">
        <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
            asChild
            >
              <Link href="/">
                <Image src="/logo2.jpeg" alt="logo" width={32} height={32} className="rounded-full" /> <span>Dev Rokib</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.icon} {item.title}</Link>
                    </SidebarMenuButton>
                    {item.title === "Inbox" && (
                      <SidebarMenuBadge>23</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">New Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Projector />
                      <span>Existing Projects</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <FolderPlus />
                      <span>Create Project</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Collapsible Group */}
          <Collapsible defaultOpen className='group/collapsible'>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>Collapsable Group <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" /></CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="#">
                          <Projector />
                          <span>Existing Projects</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="#">
                          <FolderPlus />
                          <span>Create Project</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          {/* Nested Sidebar Group */}
          <SidebarGroup>
            <SidebarGroupLabel>
              Nested Items
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <FolderPlus />
                      <span>See All Projects</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuSub>
                <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="#"><Plus/> Add Projects</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="#"><Plus/> Add Category</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
        </SidebarContent>


    
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User /> Rokib <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <User /> Rokib
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    <LogOut /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
  )
}

export default AppSideBar