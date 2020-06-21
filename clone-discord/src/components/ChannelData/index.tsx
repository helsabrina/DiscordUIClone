import React, { useRef, useEffect }from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>

                {Array.from(Array(8).keys()).map((n) => (
                    <ChannelMessage
                        author="Music"
                        date="26/08/2020"
                        content="Playing  lofi hip hop - brazil songs playlist - Now!"
                        isBot
                    />
                )) }

                <ChannelMessage 
                    author="Helen Sabrina"
                    date="26/08/2020"
                    content="Hoje é meu aniversário <3"
                />

                <ChannelMessage 
                    author="Music"
                    date="26/08/2020"
                    content={
                        <>
                            <Mention>Helen Sabrina</Mention>, coloca sua playlist favorita para tocar!
                        </>
                    }
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #geraldinho" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;