import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "fiap_farm_analytics",
  filename: "remoteEntry.js",
  exposes: {
    ".": "./src/components/AnalyticsComponent.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router-dom": { singleton: true },
  },
});
