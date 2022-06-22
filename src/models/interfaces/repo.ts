type Visibility = 'public' | 'private';

export interface Repo {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    fork: boolean;
    visibility: Visibility
}