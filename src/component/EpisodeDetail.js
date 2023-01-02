import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
function EpisodeDetail({ selectedEpisode }) {
    if (!selectedEpisode) {
        return (<Row>
            <Col>No Movie Selected</Col>
        </Row>)
    } else {
        return (
            <Fragment>
                <Row>
                    <Col>Episode {selectedEpisode?.roman_id} -  {selectedEpisode?.title}</Col>

                </Row>
                <Row>
                    <Col>{selectedEpisode?.opening_crawl}</Col>
                </Row>
            </Fragment>

        )
    }

}

export default EpisodeDetail;