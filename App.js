import Loader from './Loader';
import ThemeProvider from './providers/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
    </ThemeProvider>
  )
}

