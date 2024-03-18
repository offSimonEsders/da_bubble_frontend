export class User {
    username: string;
    email: string;
    password: string;
    avatar: Blob;

    constructor(username: string, email: string, password: string, avatar: Blob) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
}
