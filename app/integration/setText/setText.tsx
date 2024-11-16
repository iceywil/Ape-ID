import { useWriteContract } from 'wagmi'
import { abi } from './abi'
import { useState } from 'react'
import { labelhash, normalize } from 'viem/ens';

export default function SetText() {

	const { writeContract } = useWriteContract()

	const [key, setKey] = useState('Name');
	const [value, setValue] = useState('Will');

	const labelHash = labelhash(normalize('Test'));

	console.log(`labelHash: ${labelHash}`);
	console.log(`key: ${key}`);
	console.log(`value: ${value}`);

	return (
		<div>	
			<input name="myInput" defaultValue="Name" onChange={e => setKey(e.target.value)}/>
			<input name="myInput" defaultValue="Will" onChange={e => setValue(e.target.value)}/>
			<button
				onClick={() =>
					writeContract({
						abi: abi,
						address: '0x6536194058CA83Ec79737b14570584E99b88B428',
						functionName: 'setText',
						args: [
							labelHash,
							key,
							value,
						]
					})
				}
			>
				Set Info
			</button>
		</div>

	)
}

