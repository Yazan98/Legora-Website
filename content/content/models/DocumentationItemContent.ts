
export class DocumentationItemContent {
    constructor(
        public type: string,
        public content: string,
        public items: Array<string> = null,
        public isBigImage: boolean = false
    ) {
    }
}
