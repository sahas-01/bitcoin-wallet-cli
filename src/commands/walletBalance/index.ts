import { Args, Command } from '@oclif/core';
// import { address } from 'bitcoinjs-lib';
// import * as bitcoin from 'bitcoinjs-lib';
import * as fs from 'node:fs';

import api from '../../api';
import saveToFile from '../../utils/file-operations';

export default class WalletBalance extends Command {
    static args = {
        name: Args.string({ description: 'Get balance of a wallet', required: true }),
    };

    static description = 'Get balance of a wallet';

    async run(): Promise<void> {
        try {
            const { args } = await this.parse(WalletBalance);
            console.log('Getting balance of wallet:', args.name);
            const fileName = 'wallets.json';

            if (fs.existsSync(fileName)) {
                const wallets = saveToFile.retrieveWallets(fileName);
                const selectedWallet = wallets.find((wallet) => wallet.name === args.name);
                if (!selectedWallet) {
                    throw new Error(`Wallet ${args.name} not found in storage.`);
                }

                const addressesOfWallet = await api.getAddressesOfWallet(selectedWallet.name);
                const addresses: [] = addressesOfWallet.addresses || [];
                console.log(addresses);
                // eslint-disable-next-line unicorn/no-array-for-each
                addresses.forEach(async (address) => {
                    const addressBalance = await api.getBalanceOfAddress(address);
                    console.log("Balance of address is:" + addressBalance.balance + "BCY");
                });
            } else {
                console.log('No wallets found in storage.');
            }
        } catch (error) {
            throw new Error('Error getting wallet balance: ' + error);
        }
    }

}
