import { Args, Command } from '@oclif/core';
import * as bip39 from 'bip39';
// import { address } from 'bitcoinjs-lib';
// import * as bitcoin from 'bitcoinjs-lib';

import api from '../../api';
import saveToFile from '../../utils/file-operations';

export default class CreateWallet extends Command {
  static args = {
    name: Args.string({ description: 'Name for the new wallet', required: true }),
  };

  static description = 'Create a new Bitcoin wallet';

  async run(): Promise<void> {
    const { args } = await this.parse(CreateWallet);
    try {
      // Create an addresses array to store all the addresses to be saved locally
      const addressesLocal = []
      // Generates an address from blockcypher testnet API
      const addressResponse = await api.generateAddress()
      console.log(addressResponse);

      // Generate a mnemonic
      const mnemonic = bip39.generateMnemonic();
      console.log('Mnemonic:', mnemonic);

      addressesLocal.push(addressResponse.address)
      // // Save the details to be stored locally and can be retrieved later
      const walletLocal = {
        addressesLocal,
        mnemonic,
        name: args.name,
      };

      console.log(walletLocal);

      if (!saveToFile.isWalletNameUnique(walletLocal.name)) {
        throw new Error('Wallet name already exists. Choose a unique name.');
      }

      saveToFile.saveToWallet(walletLocal);

      // // Send the details to blockcypher testnet API to create a wallet
      const walletBlockCypher = {
        addresses: walletLocal.addressesLocal,
        name: walletLocal.name,
      };
      console.log(walletBlockCypher);
      const blockCypherResponse = await api.createWallet(walletBlockCypher)
      console.log(blockCypherResponse);

      // console.log('Wallet created successfully:');
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
