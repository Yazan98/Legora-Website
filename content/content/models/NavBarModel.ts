 export class NavBarModel {
    constructor(
        public title: string,
        public key: string,
        public hasChilds: boolean,
        public childs: Array<NavBarModel> = null
    ) {
    }
 }
