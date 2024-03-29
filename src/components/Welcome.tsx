interface welcomeProps {
	message: string;
}

const Welcome = ({ message }: welcomeProps) => {
	return <h1>{message}</h1>;
};

export default Welcome;
