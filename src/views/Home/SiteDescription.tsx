import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ENV } from '../../constants';

const SiteDescription = () => {
    const { publicKey } = useWallet();

    return (
        <div className="w-full text-center pt-2">
            <div className="hero">
                <div className="text-center hero-content">
                    <div>
                        {/* <div className="max-w-md">
                            {publicKey
                                ? (
                                    <>Your address: {publicKey.toBase58()}</>
                                )
                                : (
                                    <div>
                                        <p>Wallet not connected</p>
                                        <div className='flex justify-center'>
                                            <WalletMultiButton />
                                        </div>
                                    </div>
                                )
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteDescription
