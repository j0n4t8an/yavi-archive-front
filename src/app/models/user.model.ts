export interface CreateUserModel{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userTypeId: any;
    careerId:any;
}

export interface CareerModel{
    id:string;
    description:string;
}