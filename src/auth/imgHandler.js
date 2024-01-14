import items from './stores.json';
import kingstonRam from '../img/kingstonRam.jpeg';
import crucialRam from '../img/crucialRam.jpeg';
import nvidiaGpu from '../img/nvidiaGpu.jpeg';
import amdGpu from '../img/amdGpu.jpeg';
import amdCpu from '../img/amdCpu.jpeg';
import intelCpu from '../img/intelCpu.jpeg';

export function getItem(){
    items[0] = {...items[0], image: kingstonRam};
    items[1] = {...items[1], image: crucialRam};
    items[2] = {...items[2], image: nvidiaGpu};
    items[3] = {...items[3], image: amdGpu};
    items[4] = {...items[4], image: amdCpu};
    items[5] = {...items[5], image: intelCpu};

    return items;
}

export function getSingleItem(id){
    items[0] = {...items[0], image: kingstonRam};
    items[1] = {...items[1], image: crucialRam};
    items[2] = {...items[2], image: nvidiaGpu};
    items[3] = {...items[3], image: amdGpu};
    items[4] = {...items[4], image: amdCpu};
    items[5] = {...items[5], image: intelCpu};

    return items[id];
}