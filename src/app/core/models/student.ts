import { Course } from "./course";

export interface Student{
    id: number,
    name: string,
    surname: string,
    email: string,
    adminPermission: string,
    inscriptions: String []
}