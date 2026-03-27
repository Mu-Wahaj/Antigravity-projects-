# Real Estate Backend API Usage

## Environment variables

- `DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — secret used to sign admin tokens

---

## Authentication

### `POST /api/auth/login`

Request:

```json
{
  "email": "admin@realestate-space.com",
  "password": "your-secret-password"
}
```

Response (201):

```json
{
  "token": "eyJhbGci...",
  "user": {
    "id": "ckxyz123",
    "email": "admin@realestate-space.com",
    "role": "ADMIN",
    "fullName": "Admin User"
  }
}
```

---

## Properties

### `GET /api/properties`

Query parameters:

- `region`
- `type`
- `status`
- `search`
- `minPrice`
- `maxPrice`

Response (200):

```json
[
  {
    "id": "ck123abc",
    "title": "Modern sea view villa with infinity pool",
    "slug": "modern-sea-view-villa",
    "description": "A luxury villa located moments from the Golden Mile...",
    "type": "VILLA",
    "status": "FOR_SALE",
    "location": "Marbella, Costa del Sol",
    "region": "Costa del Sol",
    "price": 1450000,
    "bedrooms": 5,
    "bathrooms": 4,
    "area": "385 m²",
    "imageUrl": "https://...",
    "agentName": "Lorrainne De Marco",
    "features": ["Infinity pool", "Sea view", "Private garden"],
    "gallery": ["https://...", "https://..."],
    "createdAt": "2026-03-28T12:00:00.000Z",
    "updatedAt": "2026-03-28T12:00:00.000Z"
  }
]
```

### `POST /api/properties`

Headers:

- `Authorization: Bearer <token>`

Request:

```json
{
  "title": "Golf-front penthouse overlooking the Mediterranean",
  "slug": "golf-front-penthouse",
  "description": "Bright top floor apartment with large terrace...",
  "type": "APARTMENT",
  "status": "FOR_SALE",
  "location": "Alicante, Costa Blanca",
  "region": "Costa Blanca",
  "price": 625000,
  "bedrooms": 3,
  "bathrooms": 2,
  "area": "185 m²",
  "imageUrl": "https://...",
  "agentName": "Anna Hjalmarsson",
  "features": ["Golf access", "Roof terrace", "Turnkey"],
  "gallery": ["https://...", "https://...", "https://..."]
}
```

Response (201):

```json
{
  "id": "ck456def",
  "title": "Golf-front penthouse overlooking the Mediterranean",
  "slug": "golf-front-penthouse",
  "description": "Bright top floor apartment...",
  "type": "APARTMENT",
  "status": "FOR_SALE",
  "location": "Alicante, Costa Blanca",
  "region": "Costa Blanca",
  "price": 625000,
  "bedrooms": 3,
  "bathrooms": 2,
  "area": "185 m²",
  "imageUrl": "https://...",
  "agentName": "Anna Hjalmarsson",
  "features": ["Golf access", "Roof terrace", "Turnkey"],
  "gallery": ["https://...", "https://...", "https://..."],
  "createdAt": "2026-03-28T12:10:00.000Z",
  "updatedAt": "2026-03-28T12:10:00.000Z"
}
```

### `GET /api/properties/:id`

Response (200):

```json
{
  "id": "ck123abc",
  "title": "Modern sea view villa with infinity pool",
  "slug": "modern-sea-view-villa",
  "description": "A luxury villa located moments from the Golden Mile...",
  "type": "VILLA",
  "status": "FOR_SALE",
  "location": "Marbella, Costa del Sol",
  "region": "Costa del Sol",
  "price": 1450000,
  "bedrooms": 5,
  "bathrooms": 4,
  "area": "385 m²",
  "imageUrl": "https://...",
  "agentName": "Lorrainne De Marco",
  "features": ["Infinity pool", "Sea view", "Private garden"],
  "gallery": ["https://...", "https://..."],
  "createdAt": "2026-03-28T12:00:00.000Z",
  "updatedAt": "2026-03-28T12:00:00.000Z"
}
```

### `PATCH /api/properties/:id`

Headers:

- `Authorization: Bearer <token>`

Request:

```json
{
  "price": 1390000,
  "status": "UNDER_CONTRACT"
}
```

Response (200):

```json
{
  "id": "ck123abc",
  "price": 1390000,
  "status": "UNDER_CONTRACT",
  "updatedAt": "2026-03-28T12:20:00.000Z"
}
```

### `DELETE /api/properties/:id`

Headers:

- `Authorization: Bearer <token>`

Response (200):

```json
{ "success": true }
```

---

## Leads

### `POST /api/leads`

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+34 600 123 456",
  "message": "I am interested in the Marbella villa.",
  "interestedIn": "Marbella villa",
  "propertyId": "ck123abc"
}
```

Response (201):

```json
{
  "id": "ck789ghi",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+34 600 123 456",
  "message": "I am interested in the Marbella villa.",
  "interestedIn": "Marbella villa",
  "propertyId": "ck123abc",
  "createdAt": "2026-03-28T12:30:00.000Z"
}
```

### `GET /api/leads`

Headers:

- `Authorization: Bearer <token>`

Response (200):

```json
[
  {
    "id": "ck789ghi",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+34 600 123 456",
    "message": "I am interested in the Marbella villa.",
    "interestedIn": "Marbella villa",
    "propertyId": "ck123abc",
    "createdAt": "2026-03-28T12:30:00.000Z"
  }
]
```
