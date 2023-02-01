interface SignIn{
    id: number;
    username: string;
    password: string;
    photo: string;
    token?: string | null;

}

export default SignIn;