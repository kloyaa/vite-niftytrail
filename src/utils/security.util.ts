// import crypto from "crypto";

// export const encrypt = (json: {}, secretKey: string) => {
//     const text = JSON.stringify(json);
//     const algorithm = 'AES-256-CBC';
//     const key = crypto.scryptSync(secretKey, 'salt', 32);
//     const iv = crypto.randomBytes(16);
//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     let encrypted = cipher.update(text, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return {
//       iv: iv.toString('hex'),
//       encryptedData: encrypted
//     };
// };
  