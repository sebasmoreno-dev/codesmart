export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Order {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
    orderDate: Date;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}