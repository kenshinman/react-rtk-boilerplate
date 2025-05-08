import {Provider as ReduxProvider} from "react-redux";

import store from "../state/store";

export default function Providers({children}: {children: React.ReactNode}) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
