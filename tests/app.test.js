const request = require('supertest');
const { createApp } = require('../app');

describe('food_app API', () => {
    const app = createApp({ logger: null });

    test('GET / returns welcome HTML', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toContain('welcome');
    });

    test('GET /api/v1/test/test-user returns the payload', async () => {
        const res = await request(app).get('/api/v1/test/test-user');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            success: true,
            message: 'test user data api',
        });
    });

    test('unknown route returns 404', async () => {
        const res = await request(app).get('/does-not-exist');
        expect(res.status).toBe(404);
    });
});
