import React from 'react';
import me from '../../assets/me.svg';
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar><img src={me} alt="fotoperfil"/></Avatar>
                <UserData>
                    <strong>Helen Sabrina</strong>
                    <span>#2916</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;