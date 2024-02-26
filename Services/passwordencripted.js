const { scrypt , randomBytes } = require('crypto');
const { promisify } = require('util');
const { MongoClient } = require('mongodb');
const scryptAsync = promisify(scrypt);
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'pdDB';
const COLLECTION_NAME = 'Students';

exports.PasswordManager = class {
    static async getPasswordFromMongo(userId) {
        const client = new MongoClient(MONGO_URL);
        await client.connect();
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);
        const user = await collection.findOne({ _id: userId });
        await client.close();
        return user.password; // Assuming the password is stored in the 'password' field
    }

    static async encryptPassword(password) {
        const salt = randomBytes(8).toString('hex');
        const buffer = await scryptAsync(password.trim(), salt, 64);
        return `${buffer.toString('hex')}.${salt}`;
    }

    static async getPasswordAndEncrypt(userId) {
        const hashedPassword = await this.getPasswordFromMongo(userId);
        const encryptedPassword = await this.encryptPassword(hashedPassword);
        return encryptedPassword;
    }
};
