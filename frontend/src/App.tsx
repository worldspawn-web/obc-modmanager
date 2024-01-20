import { Theme } from '@radix-ui/themes';
import { Router } from './router';

export default function App() {
  return (
    <Theme appearance="dark">
      <Router />
    </Theme>
  );
}
