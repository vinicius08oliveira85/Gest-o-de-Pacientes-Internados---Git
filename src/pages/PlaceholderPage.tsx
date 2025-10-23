import React from 'https://unpkg.com/react@18.2.0/umd/react.development.js';
import AppHeader from '../components/AppHeader.tsx';

const PlaceholderPage = ({ title, subtitle, onBack }: { title: string, subtitle: string, onBack: () => void }) => (
    <div className="page-container">
        <AppHeader 
            title={title}
            subtitle={subtitle}
            onBack={onBack}
        />
        <div className="placeholder-content">
            <p>Conteúdo para {title} será implementado aqui.</p>
        </div>
    </div>
);

export default PlaceholderPage;