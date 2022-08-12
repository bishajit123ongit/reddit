export class Artical {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    voteUp() {
        this.votes += 1;
    }
    voteDown() {
        this.votes -= 1;
    }
    domain(): string {
        try {
            const domainAndPth: string = this.link.split('//')[1];
            return domainAndPth.split('/')[0];
        }
        catch (err) {
            return "";
        }
    }
}