import jwt from 'jsonwebtoken';

export interface AuthPayload {
  userId: string;
  email: string;
  role: string;
}

const JWT_SECRET = process.env.JWT_SECRET ?? 'dev_jwt_secret_change_this';

export function signJwt(payload: AuthPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
}

export function verifyJwt(token: string) {
  return jwt.verify(token, JWT_SECRET) as AuthPayload;
}

export function getTokenFromRequest(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return null;
  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) return null;
  return token;
}

export function getAuthPayload(req: Request) {
  const token = getTokenFromRequest(req);
  if (!token) {
    return null;
  }

  try {
    return verifyJwt(token);
  } catch {
    return null;
  }
}

export function requireAdmin(req: Request) {
  const payload = getAuthPayload(req);
  if (!payload || payload.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }
  return payload;
}
