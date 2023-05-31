const { base } = require("../Services/api-constants");

module.exports = {
  networks: {
    development: {
      host: base,
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