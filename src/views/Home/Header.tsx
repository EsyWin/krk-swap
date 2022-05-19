import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'

const Header = () => {
    return (
        <div className="navbar w-screen mb-2 shadow-lg bg-black text-neutral-content">
            <div className='w-full d-flex space-around'>
            <div className="flex-1 px-2 mx-2">
                <span className="text-md font-bold">krk.finance</span>
            </div>
            <div className="flex-none mr-0">
                <WalletMultiButton className="btn" />
            </div>
            </div>
            
        </div>
    )
}

export default Header
