import { PublicKey } from '@solana/web3.js';

type Networks = { [label: string]: Network };

export type Network = {
  // Cluster.
  label: string;
  url: string;
  explorerClusterSuffix: string;

  // Faucets.
  srmFaucet: PublicKey | null;
  msrmFaucet: PublicKey | null;

  // Programs.
  registryProgramId: PublicKey;
  lockupProgramId: PublicKey;

  // Staking instances.
  registrars: { [token: string]: PublicKey };

  // Whitelisted token mints.
  mints: { [token: string]: PublicKey };
};

export const networks: Networks = {
  mainnet: {
    // Cluster.
    label: 'Mainnet Beta',
    url: 'https://api.mainnet-beta.solana.com',
    explorerClusterSuffix: '',

    srmFaucet: null,
    msrmFaucet: null,

    registryProgramId: new PublicKey(
      'GrAkKfEpTKQuVHG2Y97Y2FF4i7y7Q5AHLK94JBy7Y5yv',
    ),
    lockupProgramId: new PublicKey(
      '6ebQNeTPZ1j7k3TtkCCtEPRvG7GQsucQrZ7sSEDQi9Ks',
    ),
    registrars: {
      srm: new PublicKey('5vJRzKtcp4fJxqmR7qzajkaKSiAb6aT9grRsaZKXU222'),
      msrm: new PublicKey('7uURiX2DwCpRuMFebKSkFtX9v5GK1Cd8nWLL8tyoyxZY'),
      fida: new PublicKey('5C2ayX1E2SJ5kKEmDCA9ue9eeo3EPR34QFrhyzbbs3qh'),
    },
    mints: {
      srm: new PublicKey('SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt'),
      msrm: new PublicKey('MSRMcoVyrFxnSgo5uXwone5SKcGhT1KEJMFEkMEWf9L'),
      fida: new PublicKey('EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp'),
    },
  },
  devnet: {
    // Cluster.
    label: 'Devnet',
    url: 'https://api.devnet.solana.com',
    explorerClusterSuffix: 'devnet',

    srmFaucet: null,
    msrmFaucet: null,

    registryProgramId: new PublicKey('GKGwQuHxbsUTSPWCiu6BuZ1Df48BUmueoAeDUbVuS9uH'),
    lockupProgramId: new PublicKey('DDbpojmDtMzMRWgVyt3JGwEMytPLA1VgD2yxYMmoehFK'),
    registrars: { token1: new PublicKey('9CsFUviWzC78UfXLpmxup38K7i8Pn4EnUyZQvnZNTtbU') },
    mints: { token1: new PublicKey('NsGtZjr3vgVq8JTmqJZ7vQxCURuUqKU2NSN5QswLAg2') },
  },

  // Fill in with your local cluster addresses.
  localhost: {
    // Cluster.
    label: 'Localhost',
    url: 'http://localhost:8899',
    explorerClusterSuffix: 'localhost',

    srmFaucet: null,
    msrmFaucet: null,

    registryProgramId: new PublicKey('4BRDqm1fLJxD2LPxn3Np6gC8inrrnm8PaAcq9KaJvMDQ'),
    lockupProgramId: new PublicKey('D1wyd4S1MN4fNM7M85pZUwp7kK84h4H5tjnVJFgeVtgZ'),
    registrars: { token: new PublicKey('VaMgx9rBVUGvfXn6KzpTwtEL4ne2KSbiVVx9KipbbqA') },
    mints: { token: new PublicKey('3LKWCipp5RhbaaXkS9FAY9p4x6MTmUgAo8YaWaQZkUHh') },

  },
};
