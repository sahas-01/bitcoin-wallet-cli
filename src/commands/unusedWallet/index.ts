import { Args, Command } from '@oclif/core';
// import { address } from 'bitcoinjs-lib';
// import * as bitcoin from 'bitcoinjs-lib';
import * as fs from 'node:fs';

import api from '../../api';
import saveToFile from '../../utils/file-operations';

export default class UnusedWallet extends Command {
    static args = {
        name: Args.string({ description: 'Name of the wallet', required: true }),
    };

    static description = 'Generates an unused address for a wallet(wallet without any transcations)';

    async run(): Promise<void> {
        const { args } = await this.parse(UnusedWallet);

        try {
            const fileName = 'wallets.json';

            if (fs.existsSync(fileName)) {
                // Check if the wallets exists in storage
                const wallets = saveToFile.retrieveWallets(fileName);

                if (wallets.length === 0) {
                    console.log('No wallets found in storage.');
                    return;
                }

                // Checking for the walletName in the wallets array
                const selectedWallet = wallets.find((wallet) => wallet.name === args.name);

                if (!selectedWallet) {
                    throw new Error(`Wallet ${args.name} not found in storage.`);
                }

                console.log('Getting unused address for wallet:', selectedWallet);

                // Getting the addresses of the selected wallet
                const addressesOfWallet = await api.getAddressesOfWallet(selectedWallet.name);

                const addresses: [] = addressesOfWallet.addresses || [];

                // Checking if the addresses have any transactions
                for (const address of addresses) {
                    // eslint-disable-next-line no-await-in-loop
                    const addressDetails = await api.getAddressDetails(address);
                    const transactions = addressDetails.txrefs || [];
                    if (transactions.length === 0) {
                        console.log('Unused address:', address);
                    } else {
                        console.log('No unused address found for wallet:', selectedWallet.name);
                    }
                }

            } else {
                console.log('No wallets found in storage.');
            }
        } catch (error) {
            throw new Error('Error generating unused address: ' + error);
        }
    }
}
