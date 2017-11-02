export interface Action {
    type: string,
    [key: string]: any
}

export interface UploadAnimal{
    isFetching: boolean,
    success: boolean,
    data: {
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
}

export interface AppState{
    upload_animal: UploadAnimal
}