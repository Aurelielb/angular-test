export class Project {
    id: number;
    name: string;
    description: string;
    images: Image[];
}

export class Image {
    title: string;
    src: string;
}