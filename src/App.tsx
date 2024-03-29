import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Components
import Welcome from './components/Welcome';

interface Count {
	max: number;
	min?: number;
}

function App() {
	const [count, setCount] = useState<Count>({ max: 5 });

	useEffect(() => {
		setCount({ max: 30, min: 2 });
	}, []);

  // Like it!

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<Welcome message='Vite + React - TEST' />
			<div className='card'>
				<button
					onClick={() =>
						setCount((count) => ({ ...count, max: count.max + 1 }))
					}
				>
					Increment
				</button>
				<div>count is {count.max}</div>
				<button
					onClick={() =>
						setCount((count) => ({ ...count, max: count.max - 1 }))
					}
				>
					Decrement
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
