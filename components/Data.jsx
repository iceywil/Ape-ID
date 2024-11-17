"use client";

function DataComponent({ verifiedCredentialsArray }) {
	if (verifiedCredentialsArray == null)
		return ;
	return (
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
						"No valid data"
					)}
				</li>
			))}
		</ul>
	);
}

export default DataComponent;
