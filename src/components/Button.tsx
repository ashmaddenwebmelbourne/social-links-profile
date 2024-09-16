type ButtonProps = {
	linkText: string;
};

const Button = ({ linkText }: ButtonProps) => {
	return (
		<button className='bg-grey-700 text-white text-[14px] font-bold rounded-lg p-3 w-full cursor-pointer hover:bg-green hover:text-grey-700'>
			{linkText}
		</button>
	);
};

export default Button;
