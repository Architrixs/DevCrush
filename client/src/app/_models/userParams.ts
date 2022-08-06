import { User } from "./user";

export class UserParams {
    gender: string;
    minAge = 18;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 36;
    orderBy = 'lastActive';

    constructor(user: User) {
        this.gender = user.gender === 'Female' ? 'Male' : 'Female'
    }
}