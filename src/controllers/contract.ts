
import { ethers } from 'ethers';
import { NextFunction, Request, Response } from 'express';

const API_KEY = process.env.API_KEY;


class ContractController {
  public mint = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(req?.body)
      const { address } = req?.body
      const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY)
      // console.log(API_KEY)
      
      const contract = require("../artifacts/contract.json");
      const privateKey = process.env.PRIVATE_KEY
      const signer = new ethers.Wallet(privateKey, provider)
      // // Get contract ABI and address
      const abi = contract
      const contractAddress = '0xf42cd94A584e4F9DCe966B2F994AFF70a5e69ff1'
      // console.log(abi)
      // Create a contract instance
      const myNftContract = new ethers.Contract(contractAddress, abi, signer)
      let nftTxn = await myNftContract.mint(address, Math.floor(Math.random() * 100000))
      await nftTxn.wait()
      console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
      // console.log(JSON.stringify(contract.abi));
      res.status(201).json({ message: `NFT Minted! Check it out at`, link: 'https://goerli.etherscan.io/tx/${nftTxn.hash' });
    } catch (error) {
      console.log(error, 'sdhjshdjshds')
      next(error);
    }
  };
}

export default ContractController;


