import useStretchText from '@/hooks/useStretchText';

const StretchText = ({
	text,
	className = '',
	delay = 0,
	probability = 0.2,
}: {
	text: string;
	className?: string;
	delay?: number;
	probability?: number;
}) => {
	const refs = useStretchText({ delay, probability });
	return (
		<div className={className}>
			{text.split('').map((char, i) => (
				<span
					key={i}
					ref={(el) => {
						if (el) refs.current[i] = el;
					}}
					className="inline-block"
				>
					{char}
				</span>
			))}
		</div>
	);
};

export default StretchText;
