import { useWriteContract } from 'wagmi'
import { abi } from './abi'
import { useState } from 'react'
import { getAccount } from '@wagmi/core'
import { config } from './config'

export default function Register() {

	const { writeContract } = useWriteContract()
	const account = getAccount(config).address;

	const [firstName, setFirstName] = useState('');

	console.log(firstName);
	console.log(account);

	return (
		<div>	
			<input name="myInput" defaultValue="DomainName" onChange={e => setFirstName(e.target.value)}/>
			<button
				onClick={() =>
					writeContract({
						abi: abi,
						address: '0x73bb68186837D843804C77871B35A7140d32De39',
						functionName: 'register',
						args: [
							"aaaa",//firstName,
							"0x96F48797a80Ce33F5bb84beeAF8F6782f7581912",//account || '0x0000000000000000000000000000000000000000',
						]
					})
				}
			>
				Transfer
			</button>
		</div>

	)
}

