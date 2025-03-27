import { CognitoIdentityServiceProvider } from "aws-sdk";
import crypto from "crypto";

// Funkcja do generowania SECRET_HASH
function generateSecretHash(username: string, clientId: string, clientSecret: string) {
  const hmac = crypto.createHmac("sha256", clientSecret);  // Tworzenie HMAC z Client Secret
  hmac.update(username + clientId);  // Łączenie username z ClientId
  return hmac.digest("base64");  // Zwracanie SECRET_HASH w formacie base64
}

const cognito = new CognitoIdentityServiceProvider({
  region: 'eu-north-1',
});

export async function login(username: string, password: string) {
  const secretHash = generateSecretHash(username,
    "3gd881vnjmpqfolvt76m1d3sj2",
    "12o3doru6h1m9ji0qthprn1dbi7b9k2almj6gdtm55tsul98trdv");

  const params: CognitoIdentityServiceProvider.Types.InitiateAuthRequest = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: "3gd881vnjmpqfolvt76m1d3sj2",
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
      SECRET_HASH: secretHash
    },
  };

  const response = await cognito.initiateAuth(params).promise();
  return response.AuthenticationResult?.IdToken;
}

