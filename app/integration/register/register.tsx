import { useWriteContract } from 'wagmi'
import { abi } from './abi'
import { useState } from 'react'
import { getAccount } from '@wagmi/core'
import { config } from './config'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'

export default function SetText() {

	const { writeContract } = useWriteContract()
	const { primaryWallet } = useDynamicContext();

	const [firstName, setFirstName] = useState('Test');
	const [res, setRes] = useState('Test');

	console.log(`firstName : ${firstName}`);
	console.log(`primaryWallet : ${primaryWallet?.address}`);

	const wallet = primaryWallet?.address;

	function Wrt(){

		const result = writeContract({
			abi: abi,
			address: '0x73bb68186837D843804C77871B35A7140d32De39',
			functionName: 'register',
			args: [
				firstName,
				(wallet || '0x0000000000000000000000000000000000000000') as `0x${string}`,
			]
		});
		if(result != null)
			setRes(result);
	}

	return (
		<div>	
			<input name="myInput" defaultValue="DomainName" onChange={e => setFirstName(e.target.value)}/>
			<button
				onClick={Wrt}
			>
				Transfer
			</button>
			<p>{res}</p>
		</div>

	)
}

