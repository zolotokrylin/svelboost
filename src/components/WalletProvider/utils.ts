export const signatureMessage = `Welcome to Amplify: %nonce%`;

export const errorCodes = {
    PROVIDER_LOCKED: "provider-locked",
    PROVIDER_MISSING: "provider-missing",
    WRONG_CHAIN: "wrong-chain",
    CONNECTION_FAILED: "connection-failed",
    PERMISSIONS_DENIED: "permission-denied",
    SIGNATURE_DENIED: "signature-denied",
};

export const STATUS = {
    DISCONNECTED: 1,
    ACTIVE: 2,
    CONNECTING: 3,
};

export const CHAINS = {
    MAIN: 1,
    RINKEBY: 4,
    MATIC: 137,
};