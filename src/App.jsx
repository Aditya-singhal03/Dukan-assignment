//import './App.css'
import Navbar from './components/Navbar'
import RevenueCard from './components/RevenueCard'
import Table from './components/Table'
import Sidebar from './components/sidebar'

function App() {

  const obj = [
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Processing",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹950.50"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    },
    {order:"#281209", 
    status:"Successful",
    transaction:"TRX123456",
    refund:"Today, 8:45 PM",
    amount:"₹1125.00"
    }
  ]

  return (
    <div className='flex'>
      <div className='w-[224px]'>
        <Sidebar/>
      </div>
      <div className='grow bg-[#FAFAFA]'>
        <div className='h-[67px]'>
          <Navbar/>
        </div>
        <div className='flex flex-col sm:p-8 gap-8 '>
          <div className='text-xl font-semibold'>Overview</div>
          <div className='flex justify-between flex-wrap gap-6'>
            <div className='grow'><RevenueCard header={"Next Payout"} amount={"2,312.23"} orders={"23"}></RevenueCard></div>
            <div className='grow'><RevenueCard header={"Next Payout"} amount={"2,312.23"} orders={"23"}></RevenueCard></div>
            <div className='grow'><RevenueCard header={"Next Payout"} amount={"2,312.23"} orders={"23"}></RevenueCard></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
