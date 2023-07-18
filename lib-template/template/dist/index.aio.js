/*!
 * clone 1.0.0 (https://github.com/barry166)
 * API 
 * Copyright 2017-2023 All Rights Reserved
 * Licensed under MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.clone = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function cov_d0p0psg7p() {
    var path = "/Users/barry/Documents/domain/project/Experimental/lib-base/src/index.js";
    var hash = "0e745bf1ecdafeb96805f39243dc50f366deacab";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
      path: "/Users/barry/Documents/domain/project/Experimental/lib-base/src/index.js",
      statementMap: {
        "0": {
          start: {
            line: 4,
            column: 4
          },
          end: {
            line: 4,
            column: 59
          }
        },
        "1": {
          start: {
            line: 4,
            column: 49
          },
          end: {
            line: 4,
            column: 59
          }
        },
        "2": {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 35
          }
        },
        "3": {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 37
          }
        },
        "4": {
          start: {
            line: 7,
            column: 20
          },
          end: {
            line: 7,
            column: 37
          }
        },
        "5": {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 9,
            column: 19
          }
        },
        "6": {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 24
          }
        },
        "7": {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        "8": {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 13,
            column: 26
          }
        },
        "9": {
          start: {
            line: 14,
            column: 8
          },
          end: {
            line: 18,
            column: 10
          }
        },
        "10": {
          start: {
            line: 15,
            column: 23
          },
          end: {
            line: 15,
            column: 36
          }
        },
        "11": {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 36
          }
        },
        "12": {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 17,
            column: 30
          }
        },
        "13": {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        "14": {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 22,
            column: 26
          }
        },
        "15": {
          start: {
            line: 23,
            column: 8
          },
          end: {
            line: 26,
            column: 10
          }
        },
        "16": {
          start: {
            line: 24,
            column: 23
          },
          end: {
            line: 24,
            column: 36
          }
        },
        "17": {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 25,
            column: 26
          }
        },
        "18": {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        "19": {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 32,
            column: 10
          }
        },
        "20": {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 31,
            column: 44
          }
        },
        "21": {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 37,
            column: 9
          }
        },
        "22": {
          start: {
            line: 35,
            column: 24
          },
          end: {
            line: 35,
            column: 32
          }
        },
        "23": {
          start: {
            line: 36,
            column: 12
          },
          end: {
            line: 36,
            column: 41
          }
        },
        "24": {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 17
          }
        },
        "25": {
          start: {
            line: 44,
            column: 10
          },
          end: {
            line: 44,
            column: 15
          }
        }
      },
      fnMap: {
        "0": {
          name: "clone",
          decl: {
            start: {
              line: 3,
              column: 9
            },
            end: {
              line: 3,
              column: 14
            }
          },
          loc: {
            start: {
              line: 3,
              column: 41
            },
            end: {
              line: 42,
              column: 1
            }
          },
          line: 3
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 14,
              column: 20
            },
            end: {
              line: 14,
              column: 21
            }
          },
          loc: {
            start: {
              line: 14,
              column: 30
            },
            end: {
              line: 18,
              column: 9
            }
          },
          line: 14
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 23,
              column: 20
            },
            end: {
              line: 23,
              column: 21
            }
          },
          loc: {
            start: {
              line: 23,
              column: 25
            },
            end: {
              line: 26,
              column: 9
            }
          },
          line: 23
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 30,
              column: 20
            },
            end: {
              line: 30,
              column: 21
            }
          },
          loc: {
            start: {
              line: 30,
              column: 37
            },
            end: {
              line: 32,
              column: 9
            }
          },
          line: 30
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 3,
              column: 20
            },
            end: {
              line: 3,
              column: 39
            }
          },
          type: "default-arg",
          locations: [{
            start: {
              line: 3,
              column: 26
            },
            end: {
              line: 3,
              column: 39
            }
          }],
          line: 3
        },
        "1": {
          loc: {
            start: {
              line: 4,
              column: 4
            },
            end: {
              line: 4,
              column: 59
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 4,
              column: 4
            },
            end: {
              line: 4,
              column: 59
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 4
        },
        "2": {
          loc: {
            start: {
              line: 4,
              column: 8
            },
            end: {
              line: 4,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 4,
              column: 8
            },
            end: {
              line: 4,
              column: 31
            }
          }, {
            start: {
              line: 4,
              column: 35
            },
            end: {
              line: 4,
              column: 47
            }
          }],
          line: 4
        },
        "3": {
          loc: {
            start: {
              line: 7,
              column: 4
            },
            end: {
              line: 7,
              column: 37
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 7,
              column: 4
            },
            end: {
              line: 7,
              column: 37
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 7
        },
        "4": {
          loc: {
            start: {
              line: 12,
              column: 4
            },
            end: {
              line: 19,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 12,
              column: 4
            },
            end: {
              line: 19,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 12
        },
        "5": {
          loc: {
            start: {
              line: 21,
              column: 4
            },
            end: {
              line: 27,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 21,
              column: 4
            },
            end: {
              line: 27,
              column: 5
            }
          }, {
            start: {
              line: undefined,
              column: undefined
            },
            end: {
              line: undefined,
              column: undefined
            }
          }],
          line: 21
        },
        "6": {
          loc: {
            start: {
              line: 29,
              column: 4
            },
            end: {
              line: 38,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 29,
              column: 4
            },
            end: {
              line: 38,
              column: 5
            }
          }, {
            start: {
              line: 33,
              column: 11
            },
            end: {
              line: 38,
              column: 5
            }
          }],
          line: 29
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
      },
      b: {
        "0": [0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0]
      },
      _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
      hash: "0e745bf1ecdafeb96805f39243dc50f366deacab"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
      coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {
      // @ts-ignore
      cov_d0p0psg7p = function () {
        return actualCoverage;
      };
    }
    return actualCoverage;
  }
  cov_d0p0psg7p();
  function clone(obj) {
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_d0p0psg7p().b[0][0]++, new WeakMap());
    cov_d0p0psg7p().f[0]++;
    cov_d0p0psg7p().s[0]++;
    if ((cov_d0p0psg7p().b[2][0]++, _typeof(obj) !== 'object') || (cov_d0p0psg7p().b[2][1]++, obj === null)) {
      cov_d0p0psg7p().b[1][0]++;
      cov_d0p0psg7p().s[1]++;
      return obj;
    } else {
      cov_d0p0psg7p().b[1][1]++;
    }
    var objFromMap = (cov_d0p0psg7p().s[2]++, map.get(obj));
    cov_d0p0psg7p().s[3]++;
    if (objFromMap) {
      cov_d0p0psg7p().b[3][0]++;
      cov_d0p0psg7p().s[4]++;
      return objFromMap;
    } else {
      cov_d0p0psg7p().b[3][1]++;
    }
    var target = (cov_d0p0psg7p().s[5]++, {});
    cov_d0p0psg7p().s[6]++;
    map.set(obj, target);
    cov_d0p0psg7p().s[7]++;
    if (obj instanceof Map) {
      cov_d0p0psg7p().b[4][0]++;
      cov_d0p0psg7p().s[8]++;
      target = new Map();
      cov_d0p0psg7p().s[9]++;
      obj.forEach(function (v, k) {
        cov_d0p0psg7p().f[1]++;
        var v1 = (cov_d0p0psg7p().s[10]++, clone(v, map));
        var k1 = (cov_d0p0psg7p().s[11]++, clone(k, map));
        cov_d0p0psg7p().s[12]++;
        target.set(k1, v1);
      });
    } else {
      cov_d0p0psg7p().b[4][1]++;
    }
    cov_d0p0psg7p().s[13]++;
    if (obj instanceof Set) {
      cov_d0p0psg7p().b[5][0]++;
      cov_d0p0psg7p().s[14]++;
      target = new Set();
      cov_d0p0psg7p().s[15]++;
      obj.forEach(function (v) {
        cov_d0p0psg7p().f[2]++;
        var v1 = (cov_d0p0psg7p().s[16]++, clone(v, map));
        cov_d0p0psg7p().s[17]++;
        target.add(v1);
      });
    } else {
      cov_d0p0psg7p().b[5][1]++;
    }
    cov_d0p0psg7p().s[18]++;
    if (obj instanceof Array) {
      cov_d0p0psg7p().b[6][0]++;
      cov_d0p0psg7p().s[19]++;
      obj.forEach(function (item, index) {
        cov_d0p0psg7p().f[3]++;
        cov_d0p0psg7p().s[20]++;
        target[index] = clone(item, map);
      });
    } else {
      cov_d0p0psg7p().b[6][1]++;
      cov_d0p0psg7p().s[21]++;
      for (var key in obj) {
        var val = (cov_d0p0psg7p().s[22]++, obj[key]);
        cov_d0p0psg7p().s[23]++;
        target[key] = clone(val, map);
      }
    }
    cov_d0p0psg7p().s[24]++;
    return target;
  }
  var src = (cov_d0p0psg7p().s[25]++, clone);
  var index = /*@__PURE__*/getDefaultExportFromCjs(src);

  return index;

}));
