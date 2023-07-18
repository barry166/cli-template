function clone(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) return obj

    const objFromMap = map.get(obj)
    if (objFromMap) return objFromMap

    let target = {}
    map.set(obj, target)

    if (obj instanceof Map) {
        target = new Map()
        obj.forEach((v, k) => {
            const v1 = clone(v, map)
            const k1 = clone(k, map)
            target.set(k1, v1)
        })
    }

    if (obj instanceof Set) {
        target = new Set()
        obj.forEach(v => {
            const v1 = clone(v, map)
            target.add(v1)
        })
    }

    if (obj instanceof Array) {
        obj.forEach((item, index) => {
            target[index] = clone(item, map)
        })
    } else {
        for (const key in obj) {
            const val = obj[key]
            target[key] = clone(val, map)
        }
    }

    return target

}

module.exports = clone;
