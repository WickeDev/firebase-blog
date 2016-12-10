import {firebaseDB} from 'core/firebase'

describe('firebase test', () => {
    it('should be initialize firebase', (done) => {
        const value = 'test value';
        const node = 'test';
        const testRef = firebaseDB.ref(node);

        testRef.set(value);
        testRef.on('value', (snapshot) => {
            const val = snapshot.val();
            expect(val).toBe(value);
            done();
        });
    });
});
