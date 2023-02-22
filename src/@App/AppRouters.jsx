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

import { createBrowserRouter } from 'react-router-dom';
import { mainRouterConfigs } from '@App/Web/configs/routerConfigs';

import Page404 from './Web/pages/Errors/Page404';
import MainLayout from './Web/components/Layout/MainLayout';

const appRouterConfigs = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout />,
        children: [
            ...mainRouterConfigs,
            {
                path: '*',
                element: <Page404 />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]);

export default appRouterConfigs;
