
const score = [68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105]
const pitchName = ['g#','a1','a#1','b1','c1','c#1','d1','d#1','e1','f1','f#1','g1','g#1','a2','a#2','b2','c2','c#2','d2','d#2','e2','f2','f#2','g2','d#2','a3','a#3','b3','c3','c#3','d3','d#3','e3','f3','f#3','g3','g#3','a4']
const solfeggio5 = ['#1.','2.','#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5','#.5','.6','b.7','.7','..1','#..1','..2']
const solfeggio1 = ['#4..','5..','#5..','6..','b7..','7..','1.','#1.','2.','#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5']
const solfeggio2 = ['#5..','6..','b7..','7..','1.','#1.','2.','#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5','#.5','.6']
const solfeggio3 = ['6..','b7..','7..','#1.','2.','#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5','#.5','.6','b.7','.7']
const solfeggio4 = ['7..','1.','#1.','2.','#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5','#.5','.6','b.7','.7','..1']
const solfeggio6 = ['#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5','#.5','.6','b.7','.7','..1','#..1','..2','#..2','..3']
const solfeggio7 = ['4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4','#.4','.5','#.5','.6','b.7','.7','..1','#..1','..2','#..2','..3','..4','#..4']
const solfeggioB7 = ['3..','4..','#4..','5..','#5..','6..','b7..','7..','1.','#1.','2.','#2.','3.','4.','#4.','5.','#5.','6.','b7.','7.','1','#1','2','#2','3','4','#4','5','#5','6','b7','7','.1','#.1','.2','#.2','.3','.4']

let getIndex = (lowestSolfeggio, solfeggio) => {
    let index = lowestSolfeggio.findIndex((element) => {
        return element === solfeggio
    })

    return index
}

let transfer = (xiao, solfeggio, origin) => {
    let index

    if (xiao === 'G') {
        if (origin === 'C') {
            index = getIndex(solfeggio2, solfeggio)
        }
        if (origin === 'D') {
            index = getIndex(solfeggio1, solfeggio)
        }
        if (origin === 'E') {
            index = getIndex(solfeggioB7, solfeggio)
        }
        if (origin === 'F') {
            index = getIndex(solfeggio6, solfeggio)
        }
        if (origin === 'G') {
            index = getIndex(solfeggio5, solfeggio)
        }
        if (origin === 'A') {
            index = getIndex(solfeggio4, solfeggio)
        }
        if (origin === 'bB') {
            index = getIndex(solfeggio3, solfeggio)
        }
    } else if (xiao === 'F') {
        if (origin === 'C') {
            index = getIndex(solfeggio1, solfeggio)
        }
        if (origin === 'D') {
            index = getIndex(solfeggioB7, solfeggio)
        }
        if (origin === 'E') {
            return '臣妾做不到'
        }
        if (origin === 'F') {
            index = getIndex(solfeggio5, solfeggio)
        }
        if (origin === 'G') {
            index = getIndex(solfeggio4, solfeggio)
        }
        if (origin === 'A') {
            return '臣妾做不到'
        }
        if (origin === 'bB') {
            index = getIndex(solfeggio2, solfeggio)
        }
    } else if (xiao === 'E') {
        if (origin === 'C') {
            index = getIndex(solfeggio7, solfeggio)
        }
        if (origin === 'D') {
            index = getIndex(solfeggio6, solfeggio)
        }
        if (origin === 'E') {
            index = getIndex(solfeggio5, solfeggio)
        }
        if (origin === 'F') {
            return '臣妾做不到'
        }
        if (origin === 'G') {
            index = getIndex(solfeggio3, solfeggio)
        }
        if (origin === 'A') {
            return '臣妾做不到'
        }
        if (origin === 'bB') {
            return '臣妾做不到'
        }
    }

    return solfeggio5[index]
}

