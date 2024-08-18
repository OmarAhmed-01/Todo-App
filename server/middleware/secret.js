import crypto from 'crypto';
const secret = crypto.randomBytes(64).toString('hex');
const base64Secret = Buffer.from(secret).toString('base64');

export default base64Secret;
