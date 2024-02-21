import BowlingGame from './bowlingGame';

test('testGame0', () => {
    const game = new BowlingGame();
    rollMany(game, 20, 0);
    expect(game.getScore()).toBe(0);
});

test('testGameAll1', () => {
    const game = new BowlingGame();
    rollMany(game, 20, 1);
    expect(game.getScore()).toBe(20);
});

test('testGameSpare', () => {
    const game = new BowlingGame();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(game, 17, 0);
    expect(game.getScore()).toBe(16);
});

test('testGameNotSpare', () => {
    const game = new BowlingGame();
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(game, 16, 0);
    expect(game.getScore()).toBe(13);
});

test('testGameStrike', () => {
    const game = new BowlingGame();
    game.roll(10);
    game.roll(3);
    game.roll(2);
    rollMany(game, 16, 0);
    expect(game.getScore()).toBe(20);
});

test('testGameNotStrikeYesSpare', () => {
    const game = new BowlingGame();
    game.roll(0);
    game.roll(10);
    game.roll(3);
    game.roll(2);
    rollMany(game, 16, 0);
    expect(game.getScore()).toBe(18);
});

test('testStrikeInLast', () => {
    const game = new BowlingGame();
    rollMany(game, 18, 0);
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(12);
});

test('testGame300', () => {
    const game = new BowlingGame();
    rollMany(game, 12, 10);
    expect(game.getScore()).toBe(300);
});

function rollMany(game, times, pins) {
    for (let i = 0; i < times; i++) {
        game.roll(pins);
    }
}
