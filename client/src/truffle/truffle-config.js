

module.exports = {
  networks: {
    development: {
      host: "192.168.1.5",
      port: 7545,
      network_id: 5777,
    },
  },
  compilers: {
    solc: {
      version: "0.8.9",
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};