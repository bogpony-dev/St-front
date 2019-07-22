import React from 'react';
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage"
import HomePage from "./home/HomePage"
import Header from "./common/Header"
import PageNotFound from './pageNotFound';
import StocksPage from './stocks/StocksPage';

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/stocks" component={StocksPage} />
				<Route path="/about" component={AboutPage} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
