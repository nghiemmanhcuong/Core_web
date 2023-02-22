/*
 * Created Date: 04-02-2023, 10:45 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import has from 'lodash.has';
import middlewares from './Middleware';
import createInstance from './Axios';

class BaseService {
    BASE_URL = '/';

    BASE_ENDPOINT = '/api';

    DEFAULT_LIMIT = 10;

    DEFAULT_PAGE = 1;

    DEFAULT_SORT = 'created_at desc';

    ALL_MIDDLEWARES = {
        ...middlewares
    };

    constructor(props) {
        if (has(props, 'BASE_URL')) {
            this.BASE_URL = props.BASE_URL;
        }

        if (has(props, 'BASE_ENDPOINT')) {
            this.BASE_ENDPOINT = props.BASE_ENDPOINT;
        }

        if (has(props, 'DEFAULT_SORT')) {
            this.DEFAULT_SORT = props.DEFAULT_SORT;
        }

        this.setRequest();
    }

    setRequest() {
        this.request = createInstance(this.BASE_URL, this.middleware);

        this.requestParams = {
            page: this.DEFAULT_PAGE,
            limit: this.DEFAULT_LIMIT,
            sort: this.DEFAULT_SORT
        };
    }

    middleware = (requestConfig) => {
        const arr = Object.values(this.ALL_MIDDLEWARES).map(m => {
            if (typeof m === 'function') {
                return m(requestConfig);
            }

            return m;
        });
        return arr;
    }

    list(query = {}) {
        const params = {
            ...this.requestParams,
            ...query
        };
        return this.request.get(this.BASE_ENDPOINT, { params });
    }

    find(id) {
        const url = `${this.BASE_ENDPOINT}/${id}`;
        return this.request.get(url);
    }
}

export default BaseService;
