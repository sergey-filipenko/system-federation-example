import React from "react";

const Button = React.lazy(() => {
    console.log('app_three/Button');
    return import("app_three/Button")
});
import("app_four/app").then((response) => {
  response.setup();
})

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
    <React.Suspense fallback="Loading Styled Component Button...">
      <Button>&#128133; </Button>
    </React.Suspense>
  </div>
);

export default Page2;
