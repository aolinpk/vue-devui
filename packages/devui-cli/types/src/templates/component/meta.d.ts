export declare type ComponentMeta = {
    name: string;
    realName?: string;
    title: string;
    fullTitle?: string;
    category: string;
    parts: string[];
    status?: string;
    dir?: string;
};
export declare function isValidComponentMeta(obj: any): boolean;
export declare function genMetaObj(meta?: Partial<ComponentMeta>): {
    $name: string;
    name: string;
    $realName: string;
    realName: string;
    $title: string;
    title: string;
    $fullTitle: string;
    fullTitle: string;
    $category: string;
    category: string;
    $parts: string;
    parts: string[];
    $status: string;
    status: string;
    $dir: string;
    dir: string;
};
export default function genMetaTemplate(meta?: Partial<ComponentMeta>): string;
