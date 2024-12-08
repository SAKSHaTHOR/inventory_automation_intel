import React from 'react'
import Donudchart from '@/components/donudchart'
import Barchart from '@/components/barchart'
import MonthlyChart from '@/components/monthly-chart'

function page() {
  return (
    <div className='w-full p-10 py-14'>
        <div className="grid grid-col-1 md:grid-cols-4 justify-between gap-8">
            <div className='col-span-1'><Donudchart /></div>
            <div className='col-span-1 md:col-span-1'><Barchart /></div>
            <div className='col-span-1'><Donudchart /></div>
            <div className='col-span-1 md:col-span-1'><Barchart /></div>
        </div>
        <div className="grid grid-cols-4 justify-between gap-8 pt-5">
            <div className='col-span-4'><MonthlyChart/></div>
        </div>
    </div>
  )
}

export default page