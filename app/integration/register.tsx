import { useWriteContract } from 'wagmi'
import { abi } from './abi'
import { useState } from 'react'
import { getAccount } from '@wagmi/core'
import { config } from './config'

export default function Register() {

	const { writeContract } = useWriteContract()
	const account = getAccount(config).address;

	const [firstName, setFirstName] = useState('');

	return (
		<div>	
			<input name="myInput" defaultValue="DomainName" onChange={e => setFirstName(e.target.value)}/>
			<button
				onClick={() =>
					writeContract({
						abi,
						address: '0x73bb68186837D843804C77871B35A7140d32De39',
						functionName: 'register',
						args: [
							firstName,
							account || '0x0000000000000000000000000000000000000000',
						]
					})
				}
			>
				Transfer
			</button>
		</div>

	)
}

