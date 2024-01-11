export type CreateTypeMaterialsRequest = {
    name: string;
}

export type UpdateTypeMaterialsRequest = {
    name?: string;
}

export type TypeMaterialsRowResponse = {
    id: number;
    name: string;
}
export type GetTypesMaterialsResponse = TypeMaterialsRowResponse[]

export type CreateTypeMaterialsResponse = {
    success: boolean;
}

export type DeleteTypeMaterialsResponse = {
    success: boolean;
}

export type UpdateTypeMaterialsResponse = {
    success: boolean;
}