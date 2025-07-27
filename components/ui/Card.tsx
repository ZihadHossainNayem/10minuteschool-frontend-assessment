import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

const paddingClasses = {
    sm: 'p-1',
    md: 'p-5',
    lg: 'p-8',
    xl: 'p-10',
};

const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
};

export default function Card({ children, className = '', padding = 'md', rounded = 'sm' }: CardProps) {
    return (
        <div
            className={`
                bg-white border border-gray-200 
                ${paddingClasses[padding]} 
                ${roundedClasses[rounded]} 
                ${className}
            `}
        >
            {children}
        </div>
    );
}
