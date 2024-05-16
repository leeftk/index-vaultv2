import React, { useState } from 'react';
import './MintToken.css';

function MintToken() {
    const [amount, setAmount] = useState('');

    const handleMint = () => {
        if (amount <= 0) {
            alert('Please enter a valid number of tokens to mint.');
            return;
        }
        console.log('Minting', amount, 'tokens');
        // Integration with Web3.js will go here
    };

    return (
        <div className="container">
            <div className="banner">
                <div className="ticker-wrap">
                    <div className="ticker">
                        <div className="ticker-item">DOGINME: <span className="percentage">100%</span></div>
                        <div className="ticker-item">NUB: <span className="percentage">78%</span></div>
                        <div className="ticker-item">CATNIP: <span className="percentage">45%</span></div>
                        <div className="ticker-item">MOONTOK: <span className="percentage">-30%</span></div>
                        {/* Add more tokens as needed */}
                    </div>
                </div>
            </div>
            <div className="card">
                <h1>Mint Shares</h1>
                <div className="input-area">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount to Deposit"
                    />
                    <button onClick={handleMint}>Mint</button>
                </div>
            </div>
        </div>
    );
}

export default MintToken;
