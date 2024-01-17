import { Args, Command } from '@oclif/core';

import saveToFile from '../../utils/file-operations';

export default class ListWallets extends Command {
    static args = {
        name: Args.string({ description: 'List Wallets in Storage', required: false }),
    };

    static description = 'List wallets present in storage';

    async run(): Promise<void> {
        try {
            const fileName = 'wallets.json';

            // Check if the file exists
            const retrievedFiles = saveToFile.retrieveWallets(fileName);
            if (retrievedFiles.length === 0) {
                console.log('No wallets found in storage.');
            } else {
                // printing the names of the wallets
                console.log('Wallets found in storage:');
                for (const wallet of retrievedFiles) {
                    console.log(wallet.name);
                }
            }
        } catch (error) {
            throw new Error('Error listing wallets: ' + error);
        }
    }
}
