import useRecordVideo from 'hooks/useRecordVideo';
import TopBar from 'components/TopBar';
import RecordingWrap from 'components/RecordingWrap';
import { SlCamera, SlBulb, SlCloudDownload } from 'react-icons/sl';
import styled from 'styled-components';

const toggleTheme = () => {
    document.body.classList.toggle('dark');
}

const Record = () => {
    const recordVideo = useRecordVideo();
    return (
        <>
            <TopBar.Bar>
                <TopBar.Logo>record-video</TopBar.Logo>
                <TopBar.Item tooltip="Theme" onClick={toggleTheme}><SlBulb size="24" /></TopBar.Item>
                <TopBar.Item tooltip="Record" onClick={() => recordVideo.record()}><SlCamera size="24" /></TopBar.Item>
                <TopBar.Item tooltip="Save" onClick={() => recordVideo.stop()}><SlCloudDownload size="24" /></TopBar.Item>
            </TopBar.Bar>

            <Body>
                <RecordingWrap>{recordVideo.video}</RecordingWrap>
            </Body>
        </>
    )
}

const Body = styled.div`
    padding: 1rem;
`;

export default Record;