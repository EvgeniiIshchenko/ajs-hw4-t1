import healthIndicate from '../healtCalculation';

test.each([
    [
        'healthy', 51
    ],
    [
        'wounded', 15
    ],
    [
        'critical', 1
    ],
    [
        'dead', 0
    ],
    [
        'dead', -2
    ],
])('Testing health indicator', (status, ammount)=> {
    const result = healthIndicate({
        name: 'test',
        health: ammount
    });
    expect(result).toBe(status);
});