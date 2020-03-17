import React from "react";

const Dialog = React.lazy(() => {
    return Promise.all([System.import("app_two"), System.import('app_two/main.js')])
});

const Page1 = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <React.Suspense fallback="Loading Material UI Dialog...">
                <Dialog />
            </React.Suspense>
        </div>
    );
}

export default Page1;
