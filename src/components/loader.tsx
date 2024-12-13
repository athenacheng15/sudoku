import { Grid } from "react-loader-spinner";

export const Loader = () => (
	<Grid
		visible={true}
		height="80"
		width="80"
		color="#7D6846"
		ariaLabel="grid-loading"
		radius="12.5"
		wrapperClass="grid-wrapper"
	/>
);
