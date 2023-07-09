import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
interface IProps {
	children: PropsWithChildren;
	activeIndex: String;
	onChange: Function;
}
const ButtonGroup = ({ children, activeIndex, onChange }: IProps) => {
	return <div>ButtonGroup</div>;
};

export default ButtonGroup;
