export type GetMaterialsRequest = {
    active?: boolean;
    offset?: number;
    limit?: number;
}

export type CreateOneMaterialsRequest = {
    name: string;
    id_typeMaterial: number;
    active: boolean;
}

export type UpdateOneMaterialsRequest = {
    name?: string;
    id_typeMaterial?: number;
    active?: boolean;
}

export type GetMaterialsRowResponse = {
    id: number;
    name: string;
    id_typeMaterial: number;
    active: boolean;
}

export type GetMaterialsResponse = GetMaterialsRowResponse[]

export type GetOneMaterialsResponse = GetMaterialsRowResponse

export type CreateOneMaterialsResponse = {
    success: boolean;
}

export type UpdateOneMaterialsResponse = {
    success: boolean;
}

export type DeleteOneMaterialsResponse = {
    success: boolean;
}