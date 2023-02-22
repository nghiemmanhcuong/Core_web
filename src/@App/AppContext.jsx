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

import reducer, { initState } from './Web/store/reducer';
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
