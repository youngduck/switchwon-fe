import { HelmetProvider } from "react-helmet-async";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OvelayProvider } from "@youngduck/yd-ui/Overlays";

import { queryClient } from "@shared/provider/query-client";
import Router from "@shared/router/Router";

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <OvelayProvider>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </OvelayProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
