import styled from 'styled-components';

const RecordingWrap = (props) => {
    return (
        <Wrap>
            <Text>현재 녹화 중인 영상이 재생되는 곳입니다.</Text>{props.children}
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
