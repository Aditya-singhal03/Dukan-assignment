import React from 'react'

const Table = ({obj}) => {
  return (
    <div className='p-3 shadow-md rounded-sm flex flex-col gap-3'>
        <div className='flex justify-between'>
            <div class="flex items-center p-3 gap-2 rounded-sm border-2 w-full max-w-[300px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search features, tutorials, etc." className="w-full" />
            </div>
            <div className='flex gap-3'>
                <div className='flex border-2 px-3 py-[6px] justify-center items-center gap-1 rounded-md'>
                    <div className='text-lg text-[#4D4D4D]'>Sort</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
                <div className='flex border-2 p-2 justify-center items-center rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full  text-left rtl:text-right ">
                <thead class="text-base text-[#4D4D4D] bg-[#F2F2F2] ">
                    <tr>
                        <th scope="col" class="px-6 py-3 rounded-l">
                        Order ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Transaction ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Refund Date	
                        </th>
                        <th scope="col" class="px-6 py-3 rounded-r text-right">
                        Order Amount
                        </th>
                    </tr>
                </thead>
                <tbody className='text-sm text-[#4D4D4D]'>
                    {obj.map((ele,idx)=>(
                        <tr class={`${idx===obj.length-1?"":"border-b border-gray-700"}`} key={idx}>
                            <td class="px-6 py-4 text-[#136DB4] font-medium">
                            {ele.order}
                            </td>
                            <td class="px-6 py-4 flex items-center gap-1">
                            <span className={`block ${ele.status==="Successful"?"bg-green-500":"bg-gray-500"}  w-[10px] h-[10px] rounded-full `}></span>
                            {ele.status}
                            </td>
                            <td class="px-6 py-4">
                            {ele.transaction}	
                            </td>
                            <td class="px-6 py-4">
                            {ele.refund}	
                            </td>
                            <td class="px-6 py-4 text-right">
                            {ele.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Table