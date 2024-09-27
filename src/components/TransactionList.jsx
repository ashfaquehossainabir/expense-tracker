// Node Modules
import React, { useContext } from 'react'

// Context
import { GlobalContext } from '../context/GlobalState'

// Components
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {
            transactions == "" ? "No transactions here" : 
            transactions.map((transaction) => (
              <Transaction key={ transaction.id } transaction={ transaction }/>
            ))
          }
        </ul>
    </>
  )
}

export default TransactionList