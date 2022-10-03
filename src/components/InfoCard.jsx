import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding: '0 10%'}}>
        Try Saying: <br />
         Add {isIncome? 'Income ' : 'Expense '}
         for {isIncome? '$100 ' : '$200 '}
         in category {isIncome? 'Business ' : 'Travel '}
         for {isIncome? 'Monday ' : 'Sataurday '} ...
    </div>
  )
}

export default InfoCard