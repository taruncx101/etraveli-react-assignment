import { useEffect, useState } from 'react'
import { Container, Row, Col, InputGroup, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import EpisodeDetail from './EpisodeDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function List() {
    const [tableData, setTableData] = useState([]);
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [searchvalue, setSearchValue] = useState("");
    const [sortBy, setSortBy] = useState("episode");

    useEffect(() => {
        fetchFilmData();
    }, [])
    const fetchFilmData = async () => {
        const url = "https://swapi.dev/api/films/?format=json";
        const resp = await fetch(url);
        let newResp = await resp.json();
        let data = newResp?.results || []
        data = data.map((item) => {
            item.roman_id = toRoman(item.episode_id);
            return item;
        })

        setTableData(data)
        console.log(data)
    }


    const toRoman = (n) => {
        var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        for (var i = 0; i < decimals.length; i++) {
            if (n < 1)
                return "";

            if (n >= decimals[i]) {
                return roman[i] + toRoman(n - decimals[i]);
            }
        }
    }
    let filteredFilms = [...tableData];

    if (searchvalue) {
        filteredFilms = filteredFilms.filter(o => o.title.toLowerCase().includes(searchvalue.toLowerCase()));
        const filteredFilmIds = filteredFilms.map(o => o.episode_id)
    }
    if(sortBy) {
        filteredFilms = filteredFilms.sort((a, b) => {
            if(sortBy === 'year') {
                return a.release_date - b.release_date
            } else {
                return a.episode_id - b.episode_id
            }
        })
    }

    return (
        <Container className='main-container'>

            {tableData && tableData.length ?
                <Row>
                    <Row>
                        <Col sm={2}>
                            <DropdownButton title="Sort By" variant='secondary'>
                                <Dropdown.Item eventKey="1" onClick={()=>setSortBy("episode")} active={sortBy == 'episode'}>Episode</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={() =>setSortBy("year")} active={sortBy == 'year'}>Year</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                <Form.Control
                                    value={searchvalue}
                                    onChange={(e) => { setSearchValue(e.target.value) }}
                                    placeholder="Type to Search..."
                                    aria-label="Type to Search..."
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            {filteredFilms.map((row) => {
                                return (
                                    <Row className='episode-list' key={row.episode_id} onClick={() => setSelectedEpisode(row)}>
                                        <Col>
                                            <Row>
                                                <Col sm={12} md={3}>EPISODE {row.episode_id}</Col>
                                                <Col sm={12} md={6}>Episode {row.roman_id} - {row.title}</Col>
                                                <Col sm={12} md={3}>{row.release_date}</Col>
                                            </Row>
                                        </Col>

                                    </Row>
                                )
                            })}
                        </Col>
                        <Col sm={12} md={6}>
                            <EpisodeDetail selectedEpisode={selectedEpisode} />
                        </Col>
                    </Row>


                </Row> :
                <Row ><Col className="float-center">Loading Episodes...</Col> </Row>

            }


        </Container>

    )
}

export default List;