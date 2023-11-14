export interface UserDB {
    id: number,
    pseudo: string,
    role: "EMPLOYEE"|'ADMIN'|'ADMIN',
    firstName: string,
    lastName: string
}