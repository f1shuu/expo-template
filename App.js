import { registerRootComponent } from 'expo';

import Loader from './Loader';

export default function App() {
  return (
    <Loader />
  )
}

registerRootComponent(App);
