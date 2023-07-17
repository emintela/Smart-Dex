const {expect} = require('chai')
const {ethers} = require('hardhat')


const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const AAVE = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";

describe("SwapExamples" , function(){

    it("swapExactInputSingle" , async function(){

        const accounts = await ethers.getSigners()

        const dai = await ethers.getContractAt("IERC20", DAI)
        const weth = await ethers.getContractAt("IWETH", WETH9)
        const usdc = await ethers.getContractAt("IERC20", USDC)
        const uni = await ethers.getContractAt("IERC20",UNI)
        const aave = await ethers.getContractAt("IERC20", AAVE)

        const SwapExamples = await ethers.getContractFactory("SwapExamples")

        const swapExamples = await SwapExamples.deploy();
        await swapExamples.deployed()

        const amountIn = 10n ** 18n

        // deposit eth
        await weth.connect(accounts[0]).deposit({value : amountIn})
        await weth.connect(accounts[0]).approve(swapExamples.address, amountIn)

        await swapExamples.swapExactInputSingle(amountIn)

        console.log("UNI Balance" , await uni.balanceOf(accounts[0].address))


    })
})