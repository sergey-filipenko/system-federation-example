import {createBrowserRouter, createRoutesFromElements, Outlet, Route, Switch} from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import React from "react";

const router =
        <Route path="/" element={<Outlet />}>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
        </Route>

export default router;
