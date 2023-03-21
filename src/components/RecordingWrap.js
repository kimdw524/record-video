/*
    실시간 녹화중인 Video의 Wrap
*/
import styled from 'styled-components';

const RecordingWrap = (props) => {
    return (
        <Wrap>
            <Text>{props.message}</Text>{props.children}
        </Wrap>
    )
}

export default RecordingWrap;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #000;
    color: #fff;

    video {
        z-index: 1;
    }
`;

const Text = styled.div`
    position: absolute;
    background-color: #000;
    color: #fff;
`;
