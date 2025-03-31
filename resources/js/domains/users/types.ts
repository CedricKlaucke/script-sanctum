export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
    password_confirmation?: string;
};

export type UserErrors = {
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
};
