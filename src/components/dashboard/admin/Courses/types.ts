export interface Course {
    id: string;
    name: string;
    description: string;
    instructor: {
        name: string;
        avatar: string;
    };
    category: string;
    status: 'Active' | 'Pending' | 'Inactive';
    updatedAt: string;
    icon: string;
    iconBgColor: string;
}

export interface Stat {
    label: string;
    value: string;
    change: string;
    icon: string;
    iconBgColor: string;
}

export interface FilterOption {
    value: string;
    label: string;
}
