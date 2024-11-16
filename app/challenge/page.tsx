"use client"

import { execHaloCmdWeb } from '@arx-research/libhalo/api/web';
import React, { useState } from 'react';

export default function App() {
	const [statusText, setStatusText] = useState('Loading..');

	async function btnClick() {
		let command = {

			"name": "sign_challenge",
			"keyNo": 2,
			"challenge": "bdf40bc6b028a50a1772aa8b6fe4e957d367b5ff21ebd0954682e479aae68976"
		};

		let res;

		try {
			// --- request NFC command execution ---
			res = await execHaloCmdWeb(command);
			// the command has succeeded, display the result to the user
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
					Sign to get verified
				</button>
			</header>
		</div>
	);
}
