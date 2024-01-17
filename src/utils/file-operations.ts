import * as fs from 'node:fs';

import { Wallet } from '../interfaces';

class FileOperations {
    isWalletNameUnique(walletName: string): boolean {
        const fileName = 'wallets.json';
    
        if (fs.existsSync(fileName)) {
          const data = fs.readFileSync(fileName, 'utf8');
          const wallets = JSON.parse(data);
    
          // Check if a wallet with the same name already exists
          return !wallets.some((wallet: Wallet) => wallet.name === walletName);
        }
    
        return true; // If the file doesn't exist, consider the name as unique
      }

    retrieveWallets(fileName: string): Wallet[] {
        if (fs.existsSync(fileName)) {
            const data = fs.readFileSync(fileName, 'utf8');
            return JSON.parse(data);
        }

        return [];
    }

    saveToWallet(wallet: object) {
        const fileName = 'wallets.json';
        let wallets = [];

        if (fs.existsSync(fileName)) {
            const data = fs.readFileSync(fileName, 'utf8');
            wallets = JSON.parse(data);
        }

        wallets.push(wallet);
        fs.writeFileSync(fileName, JSON.stringify(wallets));
        console.log(`Wallet saved locally:`);
        // console.log(`Wallet saved locally: ${wallet.name}`);
    }

}

const fileOperations = new FileOperations
export default fileOperations
