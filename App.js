import AppStack from "./src/components/stacks/AppStack";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  );
}
