export interface AppAction {
    type: string,
    [key: string]: any
}

export interface AppState{
    isFetching: boolean,
    success: boolean,
    data: any
}

export interface AnimalInfo{
    name: string,
    breed: string,
    color: string,
    gender: number,
    age: string,
    nature: string,
    vaccine: number,
    expelling: number,
    neutering: number,
    origin: string,
    deposit: number,
    remark: string
}
/* 
export interface AppState{
    upload_animal: UploadAnimal
} */