function validateRequest(request) {
  let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  let validURI = /^[a-zA-Z0-9\.]+$/;

  if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (!request.hasOwnProperty('uri') || !(validURI.test(request.uri) || request.uri === '*')) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (!request.hasOwnProperty('version') || !validVersions.includes(request.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }
  if (!request.hasOwnProperty('message')) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return request;
}
validateRequest({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
});