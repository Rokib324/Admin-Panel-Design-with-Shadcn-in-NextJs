"use client"

import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { CalendarIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import { Calendar } from './ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { format } from 'date-fns'

const TodoList = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [open, setOpen] = React.useState(false);
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-medium'>Todo List</h1>
            <Button variant='outline'>
                <PlusIcon className='w-4 h-4' />
            </Button>
        </div>
        {/* Calendar */}
        <div className='mt-4'>
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button variant='outline'>
                <CalendarIcon/>
                {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
        <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
        </Popover>
        </div>

        {/* list */}
        <ScrollArea className='max-h-[300px] mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-2'>
            {/* List Items */}
        <Card className='p-4'>
        <div className='flex gap-4 items-center justify-between'>
        <div className="flex items-center gap-2">
        <Checkbox id="todo-1" />
        <label htmlFor="todo-1">Home/Landing page design</label>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Button variant='ghost'>
            <Trash2Icon className='w-4 h-4' />
        </Button>
        </div>
        </div>
        </Card>
        <Card className='p-4'>
        <div className='flex gap-4 items-center justify-between'>
        <div className="flex items-center gap-3">
        <Checkbox id="todo-2" />
        <label htmlFor="todo-2">User authentication system</label>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Button variant='ghost'>
            <Trash2Icon className='w-4 h-4' />
        </Button>
        </div>
        </div>
        </Card>

        <Card className='p-4'>  
        <div className='flex gap-4 items-center justify-between'>
        <div className="flex items-center gap-3">
        <Checkbox id="todo-3" />
        <label htmlFor="todo-3">Database integration</label>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Button variant='ghost'>
            <Trash2Icon className='w-4 h-4' />
        </Button>
        </div>
        </div>
        </Card>
        <Card className='p-4'>
        <div className='flex gap-4 items-center justify-between'>
        <div className="flex items-center gap-3">
        <Checkbox id="todo-4" />
        <label htmlFor="todo-4">API development</label>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Button variant='ghost'>
            <Trash2Icon className='w-4 h-4' />
        </Button>
        </div>
        </div>
        </Card>

        <Card className='p-4'>
        <div className='flex gap-4 items-center justify-between'>
        <div className="flex items-center gap-3">
        <Checkbox id="todo-5" />
        <label htmlFor="todo-5">Testing and deployment</label>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <Button variant='ghost'>
            <Trash2Icon className='w-4 h-4' />
        </Button>
        </div>
        </div>
        </Card>
        </div>

        </ScrollArea>
    </div>
  )
}

export default TodoList