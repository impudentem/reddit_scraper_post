import fetch from "node-fetch";
import {encode} from "querystring";
import {IApi, IQueryOptions} from "./interfaces";


class Api implements IApi {
    base_url = "http://www.reddit.com/r/";

    get(category: string, query: IQueryOptions = {}): Promise<any> {
        let queryEnc: string = encode(query, "&");
        return fetch(`${this.base_url}${category}.json?${queryEnc}`)
            .then(res => res.json());
    }
}

export default Api
