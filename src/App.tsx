import Avatar from './components/Avatar';
import Heading from './components/Heading';
import Location from './components/Location';
import Bio from './components/Bio';
import Button from './components/Button';
import './App.css';

function App() {
	const links: string[] = ['Github', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];

	const socialButtons = links.map((link: string, index: number) => {
		return <Button key={index} linkText={link} />;
	});

	return (
		<main className='flex flex-col justify-center items-center gap-6 bg-grey-800 p-6 tablet:p-10 rounded-xl tablet:w-[384px] m-auto'>
			<Avatar />
			<div className='flex flex-col items-center gap-1'>
				<Heading />
				<Location />
			</div>
			<Bio />
			<div className='flex flex-col gap-4 w-full'>{socialButtons}</div>
		</main>
	);
}

export default App;
