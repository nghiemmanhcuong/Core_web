/*
 * Created Date: 08-02-2023, 14:30 pm
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

import React from 'react';
import { APP_ROUTERS } from './constants';

const LazyHome = React.lazy(() => import('../pages/Home'));

export const mainRouterConfigs = [
    {
        path: APP_ROUTERS.home,
        element: <LazyHome />
    }
];
