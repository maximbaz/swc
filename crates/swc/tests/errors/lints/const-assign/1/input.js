const a = 100,
    [b] = [200],
    { c } = { c: 300 },
    [d = 400] = [];

a = 200;

b++;
c--;

++d;
--a;

b += 10;
c -= 10;
d *= 10;
a /= 10;
b %= 10;

c <<= 10;
d >>= 10;

a >>>= 10;

b |= 10;
c ^= 10;
d &= 10;
a **= 10;

b &&= 10;
c ||= 10;

d ??= 10;
