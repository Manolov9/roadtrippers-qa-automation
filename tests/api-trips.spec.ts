import { test, expect } from '@playwright/test';

test.describe('Roadtrippers API - Trip Management', () => {
  
  test('POST /api/v2/trips - Create a new trip', async ({ request }) => {
    const response = await request.post('/api/v2/trips', {
      data: { trip: { name: 'API Test Trip' } }
    });
    
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.trip.name).toBe('API Test Trip');
  });

  test('GET /api/v2/trips/{id} - Retrieve trip data', async ({ request }) => {
    const createResponse = await request.post('/api/v2/trips', {
      data: { trip: { name: 'Fetch Test' } }
    });
    const createBody = await createResponse.json();
    const tripId = createBody.trip.id;

    const response = await request.get(`/api/v2/trips/${tripId}`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.trip.id).toBe(tripId);
  });

  test('POST /api/v2/trips - Error on empty body', async ({ request }) => {
    const response = await request.post('/api/v2/trips', {
      data: {}
    });
    
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.errors[0].message).toContain('param is missing');
  });
});
