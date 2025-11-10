import { useState } from 'react';

import { Case, Default, Switch } from '~/components/switch-case';

import type { Route } from './+types/react-virtuoso';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Switch Case - Switch Case Component' }, { name: 'description', content: 'Switch Case Component' }];
}

const Page = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [count, setCount] = useState(5);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Status: {status}</h1>

      <br />

      <Switch value={status}>
        <Case when='idle'>🕒 Waiting...</Case>
        <Case when='loading'>⏳ Loading...</Case>
        <Case when='success'>✅ Done!</Case>
        <Case when='error'>❌ Failed</Case>
        <Default>⚙️ Unknown state</Default>
      </Switch>

      <br />

      <Switch<number> value={count} match='first'>
        <Case<number> when={v => v < 0}>Negative number ❌</Case>
        <Case when={0}>Zero 🟡</Case>
        <Case<number> when={v => v > 0 && v < 10}>Between 1 and 9 ✅</Case>
        <Case<number> when={v => v >= 10}>10 or more 🚀</Case>
        <Default>Unknown 🤔</Default>
      </Switch>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className='primary' onClick={() => setStatus('idle')}>
            Idle
          </button>
          <button className='primary' onClick={() => setStatus('loading')}>
            Loading
          </button>
          <button className='primary' onClick={() => setStatus('success')}>
            Success
          </button>
          <button className='primary' onClick={() => setStatus('error')}>
            Error
          </button>
        </div>

        <br />

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className='primary' onClick={() => setCount(c => c - 1)}>
            -1
          </button>
          <button className='primary' onClick={() => setCount(c => c + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
