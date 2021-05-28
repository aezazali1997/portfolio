import React from "react";
import { data } from "../data/data";
console.log(data);
interface ISkills {
	name: String;
	values: String[];
}
const Props = {
	class: {
		name: String,
		comment: String,
		const: {
			name: String,
			variables: {
				birthDay: String,
				age: String,
				hobby: String,
				personality: String,
			},
		},
	},
	methods: [
		{
			name: String,
			array: [],
		},
	],
};
const defaultValue = {};
const AppContex = React.createContext(defaultValue);
export default AppContex;
/* 
class: {
	methods: [
		{
			name: "skills",
			array: [
				{
					name: "Frontend",
					values: ["React", "Angular", "Vue", "Jquery"],
				},
				{
					name: "Backend",
					values: ["Node", "PHP", "Exoress"],
				},
				{
					name: "Databases",
					values: ["MongoDB", "Angular", "Vue", "Jquery"],
				},
			],
		},
		{
			name: "experience",
			return: {
				company: "Mushaaf IT",
				skills: ["HTML/CSS/Bootstrap", "React", "Wordpress"],
				time: "2020-2021",
			},
		},
		{
			name: "education",
			return: {
				university: "Air University",
				bachelors: "BS Computer Science",
				city: "Islamabad",
				started: "2016",
				graduated: "2020",
			},
		},
	],
};
*/
