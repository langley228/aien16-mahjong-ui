
let TileGroup = {
    create: function (model) {
        if (model !== undefined && model != null) {
            let p = {

                isMeld: false,
                isPair: false,
                isTriplet: false,
                isSequence: false,
                isKong: false,
                isExposed: false,
                tiles: []
            };
            Object.keys(p).forEach(k => {
                if (Object.prototype.hasOwnProperty.call(model, k))
                    p[k] = model[k];
            });
            // Object.assign(p, model);
            return p;
        }
        return null;
    }
};

function SearchTile() {
    return {
        "search": {},
        "pageList": {
            "num": 1,
            "size": 50,
            "total": 1
        },
        "result": {
            "total": 42,
            "datas": [
                {
                    "id": 1,
                    "name": "一筒",
                    "rank": 1,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 2,
                    "name": "二筒",
                    "rank": 2,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 3,
                    "name": "三筒",
                    "rank": 3,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 4,
                    "name": "四筒",
                    "rank": 4,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 5,
                    "name": "五筒",
                    "rank": 5,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 6,
                    "name": "六筒",
                    "rank": 6,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 7,
                    "name": "七筒",
                    "rank": 7,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 8,
                    "name": "八筒",
                    "rank": 8,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 9,
                    "name": "九筒",
                    "rank": 9,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": true,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 10,
                    "name": "一條",
                    "rank": 1,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 11,
                    "name": "二條",
                    "rank": 2,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 12,
                    "name": "三條",
                    "rank": 3,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 13,
                    "name": "四條",
                    "rank": 4,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 14,
                    "name": "五條",
                    "rank": 5,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 15,
                    "name": "六條",
                    "rank": 6,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 16,
                    "name": "七條",
                    "rank": 7,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 17,
                    "name": "八條",
                    "rank": 8,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 18,
                    "name": "九條",
                    "rank": 9,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": true,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 19,
                    "name": "一萬",
                    "rank": 1,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 20,
                    "name": "二萬",
                    "rank": 2,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 21,
                    "name": "三萬",
                    "rank": 3,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 22,
                    "name": "四萬",
                    "rank": 4,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 23,
                    "name": "五萬",
                    "rank": 5,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 24,
                    "name": "六萬",
                    "rank": 6,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 25,
                    "name": "七萬",
                    "rank": 7,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 26,
                    "name": "八萬",
                    "rank": 8,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 27,
                    "name": "九萬",
                    "rank": 9,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": true,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 28,
                    "name": "東",
                    "rank": 0,
                    "isDragon": false,
                    "isWind": true,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 29,
                    "name": "南",
                    "rank": 0,
                    "isDragon": false,
                    "isWind": true,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 30,
                    "name": "西",
                    "rank": 0,
                    "isDragon": false,
                    "isWind": true,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 31,
                    "name": "北",
                    "rank": 0,
                    "isDragon": false,
                    "isWind": true,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 32,
                    "name": "中",
                    "rank": 0,
                    "isDragon": true,
                    "isWind": false,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 33,
                    "name": "發",
                    "rank": 0,
                    "isDragon": true,
                    "isWind": false,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 34,
                    "name": "白",
                    "rank": 0,
                    "isDragon": true,
                    "isWind": false,
                    "isHonor": true,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": false,
                    "count": 4
                },
                {
                    "id": 35,
                    "name": "春",
                    "rank": 1,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 36,
                    "name": "夏",
                    "rank": 2,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 37,
                    "name": "秋",
                    "rank": 3,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 38,
                    "name": "冬",
                    "rank": 4,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 39,
                    "name": "梅",
                    "rank": 1,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 40,
                    "name": "蘭",
                    "rank": 2,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 41,
                    "name": "菊",
                    "rank": 3,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                },
                {
                    "id": 42,
                    "name": "竹",
                    "rank": 4,
                    "isDragon": false,
                    "isWind": false,
                    "isHonor": false,
                    "isDot": false,
                    "isBamboo": false,
                    "isCharacter": false,
                    "isFlower": true,
                    "count": 1
                }
            ]
        }
    };
}

function NoTerminalsPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, exposedGp } = option;
            let groups = [...concealedGp];
            exposedGp.forEach(t => groups.push(t));
            let notHonorGp = groups.filter(g => g.tiles.filter(t => t.isHonor));
            let count = notHonorGp;
            if (count === 0)
                result.push({
                    id: 'NoTerminals',
                    name: '斷么九',
                    point: 0
                });
            return result;
        }
    };
}


function AllTripletsPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, exposedGp } = option;
            let groups = [...concealedGp];
            exposedGp.forEach(t => groups.push(t));
            let tripletCount = groups.filter(t => t.isTriplet || t.isKong).length;
            let pairCount = groups.filter(t => t.isPair).length;
            if (tripletCount + pairCount === groups.length && pairCount === 1) {
                let honorGp = groups.filter(g => g.tiles.filter(t => t.isHonor).length > 0);
                //字一色不另計碰碰胡
                if (honorGp.length === groups.length)
                    result.push({
                        id: 'AllHonors',
                        name: '字一色',
                        point: 8
                    });
                else
                    result.push({
                        id: 'AllTriplets',
                        name: '碰碰胡',
                        point: 4
                    });
            }
            return result;
        }
    };
}

function WindPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, exposedGp, prevailing, dealer } = option;
            let groups = [...concealedGp];
            exposedGp.forEach(t => groups.push(t));
            let windGp = groups.filter(g => g.tiles.filter(t => t.isWind).length > 0);
            let tripletGp = windGp.filter(g => g.isKong || g.isTriplet);
            let pairGp = windGp.filter(g => g.isPair);
            if (windGp.length === 4) {
                if (tripletGp.length === 4)
                    result.push({
                        id: 'BigFourWinds',
                        name: '大四喜',
                        point: 16
                    });
                else if (tripletGp.length === 3 && pairGp.length === 1)
                    result.push({
                        id: 'SmallFourWinds',
                        name: '小四喜',
                        point: 8
                    });
            }

            //大小四喜不另計門風或／及圈風
            if (result.length === 0) {
                let mapping = (id, count) => {
                    switch (id) {
                        case 28:
                            return {
                                id: count > 1 ? 'EastWindEast' : 'EastWind',
                                name: count > 1 ? '東風東' : '東風',
                                point: count > 1 ? 2 : 1
                            };
                        case 29:
                            return {
                                id: count > 1 ? 'SouthWindSouth' : 'SouthWind',
                                name: count > 1 ? '南風南' : '南風',
                                point: count > 1 ? 2 : 1
                            };
                        case 30:
                            return {
                                id: count > 1 ? 'WestWindWest' : 'WestWind',
                                name: count > 1 ? '西風西' : '西風',
                                point: count > 1 ? 2 : 1
                            };
                        case 31:
                            return {
                                id: count > 1 ? 'NorthWindNorth' : 'NorthWind',
                                name: count > 1 ? '北風北' : '北風',
                                point: count > 1 ? 2 : 1
                            };
                        default:
                            return null;
                    }
                };
                let findWind = [];
                if (prevailing && prevailing.id)
                    findWind.push({ id: prevailing.id, count: 1 });
                if (dealer && dealer.id) {
                    let wind = findWind.find(w => w.id === dealer.id);
                    if (wind)
                        wind.count += 1;
                    else
                        findWind.push({ id: dealer.id, count: 1 });
                }
                findWind.forEach(f => {
                    if (tripletGp.filter(g => g.tiles[0].id === f.id).length > 0) {
                        let pattern = mapping(f.id, f.count);
                        if (pattern != null)
                            result.push(pattern);
                    }
                });
            }
            return result;
        }
    };
}

function FlowerPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { flowers, dealer } = option;
            let rank = dealer.id - 27;

            let checkflowers = [];
            if (flowers.length == 8) {
                result.push({
                    id: 'FlowerKing',
                    name: '八仙過海',
                    point: 8
                });
            }
            else if (flowers.filter(t => t.id >= 35 && t.id <= 38).length == 4) {
                result.push({
                    id: 'FlowerGun_1',
                    name: '花槓',
                    point: 2
                });
                flowers.filter(t => t.id >= 39 && t.id <= 42).forEach(t => checkflowers.push(t));
            }
            else if (flowers.filter(t => t.id >= 39 && t.id <= 42).length == 4) {
                result.push({
                    id: 'FlowerGun_2',
                    name: '花槓',
                    point: 2
                });
                flowers.filter(t => t.id >= 35 && t.id <= 38).forEach(t => checkflowers.push(t));
            }
            else {
                flowers.forEach(t => checkflowers.push(t));
            }

            let count = checkflowers.filter(t => t.rank == rank).length;
            if (count > 0) {
                result.push({
                    id: count > 1 ? `Flower_${rank}_x2` : `Flower_${rank}`,
                    name: count > 1 ? `雙${rank}花` : `${rank}花`,
                    point: count > 1 ? 2 : 1
                });
            }
            return result;
            //FlowerGun
        }
    };
}

function DragonsPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, exposedGp } = option;
            let groups = [...concealedGp];
            exposedGp.forEach(t => groups.push(t));

            let dragonGp = groups.filter(g => g.tiles.filter(t => t.isDragon).length > 0);
            let tripletGp = dragonGp.filter(g => g.isKong || g.isTriplet);
            let pairGp = dragonGp.filter(g => g.isPair);
            if (dragonGp.length === 3) {
                if (tripletGp.length === 3)
                    result.push({
                        id: 'BigThreeDragons',
                        name: '大三元',
                        point: 8
                    });
                else if (tripletGp.length === 2 && pairGp.length === 1)
                    result.push({
                        id: 'SmallThreeDragons',
                        name: '小三元',
                        point: 4
                    });
            }
            //大小三元不另三元台
            if (result.length === 0) {
                let mapping = (id) => {
                    switch (id) {
                        case 32:
                            return {
                                id: 'RedDragon',
                                name: '紅中',
                                point: 1
                            };
                        case 33:
                            return {
                                id: 'GreenDragon',
                                name: '青發',
                                point: 1
                            };
                        case 34:
                            return {
                                id: 'WhiteDragon',
                                name: '白板',
                                point: 1
                            };
                        default:
                            return null;
                    }
                };
                tripletGp.forEach(g => {
                    let pattern = mapping(g.tiles[0].id);
                    if (pattern != null)
                        result.push(pattern);
                });
            }
            return result;
        }
    };
}


function OneSuitPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, exposedGp } = option;
            let groups = [...concealedGp];
            exposedGp.forEach(t => groups.push(t));
            let rankGp = groups.filter(g => g.tiles.filter(t => !t.isHonor).length > 0);
            if (rankGp.length === 0)
                return result;
            else (rankGp.length > 1)
            {
                let oneSuitCount = rankGp.filter(g =>
                    g.tiles[0].isDot === rankGp[0].tiles[0].isDot &&
                    g.tiles[0].isBamboo === rankGp[0].tiles[0].isBamboo &&
                    g.tiles[0].isCharacter === rankGp[0].tiles[0].isCharacter).length;
                if (oneSuitCount < rankGp.length)
                    return result;
            }

            let honorGp = groups.filter(g => g.tiles.filter(t => t.isHonor).length > 0);
            if (honorGp.length === 0)
                result.push({
                    id: 'PureOneSuit',
                    name: '清一色',
                    point: 8
                });
            else
                result.push({
                    id: 'MixedOneSuit',
                    name: '混一色',
                    point: 4
                });
            return result;
        }
    };
}

function ConcealedTripletsPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, tile, isSelfDrawn } = option;
            if (tile == null)
                return result;
            let groups = [...concealedGp];
            let tripletsGp = groups.filter(g => g.isTriplet || g.isKong);
            let count = tripletsGp.length;
            if (!isSelfDrawn) {
                let lastGp = groups.filter(g => g.tiles.filter(t => t.id === tile.id).length > 0);
                if (lastGp.filter(g => g.isTriplet || g.isKong).length > 0 && lastGp.length === 1)
                    count -= 1;
            }
            if (count > 2) {
                if (count > 4)
                    result.push({
                        id: 'FiveConcealedTriplets',
                        name: '五暗刻',
                        point: 8
                    });
                else if (count > 3)
                    result.push({
                        id: 'FourConcealedTriplets',
                        name: '四暗刻',
                        point: 5
                    });
                else
                    result.push({
                        id: 'ThreeConcealedTriplets',
                        name: '三暗刻',
                        point: 2
                    });
            }
            return result;
        }
    };
}

function AllConcealedHandPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, exposedGp, tile, isSelfDrawn } = option;

            if (isSelfDrawn && exposedGp.length === 0) {
                result.push({
                    id: 'AllConcealedHandSelfDrawn',
                    name: '門清自摸',
                    point: 3
                });
            }
            else if (isSelfDrawn) {
                result.push({
                    id: 'SelfDrawn',
                    name: '自摸',
                    point: 1
                });
            }
            else if (exposedGp.length === 0) {
                result.push({
                    id: 'AllConcealedHand',
                    name: '門清',
                    point: 1
                });
            }
            return result;
        }
    }
}

//莊家連N拉N
function BookmakerPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { isBookmaker, bookmakerRank } = option;
            if (isBookmaker) {
                if (bookmakerRank && bookmakerRank > 0) {
                    result.push({
                        id: `Bookmaker_${bookmakerRank}`,
                        name: `莊家${bookmakerRank}拉${bookmakerRank}`,
                        point: 2 * bookmakerRank + 1
                    });
                }
                else {
                    result.push({
                        id: 'Bookmaker',
                        name: '莊家',
                        point: 1
                    });
                }
            }

            return result;
        }
    }
}

//單釣
function ReadySinglePattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, tile, readyTiles } = option;
            let groups = [...concealedGp];
            if (readyTiles.length == 1) {
                let lastGp = groups.filter(g => g.isPair && g.tiles.filter(t => t.id === tile.id).length > 0);
                if (lastGp.length == 1) {
                    result.push({
                        id: 'ReadySingle',
                        name: '單吊',
                        point: 1
                    });
                }
            }
            return result;
        }
    }
}

//中洞邊張
function ReadyHoleEdgePattern() {
    return {
        Match: function (option) {
            let result = [];
            let { concealedGp, tile, readyTiles } = option;
            let groups = [...concealedGp];
            if (readyTiles.length == 1) {
                let lastGp = groups.filter(g => g.isSequence && g.tiles.filter(t => t.id === tile.id).length > 0);
                if (lastGp.length == 1) {
                    if (lastGp[0].tiles[1].id == tile.id) {
                        result.push({
                            id: 'ReadyHole',
                            name: '中洞',
                            point: 1
                        });
                    }
                    else if (lastGp[0].tiles[2].id == tile.id && tile.rank == 3) {
                        result.push({
                            id: 'ReadyEdge_3',
                            name: '邊張',
                            point: 1
                        });
                    }
                    else if (lastGp[0].tiles[0].id == tile.id && tile.rank == 7) {
                        result.push({
                            id: 'ReadyEdge_7',
                            name: '邊張',
                            point: 1
                        });
                    }
                }
            }
            return result;
        }
    }
}

function PinHuPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { exposedGp, concealedGp, exposed, concealed, tile, isSelfDrawn, readyTiles } = option;

            //無花 => 排除 有花
            if (exposed.filter(t => t.isFlower).length > 0)
                return result;
            //無字 => 排除 有字
            if (exposed.filter(t => t.isHonor).length > 0)
                return result;
            if (concealed.filter(t => t.isHonor).length > 0)
                return result;
            //非自摸 => 排除 自摸
            if (isSelfDrawn)
                return result;
            //非中洞、非邊張、非單釣 => 排除聽一張
            if (readyTiles.length < 2)
                return result;

            let groups = [...concealedGp];
            exposedGp.forEach(t => groups.push(t));

            //順子 & 將眼 組成
            if (groups.filter(g => g.isSequence).length != 5)
                return result;
            if (groups.filter(g => g.isPair).length != 1)
                return result;

            if (readyTiles.length == 2) {
                let lastGp = groups.filter(g => g.isSequence && g.tiles.filter(t => t.id === tile.id).length > 0);
                //12345 聽36, 不計平胡 
                if (tile.rank == 3 && lastGp.filter(g => g.tiles[0].rank == 1).length > 0)
                    return result;
                //56789 聽47, 不計平胡
                if (tile.rank == 7 && lastGp.filter(g => g.tiles[2].rank == 9).length > 0)
                    return result;
                result.push({
                    id: 'PinHu',
                    name: '平胡',
                    point: 2
                });
            }
            return result;
        }
    }
}

//全求
function BeggarPattern() {
    return {
        Match: function (option) {
            let result = [];
            let { exposedGp, concealedGp, exposed, concealed, tile, isSelfDrawn, readyTiles } = option;
            let groups = [...concealedGp];
            if (groups.length == 1 && groups[0].isPair) {
                result.push({
                    id: 'Beggar',
                    name: '全求',
                    point: 2
                });
            }
            return result;
        }
    }
}

function PatternSvc() {
    const patternMatchs = [];
    //patternMatchs.push(new NoTerminalsPattern());
    patternMatchs.push(new AllTripletsPattern());
    patternMatchs.push(new WindPattern());
    patternMatchs.push(new FlowerPattern());
    patternMatchs.push(new DragonsPattern());
    patternMatchs.push(new OneSuitPattern());
    patternMatchs.push(new ConcealedTripletsPattern());
    patternMatchs.push(new AllConcealedHandPattern());
    patternMatchs.push(new BookmakerPattern());
    patternMatchs.push(new ReadySinglePattern());
    patternMatchs.push(new ReadyHoleEdgePattern());
    patternMatchs.push(new PinHuPattern());
    patternMatchs.push(new BeggarPattern());
    return {
        Matchs: function (option) {
            let result = [];

            patternMatchs.forEach(m => {
                let opt = { ...option };
                opt.patterns = result;
                let patterns = m.Match(opt);
                if (patterns.length > 0)
                    patterns.forEach(p => result.push(p));
            });
            return result;
        }
    };
}

function TileGroupSvc() {
    const patternSvc = PatternSvc();
    let __meldMapping = function (isExposed, tiles, allTiles) {

        let tileGroups = [];
        let subs = new Array(43);
        for (let i = 0; i < subs.length; i++) {
            subs[i] = {
                default: allTiles.result.datas.find(v => v.id == i),
                tiles: []
            };
        }
        let reset = () => {
            for (let j = 1; j < subs.length; j++) {
                subs[j].tiles.splice(0, subs[j].tiles.length); //clear
                tiles.filter(t => t.id === j).forEach(t => subs[j].tiles.push(t));
            }
            tileGroups.splice(0, tileGroups.length); //clear
        }
        for (let i = 1; i < subs.length; i++) {
            //reset
            reset();
            //pair
            let pair = null;
            if (!isExposed && subs[i].tiles.length > 1) {
                pair = subs[i].tiles.splice(0, 2);
                let pairGropp = TileGroup.create({
                    isPair: true,
                    isExposed: isExposed,
                    tiles: pair,
                });
                tileGroups.push(pairGropp);
            }


            let addSequenceGroup = min => {
                let meld = [subs[min].tiles.shift(), subs[min + 1].tiles.shift(), subs[min + 2].tiles.shift()];
                let pairGropp = TileGroup.create({
                    isMeld: true,
                    isSequence: true,
                    isExposed: isExposed,
                    tiles: meld,
                });
                tileGroups.push(pairGropp);
                return pairGropp
            };

            let findSequenceGroup = (sqSub, subitem) => {
                let count = subitem.tiles.length;
                //找從數量最少的開始找
                for (let x = 1; x <= count; x++) {
                    for (let r = subitem.default.rank - 2; r <= subitem.default.rank; r++) {
                        let rankSub = [
                            sqSub.find(s => s.default.rank == r),
                            sqSub.find(s => s.default.rank == r + 1),
                            sqSub.find(s => s.default.rank == r + 2)
                        ];
                        if (rankSub[0] && rankSub[1] && rankSub[2]) {
                            if (rankSub[0].tiles.length > 0 && rankSub[1].tiles.length > 0 && rankSub[2].tiles.length > 0) {
                                if (rankSub[0].tiles.length <= x && rankSub[1].tiles.length <= x && rankSub[2].tiles.length <= x) {
                                    return addSequenceGroup(rankSub[0].default.id);
                                }
                            }
                        }
                    }
                }
                for (let r = subitem.default.rank - 2; r <= subitem.default.rank; r++) {
                    let rankSub = [
                        sqSub.find(s => s.default.rank == r),
                        sqSub.find(s => s.default.rank == r + 1),
                        sqSub.find(s => s.default.rank == r + 2)
                    ];
                    if (rankSub[0] && rankSub[1] && rankSub[2]) {
                        if (rankSub[0].tiles.length > 0 && rankSub[1].tiles.length > 0 && rankSub[2].tiles.length > 0) {
                            return addSequenceGroup(rankSub[0].default.id);
                        }
                    }
                }
                return null;
            };


            //找順子
            let sqGroup = null;
            do {
                //最大最小值
                let ranges = [
                    {
                        min: Math.min(...subs.filter(s => s.default && s.default.isDot && s.tiles.length > 0).map(s => s.default.rank)),
                        max: Math.max(...subs.filter(s => s.default && s.default.isDot && s.tiles.length > 0).map(s => s.default.rank))
                    },
                    {
                        min: Math.min(...subs.filter(s => s.default && s.default.isBamboo && s.tiles.length > 0).map(s => s.default.rank)),
                        max: Math.max(...subs.filter(s => s.default && s.default.isBamboo && s.tiles.length > 0).map(s => s.default.rank))
                    },
                    {
                        min: Math.min(...subs.filter(s => s.default && s.default.isCharacter && s.tiles.length > 0).map(s => s.default.rank)),
                        max: Math.max(...subs.filter(s => s.default && s.default.isCharacter && s.tiles.length > 0).map(s => s.default.rank))
                    }
                ]
                let checkSqIndexs = subs
                    .filter((s, index) =>
                        //數量 1~2 張
                        s.tiles.length > 0 && s.tiles.length < 3 &&
                        //筒條萬
                        index >= 1 && index <= 27)
                    .sort((a, b) => {
                        //排序 1.數量小->大, 2.越靠近最大/小值優先判斷
                        if (a.tiles.length === b.tiles.length && a.default.isDot === b.default.isDot &&
                            a.default.isBamboo === b.default.isBamboo && a.default.isCharacter === b.default.isCharacter) {
                            let range;
                            if (a.default.isDot)
                                range = ranges[0];
                            else if (a.default.isBamboo)
                                range = ranges[1];
                            else
                                range = ranges[2];
                            let a_sort = a.default.rank - range.min;
                            if (range.max - a.default.rank < a_sort)
                                a_sort = range.max - a.default.rank;
                            let b_sort = b.default.rank - range.min;
                            if (range.max - b.default.rank < b_sort)
                                b_sort = range.max - b.default.rank;

                            return a_sort - b_sort;
                        }
                        return a.tiles.length - b.tiles.length;
                    })
                    .map((s) => s.default.id);
                sqGroup = null;
                for (let j = 0; j < checkSqIndexs.length; j++) {
                    let subitem = subs[checkSqIndexs[j]];
                    let sqSub = subs.filter(s =>
                        s.default &&
                        s.default.isDot == subitem.default.isDot &&
                        s.default.isBamboo == subitem.default.isBamboo &&
                        s.default.isCharacter == subitem.default.isCharacter);
                    sqGroup = findSequenceGroup(sqSub, subitem);
                    if (sqGroup != null)
                        break;
                }
            }
            while (sqGroup != null)

            //刻或槓
            for (let j = 0; j <= 34; j++) {
                if (subs[j].tiles.length > 2) {
                    let meld = subs[j].tiles.splice(0, subs[j].tiles.length);
                    let meldGropp = TileGroup.create({
                        isMeld: true,
                        isTriplet: meld.length < 4,
                        isKong: meld.length > 3,
                        isExposed: isExposed,
                        tiles: meld,
                    });
                    tileGroups.push(meldGropp);
                }
            }

            let subCount = subs.map(s => s.tiles.length).reduce((a, b) => a + b);
            if (subCount == 0) {
                return tileGroups;
            }
        }
        return tileGroups;
    };
    let __findKongFix = (kongGroup, isExposed) => {
        if (kongGroup.length > 2) {
            for (let j = 0; j < kongGroup.length - 2; j++) {
                const kg = kongGroup[j];
                let somekongGroup = kongGroup.filter(g =>
                    g.tiles[0].isDot == kg.tiles[0].isDot &&
                    g.tiles[0].isBamboo == kg.tiles[0].isBamboo &&
                    g.tiles[0].isCharacter == kg.tiles[0].isCharacter);
                if (kg.tiles[0].rank < 8 &&
                    somekongGroup.filter(g => g.tiles[0].rank == kg.tiles[0].rank + 1).length > 0 &&
                    somekongGroup.filter(g => g.tiles[0].rank == kg.tiles[0].rank + 2).length > 0) {

                    let meld = [
                        kg.tiles.splice(0, 1)[0],
                        somekongGroup.find(g => g.tiles[0].rank == kg.tiles[0].rank + 1).tiles.splice(0, 1)[0],
                        somekongGroup.find(g => g.tiles[0].rank == kg.tiles[0].rank + 2).tiles.splice(0, 1)[0]
                    ];
                    kg.isKong = false;
                    kg.isTriplet = true;
                    somekongGroup.find(g => g.tiles[0].rank == kg.tiles[0].rank + 1).isKong = false;
                    somekongGroup.find(g => g.tiles[0].rank == kg.tiles[0].rank + 1).isTriplet = true;
                    somekongGroup.find(g => g.tiles[0].rank == kg.tiles[0].rank + 2).isKong = false;
                    somekongGroup.find(g => g.tiles[0].rank == kg.tiles[0].rank + 2).isTriplet = true;
                    // subs[j].tiles.splice(0, subs[j].tiles.length);
                    return TileGroup.create({
                        isMeld: true,
                        isTriplet: false,
                        isKong: false,
                        isSequence: true,
                        isExposed: isExposed,
                        tiles: meld,
                    });
                }
            }
        }
        return null;
    };
    let allTiles = SearchTile();
    return {
        CanWinOrCanWin(option) {
            let { inIds, outIds, lastId, isSelfDrawn, prevailingId, dealerId, isBookmaker, bookmakerRank } = option;
            isSelfDrawn = isSelfDrawn === true;
            bookmakerRank = bookmakerRank === true;
            if (prevailingId)
                prevailing = allTiles.result.datas.find((t, index, ary) => t.id == prevailingId);
            if (dealerId)
                dealer = allTiles.result.datas.find((t, index, ary) => t.id == dealerId);
            let reset = (id) => {
                let concealed = [];
                let exposed = [];
                let tile = null;
                if (inIds)
                    inIds.map(id => allTiles.result.datas.find((t, index, ary) => t.id == id)).forEach(t => {
                        if (t)
                            concealed.push(t);
                    });

                if (outIds)
                    outIds.map(id => allTiles.result.datas.find((t, index, ary) => t.id == id)).forEach(t => {
                        if (t)
                            exposed.push(t);
                    });
                tile = allTiles.result.datas.find((t, index, ary) => t.id == id);
                return {
                    concealed,
                    exposed,
                    tile
                }
            };
            let result = {
                canWin: false,
                readyTiles: []
            };
            let readyTiles = [];
            let readyInfo = [];
            for (let i = 1; i <= 42; i++) {
                let win = true;;
                let tileGroups = [];
                let { concealed, exposed, tile } = reset(i);
                concealed.push(tile);
                concealed = concealed.sort((a, b) => a.id - b.id);
                exposed = exposed.sort((a, b) => a.id - b.id);

                //摸到的牌不會操過4張
                if (concealed.filter(t => t.id == tile.id).length + exposed.filter(t => t.id == tile.id).length > tile.count) {
                    win = false;
                }

                //檢查外面的牌
                let exposedGp = __meldMapping(true, exposed, allTiles);
                if (exposedGp == null)
                    win = false;
                exposedGp.forEach(tg => tileGroups.push(tg));

                //檢查裡面的牌
                concealedGp = __meldMapping(false, concealed, allTiles);
                if (concealedGp == null) win = false;
                concealedGp.forEach(tg => tileGroups.push(tg));

                //檢查將眼
                if (tileGroups.filter(tg => tg.isPair).length !== 1) win = false;

                //組數不夠時, 檢查槓牌是否能組順子
                if (win && tileGroups.filter(tg => tg.isKong).length > 2 &&
                    tileGroups.filter(tg => tg.isMeld).length == 4) {
                    let fixGroup = __findKongFix(exposedGp.filter(tg => tg.isKong &&
                        (tg.tiles[0].isDot || tg.tiles[0].isBamboo || tg.tiles[0].isCharacter)).sort((a, b) => a.tiles[0].id - b.tiles[0].id), true);
                    if (fixGroup != null) {
                        exposedGp.push(fixGroup);
                        tileGroups.push(fixGroup);
                    }
                    else if (fixGroup == null) {
                        fixGroup = __findKongFix(concealedGp.filter(tg => tg.isKong &&
                            (tg.tiles[0].isDot || tg.tiles[0].isBamboo || tg.tiles[0].isCharacter)).sort((a, b) => a.tiles[0].id - b.tiles[0].id), false);
                        if (fixGroup != null) {
                            concealedGp.push(fixGroup);
                            tileGroups.push(fixGroup);
                        }
                    }
                }

                //最後一張不會是暗槓
                if (concealedGp.filter(tg => tg.isKong && tg.tiles[0].id == tile.id).length > 0)
                    win = false;

                //檢查組數 
                if (tileGroups.filter(tg => tg.isMeld).length !== 5) win = false;
                readyTiles.push(tile);
                readyInfo.push({ win, concealedGp, exposedGp, concealed, exposed, tile });
            };
            readyInfo.forEach(rt => {
                if (rt.win)
                    result.readyTiles.push(rt.tile);
            });
            if (readyInfo.filter(t => t.win && t.tile.id == lastId).length > 0) {
                let { concealedGp, exposedGp, concealed, exposed, tile } = readyInfo.filter(t => t.win && t.tile.id == lastId)[0];
                result.canWin = true;
                result.patterns = patternSvc.Matchs({
                    concealedGp,
                    exposedGp,
                    flowers: exposed.filter(t => t.isFlower),
                    concealed,
                    exposed,
                    tile,
                    isSelfDrawn,
                    prevailing,
                    dealer,
                    isBookmaker,
                    bookmakerRank,
                    readyTiles
                });
            }
            else if (lastId) {
                if (readyInfo.filter(r =>
                    r.tile.id == lastId &&
                    r.concealedGp.filter(c => c.isMeld).length + r.exposedGp.filter(c => c.isMeld).length == 5 &&
                    r.concealedGp.filter(c => c.isKong && c.tiles[0].id == lastId).length > 0).length > 0) {
                    result.helpmsg = `建議開槓`;
                }
                else {
                    let getrm = info => {
                        let rm = [];
                        info.concealed.forEach(t => rm.push(t));
                        info.concealedGp.forEach(g => {
                            g.tiles.forEach(t => {
                                let findId = rm.findIndex((v) => v.id == t.id);
                                if (findId > -1)
                                    rm.splice(findId, 1);
                            });
                        });
                        let findPair = aryRM => {
                            for (let j = 0; j < aryRM.length; j++) {
                                const e = aryRM[j];
                                if (aryRM.filter(t => t.id == e.id).length > 1)
                                    return e;
                            }
                            return null;
                        };
                        // if (info.concealedGp.filter(g => g.isPair).length == 0) {
                        //     let pairTile = null
                        //     do {
                        //         pairTile = findPair(rm);
                        //         if (pairTile != null) {
                        //             rm.map((tile, idx) => { return { tile, idx }; })
                        //                 .sort((a, b) => -(a.idx - b.idx))
                        //                 .filter(v => v.tile.id == pairTile.id)
                        //                 .forEach(v => rm.splice(v.idx, 1));
                        //         }
                        //     } while (pairTile != null)
                        // }
                        return rm;
                    };
                    let remainderInfo = readyInfo.map(r => r);
                    remainderInfo.forEach(r => r.remainder = getrm(r));
                    remainderInfo = remainderInfo.filter(r => r.tile.id == lastId);
                    remainderInfo = remainderInfo.filter(r =>
                        r.exposedGp.filter(e => e.isMeld).length * 3 +
                        r.concealedGp.filter(e => e.isMeld).length * 3 +
                        r.concealedGp.filter(e => e.isPair).length * 2 + r.remainder.length == 17
                    )
                    if (remainderInfo.length > 0) {
                        result.remainder = remainderInfo[0].remainder;
                    }
                }
            }

            return result;
        },
        CanWin: function (option) {
            let { inIds, outIds, lastId, isSelfDrawn, prevailingId, dealerId, isBookmaker, bookmakerRank } = option;
            isSelfDrawn = isSelfDrawn === true;
            let result = {
                canWin: false
            };
            let tileGroups = [];
            let concealed = [];
            let exposed = [];
            let tile = null;
            let prevailing = null;
            let dealer = null;
            if (inIds)
                inIds.map(id => allTiles.result.datas.find((t, index, ary) => t.id == id)).forEach(t => {
                    if (t)
                        concealed.push(t);
                });
            if (outIds)
                outIds.map(id => allTiles.result.datas.find((t, index, ary) => t.id == id)).forEach(t => {
                    if (t)
                        exposed.push(t);
                });
            if (lastId)
                tile = allTiles.result.datas.find((t, index, ary) => t.id == lastId);
            if (prevailingId)
                prevailing = allTiles.result.datas.find((t, index, ary) => t.id == prevailingId);
            if (dealerId)
                dealer = allTiles.result.datas.find((t, index, ary) => t.id == dealerId);

            if (tile != null) {
                concealed.push(tile);
            }
            else {
                return result;
            }
            concealed = concealed.sort((a, b) => a.id - b.id);
            exposed = exposed.sort((a, b) => a.id - b.id);

            //檢查外面的牌
            let exposedGp = __meldMapping(true, exposed, allTiles);
            if (exposedGp == null)
                return result;
            exposedGp.forEach(tg => tileGroups.push(tg));

            //檢查裡面的牌
            let concealedGp = __meldMapping(false, concealed, allTiles);
            if (concealedGp == null)
                return result;
            concealedGp.forEach(tg => tileGroups.push(tg));

            //檢查將眼
            if (tileGroups.filter(tg => tg.isPair).length !== 1)
                return result;

            //檢查組數 
            if (tileGroups.filter(tg => tg.isMeld).length !== 5)
                return result;

            result.canWin = true;
            result.patterns = patternSvc.Matchs({
                concealedGp,
                exposedGp,
                flowers: exposed.filter(t => t.isFlower),
                tile,
                isSelfDrawn,
                prevailing,
                dealer,
                isBookmaker,
                bookmakerRank
            })
            return result;
        },
        Verify: function (option) {
            let { inIds, outIds, lastId, isSelfDrawn, prevailingId, dealerId, isBookmaker, bookmakerRank } = option;
            let tile = null;
            let verifyTiles = []
            let result = {
                success: true
            };
            if (inIds)
                inIds.map(id => allTiles.result.datas.find((t, index, ary) => t.id == id)).forEach(t => {
                    if (t)
                        verifyTiles.push(t);
                });
            if (outIds)
                outIds.map(id => allTiles.result.datas.find((t, index, ary) => t.id == id)).forEach(t => {
                    if (t)
                        verifyTiles.push(t);
                });
            if (lastId)
                tile = allTiles.result.datas.find((t, index, ary) => t.id == lastId);

            if (tile != null) {
                verifyTiles.push(tile);
            }

            verifyTiles = verifyTiles.sort((a, b) => a.id - b.id);
            verifyTiles = verifyTiles.sort((a, b) => a.id - b.id);

            for (let i = 0; i < allTiles.result.datas.length; i++) {
                const tile = allTiles.result.datas[i];
                if (verifyTiles.filter(t => t.id == tile.id).length > tile.count) {
                    result.success = false;
                    result.error = `這副牌有問題!! [${tile.name}]居然有${verifyTiles.filter(t => t.id == tile.id).length}張`;
                    break;
                }
            }
            return result;
        }
    };
}