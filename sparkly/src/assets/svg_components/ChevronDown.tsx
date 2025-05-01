interface ChevronDownProps {
	className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({}) => {
	return (
		<div>
			<svg
				width='18'
				height='18'
				viewBox='0 0 18 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M4.5 6.75L9 11.25L13.5 6.75'
					stroke='#141219'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	);
};

export default ChevronDown;
