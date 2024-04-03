import { paddingSnaps } from './paddingSnaps.mjs'

export function PerformSnap(type, value) {
    let result = 0
    // console.log(type)
    // console.log(value)

    switch (type) {
        case 'padding-top':
        case 'padding-left':
        case 'padding-bottom':
        case 'padding-right':
            value = value.replace('px', '')
            //console.log('checking snap for padding ' + value)
            if (value <= paddingSnaps.small)
                result = paddingSnaps.tiny + 'px';
            else if (value > paddingSnaps.small && value <= paddingSnaps.medium)
                result = paddingSnaps.small + 'px'
            else if (value > paddingSnaps.medium && value <= paddingSnaps.large)
                result = paddingSnaps.medium + 'px'
            else if (value > paddingSnaps.large && value <= paddingSnaps.xtraLarge)
                result = paddingSnaps.large + 'px'
            else if (value > paddingSnaps.xtraLarge && value <= paddingSnaps.crazyLarge)
                result = paddingSnaps.xtraLarge + 'px'
            else
                result = paddingSnaps.crazyLarge + 'px'
            break
        default:
            result = value;
            break
    }
    //console.log('snapping return ' + result)
    return result
}