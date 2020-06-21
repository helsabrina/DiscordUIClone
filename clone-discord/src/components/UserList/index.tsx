import React from 'react';
import { Container, Role, User, Avatar  } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
    
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Ju Rangel" />

            <Role>Offline - 12</Role>
            <UserRow nickname="Rythm" isBot />
            <UserRow nickname="Jucá" />
            <UserRow nickname="Mari" />
            <UserRow nickname="Vit" />
            <UserRow nickname="Amora" />
            <UserRow nickname="Fernandes" />
            <UserRow nickname="Dani" />
            <UserRow nickname="João" />
            <UserRow nickname="Reis" />
            <UserRow nickname="Gustavo" />
            <UserRow nickname="Dudu" />
            <UserRow nickname="Lari" />

        </Container>
    )
};

export default UserList;