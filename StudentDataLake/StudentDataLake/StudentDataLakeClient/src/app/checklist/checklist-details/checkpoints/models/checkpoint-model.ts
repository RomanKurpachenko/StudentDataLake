import { Checkpoint } from "src/app/models/check-point";


export interface CheckpointModel {

    checkPoint: Checkpoint;

    isNewCheckPoint: boolean;

    isDataAddedOrUpdated: boolean;
}