import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Award, BadgeCheck, Shield, Star } from 'lucide-react'
import {
    Sheet,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'

import React from 'react'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import AppLineChart from '@/components/AppLineChart'

const SingleuserPage = () => {
  return (
    <div>
        <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>John Doe</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
{/* container */}
<div className='mt-4 flex flex-col gap-8 xl:flex-row'>
    {/* left side */}
    <div className='w-full xl:w-1/3 space-y-6'>
    {/* User Badge Container */}
    <div className='bg-primary-foreground p-4 rounded-lg '>
        <h1 className='text-xl font-semibold'>User Badges</h1>
        <div className='flex flex-wrap gap-2 mt-4'>
        <HoverCard>
            <HoverCardTrigger><BadgeCheck className='w-8 h-8 text-green-500 hover:text-green-600 cursor-pointer bg-green-500/20 p-1 rounded-full '/></HoverCardTrigger>
            <HoverCardContent>
                <h1 className='text-sm font-semibold'>Verified User</h1>
                <p className='text-sm text-muted-foreground'>This user has been verified and is a trusted member of the platform.</p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger><Shield className='w-8 h-8 text-white hover:text-white/70 cursor-pointer bg-blue-500/20 p-1 rounded-full '/></HoverCardTrigger>
            <HoverCardContent>
                <h1 className='text-sm font-semibold'>Admin</h1>
                <p className='text-sm text-muted-foreground'>This user has been verified and is a trusted member of the platform.</p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger><Award className='w-8 h-8 text-yellow-500 hover:text-yellow-600 cursor-pointer bg-yellow-500/20 p-1 rounded-full '/></HoverCardTrigger>
            <HoverCardContent>
                <h1 className='text-sm font-semibold'>Gold Member</h1>
                <p className='text-sm text-muted-foreground'>This user has been a member for a long time and has a lot of experience.</p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger><Star className='w-8 h-8 text-white/80 hover:text-white/70 cursor-pointer bg-yellow-500/10 p-1 rounded-full '/></HoverCardTrigger>
            <HoverCardContent>
                <h1 className='text-sm font-semibold'>Silver Member</h1>
                <p className='text-sm text-muted-foreground'>This user has been a member for a long time and has a lot of experience.</p>
            </HoverCardContent>
        </HoverCard>
        </div>
    </div>
    {/* INFORMATION CONTAINER */}
    <div className='bg-primary-foreground p-4 rounded-lg '>
        <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>User Information</h1>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Edit</Button>
                </SheetTrigger>
                <EditUser />
        </Sheet>    
        </div>
        <div className='space-y-4 mt-4 '>
            <div className='flex flex-col gap-2 mb-8'>
                <p className='text-sm text-muted-foreground'>Profile Completion</p>
                <Progress value={66} />
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>UserName:</span>
                <span>John Doe</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Email:</span>
                <span>john.doe@example.com</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Phone:</span>
                <span>+8801713611820</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Location:</span>
                <span>Mirpur, Bangladesh</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-bold'>Role:</span>
                <Badge> Admin </Badge>
            </div>
            <p className='text-sm text-muted-foreground mt-4'>Joined on 12th July 2025</p>
        </div>
    </div>
    {/* CARDLIST CONTAINER */}
    <div className='bg-primary-foreground p-4 rounded-lg '>
        <CardList title="Latest Transactions" />
    </div>
    </div>

    {/* Right side */}
    <div className='w-full xl:w-2/3 space-y-6'>
    {/* USER CARD CONTAINER */}
    <div className='bg-primary-foreground p-4 rounded-lg space-y-2'>
        <div className='flex items-center gap-2'>
            <Avatar className='size-12'>
                <AvatarImage src="https://avatars.githubusercontent.com/u/141726486?v=4" />
                <AvatarFallback>RK</AvatarFallback>
            </Avatar>
            <h1 className='text-xl font-semibold'>Rokibul Islam</h1>
        </div>
        <p className='text-sm text-muted-foreground'>Joined on 12th July 2025</p>
        </div>
    {/* CHART CONTAINER */}
    <div className='bg-primary-foreground p-4 rounded-lg '>
        <h1 className='text-xl font-semibold'>User Activity</h1>
        <AppLineChart />
    </div>
    </div>


</div>
    </div>
  )
}

export default SingleuserPage