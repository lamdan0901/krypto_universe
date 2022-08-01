require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/qiSVSM4Bq59IZ1BhxOiF-IPB1NYedkBL",
      accounts: [
        "ed7e318bd714256d4677abc5bf9140f17ab9abae6628cef9c520733b5d4c7d71",
      ],
    },
  },
};
// npx hardhat run scripts/deploy.js --network goerli
