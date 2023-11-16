require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PK],
    },
    bscTestnet: {
      url: "https://bsctestapi.terminet.io/rpc",
      accounts: [process.env.PK],
    },
    moonbaseAlfa: {
      url: "https://rpc.testnet.moonbeam.network",
      accounts: [process.env.PK],
    },
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [process.env.PK],
    },
    wanchainTestnet: {
      url: "https://gwan-ssl.wandevs.org:46891",
      accounts: [process.env.PK],
    },
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      accounts: [process.env.PK],
    },
    astar: {
      // url: 'https://astar-mainnet.g.alchemy.com/v2/3A48KG9F7zeoEXkJWpNYbQwpnOHUVWOU',
      url: "https://evm.astar.network",
      accounts: [process.env.PK],
    },
    optimisticEthereum: {
      url: "https://opt-mainnet.g.alchemy.com/v2/EA2PhKrouVck-pDZscwY8AEGv_G-TXvj",
      accounts: [process.env.PK],
    },
    telos_testnet: {
      url: "https://testnet.telos.net/evm",
      accounts: [process.env.PK],
    },
    telos_mainnet: {
      url: "https://mainnet.telos.net/evm",
      accounts: [process.env.PK],
    },
    fxTestnet: {
      url: "https://testnet-fx-json-web3.functionx.io:8545",
      accounts: [process.env.PK],
    },
    fxMainnet: {
      url: "https://fx-json-web3.functionx.io:8545",
      accounts: [process.env.PK],
    },
    gatherTestnet: {
      url: "https://testnet.gather.network",
      accounts: [process.env.PK],
    },
    gatherMainnet: {
      url: "https://mainnet.gather.network",
      accounts: [process.env.PK],
    },
    metisTestnet: {
      url: "https://goerli.gateway.metisdevops.link",
      accounts: [process.env.PK],
    },
    okbTestnet: {
      url: "https://okbtestrpc.okbchain.org",
      accounts: [process.env.PK],
    },
    wanTestnet: {
      gasPrice: 2e9,
      gasLimit: 2e7,
      bip44ChainId: 2147492648, // TODO fake chainID.
      url: "http://gwan-testnet.wandevs.org:36891",
      accounts: [process.env.PK],
    },
    wanMainnet: {
      gasPrice: 2000000000,
      url: "https://gwan-ssl.wandevs.org:56891",
      accounts: [process.env.PK],
    },
    zkSyncTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      accounts: [process.env.PK],
      ethNetwork: "goerli",
      zksync: true,
      // contract verification endpoint
      verifyURL:
        "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
    zkSyncMainnet: {
      // url: 'https://mainnet.era.zksync.io',
      url: 'https://zksync-era.blockpi.network/v1/rpc/public',
      accounts: [process.env.PK],
      ethNetwork: "mainnet",
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification',
      bip44ChainId: 1073741837,
    },
    polyZkTestnet: {
      //gasPrice:200000000,
      url: "https://rpc.public.zkevm-test.net",
      accounts: [process.env.PK],
      bip44ChainId: 1073741838,
      signCurveId: 0, // ecdsa
      hashType: 1, // keccak256
    },
    baseTestnet: {
      gasPrice: 1e6,
      url: "https://goerli.base.org",
      accounts: [process.env.PK],
      bip44ChainId: 1073741841,
    },
    baseMainnet: {
      url: "https://base.publicnode.com",
      accounts: [process.env.PK],
      bip44ChainId: 1073741841,
    },
    energiMainnet: {
      url: "https://nodeapi.energi.network",
      accounts: [process.env.PK],
      bip44ChainId: 2147493445,
    },
    polyZkMainnet: {
      //gasPrice:200000000,
      url: "https://zkevm-rpc.com",
      accounts: [process.env.PK],
      bip44ChainId: 0,
      signCurveId: 0, // ecdsa
      hashType: 1, // keccak256
    },
    lineaTestnet: {
      gasPrice: 3e9, // can not delete.
      url: "https://rpc.goerli.linea.build",
      accounts: [process.env.PK],
      bip44ChainId: 1073741842,
    },
    bitrockTestnet: {
      url: "https://testnet.bit-rock.io",
      accounts: [process.env.PK],
      bip44ChainId: 2154655314,
    },
  },
};
