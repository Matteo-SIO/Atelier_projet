export type GetUsagesRequest = {
    offset?: number;
    limit?: number;
}

export type CreateUsageRequest = {
    id_material: number;
    date_start: number;
    date_end: number;
}

export type UpdateUsageStateRequest = {
    state: string;
}

export type UsageRowResponse = {
    id: number;
    id_user: number;
    id_material: number;
    date_start: number;
    date_end: number;
    state: string;
}

export type GetUsagesResponse = UsageRowResponse[]
export type GetOneUsageResponse = UsageRowResponse

export type CreateUsageResponse = {
    success: boolean;
}

export type UpdateStateUsageResponse = {
    success: boolean;
}