"use client"

import { execHaloCmdWeb } from '@arx-research/libhalo/api/web';
import React, { useState } from 'react';

export default function App() {
	const [statusText, setStatusText] = useState('Click on the button');

	async function btnClick() {
		let command = {
			"name": "gen_key",
			"keyNo": 3,
			"entropy": "3c825af7d2e1b02b6a00c257ebe883260b4aa6302c9878d412046d10141b261d"
		};

		let command_cfm = {
			"name": "gen_key_confirm",
			"keyNo": 3,
			"publicKey": "047801f0521a56bd3ea172f4308789ea76ab415fd34c636bb820d4619ae15e81cae291f6427e8b4cfa7621ba4ccba10a945441b32585d12daadd8d50339a99d17a"
		};

		let command_final = {
			"name": "gen_key_finalize",
			"keyNo": 3,
			"password": "secret123!"
		}

		let command_pkeys =
		{
			"name": "get_pkeys"
		}
		let res;

		try {
			// --- request NFC command execution ---
			res = await execHaloCmdWeb(command);

			// the command has succeeded, display the result to the user
			setStatusText(JSON.stringify(res, null, 4));

			res = await execHaloCmdWeb(command_cfm);
			setStatusText(JSON.stringify(res, null, 4));

			res = await execHaloCmdWeb(command_final);
			setStatusText(JSON.stringify(res, null, 4));

			res = await execHaloCmdWeb(command_pkeys);
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
