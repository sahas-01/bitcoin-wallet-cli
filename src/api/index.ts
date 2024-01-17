import axios from 'axios';

import { API_TOKEN, BASE_URL } from '../utils';

class APICalls {

    // Function to Create a wallet
    async createWallet(wallet: object) {
        const addWalletResponse = await axios.post(
            `${BASE_URL}/wallets?token=${API_TOKEN}`,
            wallet
        );
        return addWalletResponse.data;
    }

    // Function to generate an address
    async generateAddress() {
        const addressResponse = await axios.post(
            `${BASE_URL}/addrs?token=${API_TOKEN}`
        );
        return addressResponse.data;
    }

    // Get details of an address by passing the address
    async getAddressDetails(address: string) {
        const addressDetails = await axios.get(
            `${BASE_URL}/addrs/${address}`
        );
        return addressDetails.data;
    }

    // Get details of a wallet's addresses by passing the wallet name
    async getAddressesOfWallet(walletName: string) {
        const addressesOfWallet = await axios.get(
            `${BASE_URL}/wallets/${walletName}/addresses?token=${API_TOKEN}`
        );
        return addressesOfWallet.data;
    }

    // Get balance of a wallet by passing the address
    async getBalanceOfAddress(address: string) {
        const addressBalance = await axios.get(
            `${BASE_URL}/addrs/${address}/balance`
        );
        console.log(addressBalance.data);
        return addressBalance.data;
    }

}

const api = new APICalls
export default api
