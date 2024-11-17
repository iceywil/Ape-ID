import { normalize } from "viem/ens";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export async function get_data(domain, key_name) {
	const publicClient = createPublicClient({
		chain: sepolia,
		transport: http(),
	});

	const ensText = await publicClient.getEnsText({
		name: normalize(domain),
		key: key_name,
	});
	return ensText;
}
