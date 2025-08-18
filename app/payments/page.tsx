import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

 const getData = async (): Promise<Payment[]>=> {
    return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "me@example.com",
      username: "John Doe",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "success",
      email: "me@example.com",
      username: "John Doe",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "success",
        email: "notme@example.com",
        username: "John Doe",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "notme@example.com",
        username: "John Doe",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "pending",
        email: "batssme@example.com",
        username: "John Doe",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "failed",
        email: "example@gmail.com",
        username: "John Doe",
    },
    
    {
        id: "489e1d42",
        amount: 125,
        status: "success",
        email: "example@gmail.com",
        username: "John Doe",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
      username: "John Doe",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
    username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "failed",
  email: "example@gmail.com",
  username: "John Doe",
},

{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "success",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "success",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "success",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "success",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "failed",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "pending",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "processing",
  email: "example@gmail.com",
  username: "John Doe",
},
{
  id: "489e1d42",
  amount: 125,
  status: "success",
  email: "example@gmail.com",
  username: "John Doe",
}

  ] }

const PaymentsPage = async () => {
    const data = await getData()
  return (
    <div>
        <div className='mb-8 px-4 py-2 bg-primary-foreground rounded-lg'>
            <h1 className='text-xl font-semibold'>All Payments</h1>
        </div>
        <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentsPage