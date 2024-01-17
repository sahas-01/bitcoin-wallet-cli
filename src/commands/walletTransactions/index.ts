import { Args, Command } from '@oclif/core';
import axios from 'axios';
// import { address } from 'bitcoinjs-lib';
// import * as bitcoin from 'bitcoinjs-lib';
import * as fs from 'node:fs';

import api from '../../api';
import { BASE_URL } from '../../utils';

interface Wallet {
    address: string;
    mnemonic: string;
    name: string;
}

export default class WalletTransactions extends Command {
    static args = {
        name: Args.string({ description: `Get transactions of a wallet's address`, required: true }),
    };

    static description = `Get transactions of a wallet's address`;

    async run(): Promise<void> {
        try {
            const { args } = await this.parse(WalletTransactions);
            console.log('Getting transactions of wallet:', args.name);
            const fileName = 'wallets.json';

            if (fs.existsSync(fileName)) {
                const data = fs.readFileSync(fileName, 'utf8');
                const wallets: Wallet[] = JSON.parse(data);
                const selectedWallet = wallets.find((wallet) => wallet.name === args.name);
                if (!selectedWallet) {
                    throw new Error(`Wallet ${args.name} not found in storage.`);
                }

                const addressesOfWallet = await api.getAddressesOfWallet(selectedWallet.name);
                const addresses: [] = addressesOfWallet.addresses || [];

                for (const address of addresses) {
                    // eslint-disable-next-line no-await-in-loop
                    const addressDetails = await axios.get(
                        `${BASE_URL}/addrs/${address}/full`)
                    console.log('Transaction Details of address:', addressDetails.data.address, 'are:');
                    const transactionsOfAddress = addressDetails.data.txs || [];

                    if (transactionsOfAddress.length === 0) {
                        console.log('No transactions found for address:', address);
                    }

                    for (const transaction of transactionsOfAddress) {
                        console.log('Transaction Block Hash:', transaction.block_hash);
                        console.log('Value:', transaction.fees);
                    }
                }
            } else {
                console.log('No wallets found in storage.');
            }
        } catch (error) {
            throw new Error('Error getting wallet transactions: ' + error);
        }
    }

}