interface UserLogin{
    id: number;
    username: string;
    password: string;
    token?: string | null;

}

export default UserLogin;