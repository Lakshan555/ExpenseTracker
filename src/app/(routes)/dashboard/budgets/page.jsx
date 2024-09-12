import React from 'react'
import BudgetList from './_components/BudgetList'

function Budgets() {
  return (
    <div className='md:p-10 p-5'>
      <h2 className='font-bold text-2xl md:text-3xl'>My Budgets</h2>
      <BudgetList/>
    </div>
  )
}

export default Budgets
