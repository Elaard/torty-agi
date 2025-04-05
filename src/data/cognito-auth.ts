import { CognitoIdentityServiceProvider } from 'aws-sdk';
import crypto from 'crypto';

// Funkcja do generowania SECRET_HASH
function generateSecretHash(username: string, clientId: string, clientSecret: string) {
  const hmac = crypto.createHmac('sha256', clientSecret);  // Tworzenie HMAC z Client Secret
  hmac.update(username + clientId);  // Łączenie username z ClientId
  return hmac.digest('base64');  // Zwracanie SECRET_HASH w formacie base64
}

const cognito = new CognitoIdentityServiceProvider({
  region: process.env.AWS_REGION,
});

export async function login(username: string, password: string) {
  const secretHash = generateSecretHash(username,
    process.env.COGNITO_CLIENT_ID!!,
    process.env.COGNITO_CLIENT_SECRET!!);

  const params: CognitoIdentityServiceProvider.Types.InitiateAuthRequest = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: process.env.COGNITO_CLIENT_ID!!,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
      SECRET_HASH: secretHash
    },
  };

  const response = await cognito.initiateAuth(params).promise();
  return response.AuthenticationResult?.IdToken;
}

