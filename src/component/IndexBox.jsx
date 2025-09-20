import React from 'react'

function IndexBox( {
    label,
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyoptoins = [],
    selectCurrency = "usd",
    AmountDisable = false,
    currencyDisable = false

}) {
    return (
        <>
            <div className='bg-amber-50 p-3 rounded-lg text-sm flex'>
                <div className='w-1/2'>
                    <label className='text-black/40 mb-2 inline-block'>
                        {label}
                    </label>
                    <input
                        className='outline-none w-full bg-gray-100 rounded-lg py-1.5'
                        type="number"
                        placeholder=' Amount'
                        disabled = {AmountDisable}
                        value={amount}
                        onChange={(e) = onAmountChange && onAmountChange(Number(e.target.value)) }
                    />
                </div>
                <div className='w-1/2 flex flex-wrap justify-end text-right'>
                    <p className='text-black/40 mb-2 w-full'>
                        Currency Type
                    </p>
                    <select 
                    className='rounded-l-lg px-1 py-1 bg-gray-100
                    cursor-pointer outline-none'
                    value={selectCurrency}
                    onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
                    disabled ={currencyDisable}
                    >
                        {currencyoptoins.map((currency) => (
                            <option value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>

                </div>
            </div>
        </>
    )
}

export default IndexBox