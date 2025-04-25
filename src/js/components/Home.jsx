import React, { useState } from "react";
import Todo from "./Todo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Todo />
		</div>
	);
};

export default Home;
