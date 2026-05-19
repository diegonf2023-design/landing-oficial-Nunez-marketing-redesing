import * as React from 'react';

interface PlaceholderProps {
    label: string;
    height?: string;
    className?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ label, height = "h-64", className = "" }) => {
    return (
        <div className={`relative w-full ${height} bg-gray-50 border border-black/5 rounded-2xl flex items-center justify-center p-6 overflow-hidden group hover:border-brand-accent/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
            <div className="text-center relative z-10">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-brand-muted group-hover:bg-brand-accentLight group-hover:text-brand-accent transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <p className="text-brand-muted font-medium text-sm md:text-base tracking-wide">
                    {label}
                </p>
            </div>
        </div>
    );
};

export const CommentBox: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="w-full bg-brand-accentLight/50 border-l-4 border-brand-accent p-4 my-4 rounded-r-lg">
            <div className="flex gap-3">
                <span className="text-xl" aria-hidden="true">💡</span>
                <p className="text-brand-text/80 italic font-medium text-sm">
                    {text}
                </p>
            </div>
        </div>
    );
};
