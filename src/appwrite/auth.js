import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(conf.appwriteProjectId);
        this.account = new Account()
    }
    async createAccount(email, password, name) {
        try {
            return this.account.create(ID.unique(), email, password, name)
        } catch (error) {
            throw error
        }
    }

    async login(email, password) {
        try {
            return this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async login(email, password) {
        try {
            return this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getUser() {
        try {
            return this.account.get()
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            return this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }

}


const authService = new AuthService()

export default authService