import React from 'react';
import { RouteComponentProps } from 'react-router'
import ViewingStatus from '../components/viewingStatus'
import Header from '../components/header'
import Footer from '../../user/components/footer-pc'
import DetailList from '../components/detailList';
import { Container, MainContents, Wrapper } from '../../designSystem/Page';

type historyProps = RouteComponentProps<{documentId: string}>

const Detail: React.FC<historyProps> = (props: historyProps) => {
    const documentId = props.match.params.documentId
    return (
        <Wrapper>
            <Header />
            <Container>
                <MainContents>
                    <DetailList documentId={documentId}/>
                    <ViewingStatus documentId={documentId} />
                </MainContents>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Detail