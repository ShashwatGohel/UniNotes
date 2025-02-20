function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const data = parseJwt(response.credential);
    console.log("User Info: ", data);
}

function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}
