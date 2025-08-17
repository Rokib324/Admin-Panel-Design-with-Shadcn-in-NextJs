"use client"

import React from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { Input } from './ui/input'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from './ui/select'
import { Button } from './ui/button'
 
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50, { message: "Name must be less than 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(11, { message: "Phone number must be at least 11 digits" }).max(11, { message: "Phone number must be less than 11 digits" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }).max(50, { message: "Location must be less than 50 characters" }),
  role: z.enum(["admin", "user"]),
})

const EditUser = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+8801713611820",
          location: "Mirpur, Bangladesh",
          role: "admin",
        },
      })
  return (
    <div>
        <SheetContent>
                <SheetHeader>
                    <SheetTitle className='text-2xl font-bold mb-4'>Edit User Information</SheetTitle>
                    <SheetDescription asChild>
                        <Form {...form}>
                            <form className='space-y-8 w-full'>
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      This is your name.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      This is your email.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                      <Input placeholder="+8801713611820" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      This is your phone number.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                                <FormField control={form.control} name="location" render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Mirpur, Bangladesh" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                      This is your location.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                                <FormField control={form.control} name="role" render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Admin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="user">User</SelectItem>
                                        </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                      This is your role.
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )} />
                                <Button type="submit" className='w-full'>Save</Button>
                            </form>

                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
    </div>
  )
}

export default EditUser