"use client"

import { execHaloCmdWeb } from '@arx-research/libhalo/api/web';
import React, { useState } from 'react';

export default function App() {
	const [statusText, setStatusText] = useState('Loading..');

	async function btnClick() {

		let res;

		try {

			let command = {
				"name": "gen_key",
				"keyNo": 3,
				"entropy": "3c825af7d2e1b02b6a00c257ebe883260b4aa6302c9878d412046d10141b261d"
			};
			res = await execHaloCmdWeb(command);
			setStatusText(JSON.stringify(res, null, 4));

			if (res.needsConfirmPK) {
				let command_cfm = {
					"name": "gen_key_confirm",
					"keyNo": 3,
					"publicKey": res.pub
				};
				res = await execHaloCmdWeb(command_cfm);
				setStatusText(JSON.stringify(res, null, 4));
			}


			let command_final = {
				"name": "gen_key_finalize",
				"keyNo": 3,
			}

			res = await execHaloCmdWeb(command_final);
			setStatusText(JSON.stringify(res, null, 4));
			command_final = {
			
				"name": "get_key_info",
					"keyNo": 3
			}

			res = await execHaloCmdWeb(command_final);
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
					Create a new Key
				</button>
			</header>
		</div>
	);
}
