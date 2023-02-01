interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    photo: string;
    password: string;
    token?: string | null;
}

export default User;