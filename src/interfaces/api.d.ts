import {IQueryOptions} from "./queryOptions";

export interface IApi {
    readonly base_url: string

    get(category: string, query: IQueryOptions): Promise<any>
}
