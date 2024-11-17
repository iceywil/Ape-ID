"use client";


import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import PassportClosed from "./PassportClosed";
import Register from "./register";
import SetText from "./setText";
import { Separator } from "@/components/ui/separator";
import { IRL } from "./irl";
import getUserData from "@/app/data/retrieve_user.mjs";

export function Data() {
	const { user } = useDynamicContext();
	const isLoggedIn = useIsLoggedIn();

	//const userData = getUserData(user.userId);
	const verifiedCredentialsArray = user?.verifiedCredentials;
	console.log("baba", verifiedCredentialsArray);
	return (
		<div className="flex flex-row gap-4 justify-center">

			<p>YAYA</p>
			
		</div>
	);
}
