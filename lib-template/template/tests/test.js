const expect = require('expect.js');
const clone = require('../src');

describe('单元测试', function () {
    this.timeout(1000);

    // 简单值
    const simpleList = [
        {
            a: 1
        },
        {
            a: 'abc'
        },
        {
            a: true
        },
        {
            a: null
        }
    ];

    // 正常cases
    const normalList = [
        {
            a: [],
        },
        {
            a: [1, 2, 3],
        },
        {
            a: [1, [2, [3]]],
        },
        {
            a: {},
        },
        {
            a: { a: 1, b: 2, c: 3 },
        },
        {
            a: { a1: 1, a2: { b1: 1, b2: { c1: 1, c2: 2 } } },
        },
        {
            a: { a1: 1, a2: [1, { b1: 1, b2: [{ c1: 1, c2: 2 }] }] }
        }
    ];

    // 父子循环引用
    const a = [1, 2, 3];
    a.push(a);

    const b = { a1: 1, a2: 2, a3: 3 };
    b.a4 = b;
    const singleRefList = [
        {
            a: a,
        },
        {
            a: b,
        },
        {
            a: b,
        }
    ];

    // 多层级循环引用
    const a = [1, [2]];
    a[1].push(a);

    const b = { a1: 1, a2: { b1: 1 } };
    b.a2.b2 = b;
    const complexRefList = [
        {
            a: a,
        },
        {
            a: b,
        },
        {
            a: b,
        }
    ];
    describe('clone', function () {
        it('常规', function () {
            for (const i = 0; i < simpleList.length; i++) {
                // 确保全等
                expect(clone(simpleList[i].a)).to.be(simpleList[i].a);
            }

            for (const i = 0; i < normalList.length; i++) {
                const temp = clone(normalList[i].a);

                // 确保不全等
                expect(temp).not.to.be(normalList[i].a);
                // 确保内容一样
                expect(temp).to.eql(normalList[i].a);
            }
        });

        it('简单循环引用', function () {
            const temp = clone(singleRefList[0].a);
            expect(temp).to.be(temp[3]);

            const temp = clone(singleRefList[1].a);
            expect(temp).to.be(temp['a4']);
        });
    });

    describe('Map and Set', function () {
        it('Map', function () {
            const map = new Map();
            map.set('a', 1);
            map.set('b', 2);

            const temp = clone(map);
            expect(temp).to.eql(map);
            expect(temp).not.to.be(map);
        });

        it('Set', function () {
            const set = new Set();
            set.add(1);
            set.add(2);

            const temp = clone(set);
            expect(temp).to.eql(set);
            expect(temp).not.to.be(set);
        });
    })

    describe('cloneJSON', function () {
        it('常规', function () {
            for (const i = 0; i < simpleList.length; i++) {
                // 确保全等
                expect(clone(simpleList[i].a)).to.be(simpleList[i].a);
            }

            for (const i = 0; i < normalList.length; i++) {
                const temp = clone(normalList[i].a);

                // 确保不全等
                expect(temp).not.to.be(normalList[i].a);
                // 确保内容一样
                expect(temp).to.eql(normalList[i].a);
            }
        });
    });

    describe('cloneLoop', function () {
        it('常规', function () {
            for (const i = 0; i < simpleList.length; i++) {
                // 确保全等
                expect(clone(simpleList[i].a)).to.be(simpleList[i].a);
            }

            for (const i = 0; i < normalList.length; i++) {
                const temp = clone(normalList[i].a);

                // 确保不全等
                expect(temp).not.to.be(normalList[i].a);
                // 确保内容一样
                expect(temp).to.eql(normalList[i].a);
            }
        });

        it('简单循环引用', function () {
            const temp = clone(singleRefList[0].a);
            expect(temp).to.be(temp[3]);

            const temp = clone(singleRefList[1].a);
            expect(temp).to.be(temp['a4']);
        });
    });

    describe('cloneForce', function () {
        it('常规', function () {
            for (const i = 0; i < simpleList.length; i++) {
                // 确保全等
                expect(clone(simpleList[i].a)).to.be(simpleList[i].a);
            }

            for (const i = 0; i < normalList.length; i++) {
                const temp = clone(normalList[i].a);

                // 确保不全等
                expect(temp).not.to.be(normalList[i].a);
                // 确保内容一样
                expect(temp).to.eql(normalList[i].a);
            }
        });

        it('简单循环引用', function () {
            const temp = clone(singleRefList[0].a);
            expect(temp).to.be(temp[3]);

            const temp = clone(singleRefList[1].a);
            expect(temp).to.be(temp['a4']);
        });

        it('复杂循环引用', function () {
            const temp = clone(complexRefList[0].a);
            expect(temp).to.be(temp[1][1]);

            const temp = clone(complexRefList[1].a);
            expect(temp).to.be(temp.a2.b2);
        });
    });
});