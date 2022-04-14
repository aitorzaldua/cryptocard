//Eth enviroment context
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

//Fetch the contract 
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const TransactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        TransactionContract
    });
}


//Wrap all the app with the Contract Information
//All the info here can be used with all components
export const TransactionProvider = ({children}) => { 

    //useState to save the current account when connected:
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert ('Please, install Metamask');

            const accounts = await ethereum.request({method : 'eth_accounts'});

            //As this function is called at the start
            //If wallet is connected we set currentAccount to the account
            if(accounts.length) {
            setCurrentAccount(accounts[0]);

            console.log(accounts);

        }else {
            console.log('No accounts found');
        }

        }catch(error){
            console.log(error);
            throw new Error('No Ethereum Object');
        }

    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert ('Please, install Metamask');
            const accounts = await ethereum.request({method : 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);

        } catch(error) {
            console.log(error);
            throw new Error('No Ethereum Object');

        }
    }

    const sendTransaction = async () => {
        try{
            if (!ethereum) return alert ('Please, install Metamask');

            //Data from the form using the useState 'formData':
            

        }catch(error){
            console.log(error);
            throw new Error('No Ethereum Object');
        }
    }


    //useEffect to call checkIfWalletIsConnected just at the load 
    //of the Website
    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);



    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setformData, handleChange }}>
            {children}
        </TransactionContext.Provider>
    )

}