"use client"

import { execHaloCmdWeb } from '@arx-research/libhalo/api/web';
import React, { useState } from 'react';

export default function App() {
	const [statusText, setStatusText] = useState('Loading..');

	async function btnClick() {

		let command =
		{
			"name": "store_graffiti",
			"slotNo": 1,
			"data": "ethgl.vercel.app"
		}
		let res;

		try {
			res = await execHaloCmdWeb(command);
			setStatusText(JSON.stringify(res, null, 4));

		} catch (e) {
			// the command has failed, display error to the user
			setStatusText('Error: ' + String(e));
		}
	}
	return (
		<div className="App">
			<header className="App-header">
				<pre style={{ fontSize: 12, textAlign: "left" }}>
					{statusText}
				</pre>
				<button onClick={() => btnClick()}>
					Set New Url
				</button>
			</header>
		</div>
	);
}

