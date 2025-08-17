
const popularContent = [
    {
        id: 1,
        title: "Js Tutorial",
        badge: "coding",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
        count: 2130,
    },
    {
        id: 2,
        title: "React Tutorial",
        badge: "coding",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
        count: 2130,
    },
    {
        id: 3,
        title: "Python Tutorial",
        badge: "coding",
        image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHl0aG9ufGVufDB8fDB8fHww",
        count: 2130,
    },
    {
        id: 4,
        title: "Java Tutorial",
        badge: "coding",
        image: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmF2YXxlbnwwfHwwfHx8MA%3D%3D",
        count: 2130,
    },
    {
        id: 5,
        title: "C++ Tutorial",
        badge: "coding",
        image: "https://plus.unsplash.com/premium_photo-1669078519235-881c0db5b493?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEMlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
        count: 2130,
    }
];

const latestTransactions = [
    {
        id: 1,
        title: "Subscription Renewal",
        badge: "Samantha",
        image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        count: 2000,
    },
    {
        id: 2,
        title: "Payment Received",
        badge: "John Doe",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        count: 1500,
    },
    {
        id: 3,
        title: "Order Shipped",
        badge: "Jane Smith",
        image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        count: 1200,    
    },
    {
        id: 4,
        title: "Product Review",
        badge: "Aurora",
        image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        count: 1000,
    },
    {
        id: 5,
        title: "Product Review",
        badge: "Si Langley",
        image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        count: 1000,
    }
]


import React from 'react'
import { Card, CardContent, CardFooter,CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';

const CardList = ({title}: {title: string}) => {
const list = title === "popular content" ? popularContent :latestTransactions
  return (
    <div className=''>
        <h1 className='text-lg font-medium mb-6'>{title}</h1>
        <div className='flex flex-col gap-2'>
            {list.map((item)=> (
                <Card key={item.id} className='flex-row items-center justify-between gap-4 p-2'>
                    <div className='w-10 h-10 rounded-sm relative overflow-hidden'>
                        <Image src={item.image} alt={item.title} fill className='object-cover' />
                    </div>
                    <CardContent className='flex-1 p-0'>
                        <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                        <Badge variant='secondary' className='text-xs'>{item.badge}</Badge>
                    </CardContent>
                    <CardFooter className='p-0'>
                        {item.count/1000}k
                    </CardFooter>
                </Card>
            ))}

        </div>
    </div>
  )
}

export default CardList