import convertToHtml from 'markdown-to-html-converter'

export class Markdown {
    public raw: string;

    constructor(raw: string) {
        this.raw = raw;
    }

    public generateHtml(): string {
        return convertToHtml(this.raw);
    }
}