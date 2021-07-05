import { Student } from "src/app/models/student";

export interface StudentModel {

    isNewStudent: boolean;

    student: Student;

    isDataAddedOrUpdated: boolean;
}