export interface CheckList{

    id: number;

    name: string;

    level: Level
}

enum Level{

    ZeroLevel = 0,

    FirstLevel = 1,

    SecondLevel = 2, 

    ThirdLevel = 3,

    LabLevel = 4,

    JuniorLevel = 5
}