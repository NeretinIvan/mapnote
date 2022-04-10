import convertToHtml from 'node_modules/markdown-to-html-converter'

export class Markdown {
    private raw: string;

    constructor() {
        this.raw = "";
    }

    public generateHtml(): string {
        return this.transformRaw(this.raw);
    }

    public getRaw(): string {
        return this.raw;
    }

    public setRaw(newMarkdown: string): void {
        this.raw = newMarkdown; 
    }

    private transformRaw(rawMarkdown: string): string {
        return convertToHtml(rawMarkdown);
    }
}