"use client";
import { get_data } from "@/app/data/domain_data";

function DataComponent({ verifiedCredentialsArray }) {
	let dataArray = get_data("Will", "text");
	console.log(dataArray);

	return (
		<div>
			{dataArray && dataArray.length > 0 && (
				<ul>
					{dataArray.map((data, index) => (
						<li key={index}>{data}</li>
					))}
				</ul>
			)}
			{verifiedCredentialsArray && verifiedCredentialsArray.length > 0 && (
				<ul>
					{verifiedCredentialsArray.map((credential, index) => (
						<li key={index}>
							{credential.oauthProvider && credential.oauthUsername ? (
								<>
									{credential.oauthProvider} - {credential.oauthUsername}
								</>
							) : credential.address ? (
								credential.address
							) : (
								""
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default DataComponent;
