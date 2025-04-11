export type User = {
    id: number;
    name: string;
    email: string;
};

export type Credentials = {
    email: string;
    password: string;
    remember?: boolean;
};
