import { CheckPoint } from "./check-point";

export enum Level{

    ZeroLevel = 0,

    FirstLevel = 1,

    SecondLevel = 2, 

    ThirdLevel = 3,

    LabLevel = 4,

    JuniorLevel = 5
}

export interface CheckList{

    id: number;

    name: string;

    level: Level;

    checkPoints: CheckPoint[];
}

