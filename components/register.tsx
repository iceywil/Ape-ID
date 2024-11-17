import { useWriteContract } from "wagmi";
import { abi } from "../app/integration/register/abi";
import { useState } from "react";
import { getAccount } from "@wagmi/core";
import { config } from "../app/integration/register/config";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Register() {
	const { writeContract } = useWriteContract();
	const { primaryWallet } = useDynamicContext();

	const [firstName, setFirstName] = useState("Test");
	const [data, setData] = useState("");
	console.log(`firstName : ${firstName}`);
	console.log(`primaryWallet : ${primaryWallet?.address}`);

	const wallet = primaryWallet?.address;

	function register() {
		let data = writeContract({
			abi: abi,
			address: "0x73bb68186837D843804C77871B35A7140d32De39",
			functionName: "register",
			args: [
				firstName,
				(wallet ||
					"0x0000000000000000000000000000000000000000") as `0x${string}`,
			],
		})
		if (data != null)
			setData(data);
		console.log(`data : ${data}`);
		}

	return (
		<div className="flex flex-row gap-4 justify-center">
			<img src="/images/ens-mark-Dark_Blue.png" alt="domain" className="h-8" />
			<Input
				className="min-w-20"
				name="myInput"
				placeholder="Mint a Domain Name"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<Button
				onClick={register}
			>
				Mint
			</Button>
			<p>{data}</p>
		</div>
	);
}
